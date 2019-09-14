/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx } from "theme-ui";
import { IContactSection } from "@offcourse/interfaces/src/pageSection";
import { IForm } from "@offcourse/interfaces/src/form";
import { IThemeable } from "@offcourse/interfaces";
import BaseSection from "../BaseSection";
import useVisibility from "../../hooks/useVisibility";
import FormContainer from "../../containers/FormContainer";
import DisplayText from "../../components/DisplayText";
import CallToAction from "../../components/CallToAction";
import Form from "../../components/Form";
import {
  wrapperStyles,
  textStyles,
  formStyles,
  sloganSpaceStyles
} from "./styles";

type ContactSectionProps = IContactSection & IThemeable;

const ContactSection: FunctionComponent<ContactSectionProps> = ({
  className,
  title,
  form,
  callToAction,
  ...props
}) => {
  const [isVisible, Marker] = useVisibility();
  return (
    <BaseSection {...props} className={className} sx={wrapperStyles}>
      <Marker />
      <CallToAction isVisible={!isVisible}>{callToAction}</CallToAction>
      <div sx={sloganSpaceStyles}>
        <DisplayText sx={textStyles}>{title}</DisplayText>
      </div>
      <FormContainer form={form} onSubmit={() => {}}>
        {(props: IForm) => (
          <Form {...props} callToAction={callToAction} sx={formStyles} />
        )}
      </FormContainer>
    </BaseSection>
  );
};

export default ContactSection;
