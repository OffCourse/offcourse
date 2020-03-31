/** @jsx jsx */
import { FunctionComponent } from "react";
import { IThemeable, IPageData, IPost } from "@offcourse/interfaces/src";
import { useStateValue } from "./state";
declare type PageLayoutProps = IPageData & {
    path: string;
    pageData?: IPost;
} & IThemeable;
declare const PageLayout: FunctionComponent<PageLayoutProps>;
export { useStateValue };
export default PageLayout;
