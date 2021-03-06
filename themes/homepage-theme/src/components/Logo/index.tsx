/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx } from "theme-ui";
import { IThemeable } from "@offcourse/interfaces";
import { wrapperStyles, textStyles } from "./styles";
import { formatTitle } from "../helpers";

type LogoProps = { children: string } & IThemeable;

const Logo: FunctionComponent<LogoProps> = ({ children, className }) => {
  const words = formatTitle(children).split(" ");
  return (
    <div sx={wrapperStyles} className={className}>
      {words.map((word, index) => (
        <h1 sx={textStyles} key={index}>
          {word}
        </h1>
      ))}
    </div>
  );
};

export default Logo;
