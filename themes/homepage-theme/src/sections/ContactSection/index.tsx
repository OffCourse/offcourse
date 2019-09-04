/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx } from "theme-ui";
import { IContactSection } from "@offcourse/interfaces/src/pageSection";
import { IForm } from "@offcourse/interfaces/src/form";
import { IThemeable } from "@offcourse/interfaces";
import BaseSection from "../BaseSection";
import FormContainer from "../../containers/FormContainer";
import DisplayText from "../../components/DisplayText";
import Form from "../../components/Form";
import { wrapperStyles, textStyles, formStyles } from "./styles";

type ContactSectionProps = IContactSection & IThemeable;

const ContactSection: FunctionComponent<ContactSectionProps> = ({
  className,
  title,
  form,
  ...props
}) => {
  return (
    <BaseSection {...props} className={className} sx={wrapperStyles}>
      <DisplayText sx={textStyles}>{title}</DisplayText>
      <FormContainer form={form} onSubmit={() => {}}>
        {(props: IForm) => <Form {...props} sx={formStyles} />}
      </FormContainer>
    </BaseSection>
  );
};

export default ContactSection;
