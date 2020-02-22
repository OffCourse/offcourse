import { jsx, Box, Heading } from 'theme-ui';
import { ErrorMessage, Field } from 'formik';
import { Checkbox, Label, Message, Input, TextArea, Text, Heading as Heading$1, Logo, Tab, Avatar } from '@offcourse/atoms';
import { defineCustomElements } from '@offcourse/public-badges-drawer/loader';
import { useEffect, useState } from 'react';

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
//# sourceMappingURL=styles.js.map

var RadioButtonGroup = function (_a) {
    var className = _a.className, name = _a.name, _b = _a.options, options = _b === void 0 ? [] : _b;
    return (jsx("div", { className: className, sx: styles }, options.map(function (props) {
        var id = name + "-" + props.value;
        return jsx(Checkbox, __assign({ key: id, name: name, id: id }, props));
    })));
};
//# sourceMappingURL=index.js.map

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
//# sourceMappingURL=styles.js.map

var components = {
    text: Input,
    email: Input,
    tel: Input,
    radio: RadioButtonGroup,
    textarea: TextArea
};
var InputField = function (_a) {
    var className = _a.className, label = _a.label, _b = _a.type, type = _b === void 0 ? "text" : _b, options = _a.options, placeholder = _a.placeholder, name = _a.name;
    var Component = components[type || "text"];
    return (jsx(Box, { className: className, sx: wrapperStyles },
        jsx(Label, { sx: labelStyles }, label),
        jsx(ErrorMessage, { render: function (msg) { return jsx(Message, { isBasic: true }, msg); }, name: name }),
        jsx(Field, { as: Component, options: options, placeholder: placeholder, name: name })));
};
//# sourceMappingURL=index.js.map

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
//# sourceMappingURL=styles.js.map

var TextSection = function (_a) {
    var title = _a.title, className = _a.className, description = _a.description;
    return (jsx(Box, { className: className },
        jsx(Heading, { sx: titleStyles }, title),
        jsx(Text, { html: description })));
};
//# sourceMappingURL=index.js.map

var wrapperStyles$1 = {
    userSelect: "none",
    display: "grid",
    gridTemplateRows: "auto 1fr auto",
    gridGap: [6, 6],
    pb: 7,
    alignItems: "start",
    bg: "grayScale.0"
};
var headerStyles = {
    fontFamily: "monospace",
    fontSize: "2rem",
    lineHeight: "2rem",
    wordSpacing: "-0.2em",
    px: [6, 6]
};
var imageStyles = {
    paddingTop: "100%",
    position: "relative",
    bg: "grayScale.4",
    mb: 4
};
var captionStyles = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    px: [6, 6],
    "p:last-of-type": {
        mb: 0
    }
};
var dist = ["6rem", "6rem", "6rem", "6rem", "6rem"];
var innerStyles = {
    position: "absolute",
    top: dist,
    bottom: dist,
    left: dist,
    right: dist,
    img: {
        width: "100%"
    },
    display: "flex",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "monospace",
    fontSize: "2rem",
    wordSpacing: "-0.2em"
};
//# sourceMappingURL=styles.js.map

var Project = function (_a) {
    var className = _a.className, children = _a.children, title = _a.title, imageUrl = _a.imageUrl, description = _a.description;
    return (jsx(Box, { as: "article", sx: wrapperStyles$1, className: className },
        jsx(Box, { sx: imageStyles },
            jsx(Box, { sx: __assign(__assign({}, innerStyles), { backgroundImage: "url(" + imageUrl + ")" }) }, children)),
        jsx(Text, { sx: captionStyles, html: description }),
        jsx(Heading$1, { sx: headerStyles }, title)));
};
//# sourceMappingURL=index.js.map

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
var wrapperStyles$2 = {
    gridColumn: ["2/9", "2/12", "2/11", "3/10"],
    fontFamily: "heading",
    py: 6,
    width: "100%",
    "&:nth-of-type(even)": {
        gridColumn: ["2/9", "2/12", "3/12", "4/11"],
        textAlign: "end"
    }
};
//# sourceMappingURL=styles.js.map

var formatTitle = function (str) { return str; };
var Step = function (_a) {
    var as = _a.as, style = _a.style, children = _a.children, title = _a.title, description = _a.description, className = _a.className, index = _a.index;
    return (jsx(Box, { as: as, sx: wrapperStyles$2, style: style, className: className },
        children,
        jsx(Heading, { as: "h1", sx: titleStyles$1 },
            jsx("span", { sx: numberStyles }, index),
            formatTitle(title)),
        jsx(Text, { html: description })));
};
//# sourceMappingURL=index.js.map

var outerWrapperStyles = {
    display: "grid",
    pt: [7, 7, 7, 8, "5rem"],
    pb: [6, 6, 6, 6],
    px: [6, 6, 8, 8],
    bg: "grayScale.4",
    maxHeight: "60vh"
};
var contactStyles = {
    order: [0, 1],
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignSelf: "center",
    lineHeight: "0.4rem",
    fontFamily: "body",
    color: "grayScale.0",
    gridRow: [2, 1],
    h2: {
        fontFamily: "monospace",
        wordSpacing: "-0.3em",
        mb: 1
    },
    p: {
        mb: 0
    }
};
var scalingContainerStyles = {
    display: "grid",
    gridTemplateColumns: ["1fr 1fr", "1fr 1fr 1fr"],
    gridTemplateRows: ["1fr 1fr", "1fr"],
    gridRowGap: [6, 7],
    "@media(max-width: 20rem)": {
        transformOrigin: "top left",
        transform: ["scale(0.8)", "none"]
    }
};
var drawerStyles = {
    alignItems: "center",
    justifySelf: ["center"],
    gridColumn: ["span 2", "span 1"],
    order: [0, 1],
    gridRow: [1, 1]
};
var logoStyles = {
    gridRow: [2, 1],
    order: [2, 2],
    alignSelf: "center",
    h1: {
        color: "grayScale.4",
        bg: "grayScale.0"
    }
};
//# sourceMappingURL=styles.js.map

/** @jsx jsx */
var PublicBadgesDrawer = function (_a) {
    var _b = _a.badgeColor, badgeColor = _b === void 0 ? "white" : _b, _c = _a.modalTheme, modalTheme = _c === void 0 ? "light" : _c;
    // tslint:disable-next-line
    var inBrowser = typeof window !== "undefined" ? true : null;
    useEffect(function () {
        // tslint:disable-next-line
        inBrowser && defineCustomElements(window);
    }, [inBrowser]);
    return (jsx("publicbadges-drawer", { "domain-name": "https://offcourse-studio.com/", "badge-color": badgeColor, "modal-theme": modalTheme }));
};
//# sourceMappingURL=index.js.map

var FooterSection = function (_a) {
    var className = _a.className, siteName = _a.siteName, contactInfo = _a.contactInfo;
    var street = contactInfo.street, zipCode = contactInfo.zipCode, country = contactInfo.country, city = contactInfo.city, email = contactInfo.email;
    return (jsx(Box, { sx: outerWrapperStyles, className: className },
        jsx("div", { sx: scalingContainerStyles },
            jsx(Box, { sx: contactStyles },
                jsx(Heading, null, "Contact"),
                jsx(Box, { as: "section" },
                    jsx("p", null, street),
                    jsx("p", null, zipCode + " " + city),
                    jsx("p", null, country),
                    jsx("p", null, email))),
            jsx("div", { sx: drawerStyles },
                jsx(PublicBadgesDrawer, { modalTheme: "light" })),
            jsx(Logo, { sx: logoStyles }, siteName))));
};
//# sourceMappingURL=index.js.map

var outerWrapperStyles$1 = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    display: "grid",
    bg: "transparant",
    zIndex: 100,
    alignContent: "center",
    justifyContent: "stretch"
};
var menuStyles = {
    bg: "transparant",
    px: [4],
    py: [4],
    display: "flex",
    flexDirection: ["column", "column", "row"],
    alignItems: ["flex-start", "flex-start", "center"],
    justifyItems: "flex-start",
    height: ["12rem", "5rem"],
    "> *": {
        mr: [0, 0, 4],
        mb: [4, 4, 0]
    }
};
var menuBarStyles = {
    height: ["4rem", "5rem"],
    mt: 4,
    px: [4]
};

var HeaderSection = function (_a) {
    var className = _a.className;
    var _b = useState("CLOSED"), mode = _b[0], setMode = _b[1];
    return (jsx(Box, { sx: outerWrapperStyles$1, className: className },
        jsx(Box, { sx: __assign(__assign({}, menuStyles), { display: mode === "OPEN" ? "flex" : "none" }) },
            jsx(Tab, { title: "Home" }),
            jsx(Tab, { title: "Blog" }),
            jsx(Tab, { title: "Presentations" })),
        jsx(Box, { sx: menuBarStyles },
            jsx(Avatar, { onClick: function () { return setMode(mode === "OPEN" ? "CLOSED" : "OPEN"); } }))));
};

export { FooterSection as Footer, HeaderSection as Header, InputField, Project, RadioButtonGroup, Step, TextSection };
//# sourceMappingURL=index.es.js.map
