/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx } from "theme-ui";
import { motion } from "framer-motion";

const headerVariants = {
  hover: { x: "-15rem", transition: { damping: 500 } },
};

const sidePanelVariants = {
  initial: { opacity: 0 },
  hover: { opacity: 1, transition: { delay: 0.2 } },
};

const HeaderAnimation: FunctionComponent<{ isOdd: boolean }> = ({
  isOdd,
  children,
}) => {
  return (
    <motion.div
      style={{ height: "100%" }}
      custom={isOdd}
      variants={headerVariants}
      whileHover={"hover"}
      whileTap={"hover"}
    >
      {children}
    </motion.div>
  );
};

const SidePanelAnimation: FunctionComponent = ({ children }) => {
  return (
    <motion.div initial="initial" variants={sidePanelVariants}>
      {children}
    </motion.div>
  );
};

export { HeaderAnimation, SidePanelAnimation };