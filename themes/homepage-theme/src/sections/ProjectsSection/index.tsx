/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx } from "theme-ui";
import { IThemeable } from "@offcourse/interfaces/src";
import BaseSection from "../BaseSection";
import {
  IProjectsSection
} from "@offcourse/interfaces/src/pageSection";
import Project from "../../components/Project";
import Carousel from "../../components/Carousel";
import { wrapperStyles } from "./styles";
import { useMeasure } from "../../hooks";

type ProjectsSectionProps = IProjectsSection & IThemeable;

const ProjectsSection: FunctionComponent<ProjectsSectionProps> = ({
  className,
  projects,
  ...rest
}) => {
  const [{ width }, { ref }] = useMeasure();
  return (
    <BaseSection {...rest} sx={wrapperStyles} className={className} ref={ref}>
      <Carousel
        visibleItems={width && width > 480 ? 3 : 1}
        items={projects}
        delay={8000}
      >
        {(item) => <Project {...item} />}
      </Carousel>
    </BaseSection>
  );
};

export default ProjectsSection;
