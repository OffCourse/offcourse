/** @jsx jsx */
import { FunctionComponent } from "react";
import { IThemeable, IPageData } from "@offcourse/interfaces/src";
declare type PageLayoutProps = {
    mode: "menuOpen" | "default";
    toggleMenu: () => void;
} & IPageData & IThemeable;
declare const PageLayout: FunctionComponent<PageLayoutProps>;
export default PageLayout;
