/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx } from "theme-ui";
import { IThemeable } from "@offcourse/interfaces";
import BaseSection from "../BaseSection";
import {
  IProjectsSection,
  IProject
} from "@offcourse/interfaces/src/pageSection";
import Project from "../../components/Project";
import Carousel from "../../components/Carousel";
import { wrapperStyles } from "./styles";

type ProjectsSectionProps = IProjectsSection & IThemeable;

const ProjectsSection: FunctionComponent<ProjectsSectionProps> = ({
  className,
  projects,
  ...rest
}) => {
  return (
    <BaseSection {...rest} sx={wrapperStyles} className={className}>
      <Carousel items={projects} delay={4000}>
        {item => <Project {...(item as IProject & { index: number })} />}
      </Carousel>
    </BaseSection>
  );
};

export default ProjectsSection;
