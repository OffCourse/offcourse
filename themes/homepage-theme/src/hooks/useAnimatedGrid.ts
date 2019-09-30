import { useRef } from "react";
import SimplexNoise from "simplex-noise";
import useCanvas from "@offcourse/homepage-theme/src/hooks/useCanvas";
import useGrid from "@offcourse/homepage-theme/src/hooks/useGrid";
import useAnimationFrame from "@offcourse/homepage-theme/src/hooks/useAnimationFrame";
import useShape from "@offcourse/homepage-theme/src/hooks/useShape";
import { ICanvasProps } from "@offcourse/interfaces/src/canvas";

const simplex = new SimplexNoise();

const useAnimatedGrid: (args: ICanvasProps & { shapeName: string }) => any = ({
  delay = 100,
  width,
  height,
  shapeName,
  colors,
}) => {
  const { grid, unitSize } = useGrid({ width, height });
  const shape = useShape(shapeName);
  const [ref, ctx] = useCanvas({ width, height });
  const frameRef = useRef(0);
  const callback = (interval: number) => {

    if (!ctx || !shape) {
      return null;
    }

    const frame = frameRef.current = frameRef.current + 1;
    ctx.clearRect(0, 0, width, height);

    for (const [u, v] of grid) {
      const x = u * unitSize;
      const y = v * unitSize;
      const value = simplex.noise3D(x, y, frame / 16);
      shape({
        ctx,
        interval,
        frame,
        x,
        y,
        value,
        colors,
        width: unitSize,
        height: unitSize
      });
    }
  };

  useAnimationFrame({ callback, delay });
  return ref;

}

export default useAnimatedGrid;
