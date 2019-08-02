import { useRef, useEffect, useState } from "react";
import ResizeObserver from "resize-observer-polyfill";
import { graphql, useStaticQuery } from "gatsby";
import { IPageSection } from "../interfaces";

const useGetAllSections = () => {
    const data = useStaticQuery(graphql`
      query allHomePageSections {
        allPageSection {
          edges {
            section: node {
            role
            slogan
            explanation
            publishable
            }
        }
    }
}`);
    return data.allPageSection.edges.map(({ section }: { section: IPageSection }) => section);
};

const useMeasure = () => {
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
