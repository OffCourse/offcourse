/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx } from "theme-ui";
import { IThemeable } from "@offcourse/interfaces/src";
import { wrapperStyles, textStyles, spanStyles } from "./styles";
import { formatTitle } from "@offcourse/homepage-theme/src/components/helpers";

type LogoProps = { children: string } & IThemeable;

const Logo: FunctionComponent<LogoProps> = ({ children, className }) => {
  const words = formatTitle(children).split(" ");
  return (
    <div sx={wrapperStyles} className={className}>
      {words.map((word, index) => (
        <span sx={spanStyles} key={index}>
          <h1 sx={textStyles}>{word}</h1>
        </span>
      ))}
    </div>
  );
};

export default Logo;
