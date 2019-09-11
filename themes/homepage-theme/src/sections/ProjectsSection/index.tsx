/** @jsx jsx */
import { useState, FunctionComponent } from "react";
import { jsx } from "theme-ui";
import { IThemeable } from "@offcourse/interfaces";
import BaseSection from "../BaseSection";
import { useTransition } from "react-spring";
import useInterval from "../../hooks/useInterval";
import { IProjectsSection } from "@offcourse/interfaces/src/pageSection";
import Project from "../../components/Project";
import { wrapperStyles } from "./styles";

type ProjectsSectionProps = IProjectsSection & IThemeable;

const ProjectsSection: FunctionComponent<ProjectsSectionProps> = ({
  className,
  projects,
  ...rest
}) => {
  const [index, setIndex] = useState(0);
  const goUp = index => setIndex(index + 1);
  const goDown = index => setIndex(index - 1);
  const [direction, setDirection] = useState("UP");
  const orderedProjects = [...projects, ...projects].map((item, index) => ({
    ...item,
    index
  }));
  useInterval(() => {
    let next = null;
    if (direction === "UP") {
      next = goUp;
      const reachedEnd = index >= orderedProjects.length - 4;
      if (reachedEnd) {
        setDirection("DOWN");
      }
    } else {
      next = goDown;
      const reachedEnd = index <= 1;
      if (reachedEnd) {
        setDirection("UP");
      }
    }
    next(index);
  }, 4000);
  const transitions = useTransition(orderedProjects, item => item.index, {
    update: [
      { transform: `translate3d(${index * -100}%, 0, 0)`, opacity: 0.4 },
      { transform: `translate3d(${index * -100}%, 0, 0)`, opacity: 1 }
    ]
  });
  return (
    <BaseSection {...rest} sx={wrapperStyles} className={className}>
      {transitions.map(({ item: project, key, props: style }) => (
        <Project {...project} style={style} key={key}></Project>
      ))}
    </BaseSection>
  );
  l;
};

export default ProjectsSection;
