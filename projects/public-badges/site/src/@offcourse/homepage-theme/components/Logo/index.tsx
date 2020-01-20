/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx } from "theme-ui";
import { IThemeable } from "@offcourse/interfaces/src";
import { wrapperStyles,  } from "./styles";
// @ts-ignore
import Mascot from "./public-badge.inline.svg";

type LogoProps = { children: string } & IThemeable;

const Logo: FunctionComponent<LogoProps> = ({ className }) => {
  return (
    <div sx={wrapperStyles} className={className}>
      <div sx={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
        <Mascot sx={{width: "10rem", ml: 4}}/>
      </div>
    </div>
  );
};

export default Logo;
