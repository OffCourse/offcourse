/** @jsx jsx */
import { FunctionComponent } from "react";
import { IThemeable, IProject, IIndexable } from "@offcourse/interfaces/src";
declare type ProjectProps = IProject & IThemeable & IIndexable;
declare const Project: FunctionComponent<ProjectProps>;
export default Project;
