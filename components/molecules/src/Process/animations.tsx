import React, { FunctionComponent } from "react";
import { motion } from "framer-motion";
import { useVisibility } from "@offcourse/hooks";
import { IThemeable } from "@offcourse/interfaces/src";

const stepVariants = {
  hidden: (isEven: boolean) => ({
    x: isEven ? -200 : 200,
    opacity: 0
  }),
  visible: { x: 0, opacity: 1 }
};

const StepAnimation: FunctionComponent<{
  index: number;
} & IThemeable> = ({ children, index, className }) => {
  const [isVisible, ref] = useVisibility({
    canLeave: false,
    modBottom: "-400px"
  });
  const isEven = index % 2 === 0;
  return (
    <motion.div
      ref={ref}
      key={index}
      variants={stepVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      custom={isEven}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export { StepAnimation };
