/** @jsx jsx */
import { FunctionComponent } from "react";
import { motion } from "framer-motion";
import { jsx } from "theme-ui";

const duration = 0.2;

const avatarVariants = {
  hidden: { x: "-200%", opacity: 0.2 },
  default: { x: 0, opacity: 1, rotate: 0 },
  hover: { opacity: 0.8 },
  menuOpen: { rotate: 90 }
};

const AvatarAnimation: FunctionComponent<{ mode: "menuOpen" | "default" }> = ({
  children,
  mode
}) => (
  <motion.div
    initial="hidden"
    whileHover={"hover"}
    transition={{ duration }}
    animate={mode}
    variants={avatarVariants}
  >
    {children}
  </motion.div>
);

const menuVariants = {
  default: { y: "-400%", opacity: 0.2 },
  menuOpen: { y: 0, opacity: 1 }
};

const MenuAnimation: FunctionComponent<{ mode: "menuOpen" | "default" }> = ({
  children,
  mode
}) => (
  <motion.div
    initial="default"
    animate={mode}
    transition={{ duration }}
    variants={menuVariants}
  >
    {children}
  </motion.div>
);

const callToActionVariants = {
  hidden: { x: "200%", opacity: 0.2 },
  menuOpen: { x: "200%", opacity: 0.2 },
  default: { x: 0, opacity: 1 }
};

const CallToActionAnimation: FunctionComponent<{
  mode: "menuOpen" | "default";
}> = ({ children, mode }) => (
  <motion.div
    initial="hidden"
    transition={{ duration }}
    animate={mode}
    variants={callToActionVariants}
  >
    {children}
  </motion.div>
);

export { AvatarAnimation, MenuAnimation, CallToActionAnimation };
