/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx } from "theme-ui";
import { motion } from "framer-motion";

const transition = { damping: 500, stiffness: 1 };

const headerVariants = {
  initial: ({ isFullPost }: { isFullPost: boolean }) => {
    return { height: isFullPost ? "24rem" : "100%" };
  },
  visible: ({ isFullPost }: { isFullPost: boolean }) => {
    return {
      height: isFullPost ? "32rem" : "100%",
      transition,
    };
  },
};

const HeaderAnimation: FunctionComponent<{ isFullPost: boolean }> = ({
  children,
  isFullPost,
}) => {
  return (
    <motion.div
      sx={{ maxHeight: "32rem" }}
      variants={headerVariants}
      custom={{ isFullPost }}
      initial={"initial"}
      animate={"visible"}
    >
      {children}
    </motion.div>
  );
};

export { HeaderAnimation };
