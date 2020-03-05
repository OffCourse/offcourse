import { IPageSection } from "./pageSection";
import { Link } from "./components";

export interface ISiteMetaData {
  siteName: string;
  contactInfo: any;
  links: Link[];
  callToAction: Link | null;
  callToActionVisible: boolean;
}

export type HeaderData = Partial<
  Pick<ISiteMetaData, "links" | "callToAction" | "callToActionVisible">
>;
export type FooterData = Partial<
  Pick<ISiteMetaData, "siteName" | "contactInfo">
>;

export type Menu = {
  toggle: () => void;
};

export interface IPageData {
  siteMetaData: ISiteMetaData;
}

export interface IHomePageData {
  siteMetaData: ISiteMetaData;
  sections: IPageSection[];
}
}

