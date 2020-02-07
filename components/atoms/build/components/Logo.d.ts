/** @jsx jsx */
import { FunctionComponent } from "react";
import { SxStyleProp } from "theme-ui";
import { IThemeable } from "@offcourse/interfaces/src";
export declare const wrapperStyles: SxStyleProp;
declare type LogoProps = {
    children: string;
} & IThemeable;
declare const Logo: FunctionComponent<LogoProps>;
export default Logo;
