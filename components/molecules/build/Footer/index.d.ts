/** @jsx jsx */
import { FunctionComponent } from "react";
import { IThemeable } from "@offcourse/interfaces/src";
import { FooterData } from "@offcourse/interfaces/src/pages";
declare type FooterProps = FooterData & IThemeable;
declare const Footer: FunctionComponent<FooterProps>;
export default Footer;
