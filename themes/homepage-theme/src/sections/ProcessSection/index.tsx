/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx } from "theme-ui";
import { IThemeable } from "@offcourse/interfaces";
import BaseSection from "../BaseSection";
import { wrapperStyles } from "./styles";
import Step from "../../components/Step";
import { IProcessSection, IStep } from "@offcourse/interfaces/src/pageSection";

type ProcessSectionProps = IProcessSection & IThemeable;

const ProcessSection: FunctionComponent<ProcessSectionProps> = ({
  className,
  steps,
  ...rest
}) => (
  <BaseSection {...rest} className={className} sx={wrapperStyles}>
    {steps.map((step: IStep, i: number) => {
      const index = i + 1;
      return <Step key={index} index={index} {...step} />;
    })}
  </BaseSection>
);

export default ProcessSection;
