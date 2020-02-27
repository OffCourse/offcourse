declare type useCanvas = (args: {
    width: number;
    height: number;
    draw: (args: CanvasRenderingContext2D) => void;
}) => void;
declare const useCanvas: useCanvas;
export default useCanvas;
