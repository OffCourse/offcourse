import { IPageSection } from "./pageSection";
import { Link } from "./components";

export interface ISiteMetaData {
  siteName: string;
  contactInfo: any;
  links: Link[];
  callToAction: Link;
}

export type HeaderData = Pick<ISiteMetaData, "links" | "callToAction">;
export type FooterData = Pick<ISiteMetaData, "siteName" | "contactInfo">;

export type Menu = {
  mode: "OPEN" | "CLOSED";
  toggle: () => void;
};

export interface IPageData {
  siteMetaData: ISiteMetaData;
}

export interface IHomePageData {
  siteMetaData: ISiteMetaData;
  sections: IPageSection[];
}
