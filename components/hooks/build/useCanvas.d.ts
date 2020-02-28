import { RefObject } from "react";
declare type useCanvas = (args: {
    width: number;
    height: number;
    draw: (args: CanvasRenderingContext2D) => void;
}) => RefObject<HTMLCanvasElement>;
declare const useCanvas: useCanvas;
export default useCanvas;
