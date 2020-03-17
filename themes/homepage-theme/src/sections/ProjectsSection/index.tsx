/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx } from "theme-ui";
import { snakeCase } from "voca";
import { IThemeable } from "@offcourse/interfaces/src";
import BaseSection from "../BaseSection";
import { IProjectsSection } from "@offcourse/interfaces/src/pageSection";
import { Project, Carousel } from "@offcourse/molecules";
import { wrapperStyles } from "./styles";
import { useGetProjectImages } from "../../hooks";

type ProjectsSectionProps = IProjectsSection & IThemeable;

const ProjectsSection: FunctionComponent<ProjectsSectionProps> = ({
  className,
  projects,
  ...rest
}) => {
  const imageUrls = useGetProjectImages();

  const items = projects.map(project => {
    const imageName = snakeCase(project.title);
    const imageUrl = imageUrls[imageName] || null;
    return {
      id: `${project.title}`,
      ...project,
      imageUrl
    };
  });

  return (
    <BaseSection
      useInnerWrapper={false}
      {...rest}
      sx={wrapperStyles}
      className={className}
    >
      <Carousel>
        {items.map(item => {
          return <Project key={item.id} {...item} />;
        })}
      </Carousel>
    </BaseSection>
  );
};

export default ProjectsSection;
