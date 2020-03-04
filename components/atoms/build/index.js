'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var themeUi = require('theme-ui');
var react = require('react');
var voca = require('voca');
var ramda = require('ramda');
var formik = require('formik');

var avatarStyles = {
    userSelect: "none",
    fontFamily: "monospace",
    display: "block",
    width: ["2.5rem", "3rem"],
    height: ["2.5rem", "3rem"],
    bg: "black",
    textAlign: "center",
    m: 0,
    boxShadow: "0px 0px 0.5rem rgba(255, 255, 255, 0.6)",
    color: "white",
    lineHeight: ["2.5rem", "3rem"],
    fontSize: ["2.1rem", "2.5rem"]
};

var Avatar = function (_a) {
    var className = _a.className, onClick = _a.onClick;
    return (themeUi.jsx(themeUi.Heading, { onClick: onClick, sx: avatarStyles, className: className }, "_"));
};

/** @jsx jsx */
var Backdrop = react.forwardRef(function (_a, ref) {
    var className = _a.className, _b = _a.width, width = _b === void 0 ? 100 : _b, _c = _a.height, height = _c === void 0 ? 100 : _c;
    return (themeUi.jsx("canvas", { ref: ref, className: className, width: width, height: height }));
});

var titleize = function (str) {
    return voca.titleCase(str, ["'", "-", "’"]);
};
var formatTitle = ramda.compose(voca.trimLeft, titleize, voca.lowerCase);
var formatValue = function (value, isNormalized) {
    if (!value) {
        return value;
    }
    return isNormalized ? formatTitle(value) : value;
};

var styles = {
    display: "flex",
    boxSizing: "border-box",
    userSelect: "none",
    textDecoration: "inherit",
    alignItems: "center",
    height: "2.813rem",
    justifyContent: "center",
    backgroundColor: "primary",
    color: "negative",
    border: 0,
    borderBottom: "0.125rem solid",
    borderColor: "grayScale.4",
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 4,
    paddingRight: 4,
    fontFamily: "heading",
    fontWeight: "bold",
    fontSize: 1,
    lineHeight: 2,
    width: "100%",
    ":focus": {
        outline: "none"
    },
    "&:hover": {
        backgroundColor: "secondary"
    },
    "&:disabled, &:hover:disabled": {
        cursor: "default",
        backgroundColor: "grayScale.2",
        color: "grayScale.1",
        borderColor: "grayScale.1"
    }
};

var Button = function (_a) {
    var type = _a.type, children = _a.children, className = _a.className, disabled = _a.disabled;
    return (themeUi.jsx("button", { sx: styles, disabled: disabled, className: className, type: type }, formatTitle(children)));
};

var checkboxStyles = {
    WebkitAppearance: "none",
    MozAppearance: "none",
    appearance: "none",
    bg: "grayScale.1",
    margin: 0,
    height: "1.5rem",
    width: "1.5rem",
    cursor: "pointer",
    outline: "none",
    ":checked": {
        backgroundColor: "primary"
    }
};
var wrapperStyles = {
    display: "grid",
    gridGap: "0.75rem",
    gridTemplateColumns: "1.5rem 1fr",
    alignItems: "center"
};
var labelStyles = {
    fontFamily: "body"
};

var labelStyles$1 = {
    fontFamily: "heading",
    fontSize: 1,
    lineHeight: 1,
    pt: 0,
    userSelect: "none"
};

var Label = function (_a) {
    var className = _a.className, children = _a.children, htmlFor = _a.htmlFor;
    return (themeUi.jsx("label", { className: className, htmlFor: htmlFor, sx: labelStyles$1 }, formatTitle(children)));
};

var Checkbox = function (_a) {
    var label = _a.label, className = _a.className, id = _a.id, name = _a.name, value = _a.value;
    return (themeUi.jsx(themeUi.Box, { sx: wrapperStyles },
        themeUi.jsx(formik.Field, { sx: checkboxStyles, className: className, id: id, type: "radio", name: name, value: value }),
        themeUi.jsx(Label, { sx: labelStyles, htmlFor: id }, label)));
};

var wrapperStyles$1 = {
    userSelect: "none",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "flex-start"
};
var scale = [0.5, 0.6, 0.7, 0.8];
var spacing = scale.map(function (size) { return size + "rem"; });
var fontSize = scale.map(function (size) { return size * 5 + "rem"; });
var lineHeight = scale.map(function (size) { return size * 6 + "rem"; });
var spanStyles = {
    userSelect: "none",
    px: 0,
    m: 0,
    mr: spacing,
    "&:last-type": {
        mb: 0,
        mr: 0
    }
};
var textStyles = {
    fontFamily: "monospace",
    display: "inline-block",
    fontSize: fontSize,
    lineHeight: lineHeight,
    wordSpacing: "-0.2em",
    mt: 0,
    ml: 0,
    px: spacing,
    mb: spacing,
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
    return (themeUi.jsx(themeUi.Box, { sx: wrapperStyles$1, className: className }, children.split(" ").map(function (word, index) { return (themeUi.jsx("span", { sx: spanStyles, key: index },
        themeUi.jsx("h1", { sx: textStyles }, word))); })));
};

var Heading = function (_a) {
    var children = _a.children, className = _a.className, as = _a.as;
    if (children instanceof Array) {
        return (themeUi.jsx(themeUi.Heading, { as: as, className: className },
            children[0],
            formatTitle(children[1])));
    }
    return (themeUi.jsx(themeUi.Heading, { as: as, className: className }, formatTitle(children)));
};

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

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var wrapperStyles$2 = {
    display: "flex",
    flex: 1,
    alignItems: "center",
    py: 2,
    px: 0,
    m: 0,
    boxSizing: "border-box",
    gridTemplateAreas: "input",
    bg: "grayScale.1"
};
var inputStyles = {
    width: "100%",
    py: 0,
    px: 4,
    bg: "grayScale.1",
    m: 0,
    justifyContent: "center",
    alignContent: "center",
    border: 0,
    fontFamily: "heading",
    fontSize: 2,
    lineHeight: 2,
    boxSizing: "border-box",
    color: "grayScale.4",
    "::placeholder": {
        color: "grayScale.2",
        userSelect: "none"
    },
    ":selection": {
        bg: "primary"
    },
    "&:focus": {
        outline: "none"
    }
};

var Input = function (_a) {
    var className = _a.className, placeholder = _a.placeholder, name = _a.name, _b = _a.value, value = _b === void 0 ? "" : _b, onChange = _a.onChange, onBlur = _a.onBlur, _c = _a.type, type = _c === void 0 ? "text" : _c, _d = _a.autoComplete, autoComplete = _d === void 0 ? false : _d, _e = _a.autoFocus, autoFocus = _e === void 0 ? false : _e, _f = _a.disabled, disabled = _f === void 0 ? false : _f, _g = _a.required, required = _g === void 0 ? false : _g, _h = _a.isNormalized, isNormalized = _h === void 0 ? true : _h;
    var handleChange = function (e) {
        if (!onChange) {
            return;
        }
        if (!isNormalized) {
            return onChange(e);
        }
        var fieldValue = voca.lowerCase(e.target.value);
        e.target.value = fieldValue;
        return onChange(e);
    };
    var baseProps = {
        name: name,
        type: type,
        autoComplete: "" + autoComplete,
        autoFocus: autoFocus,
        disabled: disabled,
        value: formatValue(value, isNormalized),
        placeholder: placeholder
            ? formatTitle(placeholder)
            : formatTitle("enter your " + name),
        onChange: handleChange,
        required: required,
        onBlur: onBlur
    };
    return (themeUi.jsx(themeUi.Box, { className: className, sx: wrapperStyles$2 },
        themeUi.jsx("input", __assign({ sx: inputStyles }, baseProps))));
};

var wrapperStyles$3 = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignContent: "flex-end",
    textAlign: "right",
    userSelect: "none"
};
var scale$1 = [0.4, 0.4, 0.5, 0.5];
var spacing$1 = scale$1.map(function (size) { return size + "rem"; });
var fontSize$1 = scale$1.map(function (size) { return size * 5 + "rem"; });
var lineHeight$1 = scale$1.map(function (size) { return size * 6 + "rem"; });
var spanStyles$1 = {
    userSelect: "none",
    px: 0,
    m: 0,
    mb: spacing$1,
    "&:last-of-type": {
        mb: 0
    }
};
var textStyles$1 = {
    fontFamily: "monospace",
    display: "inline-block",
    fontSize: fontSize$1,
    lineHeight: lineHeight$1,
    wordSpacing: "-0.2em",
    m: 0,
    px: spacing$1,
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
    return (themeUi.jsx(themeUi.Box, { sx: wrapperStyles$3, className: className }, words.map(function (word, index) { return (themeUi.jsx("span", { sx: spanStyles$1, key: index },
        themeUi.jsx("h1", { sx: textStyles$1 }, word))); })));
};

var messageStyles = {
    fontFamily: "heading",
    boxSizing: "border-box",
    display: "flex",
    flex: 1,
    color: "error",
    pt: 2,
    px: 4,
    pb: 2
};
var basicMessageStyles = __assign(__assign({}, messageStyles), { pt: 0 });

var Message = function (_a) {
    var children = _a.children, isBasic = _a.isBasic, className = _a.className;
    return (themeUi.jsx(themeUi.Box, { className: className, sx: isBasic ? basicMessageStyles : messageStyles }, formatTitle(children)));
};

var wrapperStyles$4 = {
    display: "flex",
    userSelect: "none",
    boxShadow: "0px 3px 15px rgba(0, 0, 0, 0.2)",
    px: [4],
    height: ["2.5rem", "3rem"],
    alignItems: "center",
    bg: "white",
    "&:hover": {
        bg: "grayScale.4",
        a: {
            color: "grayScale.1",
            borderColor: "grayScale.1"
        }
    }
};
var linkStyles = {
    color: "negative",
    lineHeight: [2, 3],
    fontSize: [2, 3],
    bg: "transparent",
    textAlign: "inherit",
    p: 0,
    wordSpacing: "-0.2em",
    userSelect: "none",
    textDecoration: "none",
    fontFamily: "monospace",
    fontWeight: "bold",
    ":focus": {
        outline: "none"
    }
};

var Tab = function (_a) {
    var className = _a.className, children = _a.children, href = _a.href;
    return (themeUi.jsx(themeUi.Box, { sx: wrapperStyles$4, className: className },
        themeUi.jsx("a", { sx: linkStyles, href: href }, formatTitle(children))));
};

var wrapperStyles$5 = {
    fontFamily: "body",
    fontSize: 2,
    lineHeight: 3,
    p: {
        m: 0,
        mb: 3,
        a: {
            textDecoration: "none"
        }
    }
};

/** @jsx jsx */
var Text = function (_a) {
    var className = _a.className, children = _a.children, html = _a.html;
    var styleProps = { className: className, sx: wrapperStyles$5 };
    if (html) {
        return themeUi.jsx(themeUi.Box, __assign({ dangerouslySetInnerHTML: { __html: html } }, styleProps));
    }
    if (!children) {
        return null;
    }
    if (children instanceof Array) {
        return (themeUi.jsx(themeUi.Box, __assign({}, styleProps), Array.prototype.map.call(children, function (child, index) { return (themeUi.jsx("p", { key: index }, child)); })));
    }
    return (themeUi.jsx(themeUi.Box, __assign({}, styleProps),
        themeUi.jsx("p", null, children)));
};

var wrapperStyles$6 = __assign({}, wrapperStyles$2);
var textAreaStyles = __assign(__assign({}, inputStyles), { fontFamily: "body", fontSize: 1, lineHeight: 1 });

var TextArea = function (_a) {
    var className = _a.className, _b = _a.placeholder, placeholder = _b === void 0 ? "Enter Something" : _b, name = _a.name, _c = _a.value, value = _c === void 0 ? "" : _c, onChange = _a.onChange, onBlur = _a.onBlur, _d = _a.rows, rows = _d === void 0 ? 4 : _d, _e = _a.autoFocus, autoFocus = _e === void 0 ? false : _e, _f = _a.disabled, disabled = _f === void 0 ? false : _f;
    return (themeUi.jsx("div", { sx: wrapperStyles$6 },
        themeUi.jsx("textarea", { className: className, sx: textAreaStyles, autoFocus: autoFocus, rows: rows, name: name, disabled: disabled, value: value, placeholder: formatTitle(placeholder), onChange: onChange, onBlur: onBlur })));
};

exports.Avatar = Avatar;
exports.Backdrop = Backdrop;
exports.Button = Button;
exports.Checkbox = Checkbox;
exports.DisplayText = DisplayText;
exports.Heading = Heading;
exports.Input = Input;
exports.Label = Label;
exports.Logo = Logo;
exports.Message = Message;
exports.Tab = Tab;
exports.Text = Text;
exports.TextArea = TextArea;
//# sourceMappingURL=index.js.map
