import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";
import DisplayText from "./DisplayText";
import { IStylable } from "../interfaces";

const Logo: FunctionComponent<IStylable> = ({ className }) => {
  return (
    <div className={className}>
      <DisplayText>Offcourse</DisplayText>
      <DisplayText>Studio_</DisplayText>
    </div>
  );
};

export default styled(Logo)`
  display: flex;
  padding: 0 1.5rem;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  transform-origin: center right;
  transform: scale(0.6);
`;
