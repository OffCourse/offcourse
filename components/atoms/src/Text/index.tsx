/** @jsx jsx */

import { FunctionComponent } from "react";
import { jsx, Box } from "theme-ui";
import { IThemeable, Text } from "@offcourse/interfaces/src";
import { wrapperStyles } from "./styles";

type TextProps = Text & IThemeable;

const Text: FunctionComponent<TextProps> = ({ className, children, html }) => {
  const styleProps = { className, sx: wrapperStyles };

  if (html) {
    return <Box dangerouslySetInnerHTML={{ __html: html }} {...styleProps} />;
  }

  if (!children) {
    return null;
  }

  if (children instanceof Array) {
    return (
      <Box {...styleProps}>
        {Array.prototype.map.call(children, (child: string, index: number) => (
          <p key={index}>{child}</p>
        ))}
      </Box>
    );
  }

  return (
    <Box {...styleProps}>
      <p>{children}</p>
    </Box>
  );
};

export default Text;
