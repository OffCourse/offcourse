'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var themeUi = require('theme-ui');
var core = require('@emotion/core');
require('formik');
var atoms = require('@offcourse/atoms');
var loader = require('@offcourse/public-badges-drawer/loader');
var react = require('react');
var framerMotion = require('framer-motion');

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
    menuOpen: { x: "200%", opacity: 0.2 },
    default: { x: 0, opacity: 1 }
};
var CallToActionAnimation = function (_a) {
    var children = _a.children, mode = _a.mode;
    return (themeUi.jsx(framerMotion.motion.div, { initial: "hidden", transition: { duration: duration }, animate: mode, variants: callToActionVariants }, children));
};

var wrapperStyles$3 = {
    display: "flex",
    flexDirection: ["column", "row"],
    "> div": {
        ml: [4],
        mb: [4]
    }
};


var Menu = function (_a) {
    var className = _a.className, links = _a.links;
    return (themeUi.jsx(themeUi.Box, { className: className, sx: wrapperStyles$3 }, links.map(function (_a) {
        var href = _a.href, title = _a.title;
        return (themeUi.jsx(atoms.Tab, { key: title, href: href }, title));
    })));
};


var HeaderSection = function (_a) {
    var className = _a.className, links = _a.links, callToAction = _a.callToAction, mode = _a.mode, toggleMenu = _a.toggleMenu;
    return (themeUi.jsx(themeUi.Box, { sx: outerWrapperStyles$1, className: className },
        themeUi.jsx(AvatarAnimation, { mode: mode },
            themeUi.jsx(atoms.Avatar, { sx: avatarStyles, onClick: toggleMenu })),
        themeUi.jsx(themeUi.Box, { sx: menuItemsStyles },
            themeUi.jsx(MenuAnimation, { mode: mode },
                themeUi.jsx(Menu, { links: links })),
            themeUi.jsx(CallToActionAnimation, { mode: mode },
                themeUi.jsx(atoms.Tab, { href: callToAction.href }, callToAction.title)))));
};

var wrapperStyles = {
    display: "grid",
    overflowX: "hidden",
    minHeight: "100vh"
};
//# sourceMappingURL=styles.js.map

var PageLayout = function (_a) {
    var className = _a.className, children = _a.children, mode = _a.mode, toggleMenu = _a.toggleMenu, siteMetaData = _a.siteMetaData;
    var links = siteMetaData.links, callToAction = siteMetaData.callToAction, siteName = siteMetaData.siteName, contactInfo = siteMetaData.contactInfo;
    return (themeUi.jsx(themeUi.Box, { className: className, sx: wrapperStyles },
        themeUi.jsx(core.Global, { styles: function (theme) { return theme.globals; } }),
        themeUi.jsx(HeaderSection, { mode: mode, toggleMenu: toggleMenu, links: links, callToAction: callToAction }),
        children,
        themeUi.jsx(Footer, { siteName: siteName, contactInfo: contactInfo })));
};

exports.PageLayout = PageLayout;
//# sourceMappingURL=index.js.map
