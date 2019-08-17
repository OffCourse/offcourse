import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";
import { Header as ThemedHeader } from "theme-ui";
import Tab from "./Tab";
import { IStylable } from "../interfaces";

const Header: FunctionComponent<IStylable> = ({ className }) => {
  return (
    <ThemedHeader className={className}>
      <Tab />
    </ThemedHeader>
  );
};

export default styled(Header)`
  position: fixed;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 0rem 1rem;
  width: 100%;
`;
