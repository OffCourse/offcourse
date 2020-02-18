/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx } from "theme-ui";
import { config, useSpring, animated } from "react-spring";
import { Tab } from "@offcourse/atoms";
import { IStylable, IThemeable } from "@offcourse/interfaces/src";
import { wrapperStyles } from "./styles";

type CallToActionProps = IThemeable &
  Pick<IStylable, "isVisible"> & { children: string };

const CallToAction: FunctionComponent<CallToActionProps> = ({
  className,
  children,
  isVisible
}) => {
  const animation = useSpring({
    from: {
      top: -200
    },
    top: isVisible ? 0 : -200,
    config: config.default
  });
  return (
    <animated.div sx={wrapperStyles} style={animation} className={className}>
      <Tab title={children} />
    </animated.div>
  );
};

export default CallToAction;
