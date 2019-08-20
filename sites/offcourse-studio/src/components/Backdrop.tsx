import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";
import { IStylable, IMeasurable } from "../interfaces";
import CellularAutomata from "./CellularAutomata";

const Backdrop: FunctionComponent<IStylable & IMeasurable> = ({
  backdropPath,
  className,
  foreground,
  background,
  width,
  height
}) => {
  if (!backdropPath) return null;

  return (
    <CellularAutomata
      className={className}
      foreground={foreground}
      background={background}
      width={width}
      height={height}
    />
  );
};

export default styled(Backdrop)`
  z-index: -100;
`;
