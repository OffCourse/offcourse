/** @jsx jsx */
import { FunctionComponent } from "react";
import { IThemeable } from "@offcourse/interfaces/src";
declare type HeadingProps = {
    children: string;
} & IThemeable;
declare const Heading: FunctionComponent<HeadingProps>;
export default Heading;
