/** @jsx jsx */
import { FunctionComponent } from "react";
import { IThemeable, Heading } from "@offcourse/interfaces/src";
declare type HeadingProps = (Heading | {
    children: any[];
}) & IThemeable;
declare const Heading: FunctionComponent<HeadingProps>;
export default Heading;
