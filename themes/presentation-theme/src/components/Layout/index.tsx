/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, Box } from "theme-ui";
import { Global } from "@emotion/core";

const Layout: FunctionComponent = ({ children }) => {
  return (
    <Box
      sx={{
        display: "grid",
        width: "100%",
        bg: "#3B87C1",
        height: "100%",
        justifyContent: "stretch",
        alignContent: "stretch"
      }}
    >
      {children}
      <Global styles={theme => theme.globals} />
    </Box>
  );
};

export default Layout;
