/** @jsx jsx */
import { FunctionComponent } from "react";
import { IThemeable, HeaderData } from "@offcourse/interfaces/src";
declare type HeaderProps = HeaderData & IThemeable & {
    appMode: "menuOpen" | "default";
    toggleMenu: () => void;
    callToActionVisible?: boolean;
};
declare const HeaderSection: FunctionComponent<HeaderProps>;
export default HeaderSection;
