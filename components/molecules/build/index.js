'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var themeUi = require('theme-ui');
var formik = require('formik');
var atoms = require('@offcourse/atoms');
var loader = require('@offcourse/public-badges-drawer/loader');
var react = require('react');
var framerMotion = require('framer-motion');

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
    return (themeUi.jsx("div", { className: className, sx: styles }, options.map(function (props) {
        var id = name + "-" + props.value;
        return themeUi.jsx(atoms.Checkbox, __assign({ key: id, name: name, id: id }, props));
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
    return (themeUi.jsx(themeUi.Box, { className: className },
        themeUi.jsx(themeUi.Heading, { sx: titleStyles }, title),
        themeUi.jsx(atoms.Text, { html: description })));
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
    return (themeUi.jsx(themeUi.Box, { as: "article", sx: wrapperStyles$1, className: className },
        themeUi.jsx(themeUi.Box, { sx: imageStyles },
            themeUi.jsx(themeUi.Box, { sx: __assign(__assign({}, innerStyles), { backgroundImage: "url(" + imageUrl + ")" }) }, children)),
        themeUi.jsx(atoms.Text, { sx: captionStyles, html: description }),
        themeUi.jsx(atoms.Heading, { sx: headerStyles }, title)));
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

var Step = function (_a) {
    var as = _a.as, style = _a.style, children = _a.children, title = _a.title, description = _a.description, className = _a.className, index = _a.index;
    return (themeUi.jsx(themeUi.Box, { as: as, sx: wrapperStyles$2, style: style, className: className },
        children,
        themeUi.jsx(atoms.Heading, { as: "h1", sx: titleStyles$1 },
            themeUi.jsx("span", { sx: numberStyles }, index),
            title),
        themeUi.jsx(atoms.Text, { html: description })));
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
    react.useEffect(function () {
        // tslint:disable-next-line
        inBrowser && loader.defineCustomElements(window);
    }, [inBrowser]);
    return (themeUi.jsx("publicbadges-drawer", { "domain-name": "https://offcourse-studio.com/", "badge-color": badgeColor, "modal-theme": modalTheme }));
};
//# sourceMappingURL=index.js.map

var Footer = function (_a) {
    var className = _a.className, siteName = _a.siteName, contactInfo = _a.contactInfo;
    var street = contactInfo.street, zipCode = contactInfo.zipCode, country = contactInfo.country, city = contactInfo.city, email = contactInfo.email;
    return (themeUi.jsx(themeUi.Box, { sx: outerWrapperStyles, className: className },
        themeUi.jsx("div", { sx: scalingContainerStyles },
            themeUi.jsx(themeUi.Box, { sx: contactStyles },
                themeUi.jsx(themeUi.Heading, null, "Contact"),
                themeUi.jsx(themeUi.Box, { as: "section" },
                    themeUi.jsx("p", null, street),
                    themeUi.jsx("p", null, zipCode + " " + city),
                    themeUi.jsx("p", null, country),
                    themeUi.jsx("p", null, email))),
            themeUi.jsx("div", { sx: drawerStyles },
                themeUi.jsx(PublicBadgesDrawer, { modalTheme: "light" })),
            themeUi.jsx(atoms.Logo, { sx: logoStyles }, siteName))));
};

var avatarStyles = {};
var outerWrapperStyles$1 = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bg: "transparant",
    zIndex: 100,
    alignContent: "center",
    p: [3, 4],
    height: ["4rem", "5rem"],
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
};
var menuItemsStyles = {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between"
};
//# sourceMappingURL=styles.js.map

var duration = 0.2;
var avatarVariants = {
    hidden: { x: "-200%", opacity: 0.2 },
    default: { x: 0, opacity: 1, rotate: 0 },
    hover: { opacity: 0.8 },
    menuOpen: { rotate: 90 }
};
var AvatarAnimation = function (_a) {
    var children = _a.children, mode = _a.mode;
    return (themeUi.jsx(framerMotion.motion.div, { initial: "hidden", whileHover: "hover", transition: { duration: duration }, animate: mode, variants: avatarVariants }, children));
};
var menuVariants = {
    default: { y: "-400%", opacity: 0.2 },
    menuOpen: { y: 0, opacity: 1 }
};
var MenuAnimation = function (_a) {
    var children = _a.children, mode = _a.mode;
    return (themeUi.jsx(framerMotion.motion.div, { initial: "default", animate: mode, transition: { duration: duration }, variants: menuVariants }, children));
};
var callToActionVariants = {
    hidden: { x: "200%", opacity: 0.2 },
    menuOpen: { x: "200%", opacity: 0.2 },
    default: { x: 0, opacity: 1 }
};
var CallToActionAnimation = function (_a) {
    var children = _a.children, mode = _a.mode;
    return (themeUi.jsx(framerMotion.motion.div, { initial: "hidden", transition: { duration: duration }, animate: mode, variants: callToActionVariants }, children));
};
//# sourceMappingURL=animations.js.map

var wrapperStyles$3 = {
    display: "flex",
    flexDirection: ["column", "row"],
    "> div": {
        ml: [4],
        mb: [4]
    }
};
//# sourceMappingURL=styles.js.map

var Menu = function (_a) {
    var className = _a.className, links = _a.links;
    return (themeUi.jsx(themeUi.Box, { className: className, sx: wrapperStyles$3 }, links.map(function (_a) {
        var href = _a.href, title = _a.title;
        return (themeUi.jsx(atoms.Tab, { key: title, href: href }, title));
    })));
};
//# sourceMappingURL=index.js.map

var HeaderSection = function (_a) {
    var className = _a.className, _b = _a.links, links = _b === void 0 ? [] : _b, _c = _a.callToAction, callToAction = _c === void 0 ? null : _c, mode = _a.mode, toggleMenu = _a.toggleMenu;
    return (themeUi.jsx(themeUi.Box, { sx: outerWrapperStyles$1, className: className },
        themeUi.jsx(AvatarAnimation, { mode: mode },
            themeUi.jsx(atoms.Avatar, { sx: avatarStyles, onClick: toggleMenu })),
        themeUi.jsx(themeUi.Box, { sx: menuItemsStyles },
            themeUi.jsx(MenuAnimation, { mode: mode },
                themeUi.jsx(Menu, { links: links })),
            themeUi.jsx(CallToActionAnimation, { mode: mode }, callToAction ? (themeUi.jsx(atoms.Tab, { href: callToAction.href }, callToAction.title)) : null))));
};
//# sourceMappingURL=index.js.map

exports.Footer = Footer;
exports.Header = HeaderSection;
exports.InputField = InputField;
exports.Project = Project;
exports.RadioButtonGroup = RadioButtonGroup;
exports.Step = Step;
exports.TextSection = TextSection;
//# sourceMappingURL=index.js.map
