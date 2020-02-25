/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, Box } from "theme-ui";
import { wrapperStyles, spanStyles, textStyles } from "./styles";
import { IThemeable, Heading } from "@offcourse/interfaces/src";

type DisplayTextProps = Heading & IThemeable;

const DisplayText: FunctionComponent<DisplayTextProps> = ({
  children,
  className
}) => {
  return (
    <Box sx={wrapperStyles} className={className}>
      {children.split(" ").map((word, index) => (
        <span sx={spanStyles} key={index}>
          <h1 sx={textStyles}>{word}</h1>
        </span>
      ))}
    </Box>
  );
};

export default DisplayText;
