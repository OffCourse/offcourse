import React, { FunctionComponent } from "react";
import { useThemeUI } from "theme-ui";
import { useMeasure } from "@offcourse/homepage-theme/src/hooks";
import styled from "@emotion/styled";
import { IThemeable } from "../interfaces";
import { IBaseSection } from "../interfaces/IBaseSection";
import Backdrop from "../components/Backdrop";

type BaseProps = IBaseSection & IThemeable;

const Base: FunctionComponent<BaseProps> = ({
  backdropPath = "./CellularAutomata",
  role,
  className,
  style,
  children
}) => {
  const context: { theme: any } = useThemeUI();
  const { secondary } = context.theme.colors;
  const white = context.theme.grayScale[0];
  const [{ width, height }, bind] = useMeasure();
  return (
    <div {...bind} id={role} style={style} className={className}>
      <Backdrop
        backdropPath={backdropPath}
        primaryColor={white}
        secondaryColor={secondary}
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
