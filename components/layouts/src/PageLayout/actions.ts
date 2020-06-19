import { assign } from "xstate";
import { ISiteMetaData } from "@offcourse/interfaces/src/pages";

const updateLinks = assign<any, any>({
  siteMetaData: (
    { siteMetaData, path }: { siteMetaData: ISiteMetaData; path: string },
    _event: any
  ) => {
    const pathTitle = path.replace(/\//, "") || "home";
    const links = siteMetaData.links
      ? siteMetaData.links.filter(({ title }) => title !== pathTitle)
      : null;
    return { ...siteMetaData, links };
  },
});

const callToActionVisible = assign<any, any>({
  callToActionVisible: ({ sections, path }: any) => {
    if (path !== "/") {
      return false;
    }
    return sections ? !sections["ContactSection"] : true;
  },
});

const updateSections = assign<any, any>({
  sections: (context: any, { payload }: any) => {
    const sections = context.sections || {};
    const { role, isVisible } = payload;
    return { ...sections, [role]: isVisible };
  },
});

export { updateLinks, callToActionVisible, updateSections };
