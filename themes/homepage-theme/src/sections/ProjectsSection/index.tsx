/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx } from "theme-ui";
import { snakeCase } from "voca";
import { IThemeable } from "@offcourse/interfaces/src";
import BaseSection from "../BaseSection";
import { IProjectsSection } from "@offcourse/interfaces/src/pageSection";
import Project from "../../components/Project";
import Carousel from "../../components/Carousel";
import { wrapperStyles } from "./styles";
import { useMeasure, useGetProjectImages } from "../../hooks";

type ProjectsSectionProps = IProjectsSection & IThemeable;

const ProjectsSection: FunctionComponent<ProjectsSectionProps> = ({
  className,
  projects,
  ...rest
}) => {
  const [{ width }, { ref }] = useMeasure();
  const imageUrls = useGetProjectImages();
  return (
    <BaseSection useInnerWrapper={false} {...rest} sx={wrapperStyles} className={className} ref={ref}>
      <Carousel
        visibleItems={width && width > 480 ? 3 : 1}
        items={projects.map(project => {
          const imageName = snakeCase(project.title);
          const imageUrl = imageUrls[imageName] || null;
          return {
            ...project,
            imageUrl
          };
        })}
        delay={8000}
      >
        {item => <Project {...item} />}
      </Carousel>
    </BaseSection>
  );
};

export default ProjectsSection;
