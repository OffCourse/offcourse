'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var react = require('react');

const useAnimationFrame = ({ callback, delay = 0 }) => {
    const requestRef = react.useRef(null);
    const previousTimeRef = react.useRef(null);
    const animate = react.useCallback(time => {
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
    react.useEffect(() => {
        requestRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(requestRef.current || 0);
    }, [callback, animate]);
};

const useInterval = (callback, delay) => {
    const savedCallback = react.useRef();
    react.useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);
    react.useEffect(() => {
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

const useCycleItems = ({ items, visibleItems, delay = 2000 }) => {
    const [index, setIndex] = react.useState(0);
    const goUp = (itemIndex) => setIndex(itemIndex + 1);
    const goDown = (itemIndex) => setIndex(itemIndex - 1);
    const [direction, setDirection] = react.useState("UP");
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

const useCanvas = ({ width, height }) => {
    const canvasRef = react.useRef();
    const canvas = canvasRef.current;
    const [ctx, setCtx] = react.useState(false);
    if (canvas && !ctx) {
        const context = canvas.getContext("2d");
        context.canvas.width = width;
        context.canvas.height = height;
        setCtx(context);
    }
    return [canvasRef, ctx];
};

const useShowTab = () => {
    const [isVisible, setVisibility] = react.useState(true);
    const handlePositionChange = ({ currentPosition }) => {
        setVisibility(currentPosition !== "inside" ? true : false);
    };
    return [isVisible, handlePositionChange];
};

exports.useAnimationFrame = useAnimationFrame;
exports.useCanvas = useCanvas;
exports.useCycleItems = useCycleItems;
exports.useInterval = useInterval;
exports.useShowTab = useShowTab;
//# sourceMappingURL=index.js.map
