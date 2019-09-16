/** @jsx jsx */
import { useState } from "react";
import { Waypoint } from "react-waypoint";
import { jsx } from "theme-ui";

const useVisibility = () => {
  const [isVisible, setVisibility] = useState(false);

  const handlePositionChange: (args: { currentPosition: string }) => void = ({
    currentPosition
  }) => {
    setVisibility(currentPosition === "inside");
  };

  const Marker = () => (
    <Waypoint
      scrollableAncestor={typeof window !== "undefined" ? window : null}
      onEnter={handlePositionChange}
      onLeave={handlePositionChange}
    />
  );

  return [isVisible, Marker];
};

export default useVisibility;
