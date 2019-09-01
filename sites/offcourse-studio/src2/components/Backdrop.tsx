import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";
import { IStylable, IThemeable, IMeasurable } from "@offcourse/interfaces";
import CellularAutomata from "./CellularAutomata";

type BackdropProps = Pick<
  IStylable,
  "backdropPath" | "primaryColor" | "secondaryColor"
> &
  Pick<IMeasurable, "width" | "height"> &
  IThemeable;

const Backdrop: FunctionComponent<BackdropProps> = ({
  backdropPath,
  className,
  primaryColor,
  secondaryColor,
  width,
  height
}) => {
  if (!backdropPath) return null;

  return (
    <CellularAutomata
      className={className}
      primaryColor={primaryColor}
      secondaryColor={secondaryColor}
      width={width}
      height={height}
    />
  );
};

export default styled(Backdrop)`
  z-index: -100;
`;
