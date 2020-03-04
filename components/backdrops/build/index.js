'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var themeUi = require('theme-ui');
var atoms = require('@offcourse/atoms');
var d3Array = require('d3-array');
var hooks = require('@offcourse/hooks');

var wrapperStyles = {
    position: "absolute",
    bg: "primary",
    zIndex: -1,
    top: 0,
    left: 0
};

var circle = function (_a) {
    var ctx = _a.ctx, x = _a.x, y = _a.y, value = _a.value, colors = _a.colors, width = _a.width, height = _a.height;
    var offset = d3Array.min([width, height]) / 2;
    var radius = offset / 1.5;
    var length = radius * value;
    ctx.lineWidth = 0;
    ctx.beginPath();
    ctx.arc(x + offset, y + offset, length, 0, 2 * Math.PI, false);
    ctx.fillStyle = colors[1];
    ctx.fill();
};
//# sourceMappingURL=shapes.js.map

var Backdrop = function (_a) {
    var className = _a.className, _b = _a.width, width = _b === void 0 ? 100 : _b, _c = _a.height, height = _c === void 0 ? 100 : _c, _d = _a.shape, shape = _d === void 0 ? circle : _d, _e = _a.unitSize, unitSize = _e === void 0 ? 20 : _e;
    var theme = themeUi.useThemeUI().theme;
    var _f = theme.colors, primary = _f.primary, grayScale = _f.grayScale;
    var canvasRef = hooks.useAnimatedGridCanvas({
        width: width,
        height: height,
        unitSize: unitSize,
        colors: [primary, grayScale[0]],
        shape: shape
    });
    return themeUi.jsx(atoms.Backdrop, { sx: wrapperStyles, ref: canvasRef, className: className });
};

exports.GridBackDrop = Backdrop;
//# sourceMappingURL=index.js.map
