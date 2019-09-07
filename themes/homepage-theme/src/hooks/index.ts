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
                    projects {
                      title
                      description
                    }
                    contactInfo {
                       street
                       zipCode
                       city
                       country
                       email
                    }
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

  const handlePositionChange: (args: { currentPosition: string }) => void = ({
    currentPosition,
  }) => {
    setVisibility(currentPosition !== "inside" ? true : false);
  };

  return [isVisible, handlePositionChange];
};

type Callback = (args?: any) => void;

const useInterval: (callback: Callback, delay: number) => void = (callback, delay) => {
  const savedCallback = useRef<Callback>();
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      if (savedCallback.current) {
        savedCallback.current()
      };
    }
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};

const useCycleArray = <T>(initialArray: T[], delay: number) => {
  const indexedItems = initialArray.map((item, index) => ({
    ...item,
    index
  }));
  const [orderedItems, setOrderedItems] = useState(indexedItems);
  useInterval(() => {
    const [first, ...others] = orderedItems;
    setOrderedItems([...others, first]);
  }, delay);

  return orderedItems;
}

export { useCycleArray, useShowTab, useInterval, useGetAllSections, useMeasure };
