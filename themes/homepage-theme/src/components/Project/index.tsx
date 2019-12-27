/** @jsx jsx */
import { FunctionComponent } from "react";
import { Styled, jsx } from "theme-ui";
import { IThemeable } from "@offcourse/interfaces/src";
import { IProject } from "@offcourse/interfaces/src/pageSection";
import { formatTitle } from "../helpers";
import Text from "../Text";
import {
  imageStyles,
  innerStyles,
  captionStyles,
  headerStyles,
  wrapperStyles
} from "./styles";

type ProjectProps = IProject & IThemeable & { index: number };

const Project: FunctionComponent<ProjectProps> = ({
  className,
  children,
  title,
  imageUrl,
  description
}) => {
  return (
    <article sx={wrapperStyles} className={className}>
      <div sx={imageStyles}>
        <div
          sx={{
            ...innerStyles,
            backgroundImage: `url(${imageUrl})`
          }}
        >
          {children}
        </div>
      </div>
      <Text sx={captionStyles} html={description} />
      <Styled.h2 sx={headerStyles}>{formatTitle(title)}</Styled.h2>
    </article>
  );
};
export default Project;
