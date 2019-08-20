import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";
import DisplayText from "./DisplayText";
import { IStylable } from "../interfaces";

type LowDownProps = {};

const LowDown: FunctionComponent<LowDownProps & IStylable> = ({
  children,
  className
}) => {
  return (
    <div className={className}>
      <DisplayText>{children}</DisplayText>
    </div>
  );
};

export default styled(LowDown)`
  display: flex;
`;
