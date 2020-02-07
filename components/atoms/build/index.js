'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var themeUi = require('theme-ui');

var wrapperStyles = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignContent: "flex-end",
    textAlign: "right",
    userSelect: "none"
};
var scale = [0.4, 0.4, 0.5, 0.5];
var spacing = scale.map(function (size) { return size + "rem"; });
var fontSize = scale.map(function (size) { return size * 5 + "rem"; });
var lineHeight = scale.map(function (size) { return size * 6 + "rem"; });
var spanStyles = {
    userSelect: "none",
    px: 0,
    m: 0,
    mb: spacing,
    "&:last-of-type": {
        mb: 0
    }
};
var textStyles = {
    fontFamily: "monospace",
    display: "inline-block",
    fontSize: fontSize,
    lineHeight: lineHeight,
    wordSpacing: "-0.2em",
    m: 0,
    px: spacing,
    mb: 0,
    color: "grayScale.0",
    bg: "grayScale.4",
    "&:last-type": {
        mb: 0,
        mr: 0
    }
};

var Logo = function (_a) {
    var children = _a.children, className = _a.className;
    var words = children.split(" ");
    return (themeUi.jsx("div", { sx: wrapperStyles, className: className }, words.map(function (word, index) { return (themeUi.jsx("span", { sx: spanStyles, key: index },
        themeUi.jsx("h1", { sx: textStyles }, word))); })));
};

exports.Logo = Logo;
//# sourceMappingURL=index.js.map
