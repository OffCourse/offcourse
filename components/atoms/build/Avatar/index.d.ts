/** @jsx jsx */
import { FunctionComponent } from "react";
import { IThemeable } from "@offcourse/interfaces/src";
declare type LogoProps = {
    onClick: () => void;
} & IThemeable;
declare const Logo: FunctionComponent<LogoProps>;
export default Logo;
