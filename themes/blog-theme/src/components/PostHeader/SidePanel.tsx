/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, Box } from "theme-ui";
import { IThemeable } from "@offcourse/interfaces/src";
import { sidepanelStyles } from "./styles";

const Sidepanel: FunctionComponent<IThemeable & { side: "left" | "right" }> = ({
  className,
  children,
  side = "right",
}) => {
  const styles =
    side === "left"
      ? { ...sidepanelStyles, left: "-15rem" }
      : { ...sidepanelStyles, right: "-15rem" };
  return (
    <Box className={className} sx={styles}>
      {children}
    </Box>
  );
};

export default Sidepanel;
