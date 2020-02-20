/** @jsx jsx */
import { FunctionComponent } from "react";
import { IFooterSection } from "@offcourse/interfaces/src/pageSection";
import { IThemeable } from "@offcourse/interfaces/src";
declare type FooterProps = IFooterSection & IThemeable;
declare const FooterSection: FunctionComponent<FooterProps>;
export default FooterSection;
