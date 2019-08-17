import React, { FunctionComponent } from "react";
import { IStylable, IMeasurable } from "../interfaces";
import CellularAutomata from "./CellularAutomata";

const Backdrop: FunctionComponent<IStylable & IMeasurable> = ({
  backdropPath,
  foreground,
  background,
  width,
  height
}) => {
  if (!backdropPath) return null;

  return (
    <CellularAutomata
      foreground={foreground}
      background={background}
      width={width}
      height={height}
    />
  );
};

export default Backdrop;
