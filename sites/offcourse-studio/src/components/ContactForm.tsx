import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";
import { IStylable } from "../../interfaces";

const ContactForm: FunctionComponent<IStylable> = ({ className }) => {
  return <div className={className}>HELLO</div>;
};

export default styled(ContactForm)`
  background-color: ${({ theme }) => theme.grayScale[1]};
`;
