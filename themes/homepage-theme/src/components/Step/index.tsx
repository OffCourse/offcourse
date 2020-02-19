/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx } from "theme-ui";
import { animated, useSpring } from "react-spring";
import { IThemeable } from "@offcourse/interfaces/src";
import useVisibility from "../../hooks/useVisibility";
import { Step } from "@offcourse/molecules";
import { IStep } from "@offcourse/interfaces/src/pageSection";

type StepProps = IStep & IThemeable;

const AnimatedStep: FunctionComponent<StepProps> = props => {
  const [isVisible, Marker] = useVisibility({});
  const distance = props.index % 2 === 0 ? 100 : -100;
  const style = useSpring({
    transform: `translate3d(${isVisible ? 0 : distance}%, 0, 0)`,
    opacity: isVisible ? 1 : 0
  });
  return (
    <Step as={animated.div} style={style} {...props}>
      <Marker />
    </Step>
  );
};

export default AnimatedStep;
