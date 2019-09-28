import { useState, useRef } from "react";
import { useThemeUI } from "theme-ui";
import useInterval from "@offcourse/homepage-theme/src/hooks/useInterval";

interface ICanvasDrawOptions {
  ctx: any;
  primaryColor: string;
  secondaryColor: string;
}

type UseCanvasOptions = {
  width: number;
  height: number;
  draw: (options: ICanvasDrawOptions) => void
}

const useCanvas: (options: UseCanvasOptions) => any = ({ width, height, draw }) => {
  const [counter, setCounter] = useState(0);
  const [ctx, setCtx] = useState(null)
  const ref: any = useRef();
  const canvas = ref.current;
  const { theme } = useThemeUI();
  const { primary, grayScale } = theme.colors;
  useInterval(() => {
    if (canvas) {
      if (ctx !== null) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        draw({
          ctx,
          primaryColor: primary,
          secondaryColor: grayScale[0]
        });
      } else {
        const context = canvas.getContext("2d");
        context.canvas.width = width;
        context.canvas.height = height;
        setCtx(context);
      }
    } else {
      setCounter(counter + 1);
    }
  }, 2000);
  return ref;
}

export default useCanvas;
