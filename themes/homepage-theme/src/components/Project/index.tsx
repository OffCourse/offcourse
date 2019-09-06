/** @jsx jsx */
import { FunctionComponent } from "react";
import { Styled, jsx } from "theme-ui";
import { IThemeable } from "@offcourse/interfaces";
import { IProject } from "@offcourse/interfaces/src/pageSection";

import { formatTitle } from "../helpers";
import {
  imageStyles,
  captionStyles,
  wrapperStyles,
  headerStyles
} from "./styles";

type ProjectProps = IProject & IThemeable & { imageUrl: string };

const Project: FunctionComponent<ProjectProps> = ({
  className,
  imageUrl,
  title,
  description
}) => {
  return (
    <article sx={wrapperStyles} className={className}>
      <img sx={imageStyles} src={imageUrl} />
      <section sx={captionStyles}>
        <Styled.p>{description}</Styled.p>
        <Styled.h2 sx={headerStyles}>{formatTitle(title)}</Styled.h2>
      </section>
    </article>
  );
};
export default Project;
