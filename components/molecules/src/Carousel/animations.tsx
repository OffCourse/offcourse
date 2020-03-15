/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx } from "theme-ui";
import { motion } from "framer-motion";
import { IThemeable } from "@offcourse/interfaces/src";

const ItemAnimation: FunctionComponent = ({ children }) => (
  <motion.div positionTransition={{ damping: 500 }} exit={{ opacity: 1 }}>
    {children}
  </motion.div>
);

const controlVariants = ({ active, passive }: any) => {
  return {
    passive: { opacity: 1, scale: 1, backgroundColor: passive },
    active: { opacity: 1, scale: [1, 1.5, 1.1], backgroundColor: "black" },
    hover: { opacity: 1, backgroundColor: active }
  };
};

const ControlAnimation: FunctionComponent<{
  isActive: boolean;
  colors: { active?: string; passive?: string };
} & IThemeable> = ({ children, className, isActive, colors }) => {
  return (
    <motion.div
      className={className}
      whileHover="hover"
      positionTransition={{ damping: 500 }}
      initial="passive"
      variants={controlVariants(colors)}
      animate={isActive ? "active" : "passive"}
    >
      {children}
    </motion.div>
  );
};

export { ItemAnimation, ControlAnimation };
