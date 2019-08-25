import React, { FunctionComponent } from "react";
import { config, useSpring, animated } from "react-spring";
import styled from "@emotion/styled";
import Tab from "./Tab";
import { IStylable } from "../interfaces";

const CallToAction: FunctionComponent<IStylable> = ({
  className,
  children,
  isVisible
}) => {
  const animation = useSpring({
    from: {
      top: -200
    },
    top: isVisible ? 0 : -200,
    config: config.molasses
  });
  return (
    <animated.div style={animation} className={className}>
      <Tab title={children} />
    </animated.div>
  );
};

export default styled(CallToAction)`
  user-select: none;
  position: fixed;
  top: 0;
  right: 0;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 0rem 1rem;
  width: 100%;
`;
