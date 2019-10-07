import React, { FunctionComponent, createContext, useContext } from "react";
import { useThemeUI } from "theme-ui";
import { shuffle } from "d3-array";

const combo = {
  shapeName: "circle",
  colors: ["white", "black"]
};

const StateContext = createContext({ background: combo });

export const StateProvider: FunctionComponent = ({ children }) => {
  const { theme }: any = useThemeUI();
  const { primary, grayScale } = theme.colors;
  const combos = [
    { shapeName: "circle", colors: [primary, grayScale[4]] },
    { shapeName: "square", colors: [primary, grayScale[0]] },
    { shapeName: "circle", colors: [grayScale[4], grayScale[0]] }
  ];
  const background = shuffle(combos)[0];
  return (
    <StateContext.Provider value={{ background }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);

export default StateContext;
