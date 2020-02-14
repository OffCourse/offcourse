import React, { FunctionComponent, forwardRef } from "react";
import Template from "@offcourse/homepage-theme/src/templates/Page";
import { AppStateProvider } from "../../../contexts/StateContext";

const PageTemplate: FunctionComponent = ({ children }, ref) => {
  return (
    <Template ref={ref}>
      <AppStateProvider>{children}</AppStateProvider>
    </Template>
  );
};

export default forwardRef(PageTemplate);
