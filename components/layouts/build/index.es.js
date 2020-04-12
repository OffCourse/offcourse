import { jsx, Box } from 'theme-ui';
import { Global } from '@emotion/core';
import { createContext, useContext, useCallback } from 'react';
import { useMachine } from '@xstate/react';
import { createMachine, assign } from 'xstate';
import { Header, Footer, SEO } from '@offcourse/molecules';

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
var appStateMachine = createMachine({
    id: "appState",
    initial: "default",
    states: {
        default: __assign({ entry: ["updateLinks", "callToActionVisible"], on: {
                TOGGLE: "menuOpen"
            } }, callToAction),
        menuOpen: {
            on: { TOGGLE: "default" }
        }
    },
    on: {
        UPDATE_SECTIONS: {
            actions: ["updateSections", "callToActionVisible"]
        }
    }
});
//# sourceMappingURL=machine.js.map

var updateLinks = assign({
    siteMetaData: function (_a, _event) {
        var siteMetaData = _a.siteMetaData, path = _a.path;
        var pathTitle = path.replace(/\//, "") || "home";
        var links = siteMetaData.links.filter(function (_a) {
            var title = _a.title;
            return title !== pathTitle;
        });
        return __assign(__assign({}, siteMetaData), { links: links });
    }
});
var callToActionVisible = assign({
    callToActionVisible: function (_a) {
        var sections = _a.sections, path = _a.path;
        if (path !== "/") {
            return false;
        }
        return sections ? !sections["ContactSection"] : true;
    }
});
var updateSections = assign({
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
    updateLinks: updateLinks,
    callToActionVisible: callToActionVisible,
    updateSections: updateSections
});

var StateContext = createContext({
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
    var children = _a.children, siteMetaData = _a.siteMetaData, path = _a.path;
    // @ts-ignore
    var _b = useMachine(appStateMachine, {
        devTools: true,
        actions: actions,
        context: { path: path, callToActionVisible: true, siteMetaData: siteMetaData }
    }), current = _b[0], send = _b[1];
    var appMode = current.toStrings()[0];
    var registerSection = useCallback(function (_a) {
        var role = _a.role, isVisible = _a.isVisible;
        send({ type: "UPDATE_SECTIONS", payload: { role: role, isVisible: isVisible } });
    }, [send]);
    return (jsx(StateContext.Provider, { value: __assign({ appMode: appMode,
            current: current,
            send: send,
            registerSection: registerSection }, current.context) }, children));
};
var useStateValue = function () { return useContext(StateContext); };
//# sourceMappingURL=state.js.map

var wrapperStyles = {
    overflowX: "hidden",
    minHeight: "100vh",
};
//# sourceMappingURL=styles.js.map

var InnerLayout = function (_a) {
    var className = _a.className, children = _a.children;
    var _b = useStateValue(), send = _b.send, current = _b.current, callToActionVisible = _b.callToActionVisible, siteMetaData = _b.siteMetaData;
    var toggleMenu = useCallback(function () { return send({ type: "TOGGLE" }); }, [send]);
    var appMode = current.toStrings()[0];
    return (jsx(Box, { className: className, sx: wrapperStyles },
        jsx(Header, __assign({ key: "header", appMode: appMode, toggleMenu: toggleMenu, callToActionVisible: callToActionVisible }, siteMetaData)),
        children,
        jsx(Footer, __assign({}, siteMetaData))));
};

var PageLayout = function (_a) {
    var className = _a.className, children = _a.children, siteMetaData = _a.siteMetaData, path = _a.path, pageData = _a.pageData;
    return (jsx(StateProvider, { path: path, siteMetaData: siteMetaData },
        jsx(SEO, { pageData: pageData, siteMetaData: siteMetaData }),
        jsx(Global, { styles: function (theme) { return theme.globals; } }),
        jsx(InnerLayout, { className: className, siteMetaData: siteMetaData }, children)));
};

export { PageLayout, useStateValue };
//# sourceMappingURL=index.es.js.map
