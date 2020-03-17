/** @jsx jsx */
import { FunctionComponent } from "react";
import { motion } from "framer-motion";
import { jsx } from "theme-ui";

const duration = 0.2;
const transition = { delay: 0.5, damping: 50 };

const avatarVariants = {
  idle: { x: "-200%", opacity: 0 },
  default: {
    x: 0,
    opacity: 1,
    rotate: 0,
    transition
  },
  hover: { opacity: 0.8 },
  menuOpen: { rotate: 90 }
};

const AvatarAnimation: FunctionComponent<{
  appMode: "menuOpen" | "default";
}> = ({ children, appMode }) => {
  return (
    <motion.div
      initial="idle"
      whileHover={"hover"}
      animate={appMode}
      variants={avatarVariants}
    >
      {children}
    </motion.div>
  );
};

const menuVariants = {
  idle: { y: "-400%", opacity: 0.2 },
  default: { y: "-400%", opacity: 0.2 },
  menuOpen: { y: 0, opacity: 1 }
};

const MenuAnimation: FunctionComponent<{ appMode: "menuOpen" | "default" }> = ({
  children,
  appMode
}) => (
  <motion.div
    initial="idle"
    animate={appMode}
    transition={{ duration }}
    variants={menuVariants}
  >
    {children}
  </motion.div>
);

const callToActionVariants = {
  idle: { x: "200%", opacity: 0.2 },
  menuOpen: { x: "200%", opacity: 0.2 },
  default: { x: 0, opacity: 1, transition }
};

const CallToActionAnimation: FunctionComponent<{
  appMode: "menuOpen" | "default";
  callToActionVisible: boolean;
}> = ({ children, appMode, callToActionVisible }) => {
  return (
    <motion.div
      initial="idle"
      animate={callToActionVisible ? appMode : "idle"}
      variants={callToActionVariants}
    >
      {children}
    </motion.div>
  );
};

export { AvatarAnimation, MenuAnimation, CallToActionAnimation };
