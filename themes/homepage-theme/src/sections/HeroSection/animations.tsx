/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx } from "theme-ui";
import { motion } from "framer-motion";

const variants = {
  idle: { x: -200, opacity: 0 },
  default: { x: 0, opacity: 1 },
  menuOpen: { x: 0, opacity: 1 }
};

const TitleAnimation: FunctionComponent<{ appMode: string }> = ({
  appMode,
  children
}) => {
  return (
    <motion.div variants={variants} animate={appMode} initial="idle">
      {children}
    </motion.div>
  );
};

export { TitleAnimation };
