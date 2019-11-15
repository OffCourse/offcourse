import React, {
  FunctionComponent,
  createContext,
  useContext,
  useState,
  useCallback,
  useRef
} from "react";
import { useThemeUI } from "theme-ui";
import useAnimationFrame from "@offcourse/homepage-theme/src/hooks/useAnimationFrame";
import { shuffle } from "d3-array";
import elementsWorker from "./elementsWorker";

const StateContext = createContext();

export const AppStateProvider: FunctionComponent = ({ children }) => {
  const { theme }: any = useThemeUI();
  const [elements, setElements] = useState([]);
  const { primary, grayScale } = theme.colors;
  const combos = [
    { shapeName: "circle", colors: [primary, grayScale[0]] },
    { shapeName: "circle", colors: [primary, grayScale[4]] }
  ];
  const [background] = useState(shuffle(combos)[0]);

  const frameRef = useRef(0);
  const callback = useCallback(async () => {
    const frame = (frameRef.current = frameRef.current + 1);
    const elems = await elementsWorker.create(frame);
    setElements(elems);
  }, []);

  useAnimationFrame({ callback, delay: 100 });

  return (
    <StateContext.Provider value={{ background, elements }}>
      {children}
    </StateContext.Provider>
  );
};

export const useAppState = () => useContext(StateContext);

export default StateContext;
