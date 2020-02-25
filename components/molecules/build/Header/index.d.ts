/** @jsx jsx */
import { FunctionComponent } from "react";
import { IThemeable, HeaderData } from "@offcourse/interfaces/src";
declare type HeaderProps = HeaderData & IThemeable & {
    mode: "menuOpen" | "default";
    toggleMenu: () => void;
};
declare const HeaderSection: FunctionComponent<HeaderProps>;
export default HeaderSection;
