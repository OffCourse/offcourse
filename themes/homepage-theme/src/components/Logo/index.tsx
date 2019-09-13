/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx } from "theme-ui";
import { IThemeable } from "@offcourse/interfaces";
import { wrapperStyles, textStyles } from "./styles";

type LogoProps = { children: string } & IThemeable;

const Logo: FunctionComponent<LogoProps> = ({ children, className }) => {
  const words = children.split(" ");
  return (
    <div sx={wrapperStyles} className={className}>
      {words.map(word => (
        <h1 sx={textStyles}>{word}</h1>
      ))}
    </div>
  );
};

export default Logo;
