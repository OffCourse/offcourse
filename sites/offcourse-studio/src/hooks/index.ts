import { useRef, useEffect, useState } from "react";
import ResizeObserver from "resize-observer-polyfill";
import { graphql, useStaticQuery } from "gatsby";
import { IPageSection, IMeasurable } from "../interfaces";

const useGetAllSections = () => {
  const data = useStaticQuery(graphql`
      query allHomePageSections {
        allPageSection {
          edges {
            section: node {
                role
                backdropPath
                title
                publishable
            }
        }
    }
}`);
  return data.allPageSection.edges.map(({ section }: { section: IPageSection }) => section);
};

const useMeasure: () => [IMeasurable, { ref: any }] = () => {
  const ref: any = useRef();
  const [bounds, set] = useState({ left: 0, top: 0, width: 0, height: 0 });
  const [ro] = useState(
    () => new ResizeObserver(([entry]) => set(entry.contentRect))
  );
  useEffect(() => {
    if (ref.current) { ro.observe(ref.current); }
    return () => ro.disconnect();
  }, []);
  return [bounds, { ref }];
};

export { useGetAllSections, useMeasure };
