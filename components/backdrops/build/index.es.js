import { useThemeUI, jsx } from 'theme-ui';
import { Backdrop as Backdrop$1 } from '@offcourse/atoms';
import { min } from 'd3-array';
import { useAnimatedGridCanvas } from '@offcourse/hooks';

var wrapperStyles = {
    position: "absolute",
    bg: "primary",
    zIndex: -1,
    top: 0,
    left: 0
};
//# sourceMappingURL=styles.js.map

var circle = function (_a) {
    var ctx = _a.ctx, x = _a.x, y = _a.y, value = _a.value, colors = _a.colors, width = _a.width, height = _a.height;
    var offset = min([width, height]) / 2;
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
    var theme = useThemeUI().theme;
    var _f = theme.colors, primary = _f.primary, grayScale = _f.grayScale;
    var canvasRef = useAnimatedGridCanvas({
        width: width,
        height: height,
        unitSize: unitSize,
        colors: [primary, grayScale[0]],
        shape: shape
    });
    return (jsx(Backdrop$1, { sx: wrapperStyles, ref: canvasRef, className: className, width: width, height: height }));
};

export { Backdrop as GridBackDrop };
//# sourceMappingURL=index.es.js.map
