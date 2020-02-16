import { useRef, useCallback, useEffect, useState } from 'react';

var useAnimationFrame = function (_a) {
    var callback = _a.callback, _b = _a.delay, delay = _b === void 0 ? 0 : _b;
    var requestRef = useRef(null);
    var previousTimeRef = useRef(null);
    var animate = useCallback(function (time) {
        if (previousTimeRef.current !== null) {
            var deltaTime = time - previousTimeRef.current;
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
    useEffect(function () {
        requestRef.current = requestAnimationFrame(animate);
        return function () { return cancelAnimationFrame(requestRef.current || 0); };
    }, [callback, animate]);
};

var useCanvas = function (_a) {
    var width = _a.width, height = _a.height;
    var canvasRef = useRef();
    var canvas = canvasRef.current;
    var _b = useState(false), ctx = _b[0], setCtx = _b[1];
    if (canvas && !ctx) {
        var context = canvas.getContext("2d");
        context.canvas.width = width;
        context.canvas.height = height;
        setCtx(context);
    }
    return [canvasRef, ctx];
};

var useInterval = function (callback, delay) {
    var savedCallback = useRef();
    useEffect(function () {
        savedCallback.current = callback;
    }, [callback]);
    useEffect(function () {
        function tick() {
            if (savedCallback.current) {
                savedCallback.current();
            }
        }
        if (delay !== null) {
            var id_1 = setInterval(tick, delay);
            return function () { return clearInterval(id_1); };
        }
        return;
    }, [delay]);
};

var useShowTab = function () {
    var _a = useState(true), isVisible = _a[0], setVisibility = _a[1];
    var handlePositionChange = function (_a) {
        var currentPosition = _a.currentPosition;
        setVisibility(currentPosition !== "inside" ? true : false);
    };
    return [isVisible, handlePositionChange];
};

export { useAnimationFrame, useCanvas, useInterval, useShowTab };
//# sourceMappingURL=index.es.js.map
