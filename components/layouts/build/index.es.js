import { jsx, Box, Heading } from 'theme-ui';
import { Global } from '@emotion/core';
import 'formik';
import { Logo, Avatar, Tab } from '@offcourse/atoms';
import { defineCustomElements } from '@offcourse/public-badges-drawer/loader';
import { useEffect } from 'react';
import { motion } from 'framer-motion';

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
    useEffect(function () {
        // tslint:disable-next-line
        inBrowser && defineCustomElements(window);
    }, [inBrowser]);
    return (jsx("publicbadges-drawer", { "domain-name": "https://offcourse-studio.com/", "badge-color": badgeColor, "modal-theme": modalTheme }));
};


var Footer = function (_a) {
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
    return (jsx(motion.div, { initial: "hidden", whileHover: "hover", transition: { duration: duration }, animate: mode, variants: avatarVariants }, children));
};
var menuVariants = {
    default: { y: "-400%", opacity: 0.2 },
    menuOpen: { y: 0, opacity: 1 }
};
var MenuAnimation = function (_a) {
    var children = _a.children, mode = _a.mode;
    return (jsx(motion.div, { initial: "default", animate: mode, transition: { duration: duration }, variants: menuVariants }, children));
};
var callToActionVariants = {
    menuOpen: { x: "200%", opacity: 0.2 },
    default: { x: 0, opacity: 1 }
};
var CallToActionAnimation = function (_a) {
    var children = _a.children, mode = _a.mode;
    return (jsx(motion.div, { initial: "hidden", transition: { duration: duration }, animate: mode, variants: callToActionVariants }, children));
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
    return (jsx(Box, { className: className, sx: wrapperStyles$3 }, links.map(function (_a) {
        var href = _a.href, title = _a.title;
        return (jsx(Tab, { key: title, href: href }, title));
    })));
};


var HeaderSection = function (_a) {
    var className = _a.className, links = _a.links, callToAction = _a.callToAction, mode = _a.mode, toggleMenu = _a.toggleMenu;
    return (jsx(Box, { sx: outerWrapperStyles$1, className: className },
        jsx(AvatarAnimation, { mode: mode },
            jsx(Avatar, { sx: avatarStyles, onClick: toggleMenu })),
        jsx(Box, { sx: menuItemsStyles },
            jsx(MenuAnimation, { mode: mode },
                jsx(Menu, { links: links })),
            jsx(CallToActionAnimation, { mode: mode },
                jsx(Tab, { href: callToAction.href }, callToAction.title)))));
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
    return (jsx(Box, { className: className, sx: wrapperStyles },
        jsx(Global, { styles: function (theme) { return theme.globals; } }),
        jsx(HeaderSection, { mode: mode, toggleMenu: toggleMenu, links: links, callToAction: callToAction }),
        children,
        jsx(Footer, { siteName: siteName, contactInfo: contactInfo })));
};

export { PageLayout };
//# sourceMappingURL=index.es.js.map
