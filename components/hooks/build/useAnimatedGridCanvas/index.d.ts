import { RefObject } from "react";
import { IDimensions, Shape } from "@offcourse/interfaces/src";
declare type CanvasProps = IDimensions & {
    shape: Shape;
    colors: string[];
    unitSize: number;
};
declare const useAnimatedGridCanvas: (args: CanvasProps) => RefObject<HTMLCanvasElement>;
export default useAnimatedGridCanvas;
