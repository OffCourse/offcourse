/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx } from "theme-ui";
import { config, useSpring, animated } from "react-spring";
import Tab from "../Tab";
import { IStylable, IThemeable } from "@offcourse/interfaces";

type CallToActionProps = IThemeable &
  Pick<IStylable, "isVisible"> & { children: string };

const styles = {
  userSelect: "none",
  position: "fixed",
  top: 0,
  right: 0,
  bg: "transparent",
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-end",
  alignItems: "flex-start",
  py: 0,
  px: 4,
  width: "100%",
  zIndex: 100
};

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
    config: config.fast
  });
  return (
    <animated.div sx={styles} style={animation} className={className}>
      <Tab title={children} />
    </animated.div>
  );
};

export default CallToAction;
