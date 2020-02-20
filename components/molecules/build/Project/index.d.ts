/** @jsx jsx */
import { FunctionComponent } from "react";
import { IThemeable } from "@offcourse/interfaces/src";
import { IProject } from "@offcourse/interfaces/src/pageSection";
declare type ProjectProps = IProject & IThemeable & {
    index: number;
};
declare const Project: FunctionComponent<ProjectProps>;
export default Project;
