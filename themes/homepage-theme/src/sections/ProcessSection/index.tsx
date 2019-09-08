/** @jsx jsx */
import { FunctionComponent } from "react";
import { Styled, jsx } from "theme-ui";
import { IThemeable } from "@offcourse/interfaces";
import BaseSection from "../BaseSection";
import {
  numberStyles,
  wrapperStyles,
  stepStyles,
  titleStyles,
  innerStyles
} from "./styles";
import { formatTitle } from "../../components/helpers";

type ProcessSectionProps = IProcessSection & IThemeable;

const ProcessSection: FunctionComponent<ProcessSectionProps> = ({
  className,
  steps,
  ...rest
}) => {
  return (
    <BaseSection {...rest} className={className} sx={wrapperStyles}>
      {steps.map(({ title, ...step }, index) => (
        <div {...step} sx={stepStyles} index={index} key={index}>
          <h1 sx={titleStyles}>
            <span sx={numberStyles}>{`${index + 1}.`}</span>
            {formatTitle(title)}
          </h1>
        </div>
      ))}
    </BaseSection>
  );
};

export default ProcessSection;
