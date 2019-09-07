/** @jsx jsx */
import { FunctionComponent } from "react";
import { Styled, jsx } from "theme-ui";
import { IThemeable } from "@offcourse/interfaces";
import { IProject } from "@offcourse/interfaces/src/pageSection";
import { formatTitle } from "../helpers";
import {
  imageStyles,
  innerStyles,
  captionStyles,
  wrapperStyles,
  headerStyles
} from "./styles";

type ProjectProps = IProject & IThemeable & { index: number };

const Project: FunctionComponent<ProjectProps> = ({
  className,
  index,
  children,
  title,
  description
}) => {
  return (
    <article sx={wrapperStyles} className={className}>
      <div sx={imageStyles}>
        <div sx={innerStyles}>
          {children || <h1>{`Placeholder ${index}`}</h1>}
        </div>
      </div>
      <section sx={captionStyles}>
        <Styled.p>{description}</Styled.p>
        <Styled.h2 sx={headerStyles}>{formatTitle(title)}</Styled.h2>
      </section>
    </article>
  );
};
export default Project;
