/** @jsx jsx */
import { FunctionComponent } from "react";
import { IThemeable } from "@offcourse/interfaces/src";
declare type PageLayoutProps = {
    siteName: string;
    contactInfo: any;
} & IThemeable;
declare const PageLayout: FunctionComponent<PageLayoutProps>;
export default PageLayout;
