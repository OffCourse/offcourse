import React, { forwardRef } from "react";
import Template from "@offcourse/homepage-theme/src/templates/Page";
import { StateProvider } from "../../../contexts/StateContext";

const PageTemplate = ({ children }, ref) => {
  return (
    <Template ref={ref}>
      <StateProvider>{children}</StateProvider>
    </Template>
  );
};

export default forwardRef(PageTemplate);
