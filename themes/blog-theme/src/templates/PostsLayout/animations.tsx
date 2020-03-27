/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx } from "theme-ui";
import { motion } from "framer-motion";
import { postListStyles, postListItemStyles } from "./styles";

const itemVariants = {
  initial: { x: "100%" },
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

const ListItemAnimation: FunctionComponent<{ id: string; index: number }> = ({
  children,
  id,
  index,
}) => {
  return (
    <motion.li
      custom={index}
      variants={itemVariants}
      key={id}
      sx={postListItemStyles}
    >
      {children}
    </motion.li>
  );
};

export { ListAnimation, ListItemAnimation };
