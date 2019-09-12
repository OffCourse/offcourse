/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx } from "theme-ui";
import { IThemeable } from "@offcourse/interfaces";
import BaseSection from "../BaseSection";
import useCarousel from "../../hooks/useCarousel";
import { IProjectsSection } from "@offcourse/interfaces/src/pageSection";
import Project from "../../components/Project";
import { wrapperStyles } from "./styles";

type ProjectsSectionProps = IProjectsSection & IThemeable;

const ProjectsSection: FunctionComponent<ProjectsSectionProps> = ({
  className,
  projects,
  ...rest
}) => {
  const items = useCarousel({ items: projects, delay: 1000 });
  return (
    <BaseSection {...rest} sx={wrapperStyles} className={className}>
      {items.map(({ item, style, key }) => (
        <Project {...item} style={style} key={key}></Project>
      ))}
    </BaseSection>
  );
};

export default ProjectsSection;
