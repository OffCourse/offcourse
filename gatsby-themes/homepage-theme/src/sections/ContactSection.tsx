import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";
import { IContactSection } from "@offcourse/interfaces/src/pageSection";
import { IThemeable } from "@offcourse/interfaces";
import BaseSection from "./BaseSection";

type ContactSectionProps = IContactSection & IThemeable;

const ContactSection: FunctionComponent<ContactSectionProps> = props => {
  return <BaseSection {...props}></BaseSection>;
};

export default styled(ContactSection)`
  min-height: 85vh;
  &:first-of-type {
    max-height: 100vh;
    height: 100vh;
  }
`;
