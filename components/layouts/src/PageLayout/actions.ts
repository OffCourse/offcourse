import { assign } from "xstate";
import { ISiteMetaData } from "@offcourse/interfaces/src/pages";

const addSiteMetaData = assign<any, any>({
  siteMetaData: (
    _: any,
    { payload: { siteMetaData } }: { payload: { siteMetaData: ISiteMetaData } }
  ) => {
    const links = siteMetaData.links.filter(({ title }) => title !== "home");
    return { ...siteMetaData, links };
  }
});

const updateSections = assign<any, any>({
  sections: (context: any, { payload }: any) => {
    const sections = context.sections || {};
    const { role, isVisible } = payload;
    return { ...sections, [role]: isVisible };
  }
});

export { addSiteMetaData, updateSections };

