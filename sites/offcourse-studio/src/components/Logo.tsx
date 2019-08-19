import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";
import DisplayText from "./DisplayText";
import { IStylable } from "../interfaces";

const Logo: FunctionComponent<IStylable> = ({ className, size = "SMALL" }) => {
  return (
    <div className={className}>
      <DisplayText size={size}>Offcourse</DisplayText>
      <DisplayText size={size}>Studio_</DisplayText>
    </div>
  );
};

export default styled(Logo)`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  ${DisplayText} {
    h1 {
      margin-right: 0;
    }
  }
`;
