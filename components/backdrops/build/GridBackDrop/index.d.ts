/** @jsx jsx */
import { FunctionComponent } from "react";
import { IThemeable, ICanvasProps, Shape } from "@offcourse/interfaces/src";
declare type BackdropProps = IThemeable & ICanvasProps & {
    unitSize: number;
    shape: Shape;
};
declare const Backdrop: FunctionComponent<BackdropProps>;
export default Backdrop;
