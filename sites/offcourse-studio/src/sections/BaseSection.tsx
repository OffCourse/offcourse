import React, { FunctionComponent } from "react";
import { useThemeUI } from "theme-ui";
import { useMeasure } from "../hooks";
import styled from "@emotion/styled";
import { IStylable } from "../interfaces";
import { IBaseSection } from "../interfaces/IBaseSection";
import Backdrop from "../components/Backdrop";

type BaseProps = Pick<IBaseSection, "backdropPath" | "role">;

const Base: FunctionComponent<BaseProps & IStylable> = ({
  backdropPath = "./CellularAutomata",
  role,
  className,
  children
}) => {
  const context: { theme: any } = useThemeUI();
  const { secondary } = context.theme.colors;
  const background = context.theme.grayScale[0];
  const [{ width, height }, bind] = useMeasure();
  return (
    <div {...bind} id={role} className={className}>
      <Backdrop
        backdropPath={backdropPath}
        foreground={secondary}
        background={background}
        width={width}
        height={height}
      />
      {children}
    </div>
  );
};

export default styled(Base)`
  display: grid;
  align-items: space-between;
`;
