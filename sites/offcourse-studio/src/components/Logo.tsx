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
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;

  h1 {
    font-size: 2rem;
    margin-bottom: 0.375rem;
    margin-right: 0rem;
    }
  }
`;
