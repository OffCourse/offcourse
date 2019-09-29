import { useState, useEffect, useRef } from "react";
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

const useContext = ({ canvas, width, height }) => {
  const [ctx, setCtx] = useState(false)
  if (canvas && !ctx) {
    const context = canvas.getContext("2d");
    context.canvas.width = width;
    context.canvas.height = height;
    setCtx(context);
  }
  return ctx;
}

const updateCanvas = ({ ctx, primaryColor, secondaryColor, draw }) => {
  if (ctx && draw) {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    draw({
      ctx,
      primaryColor,
      secondaryColor
    });
  }
}

const useCanvas: (options: UseCanvasOptions) => any = ({ width, height, draw }) => {
  const ref: any = useRef();
  const canvas = ref.current;
  const ctx = useContext({ canvas, width, height })
  const { theme }: any = useThemeUI();
  const requestRef = useRef();
  const previousTimeRef = useRef();

  const callback = () => updateCanvas({
    ctx,
    primaryColor: theme.colors.primary,
    secondaryColor: theme.colors.grayScale[0],
    draw
  });

  const animate = time => {
    if (previousTimeRef.current != undefined) {
      const deltaTime = time - previousTimeRef.current;
      callback(deltaTime)
    }
    previousTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animate);
  }

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, [ctx, draw]);

  return ref;
}

export default useCanvas;
