import React, { FunctionComponent } from "react";
import { IContactSection } from "@offcourse/interfaces/src/pageSection";
import { IForm } from "@offcourse/interfaces/src/form";
import { IThemeable } from "@offcourse/interfaces";
import BaseSection from "../BaseSection";
import FormContainer from "../../containers/FormContainer";
import DisplayText from "../../components/DisplayText";
import Form from "../../components/Form";

type ContactSectionProps = IContactSection & IThemeable;

const ContactSection: FunctionComponent<ContactSectionProps> = ({
  title,
  form,
  ...props
}) => {
  return (
    <BaseSection {...props}>
      <DisplayText>{title}</DisplayText>
      <FormContainer form={form} onSubmit={() => {}}>
        {(props: IForm) => <Form {...props} />}
      </FormContainer>
    </BaseSection>
  );
};

export default ContactSection;

const x = `
  grid-template-rows: auto 1fr;
  background-color: ${({ theme }) => theme.colors.primary};

  /* ${DisplayText} { */
    /* padding: 2rem 2rem; */
  /* } */
  /* ${Form} { */
    /* background-color: ${({ theme }) => theme.grayScale[0]}; */
    /* padding: 2rem 1rem; */
  /* } */

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    grid-template-columns: 10fr 9fr;
    grid-template-rows: 1fr;

    /* ${DisplayText} { */
      /* grid-column: 1 / 2; */
      /* align-self: center; */
      /* grid-row: 1 / 2; */
    /* } */
    /* ${Form} { */
      /* grid-column: 2 / 3; */
      /* grid-row: 1 / 2; */
      /* padding: 2rem 3rem; */
    /* } */
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints[3]}) {
    grid-template-rows: 1fr;
    /* ${DisplayText} { */
      /* grid-column: 1 / 2; */
      /* grid-row: 1 / 2; */
    /* } */
    /* ${Form} { */
      /* grid-row: 1 / 2; */
      /* padding: 2rem 4rem; */
    /* } */
  }
`;
