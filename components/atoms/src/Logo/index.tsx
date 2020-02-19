/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, Box } from "theme-ui";
import { wrapperStyles, spanStyles, textStyles } from "./styles";
import { IThemeable } from "@offcourse/interfaces/src";

type LogoProps = { children: string } & IThemeable;

const Logo: FunctionComponent<LogoProps> = ({ children, className }) => {
  const words = children.split(" ");
  return (
    <Box sx={wrapperStyles} className={className}>
      {words.map((word, index) => (
        <span sx={spanStyles} key={index}>
          <h1 sx={textStyles}>{word}</h1>
        </span>
      ))}
    </Box>
  );
};

export default Logo;
