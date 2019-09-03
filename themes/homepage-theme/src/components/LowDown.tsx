import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";
import { IThemeable } from "@offcourse/interfaces";
import DisplayText from "./DisplayText";

const LowDown: FunctionComponent<IThemeable> = ({ children, className }) => {
  return (
    <div className={className}>
      <DisplayText>{children}</DisplayText>
    </div>
  );
};

export default styled(LowDown)`
  display: flex;
`;
