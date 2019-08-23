import React, { FunctionComponent } from "react";
import { useSpring, animated } from "react-spring";
import styled from "@emotion/styled";
import Tab from "./Tab";
import { IStylable } from "../interfaces";

const CallToAction: FunctionComponent<IStylable> = ({
  className,
  callToAction,
  isVisible
}) => {
  const animation = useSpring({ top: isVisible ? 0 : -200 });
  return (
    <animated.div style={animation} className={className}>
      <Tab title={callToAction} />
    </animated.div>
  );
};

export default styled(CallToAction)`
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
