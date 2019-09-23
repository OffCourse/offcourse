import { useState, useEffect, useRef } from "react";
import { useThemeUI } from "theme-ui";

const useCanvas = ({ width, height, draw }: { width: number, height: number, draw: (options: any) => void }) => {
  const [counter, setCounter] = useState(0);
  const ref: any = useRef();
  const canvas = ref.current;
  const { theme } = useThemeUI();
  const { primary, secondary }: { primary: string, secondary: string } = theme.colors;
  useEffect(() => {
    if (canvas) {
      const options: any = {
        ctx: canvas.getContext("2d"),
        numberOfColumns: 10,
        primaryColor: primary,
        secondaryColor: secondary
      };
      draw(options);
      setInterval(() => {
        draw(options);
      }, 2000);
    } else {
      setCounter(counter + 1);
    }
  }, [canvas, width, height]);
  return ref;
}

export default useCanvas;
