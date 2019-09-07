/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx } from "theme-ui";
import { IThemeable } from "@offcourse/interfaces";
import BaseSection from "../BaseSection";
import useCycleArray from "../../hooks/useCycleArray";
import useInstaQuery from "../../hooks/useInstaQuery";
import { IProjectsSection } from "@offcourse/interfaces/src/pageSection";
import Project from "../../components/Project";
import { innerStyles, wrapperStyles } from "./styles";

type ProjectsSectionProps = IProjectsSection & IThemeable;

const ProjectsSection: FunctionComponent<ProjectsSectionProps> = ({
  className,
  projects,
  ...rest
}) => {
  const images = useInstaQuery();
  const orderedProjects = useCycleArray(projects, 1000);
  return (
    <BaseSection {...rest} className={className} sx={wrapperStyles}>
      <div sx={innerStyles}>
        {orderedProjects.map(({ index, ...project }) => (
          <Project {...project} index={index} key={index}>
            <img src={images[index]} />
          </Project>
        ))}
      </div>
    </BaseSection>
  );
};

export default ProjectsSection;
