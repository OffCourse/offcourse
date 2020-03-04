/** @jsx jsx */
import { FunctionComponent } from "react";
import { IThemeable, IPageData } from "@offcourse/interfaces/src";
declare type PageLayoutProps = IPageData & IThemeable;
declare const InnerLayout: FunctionComponent<PageLayoutProps>;
export default InnerLayout;
