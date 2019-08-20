import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";
import DisplayText from "./DisplayText";
import { IStylable } from "../interfaces";

const Logo: FunctionComponent<IStylable> = ({ className }) => {
  return <DisplayText className={className}>Offcourse Studio</DisplayText>;
};

export default styled(Logo)`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;

  h1 {
    margin-right: 0;
  }
`;
