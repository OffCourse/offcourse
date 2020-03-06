'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var themeUi = require('theme-ui');
var core = require('@emotion/core');
var react = require('react');
var react$1 = require('@xstate/react');
var xstate = require('xstate');
require('formik');
var atoms = require('@offcourse/atoms');
var loader = require('@offcourse/public-badges-drawer/loader');
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

var addSiteMetaData = xstate.assign({
    siteMetaData: function (_, _a) {
        var siteMetaData = _a.payload.siteMetaData;
        var links = siteMetaData.links.filter(function (_a) {
            var title = _a.title;
            return title !== "home";
        });
        return __assign(__assign({}, siteMetaData), { links: links });
    }
});
var updateSections = xstate.assign({
    sections: function (context, _a) {
        var _b;
        var payload = _a.payload;
        var sections = context.sections || {};
        var role = payload.role, isVisible = payload.isVisible;
        return __assign(__assign({}, sections), (_b = {}, _b[role] = isVisible, _b));
    }
});
//# sourceMappingURL=actions.js.map

var actions = /*#__PURE__*/Object.freeze({
    __proto__: null,
    addSiteMetaData: addSiteMetaData,
    updateSections: updateSections
});

var callToAction = {
    initial: "call_to_action_visible",
    states: {
        call_to_action_visible: {
            on: {
                HIDE_CALL_TO_ACTION: {
                    target: "call_to_action_hidden"
                }
            }
        },
        call_to_action_hidden: {
            on: {
                SHOW_CALL_TO_ACTION: {
                    target: "call_to_action_visible"
                }
            }
        }
    }
};
var appStateMachine = xstate.createMachine({
    id: "appState",
    initial: "idle",
    states: {
        idle: {
            on: {
                INITIALIZE: {
                    target: "default",
                    actions: ["addSiteMetaData"]
                }
            }
        },
        default: __assign({ on: {
                TOGGLE: "menuOpen"
            } }, callToAction),
        menuOpen: {
            on: { TOGGLE: "default" }
        }
    },
    on: {
        UPDATE_SECTIONS: {
            actions: ["updateSections"]
        }
    }
}, {
    actions: actions
});
//# sourceMappingURL=machine.js.map

var StateContext = react.createContext({
    current: "default",
    appMode: "default",
    registerSection: function (_event) {
        return;
    },
    send: function (_event) {
        return;
    }
});
var StateProvider = function (_a) {
    var children = _a.children, siteMetaData = _a.siteMetaData;
    var _b = react$1.useMachine(appStateMachine), current = _b[0], send = _b[1];
    var appMode = current.toStrings()[0];
    var callToActionVisible = current.context.sections
        ? !current.context.sections["ContactSection"]
        : true;
    react.useEffect(function () {
        send({ type: "INITIALIZE", payload: { siteMetaData: siteMetaData } });
    }, [send, siteMetaData]);
    var registerSection = function (_a) {
        var role = _a.role, isVisible = _a.isVisible;
        send({ type: "UPDATE_SECTIONS", payload: { role: role, isVisible: isVisible } });
    };
    return (themeUi.jsx(StateContext.Provider, { value: __assign({ appMode: appMode,
            current: current,
            send: send,
            registerSection: registerSection,
            callToActionVisible: callToActionVisible }, current.context) }, children));
};
var useStateValue = function () { return react.useContext(StateContext); };
//# sourceMappingURL=state.js.map

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

var __assign$1 = function() {
    __assign$1 = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign$1.apply(this, arguments);
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

var ContactInfo = function (_a) {
    var street = _a.street, zipCode = _a.zipCode, country = _a.country, city = _a.city, email = _a.email;
    return (themeUi.jsx(themeUi.Box, { sx: contactStyles },
        themeUi.jsx(themeUi.Heading, null, "Contact"),
        themeUi.jsx(themeUi.Box, { as: "section" },
            themeUi.jsx("p", null, street),
            themeUi.jsx("p", null, zipCode + " " + city),
            themeUi.jsx("p", null, country),
            themeUi.jsx("p", null, email))));
};
var Footer = function (_a) {
    var className = _a.className, siteName = _a.siteName, contactInfo = _a.contactInfo;
    return (themeUi.jsx(themeUi.Box, { sx: outerWrapperStyles, className: className },
        themeUi.jsx("div", { sx: scalingContainerStyles },
            themeUi.jsx(ContactInfo, __assign$1({}, contactInfo)),
            themeUi.jsx("div", { sx: drawerStyles },
                themeUi.jsx(PublicBadgesDrawer, { modalTheme: "light" })),
            siteName && themeUi.jsx(atoms.Logo, { sx: logoStyles }, siteName))));
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

var duration = 0.2;
var avatarVariants = {
    idle: { x: "-200%", opacity: 0.2 },
    default: { x: 0, opacity: 1, rotate: 0 },
    hover: { opacity: 0.8 },
    menuOpen: { rotate: 90 }
};
var AvatarAnimation = function (_a) {
    var children = _a.children, appMode = _a.appMode;
    return (themeUi.jsx(framerMotion.motion.div, { initial: "idle", whileHover: "hover", transition: { duration: duration }, animate: appMode, variants: avatarVariants }, children));
};
var menuVariants = {
    idle: { y: "-400%", opacity: 0.2 },
    default: { y: "-400%", opacity: 0.2 },
    menuOpen: { y: 0, opacity: 1 }
};
var MenuAnimation = function (_a) {
    var children = _a.children, appMode = _a.appMode;
    return (themeUi.jsx(framerMotion.motion.div, { initial: "idle", animate: appMode, transition: { duration: duration }, variants: menuVariants }, children));
};
var callToActionVariants = {
    idle: { x: "200%", opacity: 0.2 },
    menuOpen: { x: "200%", opacity: 0.2 },
    default: { x: 0, opacity: 1 }
};
var CallToActionAnimation = function (_a) {
    var children = _a.children, appMode = _a.appMode, callToActionVisible = _a.callToActionVisible;
    return (themeUi.jsx(framerMotion.motion.div, { initial: "idle", transition: { duration: duration }, animate: callToActionVisible ? appMode : "idle", variants: callToActionVariants }, children));
};

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
    var className = _a.className, _b = _a.links, links = _b === void 0 ? [] : _b, _c = _a.callToAction, callToAction = _c === void 0 ? null : _c, _d = _a.callToActionVisible, callToActionVisible = _d === void 0 ? true : _d, appMode = _a.appMode, toggleMenu = _a.toggleMenu;
    return (themeUi.jsx(themeUi.Box, { as: "nav", sx: outerWrapperStyles$1, className: className },
        themeUi.jsx(AvatarAnimation, { appMode: appMode },
            themeUi.jsx(atoms.Avatar, { sx: avatarStyles, onClick: toggleMenu })),
        themeUi.jsx(themeUi.Box, { sx: menuItemsStyles },
            themeUi.jsx(MenuAnimation, { appMode: appMode },
                themeUi.jsx(Menu, { links: links })),
            themeUi.jsx(CallToActionAnimation, { callToActionVisible: callToActionVisible, appMode: appMode }, callToAction ? (themeUi.jsx(atoms.Tab, { href: callToAction.href }, callToAction.title)) : null))));
};
//# sourceMappingURL=index.es.js.map

var wrapperStyles = {
    display: "grid",
    overflowX: "hidden",
    minHeight: "100vh"
};
//# sourceMappingURL=styles.js.map

var InnerLayout = function (_a) {
    var className = _a.className, children = _a.children;
    var _b = useStateValue(), send = _b.send, current = _b.current, callToActionVisible = _b.callToActionVisible, siteMetaData = _b.siteMetaData;
    var toggleMenu = react.useCallback(function () { return send({ type: "TOGGLE" }); }, [send]);
    var appMode = current.toStrings()[0];
    return (themeUi.jsx(themeUi.Box, { className: className, sx: wrapperStyles },
        themeUi.jsx(HeaderSection, __assign({ appMode: appMode, toggleMenu: toggleMenu, callToActionVisible: callToActionVisible }, siteMetaData)),
        children,
        themeUi.jsx(Footer, __assign({}, siteMetaData))));
};

var PageLayout = function (_a) {
    var className = _a.className, children = _a.children, siteMetaData = _a.siteMetaData;
    return (themeUi.jsx(StateProvider, { siteMetaData: siteMetaData },
        themeUi.jsx(core.Global, { styles: function (theme) { return theme.globals; } }),
        themeUi.jsx(InnerLayout, { className: className, siteMetaData: siteMetaData }, children)));
};

exports.PageLayout = PageLayout;
exports.useStateValue = useStateValue;
//# sourceMappingURL=index.js.map
