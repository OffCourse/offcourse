/** @jsx jsx */
import { FunctionComponent, useState } from "react";
import { jsx } from "theme-ui";
import { Waypoint } from "react-waypoint";
import { animated, useSpring } from "react-spring";
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
  const [isVisible, setVisibility] = useState(false);
  const handlePositionChange: (args: { currentPosition: string }) => void = ({
    currentPosition
  }) => {
    setVisibility(currentPosition === "inside");
  };
  const distance = index % 2 === 0 ? 100 : -100;
  const style = useSpring({
    transform: `translate3d(${isVisible ? 0 : distance}%, 0, 0)`,
    opacity: isVisible ? 1 : 0
  });
  return (
    <animated.div sx={wrapperStyles} style={style} className={className}>
      <Waypoint
        scrollableAncestor={window}
        onEnter={handlePositionChange}
        onLeave={handlePositionChange}
      />
      <h1 sx={titleStyles}>
        <span sx={numberStyles}>{index}.</span>
        {formatTitle(title)}
      </h1>
      <p>{description}</p>
    </animated.div>
  );
};

export default Step;
