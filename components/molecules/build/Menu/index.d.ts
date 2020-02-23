/** @jsx jsx */
import { FunctionComponent } from "react";
import { IThemeable, ILink } from "@offcourse/interfaces/src";
declare type MenuProps = {
    links: ILink[];
} & IThemeable;
declare const MenuSection: FunctionComponent<MenuProps>;
export default MenuSection;
