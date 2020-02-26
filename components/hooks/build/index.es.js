import { useRef, useCallback, useEffect, useState } from 'react';
import { useMachine } from '@xstate/react';
import { Machine } from 'xstate';

const useAnimationFrame = ({ callback, delay = 0 }) => {
    const requestRef = useRef(null);
    const previousTimeRef = useRef(null);
    const animate = useCallback(time => {
        if (previousTimeRef.current !== null) {
            const deltaTime = time - previousTimeRef.current;
            if (deltaTime > delay) {
                callback(deltaTime);
                previousTimeRef.current = time;
            }
        }
        else {
            previousTimeRef.current = time;
        }
        requestRef.current = requestAnimationFrame(animate);
    }, [delay, callback]);
    useEffect(() => {
        requestRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(requestRef.current || 0);
    }, [callback, animate]);
};
//# sourceMappingURL=useAnimationFrame.js.map

const toggleMachine = Machine({
    id: "toggle",
    initial: "default",
    states: {
        default: {
            on: { TOGGLE: "menuOpen" }
        },
        menuOpen: {
            on: { TOGGLE: "default" }
        }
    }
});
//# sourceMappingURL=machine.js.map

const useAppState = ({ siteMetaData, path }) => {
    const { links: allLinks } = siteMetaData;
    const links = allLinks.filter(({ href }) => href !== path);
    const [current, send] = useMachine(toggleMachine);
    const toggleMode = useCallback(() => send("TOGGLE"), [send]);
    return [current, Object.assign(Object.assign({}, siteMetaData), { links }), toggleMode];
};
//# sourceMappingURL=index.js.map

const useInterval = (callback, delay) => {
    const savedCallback = useRef();
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);
    useEffect(() => {
        function tick() {
            if (savedCallback.current) {
                savedCallback.current();
            }
        }
        if (delay !== null) {
            const id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
        return;
    }, [delay]);
};
//# sourceMappingURL=useInterval.js.map

const useCycleItems = ({ items, visibleItems, delay = 2000 }) => {
    const [index, setIndex] = useState(0);
    const goUp = (itemIndex) => setIndex(itemIndex + 1);
    const goDown = (itemIndex) => setIndex(itemIndex - 1);
    const [direction, setDirection] = useState("UP");
    const orderedProjects = [...items].map((item, itemIndex) => (Object.assign(Object.assign({}, item), { index: itemIndex })));
    useInterval(() => {
        let next = null;
        if (direction === "UP") {
            next = goUp;
            const reachedBeginning = index >= orderedProjects.length - (visibleItems + 1);
            if (reachedBeginning) {
                setDirection("DOWN");
            }
        }
        else {
            next = goDown;
            const reachedEnd = index <= 1;
            if (reachedEnd) {
                setDirection("UP");
            }
        }
        next(index);
    }, delay);
    return [index, orderedProjects];
};
//# sourceMappingURL=useCycleItems.js.map

const useCanvas = ({ width, height }) => {
    const canvasRef = useRef();
    const canvas = canvasRef.current;
    const [ctx, setCtx] = useState(false);
    if (canvas && !ctx) {
        const context = canvas.getContext("2d");
        context.canvas.width = width;
        context.canvas.height = height;
        setCtx(context);
    }
    return [canvasRef, ctx];
};

const useShowTab = () => {
    const [isVisible, setVisibility] = useState(true);
    const handlePositionChange = ({ currentPosition }) => {
        setVisibility(currentPosition !== "inside" ? true : false);
    };
    return [isVisible, handlePositionChange];
};
//# sourceMappingURL=useShowTab.js.map

export { useAnimationFrame, useAppState, useCanvas, useCycleItems, useInterval, useShowTab };
//# sourceMappingURL=index.es.js.map
