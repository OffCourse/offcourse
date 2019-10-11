/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx } from "theme-ui";
import { IContactSection } from "@offcourse/interfaces/src/pageSection";
import { IForm } from "@offcourse/interfaces/src/form";
import { IThemeable } from "@offcourse/interfaces";
import BaseSection from "../BaseSection";
import useVisibility from "../../hooks/useVisibility";
import { useMeasure } from "@offcourse/homepage-theme/src/hooks";
import Backdrop from "../../components/Backdrop";
import FormContainer from "../../containers/FormContainer";
import CallToAction from "../../components/CallToAction";
import Form from "../../components/Form";
import { wrapperStyles, formStyles, sloganSpaceStyles } from "./styles";

type ContactSectionProps = IContactSection & IThemeable;

const ContactSection: FunctionComponent<ContactSectionProps> = ({
  className,
  title,
  form,
  callToAction,
  ...props
}) => {
  const [isVisible, Marker] = useVisibility({ canLeave: true });
  const [{ clientWidth: width, clientHeight: height }, bind] = useMeasure();
  return (
    <BaseSection {...bind} {...props} className={className} sx={wrapperStyles}>
      <Backdrop width={width} height={height} />
      <Marker />
      <CallToAction isVisible={!isVisible}>{callToAction}</CallToAction>
      <div sx={sloganSpaceStyles}></div>
      <FormContainer form={form} onSubmit={() => {}}>
        {(props: IForm) => (
          <Form {...props} callToAction={callToAction} sx={formStyles} />
        )}
      </FormContainer>
    </BaseSection>
  );
};

export default ContactSection;
