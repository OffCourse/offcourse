/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx } from "theme-ui";
import { wrapperStyles, spanStyles, textStyles } from "./styles";
import { IThemeable } from "@offcourse/interfaces/src";

type DisplayTextProps = {
  children: string;
} & IThemeable;

const DisplayText: FunctionComponent<DisplayTextProps> = ({
  children,
  className
}) => {
  return (
    <div sx={wrapperStyles} className={className}>
      {children.split(" ").map((word, index) => (
        <span sx={spanStyles} key={index}>
          <h1 sx={textStyles}>{word}</h1>
        </span>
      ))}
    </div>
  );
};

export default DisplayText;
