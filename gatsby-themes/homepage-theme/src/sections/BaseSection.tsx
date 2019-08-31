import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";
import { IThemeable } from "../interfaces";
import { IBaseSection } from "../interfaces/IBaseSection";

type BaseProps = IBaseSection & IThemeable;

const Base: FunctionComponent<BaseProps> = ({ role, className, children }) => {
  return (
    <div id={role} className={className}>
      {children}
    </div>
  );
};

export default styled(Base)`
  display: grid;
  align-items: space-between;
`;
