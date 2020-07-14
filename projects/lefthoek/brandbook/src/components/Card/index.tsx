/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx } from "theme-ui";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { cardStyles } from "./styles";

export const Card: FunctionComponent<{ className?: string }> = ({
  children,
  className,
}) => {
  console.dir(children);
  return (
    <article sx={cardStyles} className={className}>
      {children}
    </article>
  );
};
