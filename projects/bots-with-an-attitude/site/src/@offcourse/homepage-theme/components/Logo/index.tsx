/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx } from "theme-ui";
import { IThemeable } from "@offcourse/interfaces/src";
import { wrapperStyles, textStyles } from "./styles";
// @ts-ignore
import Mascot from "./bots_with_an_attitude.inline.svg";
import { formatTitle } from "@offcourse/homepage-theme/src/components/helpers";

type LogoProps = { children: string } & IThemeable;

const Logo: FunctionComponent<LogoProps> = ({ children, className }) => {
  return (
    <div sx={wrapperStyles} className={className}>
      <div sx={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
        <Mascot sx={{width: "10rem", ml: 4}}/>
      </div>
    </div>
  );
};

export default Logo;
