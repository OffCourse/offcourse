/** @jsx jsx */
import { FunctionComponent } from "react";
import { Styled, jsx } from "theme-ui";
import { IThemeable } from "@offcourse/interfaces";
import BaseSection from "../BaseSection";
import { innerStyles, wrapperStyles } from "./styles";

type ProcessSectionProps = IProcessSection & IThemeable;

const ProcessSection: FunctionComponent<ProcessSectionProps> = ({
  className,
  steps,
  ...rest
}) => {
  return (
    <BaseSection {...rest} className={className} sx={wrapperStyles}>
      <div sx={innerStyles}>
        {steps.map((step, index) => (
          <div {...step} index={index} key={index}>
            <Styled.h1 sx={{ borderBottom: "0.25rem solid black" }}>
              {index}
            </Styled.h1>
          </div>
        ))}
      </div>
    </BaseSection>
  );
};

export default ProcessSection;
