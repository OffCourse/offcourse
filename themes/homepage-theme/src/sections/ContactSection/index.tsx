/** @jsx jsx */
import { FunctionComponent, useEffect, useCallback } from "react";
import { jsx, Box } from "theme-ui";
import { IContactSection } from "@offcourse/interfaces/src/pageSection";
import { useStateValue } from "@offcourse/layouts";
import { IForm } from "@offcourse/interfaces/src/form";
import { IThemeable } from "@offcourse/interfaces/src";
import { useMeasure } from "../../hooks";
import BaseSection from "../BaseSection";
import Backdrop from "../../components/Backdrop";
import { DisplayText } from "@offcourse/atoms";
import FormContainer from "../../containers/FormContainer";
import Form from "../../components/Form";
import { wrapperStyles, formStyles, sloganSpaceStyles } from "./styles";
import { submitForm } from "./helpers";

type ContactSectionProps = IContactSection & IThemeable;

const ContactSection: FunctionComponent<ContactSectionProps> = ({
  className,
  isVisible,
  title,
  form,
  callToAction,
  ...props
}) => {
  const [{ clientWidth: width, clientHeight: height }, bind] = useMeasure();
  return (
    <BaseSection {...bind} {...props} className={className} sx={wrapperStyles}>
      <Backdrop width={width} height={height} />
      <Box sx={sloganSpaceStyles}>
        <DisplayText>{title}</DisplayText>
      </Box>
      <FormContainer form={form} onSubmit={submitForm}>
        {(containerProps: IForm) => (
          <Form
            {...containerProps}
            callToAction={callToAction}
            sx={formStyles}
          />
        )}
      </FormContainer>
    </BaseSection>
  );
};

export default ContactSection;
