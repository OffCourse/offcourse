import { useState } from "react";
const useShowTab: () => [boolean, (args: any) => void] = () => {
  const [isVisible, setVisibility] = useState(true);

  const handlePositionChange: (args: { currentPosition: string }) => void = ({
    currentPosition
  }) => {
    setVisibility(currentPosition !== "inside" ? true : false);
  };

  return [isVisible, handlePositionChange];
};


export default useShowTab;
