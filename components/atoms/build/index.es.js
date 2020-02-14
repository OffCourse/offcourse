import { jsx } from 'theme-ui';

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
    return (jsx("div", { sx: wrapperStyles, className: className }, words.map(function (word, index) { return (jsx("span", { sx: spanStyles, key: index },
        jsx("h1", { sx: textStyles }, word))); })));
};

var wrapperStyles$1 = {
    userSelect: "none",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "flex-start"
};
var scale$1 = [0.5, 0.6, 0.7, 0.8];
var spacing$1 = scale$1.map(function (size) { return size + "rem"; });
var fontSize$1 = scale$1.map(function (size) { return size * 5 + "rem"; });
var lineHeight$1 = scale$1.map(function (size) { return size * 6 + "rem"; });
var spanStyles$1 = {
    userSelect: "none",
    px: 0,
    m: 0,
    mr: spacing$1,
    "&:last-type": {
        mb: 0,
        mr: 0
    }
};
var textStyles$1 = {
    fontFamily: "monospace",
    display: "inline-block",
    fontSize: fontSize$1,
    lineHeight: lineHeight$1,
    wordSpacing: "-0.2em",
    mt: 0,
    ml: 0,
    px: spacing$1,
    mb: spacing$1,
    color: "grayScale.0",
    bg: "grayScale.4",
    "&:last-type": {
        mb: 0,
        mr: 0
    },
    "@media(max-width: 20rem)": {
        transformOrigin: "top left",
        transform: ["scale(0.95)", "none"]
    }
};

var DisplayText = function (_a) {
    var children = _a.children, className = _a.className;
    return (jsx("div", { sx: wrapperStyles$1, className: className }, children.split(" ").map(function (word, index) { return (jsx("span", { sx: spanStyles$1, key: index },
        jsx("h1", { sx: textStyles$1 }, word))); })));
};

export { DisplayText, Logo };
//# sourceMappingURL=index.es.js.map
