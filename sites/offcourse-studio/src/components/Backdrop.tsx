import React, { Suspense, lazy, FunctionComponent } from "react";
import { IPageSection, IStylable, IMeasurable } from "../interfaces";

const Backdrop: FunctionComponent<IStylable & IMeasurable> = ({
  backdropPath,
  foreground,
  background,
  width,
  height
}) => {
  if (!backdropPath) return null;
  const _Backdrop = lazy(() => import(`${backdropPath}`));

  return (
    <Suspense fallback={<div />}>
      <_Backdrop
        foreground={foreground}
        background={background}
        width={width}
        height={height}
      />
    </Suspense>
  );
};

export default Backdrop;
