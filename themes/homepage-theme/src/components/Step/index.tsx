/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx } from "theme-ui";
import { animated, useSpring } from "react-spring";
import { IThemeable } from "@offcourse/interfaces";
import { wrapperStyles, titleStyles, numberStyles } from "./styles";
import { formatTitle } from "../helpers";
import useVisibility from "../../hooks/useVisibility";
import Text from "../Text";
import { IStep } from "@offcourse/interfaces/src/pageSection";

type StepProps = IStep & IThemeable;

const Step: FunctionComponent<StepProps> = ({
  className,
  index,
  title,
  description
}) => {
  const [isVisible, Marker] = useVisibility({});
  const distance = index % 2 === 0 ? 100 : -100;
  const style = useSpring({
    transform: `translate3d(${isVisible ? 0 : distance}%, 0, 0)`,
    opacity: isVisible ? 1 : 0
  });
  return (
    <animated.div sx={wrapperStyles} style={style} className={className}>
      <Marker />
      <h1 sx={titleStyles}>
        <span sx={numberStyles}>{index}</span>
        {formatTitle(title)}
      </h1>
      <Text html={description} />
    </animated.div>
  );
};

export default Step;
