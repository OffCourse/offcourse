/** @jsx jsx */
import { FunctionComponent } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { jsx } from "theme-ui";
import { IThemeable } from "@offcourse/interfaces";
import BaseSection from "../BaseSection";
import { IProjectsSection } from "@offcourse/interfaces/src/pageSection";
import Project from "../../components/Project";

import styles from "./styles";

type ProjectsSectionProps = IProjectsSection & IThemeable;

const useInstaQuery = () => {
  const { allInstaNode } = useStaticQuery(graphql`
    query InstaQuery {
      allInstaNode(limit: 3, skip: 5) {
        nodes {
          original
        }
      }
    }
  `);
  return allInstaNode.nodes.map(({ original }) => original);
};

const ProjectsSection: FunctionComponent<ProjectsSectionProps> = ({
  className,
  projects,
  ...rest
}) => {
  const images = useInstaQuery();
  return (
    <BaseSection {...rest} className={className} sx={styles}>
      {projects.map((project, index) => (
        <Project {...project} imageUrl={images[index]} key={index} />
      ))}
    </BaseSection>
  );
};
export default ProjectsSection;
