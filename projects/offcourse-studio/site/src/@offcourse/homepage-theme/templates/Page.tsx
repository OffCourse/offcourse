import React, { FunctionComponent, forwardRef } from "react";
import Template from "@offcourse/homepage-theme/src/templates/Page";
import { AppStateProvider } from "../../../contexts/StateContext";

const PageTemplate: FunctionComponent<{
  siteName: string;
  contactInfo: any;
}> = ({ children, ...rest }, _ref) => {
  return (
    <Template {...rest}>
      <AppStateProvider>{children}</AppStateProvider>
    </Template>
  );
};

export default forwardRef(PageTemplate);
