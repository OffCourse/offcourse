'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var themeUi = require('theme-ui');
var matchMedia = require('@theme-ui/match-media');
var framerMotion = require('framer-motion');
var hooks = require('@offcourse/hooks');
var formik = require('formik');
var atoms = require('@offcourse/atoms');
var React = require('react');
var React__default = _interopDefault(React);
var reactHelmet = require('react-helmet');
var loader = require('@offcourse/public-badges-drawer/loader');

var outerWrapper = {
    width: "100rem",
    height: "100%",
    overflowX: "hidden"
};
var itemsWrapper = {
    flexDirection: "row",
    justifyContent: "center",
    display: "flex",
    "> *": {
        mx: 4
    }
};
var controlsWrapper = {
    flexDirection: "row",
    justifyContent: "center",
    display: "flex"
};
var controlStyles = {
    bg: "black",
    borderRadius: "1rem",
    width: "1rem",
    height: "1rem",
    my: 6,
    mx: 2
};
//# sourceMappingURL=styles.js.map

var ItemAnimation = function (_a) {
    var children = _a.children;
    return (themeUi.jsx(framerMotion.motion.div, { positionTransition: { damping: 500 }, exit: { opacity: 1 } }, children));
};
var controlVariants = function (_a) {
    var active = _a.active, passive = _a.passive;
    return {
        passive: { opacity: 1, scale: 1, backgroundColor: passive },
        active: { opacity: 1, scale: [1, 1.5, 1.1], backgroundColor: "#000000" },
        hover: { opacity: 1, backgroundColor: active }
    };
};
var ControlAnimation = function (_a) {
    var children = _a.children, className = _a.className, isActive = _a.isActive, colors = _a.colors;
    return (themeUi.jsx(framerMotion.motion.div, { className: className, whileHover: "hover", positionTransition: { damping: 500 }, initial: "passive", variants: controlVariants(colors), animate: isActive ? "active" : "passive" }, children));
};
//# sourceMappingURL=animations.js.map

var Controls = function (_a) {
    var children = _a.children, colors = _a.colors, currentIndex = _a.currentIndex, setIndex = _a.setIndex;
    return (themeUi.jsx(themeUi.Box, { sx: controlsWrapper }, children.map(function (_, index) {
        var isActive = index === currentIndex;
        return (themeUi.jsx(ControlAnimation, { key: index, colors: colors, sx: controlStyles, isActive: isActive },
            themeUi.jsx(themeUi.Box, { sx: { width: "100%", height: "100%" }, onClick: function () { return setIndex(index); } })));
    })));
};
//# sourceMappingURL=Controls.js.map

var Carousel = function (_a) {
    var children = _a.children;
    var _b, _c;
    var _d = hooks.useIndex(), currentIndex = _d.currentIndex, setIndex = _d.setIndex;
    var theme = themeUi.useThemeUI().theme;
    var active = ((_b = theme.colors) === null || _b === void 0 ? void 0 : _b.primary) || "black";
    var passive = ((_c = theme.colors) === null || _c === void 0 ? void 0 : _c.grayScale[2]) || "lightGray";
    var numberOfElements = matchMedia.useResponsiveValue(function () { return [1, 1, 1, 2, 3]; });
    var visibleChildren = hooks.useCycleElements({
        numberOfElements: numberOfElements,
        currentIndex: currentIndex,
        elements: children
    }).visibleChildren;
    return (themeUi.jsx(themeUi.Box, { sx: outerWrapper },
        themeUi.jsx(themeUi.Box, { sx: itemsWrapper },
            themeUi.jsx(framerMotion.AnimatePresence, null, visibleChildren.map(function (child) { return (themeUi.jsx(ItemAnimation, { key: child.props.id }, child)); }))),
        themeUi.jsx(Controls, { colors: { active: active, passive: passive }, setIndex: setIndex, children: children, currentIndex: currentIndex })));
};
//# sourceMappingURL=index.js.map

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
    width: ["calc(100vw - 2rem)", "28rem"],
    height: "100%",
    minHeight: "1130px",
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
    fontFamily: "heading",
    py: 6,
    width: "100%"
};
//# sourceMappingURL=styles.js.map

/** @jsx jsx */
var Step = function (_a, ref) {
    var as = _a.as, style = _a.style, children = _a.children, title = _a.title, description = _a.description, className = _a.className, index = _a.index;
    return (themeUi.jsx(themeUi.Box, { ref: ref, as: as, sx: wrapperStyles$2, style: style, className: className },
        children,
        themeUi.jsx(atoms.Heading, { as: "h1", sx: titleStyles$1 },
            themeUi.jsx("span", { sx: numberStyles }, index),
            title),
        themeUi.jsx(atoms.Text, { html: description })));
};
// @ts-ignore
var Step$1 = React.forwardRef(Step);
//# sourceMappingURL=index.js.map

var stepVariants = {
    hidden: function (isEven) { return ({
        x: isEven ? -200 : 200,
        opacity: 0
    }); },
    visible: { x: 0, opacity: 1 }
};
var StepAnimation = function (_a) {
    var children = _a.children, index = _a.index, className = _a.className;
    var _b = hooks.useVisibility({
        canLeave: false,
        modBottom: "-400px"
    }), isVisible = _b[0], ref = _b[1];
    var isEven = index % 2 === 0;
    return (React__default.createElement(framerMotion.motion.div, { ref: ref, key: index, variants: stepVariants, initial: "hidden", animate: isVisible ? "visible" : "hidden", custom: isEven, className: className }, children));
};
//# sourceMappingURL=animations.js.map

var stepStyles = {
    gridColumn: ["2/9", "2/12", "2/11", "3/10"],
    "&:nth-of-type(even)": {
        gridColumn: ["2/9", "2/12", "3/12", "4/11"],
        textAlign: "end"
    }
};
var innerWrapperStyles = {
    gridColumn: "1/13",
    display: "grid",
    gridTemplateColumns: ["repeat(9,1fr)", "repeat(12, 1fr)"]
};
//# sourceMappingURL=styles.js.map

var Process = function (_a) {
    var steps = _a.steps;
    return (themeUi.jsx(themeUi.Box, { sx: innerWrapperStyles }, steps.map(function (step, index) {
        return (themeUi.jsx(StepAnimation, { key: index, sx: stepStyles, index: index },
            themeUi.jsx(Step$1, __assign({ index: index + 1 }, step))));
    })));
};
//# sourceMappingURL=index.js.map

var SEO = function (_a) {
    var siteMetaData = _a.siteMetaData, pageData = _a.pageData, path = _a.path;
    console.log(path);
    var siteName = siteMetaData.siteName, siteUrl = siteMetaData.siteUrl, description = siteMetaData.description, image = siteMetaData.image;
    var seo = {
        title: pageData ? pageData.title + " | " + siteName : siteName,
        description: pageData ? pageData.excerpt : description,
        image: "" + siteUrl + image,
        url: "" + siteUrl + path,
    };
    return (themeUi.jsx(reactHelmet.Helmet, null,
        themeUi.jsx("title", null, seo.title),
        themeUi.jsx("meta", { name: "description", content: seo.description }),
        themeUi.jsx("meta", { name: "image", content: seo.image }),
        themeUi.jsx("meta", { property: "og:url", content: seo.url }),
        themeUi.jsx("meta", { property: "og:title", content: seo.title }),
        themeUi.jsx("meta", { property: "og:description", content: seo.description }),
        themeUi.jsx("meta", { property: "og:image", content: seo.image }),
        themeUi.jsx("meta", { name: "twitter:card", content: "summary_large_image" }),
        themeUi.jsx("meta", { name: "twitter:title", content: seo.title }),
        themeUi.jsx("meta", { name: "twitter:creator", content: "yeehaa" }),
        themeUi.jsx("meta", { name: "twitter:description", content: seo.description }),
        themeUi.jsx("meta", { name: "twitter:image", content: seo.image })));
};

var outerWrapperStyles = {
    display: "grid",
    gridTemplateRows: ["1fr 1fr", "1fr"],
    gridTemplateColumns: ["1fr", "1fr 1fr"],
    gridRowGap: [6],
    px: [6, 6, 8, 8],
    py: [6, 6, 8, 8],
    bg: "grayScale.4",
    height: "100%",
    alignItems: "center"
};
var contactStyles = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    lineHeight: "0.4rem",
    fontFamily: "body",
    color: "grayScale.0",
    h2: {
        fontFamily: "monospace",
        wordSpacing: "-0.3em",
        lineHeight: "1.rem",
        mb: 1
    },
    p: {
        mb: 0
    }
};
var drawerStyles = {
    justifySelf: ["end"]
};
//# sourceMappingURL=styles.js.map

/** @jsx jsx */
var PublicBadgesDrawer = function (_a) {
    var _b = _a.badgeColor, badgeColor = _b === void 0 ? "white" : _b, _c = _a.testMode, testMode = _c === void 0 ? false : _c, _d = _a.modalTheme, modalTheme = _d === void 0 ? "light" : _d;
    // tslint:disable-next-line
    var inBrowser = typeof window !== "undefined" ? true : null;
    React.useEffect(function () {
        // tslint:disable-next-line
        inBrowser && loader.defineCustomElements(window);
    }, [inBrowser]);
    return (themeUi.jsx("publicbadges-drawer", { "domain-name": "https://offcourse-studio.com/", "test-mode": testMode, "badge-color": badgeColor, "modal-theme": modalTheme }));
};
//# sourceMappingURL=index.js.map

var ContactInfo = function (_a) {
    var street = _a.street, siteName = _a.siteName, zipCode = _a.zipCode, country = _a.country, city = _a.city, email = _a.email;
    return (themeUi.jsx(themeUi.Box, { sx: contactStyles },
        themeUi.jsx(themeUi.Heading, null, siteName),
        themeUi.jsx(themeUi.Box, { as: "section" },
            themeUi.jsx("p", null, street),
            themeUi.jsx("p", null, zipCode + " " + city),
            themeUi.jsx("p", null, country),
            themeUi.jsx("p", null, email))));
};
var Footer = function (_a) {
    var className = _a.className, siteName = _a.siteName, contactInfo = _a.contactInfo;
    return (themeUi.jsx(themeUi.Box, { sx: outerWrapperStyles, className: className },
        themeUi.jsx(ContactInfo, __assign({ siteName: siteName }, contactInfo)),
        themeUi.jsx("div", { sx: drawerStyles },
            themeUi.jsx(PublicBadgesDrawer, { testMode: false, modalTheme: "light" }))));
};
//# sourceMappingURL=index.js.map

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

var transition = { delay: 0.5, damping: 50 };
var avatarVariants = {
    idle: { x: "-200%", opacity: 0 },
    default: {
        x: 0,
        opacity: 1,
        rotate: 0,
        transition: transition
    },
    hover: { opacity: 0.8 },
    menuOpen: { rotate: 90 }
};
var AvatarAnimation = function (_a) {
    var children = _a.children, appMode = _a.appMode;
    return (themeUi.jsx(framerMotion.motion.div, { initial: "idle", whileHover: "hover", animate: appMode, variants: avatarVariants }, children));
};
var menuVariants = {
    idle: { y: "-400%", opacity: 0.2 },
    default: { y: "-400%", opacity: 0.2 },
    menuOpen: { y: 0, opacity: 1 }
};
var MenuAnimation = function (_a) {
    var children = _a.children, appMode = _a.appMode;
    return (themeUi.jsx(framerMotion.motion.div, { initial: "idle", animate: appMode, transition: { damping: 50 }, variants: menuVariants }, children));
};
var callToActionVariants = {
    idle: { x: "200%", opacity: 0.2 },
    menuOpen: { x: "200%", opacity: 0.2 },
    default: { x: 0, opacity: 1, transition: transition }
};
var CallToActionAnimation = function (_a) {
    var children = _a.children, appMode = _a.appMode, callToActionVisible = _a.callToActionVisible;
    return (themeUi.jsx(framerMotion.motion.div, { initial: "idle", animate: callToActionVisible ? appMode : "idle", variants: callToActionVariants }, children));
};
//# sourceMappingURL=animations.js.map

var wrapperStyles$3 = {
    display: "flex",
    flexDirection: ["row", "row"],
    "> div": {
        ml: [4],
        mb: [4],
    },
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
    var className = _a.className, _b = _a.links, links = _b === void 0 ? [] : _b, _c = _a.callToAction, callToAction = _c === void 0 ? null : _c, _d = _a.callToActionVisible, callToActionVisible = _d === void 0 ? true : _d, appMode = _a.appMode, toggleMenu = _a.toggleMenu;
    return (themeUi.jsx(themeUi.Box, { as: "nav", sx: outerWrapperStyles$1, className: className },
        themeUi.jsx(AvatarAnimation, { appMode: appMode },
            themeUi.jsx(atoms.Avatar, { sx: avatarStyles, onClick: toggleMenu })),
        themeUi.jsx(themeUi.Box, { sx: menuItemsStyles },
            themeUi.jsx(MenuAnimation, { appMode: appMode },
                themeUi.jsx(Menu, { links: links })),
            themeUi.jsx(CallToActionAnimation, { callToActionVisible: callToActionVisible, appMode: appMode }, callToAction ? (themeUi.jsx(atoms.Tab, { href: callToAction.href }, callToAction.title)) : null))));
};
//# sourceMappingURL=index.js.map

exports.Carousel = Carousel;
exports.Footer = Footer;
exports.Header = HeaderSection;
exports.InputField = InputField;
exports.Process = Process;
exports.Project = Project;
exports.RadioButtonGroup = RadioButtonGroup;
exports.SEO = SEO;
exports.Step = Step$1;
exports.TextSection = TextSection;
//# sourceMappingURL=index.js.map
