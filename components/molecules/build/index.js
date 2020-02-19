'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var themeUi = require('theme-ui');
var formik = require('formik');
var atoms = require('@offcourse/atoms');

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

var styles = {
    display: "grid",
    gridGap: "0.5rem",
    py: 2,
    px: 0
};

var RadioButtonGroup = function (_a) {
    var className = _a.className, name = _a.name, _b = _a.options, options = _b === void 0 ? [] : _b;
    return (themeUi.jsx("div", { className: className, sx: styles }, options.map(function (props) {
        var id = name + "-" + props.value;
        return themeUi.jsx(atoms.Checkbox, __assign({ key: id, name: name, id: id }, props));
    })));
};

var wrapperStyles = {
    display: "flex",
    flexDirection: "column",
    p: 0,
    mb: 4
};
var labelStyles = {
    px: 4,
    pb: 2
};

var components = {
    text: atoms.Input,
    email: atoms.Input,
    tel: atoms.Input,
    radio: RadioButtonGroup,
    textarea: atoms.TextArea
};
var InputField = function (_a) {
    var className = _a.className, label = _a.label, _b = _a.type, type = _b === void 0 ? "text" : _b, options = _a.options, placeholder = _a.placeholder, name = _a.name;
    var Component = components[type || "text"];
    return (themeUi.jsx(themeUi.Box, { className: className, sx: wrapperStyles },
        themeUi.jsx(atoms.Label, { sx: labelStyles }, label),
        themeUi.jsx(formik.ErrorMessage, { render: function (msg) { return themeUi.jsx(atoms.Message, { isBasic: true }, msg); }, name: name }),
        themeUi.jsx(formik.Field, { as: Component, options: options, placeholder: placeholder, name: name })));
};

var scale = [0.4, 0.4, 0.5, 0.5];
var fontSize = scale.map(function (size) { return size * 5 + "rem"; });
var lineHeight = scale.map(function (size) { return size * 6 + "rem"; });
var titleStyles = {
    gridRow: ["1/2"],
    gridColumn: ["1/13"],
    fontFamily: "monospace",
    fontSize: fontSize,
    lineHeight: lineHeight,
    m: 0
};

var TextSection = function (_a) {
    var title = _a.title, className = _a.className, description = _a.description;
    return (themeUi.jsx(themeUi.Box, { className: className },
        themeUi.jsx(themeUi.Heading, { sx: titleStyles }, title),
        themeUi.jsx(atoms.Text, { html: description })));
};

var numberStyles = {
    borderBottom: "0.25rem solid",
    borderColor: "grayScale.4",
    fontFamily: "monospace",
    fontSize: ["3.5rem", "5rem"],
    lineHeight: ["4rem", "5.5rem"],
    mb: 2
};
var titleStyles$1 = {
    display: "grid",
    fontFamily: "monospace",
    wordSpacing: "-0.2em",
    fontSize: ["1.5rem", "2rem"],
    lineHeight: ["2rem", "2.5rem"],
    m: 0,
    mb: 4
};
var wrapperStyles$1 = {
    gridColumn: ["2/9", "2/12", "2/11", "3/10"],
    fontFamily: "heading",
    py: 6,
    width: "100%",
    "&:nth-of-type(even)": {
        gridColumn: ["2/9", "2/12", "3/12", "4/11"],
        textAlign: "end"
    }
};

var formatTitle = function (str) { return str; };
var Step = function (_a) {
    var as = _a.as, style = _a.style, children = _a.children, title = _a.title, description = _a.description, className = _a.className, index = _a.index;
    return (themeUi.jsx(themeUi.Box, { as: as, sx: wrapperStyles$1, style: style, className: className },
        children,
        themeUi.jsx(themeUi.Heading, { as: "h1", sx: titleStyles$1 },
            themeUi.jsx("span", { sx: numberStyles }, index),
            formatTitle(title)),
        themeUi.jsx(atoms.Text, { html: description })));
};

exports.InputField = InputField;
exports.RadioButtonGroup = RadioButtonGroup;
exports.Step = Step;
exports.TextSection = TextSection;
//# sourceMappingURL=index.js.map
