/** @jsx jsx */
import { FunctionComponent } from "react";
import { IThemeable, Link } from "@offcourse/interfaces/src";
declare type MenuProps = {
    links: Link[];
} & IThemeable;
declare const Menu: FunctionComponent<MenuProps>;
export default Menu;
