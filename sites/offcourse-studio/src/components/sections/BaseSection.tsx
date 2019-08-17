import React, { Suspense, lazy, FunctionComponent } from "react";
import { useThemeUI } from "theme-ui";
import { useMeasure } from "../../hooks";
import styled from "@emotion/styled";
import { IPageSection, IStylable } from "../../interfaces";
import Backdrop from "../Backdrop";

type BaseProps = Pick<IPageSection, "backdropPath" | "role">;

const Base: FunctionComponent<BaseProps & IStylable> = ({
  backdropPath = "./CellularAutomata",
  role,
  className,
  children
}) => {
  const context = useThemeUI();
  const { blue: background, yellow: foreground } = context.theme.colors;
  const [{ width, height }, bind] = useMeasure();
  return (
    <div {...bind} id={role} className={className}>
      <Suspense fallback={<div />}>
        <Backdrop
          backdropPath={backdropPath}
          foreground={foreground}
          background={background}
          width={width}
          height={height}
        />
      </Suspense>
      {children}
    </div>
  );
};

export default styled(Base)`
  display: grid;
  background-color: ${({ theme }) => theme.grayScale[0]};
`;
