import { assign } from "xstate";
import { ISiteMetaData } from "@offcourse/interfaces/src/pages";

const updateLinks = assign<any, any>({
  siteMetaData: (
    { siteMetaData }: { siteMetaData: ISiteMetaData },
    _event: any
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

export { updateLinks, updateSections };

