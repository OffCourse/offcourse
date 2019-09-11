/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx } from "theme-ui";
import { animated } from "react-spring";
import { IThemeable } from "@offcourse/interfaces";
import { wrapperStyles, titleStyles, numberStyles } from "./styles";
import { formatTitle } from "../helpers";
import { IStep } from "@offcourse/interfaces/src/pageSection";

type StepProps = IStep & IThemeable;

const Step: FunctionComponent<StepProps> = ({
  className,
  index,
  title,
  description
}) => {
  return (
    <animated.div sx={wrapperStyles} className={className}>
      <h1 sx={titleStyles}>
        <span sx={numberStyles}>{index}.</span>
        {formatTitle(title)}
      </h1>
      <p>{description}</p>
    </animated.div>
  );
};

export default Step;
