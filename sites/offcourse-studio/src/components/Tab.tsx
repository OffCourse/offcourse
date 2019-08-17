import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";
import { Styled } from "theme-ui";
import { IStylable } from "../interfaces";

const Tab: FunctionComponent<IStylable> = ({ className }) => {
  return (
    <div className={className}>
      <Styled.a href="#call-to-action">Work With Us</Styled.a>
    </div>
  );
};

export default styled(Tab)`
  display: flex;
  padding: 0.5rem;
  background-color: white;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
`;
