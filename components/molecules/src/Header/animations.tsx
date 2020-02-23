/** @jsx jsx */
import { FunctionComponent } from "react";
import { motion } from "framer-motion";
import { jsx } from "theme-ui";

const avatarVariants = {
  hidden: { x: "-200%", opacity: 0.2 },
  visible: { x: 0, opacity: 1 }
};

const AvatarAnimation: FunctionComponent = ({ children }) => (
  <motion.div initial="hidden" animate={"visible"} variants={avatarVariants}>
    {children}
  </motion.div>
);

const menuVariants = {
  hidden: { y: "-400%", opacity: 0.2 },
  visible: { y: 0, opacity: 1 }
};

const MenuAnimation: FunctionComponent<{ mode: "OPEN" | "CLOSED" }> = ({
  children,
  mode
}) => (
  <motion.div
    initial="hidden"
    animate={mode === "OPEN" ? "visible" : "hidden"}
    variants={menuVariants}
  >
    {children}
  </motion.div>
);

const callToActionVariants = {
  hidden: { x: "200%", opacity: 0.2 },
  visible: { x: 0, opacity: 1 }
};

const CallToActionAnimation: FunctionComponent<{ mode: "OPEN" | "CLOSED" }> = ({
  children,
  mode
}) => (
  <motion.div
    initial="hidden"
    animate={mode === "CLOSED" ? "visible" : "hidden"}
    variants={callToActionVariants}
  >
    {children}
  </motion.div>
);

export { AvatarAnimation, MenuAnimation, CallToActionAnimation };
