/** @jsx jsx */
import {
  FunctionComponent,
  Fragment,
  useState,
  useEffect,
  useCallback
} from "react";
import { jsx, Box } from "theme-ui";
import { snakeCase } from "voca";
import { times } from "ramda";
import { IThemeable } from "@offcourse/interfaces/src";
import BaseSection from "../BaseSection";
import { IProjectsSection } from "@offcourse/interfaces/src/pageSection";
import { Project } from "@offcourse/molecules";
import { wrapperStyles, innerWrapperStyles } from "./styles";
import { wrap } from "@popmotion/popcorn";
import { useGetProjectImages } from "../../hooks";
import { useInterval } from "@offcourse/hooks";
import { motion, AnimatePresence } from "framer-motion";

type ProjectsSectionProps = IProjectsSection & IThemeable;

const ProjectsSection: FunctionComponent<ProjectsSectionProps> = ({
  className,
  projects,
  ...rest
}) => {
  const imageUrls = useGetProjectImages();
  const [currentIndex, setIndex] = useState(0);
  const items = projects.map(project => {
    const imageName = snakeCase(project.title);
    const imageUrl = imageUrls[imageName] || null;
    return {
      id: `${project.title}`,
      ...project,
      imageUrl
    };
  });

  const numberOfItems = items.length;

  const moveToNext = useCallback(() => {
    setIndex(c => wrap(0, numberOfItems, c + 1));
  }, [numberOfItems]);

  useInterval(moveToNext, 2000);

  const prevItem = items[wrap(0, numberOfItems, currentIndex - 1)];
  const currentItem = items[currentIndex];
  const nextItem = items[wrap(0, numberOfItems, currentIndex + 1)];
  const allItems = [prevItem, currentItem, nextItem];

  return (
    <BaseSection
      useInnerWrapper={false}
      {...rest}
      sx={wrapperStyles}
      className={className}
    >
      <Box
        sx={{
          flexDirection: "row",
          display: "flex",
          width: "100rem",
          overflowX: "hidden"
        }}
      >
        <AnimatePresence>
          {allItems.map(item => {
            return (
              <motion.div
                key={item.id}
                positionTransition={{ damping: 500 }}
                exit={{ opacity: 0 }}
              >
                <Project {...item} />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </Box>
    </BaseSection>
  );
};

export default ProjectsSection;
