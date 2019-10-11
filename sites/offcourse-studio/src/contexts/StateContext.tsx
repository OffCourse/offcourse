import React, {
  FunctionComponent,
  createContext,
  useContext,
  useState,
  useCallback,
  useRef
} from "react";
import SimplexNoise from "simplex-noise";
import { useThemeUI } from "theme-ui";
import useAnimationFrame from "@offcourse/homepage-theme/src/hooks/useAnimationFrame";
import { shuffle, range } from "d3-array";

const simplex = new SimplexNoise();

const createElements = frame => {
  const elems = range(1000).map(elem => {
    const u = (simplex.noise2D(elem, frame / 10000) + 1) / 2;
    const v = (simplex.noise2D(u, elem) + 1) / 2;
    return { u, v };
  });
  return elems;
};

const StateContext = createContext();

export const AppStateProvider: FunctionComponent = ({ children }) => {
  const { theme }: any = useThemeUI();
  const [elements, setElements] = useState([]);
  const { primary, grayScale } = theme.colors;
  const combos = [
    { shapeName: "circle", colors: [primary, grayScale[0]] },
    { shapeName: "circle", colors: [primary, grayScale[4]] }
  ];
  const [background, setBackground] = useState(shuffle(combos)[0]);

  const frameRef = useRef(0);
  const callback = useCallback(() => {
    const frame = (frameRef.current = frameRef.current + 1);
    const elems = createElements(frame);
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
