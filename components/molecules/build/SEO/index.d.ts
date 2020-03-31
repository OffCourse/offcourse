/** @jsx jsx */
import { FunctionComponent } from "react";
import { ISiteMetaData } from "@offcourse/interfaces/src/pages";
import { IPost } from "@offcourse/interfaces/src";
declare const SEO: FunctionComponent<{
    siteMetaData: ISiteMetaData;
    pageData?: IPost;
    path: string;
}>;
export default SEO;
