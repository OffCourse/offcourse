/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx } from "theme-ui";
import BaseSection from "../BaseSection";
import { wrapperStyles } from "./styles";
import { Process } from "@offcourse/molecules";
import { IThemeable } from "@offcourse/interfaces/src";
import { IProcessSection } from "@offcourse/interfaces/src/pageSection";

type ProcessSectionProps = IProcessSection &
  IThemeable & { isVisible: boolean };

const ProcessSection: FunctionComponent<ProcessSectionProps> = ({
  className,
  steps,
  ...rest
}) => {
  return (
    <BaseSection {...rest} className={className} sx={wrapperStyles}>
      <Process steps={steps} />
    </BaseSection>
  );
};

export default ProcessSection;
