/** @jsx jsx */
import { FunctionComponent } from "react";
import { graphql, useStaticQuery } from "gatsby";
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
import { useMeasure } from "../../hooks";
import { snakeCase } from "voca";

type ProjectsSectionProps = IProjectsSection & IThemeable;

const ProjectsSection: FunctionComponent<ProjectsSectionProps> = ({
  className,
  projects,
  ...rest
}) => {
  const [{ width }, { ref }] = useMeasure();
  const x = useStaticQuery(graphql`
    query ProjectImagesQuery {
      allFile(filter: { sourceInstanceName: { eq: "projectImages" } }) {
        edges {
          node {
            name
            publicURL
          }
        }
      }
    }
  `);

  const imageUrls = x.allFile.edges.reduce(
    (acc, { node }) => ({
      ...acc,
      [node.name]: node.publicURL
    }),
    {}
  );

  return (
    <BaseSection {...rest} sx={wrapperStyles} className={className} ref={ref}>
      <Carousel
        visibleItems={width && width > 480 ? 3 : 1}
        items={projects.map((project, index) => {
          const imageName = snakeCase(project.title);
          const imageUrl = imageUrls[imageName] || null;
          return {
            ...project,
            imageUrl
          };
        })}
        delay={8000}
      >
        {item => <Project {...(item as IProject & { index: number })} />}
      </Carousel>
    </BaseSection>
  );
};

export default ProjectsSection;
