/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, Box } from "theme-ui";
import Step from "../Step";
import { IStep } from "@offcourse/interfaces/src/pageSection";
import { StepAnimation } from "./animations";
import { stepStyles, innerWrapperStyles } from "./styles";

const Process: FunctionComponent<{ steps: any[] }> = ({ steps }) => {
  return (
    <Box sx={innerWrapperStyles}>
      {steps.map((step: IStep, index: number) => {
        return (
          <StepAnimation sx={stepStyles} index={index}>
            <Step index={index +1} {...step} />
          </StepAnimation>
        );
      })}
    </Box>
  );
};

export default Process;
