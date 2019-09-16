/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx } from "theme-ui";
import { IThemeable } from "@offcourse/interfaces";
import { wrapperStyles } from "./styles";

type TextProps = {
  children?: string | any[];
  html?: string;
} & IThemeable;

const Text: FunctionComponent<TextProps> = ({ className, children, html }) => {
  const styleProps = { className, sx: wrapperStyles };

  if (html) {
    return <div dangerouslySetInnerHTML={{ __html: html }} {...styleProps} />;
  }

  if (!children) {
    return null;
  }

  if (children instanceof Array) {
    return (
      <div {...styleProps}>
        {Array.prototype.map.call(children, (child, index) => (
          <p key={index}>{child}</p>
        ))}
      </div>
    );
  }

  return (
    <div {...styleProps}>
      <p>{children}</p>
    </div>
  );
};

export default Text;
