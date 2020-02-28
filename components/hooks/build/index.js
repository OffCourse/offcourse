'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var react = require('react');
var react$1 = require('@xstate/react');
var xstate = require('xstate');

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
//# sourceMappingURL=useAnimationFrame.js.map

const toggleMachine = xstate.Machine({
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
    const [current, send] = react$1.useMachine(toggleMachine);
    const toggleMode = react.useCallback(() => send("TOGGLE"), [send]);
    return {
        appMode: current.value,
        siteMetaData: Object.assign(Object.assign({}, siteMetaData), { links }),
        toggleMenu: toggleMode
    };
};
//# sourceMappingURL=index.js.map

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
//# sourceMappingURL=useInterval.js.map

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
//# sourceMappingURL=useCycleItems.js.map

const useCanvas = ({ width, height, draw }) => {
    const canvasRef = react.useRef(null);
    react.useEffect(() => {
        const canvas = canvasRef.current;
        if (canvas) {
            const ctx = canvas.getContext("2d");
            if (ctx) {
                ctx.canvas.width = width;
                ctx.canvas.height = height;
                draw(ctx);
            }
        }
    }, [canvasRef, width, height, draw]);
    return canvasRef;
};
//# sourceMappingURL=useCanvas.js.map

const useAnimatedCanvas = ({ width, height, draw, callback }) => {
    const frameRef = react.useRef(0);
    const cb = react.useCallback(() => {
        const frame = (frameRef.current = frameRef.current + 1);
        callback(frame);
    }, [frameRef, callback]);
    useAnimationFrame({ callback: cb, delay: 100 });
    const ref = useCanvas({ width, height, draw });
    return ref;
};
//# sourceMappingURL=useAnimatedCanvas.js.map

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

const useAnimatedGridCanvas = ({ width, height, colors, shape, generateGrid }) => {
    const [grid, setGrid] = react.useState([]);
    const draw = react.useCallback((ctx) => {
        ctx.clearRect(0, 0, width, height);
        for (const { u, v, width: w, height: h, value } of grid) {
            const x = u * width;
            const y = v * height;
            shape({
                ctx,
                x,
                y,
                value,
                colors,
                width: Math.ceil(w * width),
                height: Math.ceil(h * height)
            });
        }
    }, [width, height, grid, colors, shape]);
    const callback = react.useCallback((frame) => __awaiter(void 0, void 0, void 0, function* () {
        const nextGrid = yield generateGrid(frame);
        setGrid(nextGrid);
    }), [generateGrid]);
    const ref = useAnimatedCanvas({ width, height, draw, callback });
    return ref;
};
//# sourceMappingURL=index.js.map

const useShowTab = () => {
    const [isVisible, setVisibility] = react.useState(true);
    const handlePositionChange = ({ currentPosition }) => {
        setVisibility(currentPosition !== "inside" ? true : false);
    };
    return [isVisible, handlePositionChange];
};
//# sourceMappingURL=useShowTab.js.map

exports.useAnimatedCanvas = useAnimatedCanvas;
exports.useAnimatedGridCanvas = useAnimatedGridCanvas;
exports.useAnimationFrame = useAnimationFrame;
exports.useAppState = useAppState;
exports.useCanvas = useCanvas;
exports.useCycleItems = useCycleItems;
exports.useInterval = useInterval;
exports.useShowTab = useShowTab;
//# sourceMappingURL=index.js.map
