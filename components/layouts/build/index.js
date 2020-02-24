'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var themeUi = require('theme-ui');
var core = require('@emotion/core');
require('formik');
var atoms = require('@offcourse/atoms');
var loader = require('@offcourse/public-badges-drawer/loader');
var react = require('react');
var framerMotion = require('framer-motion');

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

var avatarStyles = {
    "&:hover": {
        opacity: 0.75
    }
};
var outerWrapperStyles$1 = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bg: "transparant",
    zIndex: 100,
    alignContent: "center",
    p: [4],
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

var avatarVariants = {
    hidden: { x: "-200%", opacity: 0.2 },
    visible: { x: 0, opacity: 1 }
};
var AvatarAnimation = function (_a) {
    var children = _a.children;
    return (themeUi.jsx(framerMotion.motion.div, { initial: "hidden", animate: "visible", variants: avatarVariants }, children));
};
var menuVariants = {
    hidden: { y: "-400%", opacity: 0.2 },
    visible: { y: 0, opacity: 1 }
};
var MenuAnimation = function (_a) {
    var children = _a.children, mode = _a.mode;
    return (themeUi.jsx(framerMotion.motion.div, { initial: "hidden", animate: mode === "OPEN" ? "visible" : "hidden", variants: menuVariants }, children));
};
var callToActionVariants = {
    hidden: { x: "200%", opacity: 0.2 },
    visible: { x: 0, opacity: 1 }
};
var CallToActionAnimation = function (_a) {
    var children = _a.children, mode = _a.mode;
    return (themeUi.jsx(framerMotion.motion.div, { initial: "hidden", animate: mode === "CLOSED" ? "visible" : "hidden", variants: callToActionVariants }, children));
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

var MenuSection = function (_a) {
    var className = _a.className, links = _a.links;
    return (themeUi.jsx(themeUi.Box, { className: className, sx: wrapperStyles$3 }, links.map(function (_a) {
        var href = _a.href, title = _a.title;
        return (themeUi.jsx(atoms.Tab, { key: title, href: href }, title));
    })));
};
//# sourceMappingURL=index.js.map

/** @jsx jsx */
var useModeToggle = function () {
    var _a = react.useState("CLOSED"), mode = _a[0], setMode = _a[1];
    var toggleMode = react.useCallback(function () {
        setMode(mode === "OPEN" ? "CLOSED" : "OPEN");
    }, [mode, setMode]);
    return [mode, toggleMode];
};
var HeaderSection = function (_a) {
    var className = _a.className;
    var _b = useModeToggle(), mode = _b[0], toggleMode = _b[1];
    var links = [
        {
            title: "blog",
            href: "/blog"
        },
        {
            title: "decks",
            href: "/presentations"
        }
    ];
    return (themeUi.jsx(themeUi.Box, { sx: outerWrapperStyles$1, className: className },
        themeUi.jsx(AvatarAnimation, null,
            themeUi.jsx(atoms.Avatar, { sx: avatarStyles, onClick: toggleMode })),
        themeUi.jsx(themeUi.Box, { sx: menuItemsStyles },
            themeUi.jsx(MenuAnimation, { mode: mode },
                themeUi.jsx(MenuSection, { links: links })),
            themeUi.jsx(CallToActionAnimation, { mode: mode },
                themeUi.jsx(atoms.Tab, { href: "#ContactSection" }, "Contact Us")))));
};
//# sourceMappingURL=index.es.js.map

var wrapperStyles = {
    display: "grid",
    overflowX: "hidden",
    minHeight: "100vh"
};
//# sourceMappingURL=styles.js.map

var PageLayout = function (_a) {
    var className = _a.className, children = _a.children, siteName = _a.siteName, contactInfo = _a.contactInfo;
    return (themeUi.jsx(themeUi.Box, { className: className, sx: wrapperStyles },
        themeUi.jsx(core.Global, { styles: function (theme) { return theme.globals; } }),
        themeUi.jsx(HeaderSection, null),
        children,
        themeUi.jsx(Footer, { siteName: siteName, contactInfo: contactInfo })));
};
//# sourceMappingURL=index.js.map

exports.PageLayout = PageLayout;
//# sourceMappingURL=index.js.map
