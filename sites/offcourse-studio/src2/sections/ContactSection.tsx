import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";
import { IStylable } from "../interfaces";
import { useShowTab } from "@offcourse/homepage-theme/src/hooks";
import { IContactSection } from "../interfaces/pageSection";
import { IForm } from "../interfaces/form";
import { IThemeable } from "../interfaces";
import DisplayText from "../components/DisplayText";
import CallToAction from "../components/CallToAction";
import Form from "../components/Form";
import Base from "./BaseSection";
import { Waypoint } from "react-waypoint";
import FormContainer from "../containers/FormContainer";

const url =
  "https://hooks.slack.com/services/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";

type ContactSectionProps = IContactSection &
  Pick<IStylable, "backdropPath"> &
  IThemeable;

const ContactSection: FunctionComponent<ContactSectionProps> = ({
  title,
  role,
  backdropPath = "./CellularAutomata",
  callToAction,
  form,
  className
}) => {
  const [isVisible, handlePositionChange] = useShowTab();

  const onSubmit: (args: any, helpers: any) => void = async (
    values,
    { resetForm }
  ) => {
    await fetch(url, {
      method: "POST",
      body: JSON.stringify({ text: JSON.stringify(values, null, 2) })
    });
    resetForm();
  };

  return (
    <Base role={role} className={className} backdropPath={backdropPath}>
      <CallToAction isVisible={isVisible}>{callToAction}</CallToAction>
      <DisplayText>{title}</DisplayText>
      <Waypoint onEnter={handlePositionChange} onLeave={handlePositionChange} />
      <FormContainer form={form} onSubmit={onSubmit}>
        {(props: IForm) => <Form {...props} />}
      </FormContainer>
    </Base>
  );
};

export default styled(ContactSection)`
  grid-template-rows: auto 1fr;
  background-color: ${({ theme }) => theme.colors.primary};
  ${DisplayText} {
    padding: 2rem 1rem;
  }
  ${Form} {
    background-color: ${({ theme }) => theme.grayScale[0]};
    padding: 2rem 1rem;
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    grid-template-columns: 10fr 9fr;
    grid-template-rows: 1fr;

    ${DisplayText} {
      grid-column: 1 / 2;
      align-self: center;
      grid-row: 1 / 2;
    }
    ${Form} {
      grid-column: 2 / 3;
      grid-row: 1 / 2;
      padding: 2rem 3rem;
    }
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints[3]}) {
    grid-template-rows: 1fr;
    ${DisplayText} {
      grid-column: 1 / 2;
      grid-row: 1 / 2;
    }
    ${Form} {
      grid-row: 1 / 2;
      padding: 2rem 4rem;
    }
  }
`;
