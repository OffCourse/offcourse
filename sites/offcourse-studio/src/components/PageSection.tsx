import React from "react";
import styled from "styled-components";
import Heading from "./Heading";
import { Size } from "@offcourse/enums";

interface IPageSection {
  className: string;
  text: string;
  role: string;
}

const PageSection = ({ text, className }: IPageSection) => (
  <div className={className}>
    <Heading size={Size.EXTRA_LARGE}>{text}</Heading>
  </div>
);

export default styled(PageSection)`
  display: grid;
  justify-content: center;
  align-items: center;
  height: 70vh;
  background-color: ${({ theme }) => theme.grayScale[0]};
  color: ${({ theme }) => theme.grayScale[2]};
  &:nth-child(even) {
    background-color: ${({ theme }) => theme.grayScale[3]};
    color: ${({ theme }) => theme.grayScale[0]};
  }
`;
