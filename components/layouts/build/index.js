'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var themeUi = require('theme-ui');
var core = require('@emotion/core');
var react = require('react');
var react$1 = require('@xstate/react');
var xstate = require('xstate');
var molecules = require('@offcourse/molecules');

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
    initial: "default",
    states: {
        default: __assign({ entry: "updateLinks", on: {
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
});

var updateLinks = xstate.assign({
    siteMetaData: function (_a, _event) {
        var siteMetaData = _a.siteMetaData;
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

var actions = /*#__PURE__*/Object.freeze({
    __proto__: null,
    updateLinks: updateLinks,
    updateSections: updateSections
});

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
    var _b = react$1.useMachine(appStateMachine, {
        devTools: true,
        actions: actions,
        context: { siteMetaData: siteMetaData }
    }), current = _b[0], send = _b[1];
    var appMode = current.toStrings()[0];
    var callToActionVisible = current.context.sections
        ? !current.context.sections["ContactSection"]
        : true;
    var registerSection = react.useCallback(function (_a) {
        var role = _a.role, isVisible = _a.isVisible;
        send({ type: "UPDATE_SECTIONS", payload: { role: role, isVisible: isVisible } });
    }, [send]);
    return (themeUi.jsx(StateContext.Provider, { value: __assign({ appMode: appMode,
            current: current,
            send: send,
            registerSection: registerSection,
            callToActionVisible: callToActionVisible }, current.context) }, children));
};
var useStateValue = function () { return react.useContext(StateContext); };

var wrapperStyles = {
    display: "grid",
    overflowX: "hidden",
    minHeight: "100vh"
};

var InnerLayout = function (_a) {
    var className = _a.className, children = _a.children;
    var _b = useStateValue(), send = _b.send, current = _b.current, callToActionVisible = _b.callToActionVisible, siteMetaData = _b.siteMetaData;
    var toggleMenu = react.useCallback(function () { return send({ type: "TOGGLE" }); }, [send]);
    var appMode = current.toStrings()[0];
    return (themeUi.jsx(themeUi.Box, { className: className, sx: wrapperStyles },
        themeUi.jsx(molecules.Header, __assign({ appMode: appMode, toggleMenu: toggleMenu, callToActionVisible: callToActionVisible }, siteMetaData)),
        children,
        themeUi.jsx(molecules.Footer, __assign({}, siteMetaData))));
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
