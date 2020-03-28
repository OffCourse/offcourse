/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx } from "theme-ui";
import { motion } from "framer-motion";
import { postListStyles, postListItemStyles } from "./styles";

const itemVariants = {
  initial: (isOdd: boolean) => {
    return isOdd ? { x: "100%" } : { x: "-100%" };
  },
  visible: { x: 0, transition: { damping: 500 } },
};

const listVariants = {
  visible: {
    transition: {
      staggerChildren: 0.5,
      delay: 0.5,
    },
  },
};

const ListAnimation: FunctionComponent = ({ children }) => {
  return (
    <motion.ul
      variants={listVariants}
      initial={"initial"}
      animate={"visible"}
      sx={postListStyles}
    >
      {children}
    </motion.ul>
  );
};

const ListItemAnimation: FunctionComponent<{ id: string; isOdd: boolean }> = ({
  children,
  id,
  isOdd,
}) => {
  return (
    <motion.li
      custom={isOdd}
      variants={itemVariants}
      key={id}
      sx={postListItemStyles}
    >
      {children}
    </motion.li>
  );
};

export { ListAnimation, ListItemAnimation };
