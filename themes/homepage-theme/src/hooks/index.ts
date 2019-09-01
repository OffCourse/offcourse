import { useRef, useEffect, useState } from "react";
import ResizeObserver from "resize-observer-polyfill";
import { graphql, useStaticQuery } from "gatsby";
import { IMeasurable } from "@offcourse/interfaces";

const useGetAllSections = () => {
  const data = useStaticQuery(graphql`
    query AllHomepageData {
        allHomePage {
            edges {
                node {
                siteName
                sections {
                    backdropPath
                    callToAction
                    publishable
                    role
                    title
                    form {
                        title
                        fields {
                            label
                            name
                            type
                            options {
                                label
                                value
                                }
                            }
                        }
                    }
                }
            }
        }
    }
  `);
  return data.allHomePage.edges[0].node;
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

const useShowTab: () => [boolean, (args: any) => void] = () => {
  const [isVisible, setVisibility] = useState(true);

  const handlePositionChange = ({
    currentPosition,
    previousPosition,
  }) => {
    setVisibility(currentPosition !== "inside" ? true : false);
  };

  return [isVisible, handlePositionChange];
};

export { useShowTab, useGetAllSections, useMeasure };
