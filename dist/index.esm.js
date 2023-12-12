import React, { Children, isValidElement, cloneElement, useRef, useEffect, useState, useMemo, useReducer, useCallback, createContext, useContext } from 'react';
import styled, { keyframes, css, useTheme, createGlobalStyle } from 'styled-components';
import { space, flexbox, layout } from 'styled-system';
import get from 'lodash/get';
import noop from 'lodash/noop';
import debounce from 'lodash/debounce';
import throttle from 'lodash/throttle';
import { Link as Link$1, NavLink, useLocation, matchPath } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
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

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __spreadArray(to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

var getThemeValue = function (path, fallback) { return function (theme) {
    return get(theme, path, fallback);
}; };

var rotate$1 = keyframes(templateObject_1$K || (templateObject_1$K = __makeTemplateObject(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"], ["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"])));
var spinStyle = css(templateObject_2$f || (templateObject_2$f = __makeTemplateObject(["\n  animation: ", " 2s linear infinite;\n"], ["\n  animation: ", " 2s linear infinite;\n"])), rotate$1);
var Svg = styled.svg(templateObject_3$8 || (templateObject_3$8 = __makeTemplateObject(["\n  fill: ", ";\n  flex-shrink: 0;\n\n  ", "\n  ", "\n"], ["\n  fill: ", ";\n  flex-shrink: 0;\n\n  ", "\n  ", "\n"])), function (_a) {
    var theme = _a.theme, color = _a.color;
    return getThemeValue("colors." + color, color)(theme);
}, function (_a) {
    var spin = _a.spin;
    return spin && spinStyle;
}, space);
Svg.defaultProps = {
    color: "text",
    width: "20px",
    xmlns: "http://www.w3.org/2000/svg",
    spin: false,
};
var templateObject_1$K, templateObject_2$f, templateObject_3$8;

var Icon$1w = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM15.88 8.29L10 14.17L8.12 12.29C7.73 11.9 7.1 11.9 6.71 12.29C6.32 12.68 6.32 13.31 6.71 13.7L9.3 16.29C9.69 16.68 10.32 16.68 10.71 16.29L17.3 9.7C17.69 9.31 17.69 8.68 17.3 8.29C16.91 7.9 16.27 7.9 15.88 8.29Z" })));
};

var Icon$1v = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 7C12.55 7 13 7.45 13 8V12C13 12.55 12.55 13 12 13C11.45 13 11 12.55 11 12V8C11 7.45 11.45 7 12 7ZM11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM13 17H11V15H13V17Z" })));
};

var Icon$1u = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22ZM12 4C16.42 4 20 7.58 20 12C20 13.85 19.37 15.55 18.31 16.9L7.1 5.69C8.45 4.63 10.15 4 12 4ZM5.69 7.1L16.9 18.31C15.55 19.37 13.85 20 12 20C7.58 20 4 16.42 4 12C4 10.15 4.63 8.45 5.69 7.1Z" })));
};

var Icon$1t = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M11 7H13V9H11V7ZM12 17C12.55 17 13 16.55 13 16V12C13 11.45 12.55 11 12 11C11.45 11 11 11.45 11 12V16C11 16.55 11.45 17 12 17ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" })));
};

var getColor$1 = function (_a) {
    var color = _a.color, theme = _a.theme;
    return getThemeValue("colors." + color, color)(theme);
};
var getFontSize = function (_a) {
    var fontSize = _a.fontSize, small = _a.small;
    return small ? "14px" : fontSize || "16px";
};
var Text = styled.div(templateObject_1$J || (templateObject_1$J = __makeTemplateObject(["\n  color: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n  line-height: 1.5;\n  ", "\n  ", "\n"], ["\n  color: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n  line-height: 1.5;\n  ", "\n  ", "\n"])), getColor$1, getFontSize, function (_a) {
    var bold = _a.bold;
    return (bold ? 600 : 400);
}, function (_a) {
    var textTransform = _a.textTransform;
    return textTransform && "text-transform: " + textTransform + ";";
}, space);
Text.defaultProps = {
    color: "text",
    small: false,
};
var templateObject_1$J;

var getExternalLinkProps = function () { return ({
    target: "_blank",
    rel: "noreferrer noopener",
}); };

var sizes$1 = {
    SM: "sm",
    MD: "md",
};
var variants$1 = {
    PRIMARY: "primary",
    SECONDARY: "secondary",
    TERTIARY: "tertiary",
    TEXT: "text",
    DANGER: "danger",
    SUBTLE: "subtle",
    SUCCESS: "success",
};

var getDisabledStyles = function (_a) {
    var isLoading = _a.isLoading, theme = _a.theme;
    if (isLoading === true) {
        return "\n      &:disabled,\n      &.button--disabled {\n        cursor: not-allowed;\n      }\n    ";
    }
    return "\n    &:disabled,\n    &.button--disabled {\n      background-color: " + theme.colors.backgroundDisabled + ";\n      border-color: " + theme.colors.backgroundDisabled + ";\n      box-shadow: none;\n      color: " + theme.colors.textDisabled + ";\n      cursor: not-allowed;\n    }\n  ";
};
var removePointerEvents = function (_a) {
    var disabled = _a.disabled, as = _a.as;
    if (disabled && as && as !== "button") {
        return "\n      pointer-events: none;\n    ";
    }
    return "";
};
var getButtonVariantProp = function (prop) { return function (_a) {
    var theme = _a.theme, _b = _a.variant, variant = _b === void 0 ? variants$1.PRIMARY : _b;
    return theme.button[variant][prop];
}; };
var StyledButton = styled.button(templateObject_1$I || (templateObject_1$I = __makeTemplateObject(["\n  align-items: center;\n  background-color: ", ";\n  border: ", ";\n  border-radius: 16px;\n  box-shadow: ", ";\n  color: ", ";\n  cursor: pointer;\n  display: inline-flex;\n  font-family: inherit;\n  font-size: 16px;\n  font-weight: 600;\n  /* max-content instead of auto for Safari fix */\n  width: ", ";\n  height: ", ";\n  line-height: 1;\n  letter-spacing: 0.03em;\n  justify-content: center;\n  outline: 0;\n  padding: ", ";\n  /* transition: background-color 0.2s */\n  opacity: ", ";\n\n  &:hover:not(:disabled):not(.button--disabled):not(:active) {\n    background-color: ", ";\n    border-color: ", ";\n  }\n\n  &:focus:not(:active) {\n    box-shadow: 0 0 0 2px ", ";\n  }\n\n  &:active {\n    background-color: ", ";\n    box-shadow: ", ";\n  }\n\n  ", "\n  ", "\n  ", "\n"], ["\n  align-items: center;\n  background-color: ", ";\n  border: ", ";\n  border-radius: 16px;\n  box-shadow: ", ";\n  color: ", ";\n  cursor: pointer;\n  display: inline-flex;\n  font-family: inherit;\n  font-size: 16px;\n  font-weight: 600;\n  /* max-content instead of auto for Safari fix */\n  width: ", ";\n  height: ", ";\n  line-height: 1;\n  letter-spacing: 0.03em;\n  justify-content: center;\n  outline: 0;\n  padding: ", ";\n  /* transition: background-color 0.2s */\n  opacity: ", ";\n\n  &:hover:not(:disabled):not(.button--disabled):not(:active) {\n    background-color: ", ";\n    border-color: ", ";\n  }\n\n  &:focus:not(:active) {\n    box-shadow: 0 0 0 2px ", ";\n  }\n\n  &:active {\n    background-color: ", ";\n    box-shadow: ", ";\n  }\n\n  ", "\n  ", "\n  ", "\n"])), getButtonVariantProp("background"), getButtonVariantProp("border"), getButtonVariantProp("boxShadow"), getButtonVariantProp("color"), function (_a) {
    var fullWidth = _a.fullWidth;
    return (fullWidth ? "100%" : "max-content");
}, function (_a) {
    var size = _a.size;
    return (size === "sm" ? "32px" : "48px");
}, function (_a) {
    var size = _a.size;
    return (size === "sm" ? "0 16px" : "0 24px");
}, function (_a) {
    var isLoading = _a.isLoading;
    return (isLoading ? 0.5 : 1);
}, getButtonVariantProp("backgroundHover"), getButtonVariantProp("borderColorHover"), function (_a) {
    var theme = _a.theme;
    return theme.colors.secondary;
}, getButtonVariantProp("backgroundActive"), getButtonVariantProp("boxShadowActive"), getDisabledStyles, removePointerEvents, space);
StyledButton.defaultProps = {
    fullWidth: false,
    type: "button",
};
var templateObject_1$I;

var Button = function (_a) {
    var startIcon = _a.startIcon, endIcon = _a.endIcon, children = _a.children, external = _a.external, isLoading = _a.isLoading, disabled = _a.disabled, props = __rest(_a, ["startIcon", "endIcon", "children", "external", "isLoading", "disabled"]);
    var internalProps = external ? getExternalLinkProps() : {};
    var isDisabled = isLoading || disabled;
    return (React.createElement(StyledButton, __assign({}, internalProps, props, { isLoading: isLoading, disabled: isDisabled }),
        React.isValidElement(startIcon) &&
            React.cloneElement(startIcon, {
                mr: "0.5rem",
            }),
        children,
        React.isValidElement(endIcon) &&
            React.cloneElement(endIcon, {
                ml: "0.5rem",
            })));
};
Button.defaultProps = {
    variant: variants$1.PRIMARY,
    size: sizes$1.MD,
    external: false,
    isLoading: false,
    disabled: false,
};

var IconButton = styled(Button)(templateObject_1$H || (templateObject_1$H = __makeTemplateObject(["\n  padding: 0;\n  width: ", ";\n"], ["\n  padding: 0;\n  width: ", ";\n"])), function (_a) {
    var size = _a.size;
    return (size === "sm" ? "32px" : "48px");
});
var templateObject_1$H;

var Icon$1s = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M18 13H13V18C13 18.55 12.55 19 12 19C11.45 19 11 18.55 11 18V13H6C5.45 13 5 12.55 5 12C5 11.45 5.45 11 6 11H11V6C11 5.45 11.45 5 12 5C12.55 5 13 5.45 13 6V11H18C18.55 11 19 11.45 19 12C19 12.55 18.55 13 18 13Z" })));
};

var Icon$1r = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M19 11H7.82998L12.71 6.12C13.1 5.73 13.1 5.09 12.71 4.7C12.32 4.31 11.69 4.31 11.3 4.7L4.70998 11.29C4.31998 11.68 4.31998 12.31 4.70998 12.7L11.3 19.29C11.69 19.68 12.32 19.68 12.71 19.29C13.1 18.9 13.1 18.27 12.71 17.88L7.82998 13H19C19.55 13 20 12.55 20 12C20 11.45 19.55 11 19 11Z" })));
};

var Icon$1q = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 25" }, props),
        React.createElement("path", { d: "M11 5V16.17L6.11997 11.29C5.72997 10.9 5.08997 10.9 4.69997 11.29C4.30997 11.68 4.30997 12.31 4.69997 12.7L11.29 19.29C11.68 19.68 12.31 19.68 12.7 19.29L19.29 12.7C19.68 12.31 19.68 11.68 19.29 11.29C18.9 10.9 18.27 10.9 17.88 11.29L13 16.17V5C13 4.45 12.55 4 12 4C11.45 4 11 4.45 11 5Z" })));
};

var Icon$1p = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M8.71005 11.71L11.3001 14.3C11.6901 14.69 12.3201 14.69 12.7101 14.3L15.3001 11.71C15.9301 11.08 15.4801 10 14.5901 10H9.41005C8.52005 10 8.08005 11.08 8.71005 11.71Z" })));
};

var Icon$1o = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M8.71005 12.29L11.3001 9.69997C11.6901 9.30997 12.3201 9.30997 12.7101 9.69997L15.3001 12.29C15.9301 12.92 15.4801 14 14.5901 14H9.41005C8.52005 14 8.08005 12.92 8.71005 12.29Z" })));
};

var Icon$1n = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 25" }, props),
        React.createElement("path", { d: "M5 13.0022H16.17L11.29 17.8822C10.9 18.2722 10.9 18.9122 11.29 19.3022C11.68 19.6922 12.31 19.6922 12.7 19.3022L19.29 12.7122C19.68 12.3222 19.68 11.6922 19.29 11.3022L12.71 4.70217C12.32 4.31217 11.69 4.31217 11.3 4.70217C10.91 5.09217 10.91 5.72217 11.3 6.11217L16.17 11.0022H5C4.45 11.0022 4 11.4522 4 12.0022C4 12.5522 4.45 13.0022 5 13.0022Z" })));
};

var Icon$1m = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 6V7.79C12 8.24 12.54 8.46 12.85 8.14L15.64 5.35C15.84 5.15 15.84 4.84 15.64 4.64L12.85 1.85C12.54 1.54 12 1.76 12 2.21V4C7.58 4 4 7.58 4 12C4 13.04 4.2 14.04 4.57 14.95C4.84 15.62 5.7 15.8 6.21 15.29C6.48 15.02 6.59 14.61 6.44 14.25C6.15 13.56 6 12.79 6 12C6 8.69 8.69 6 12 6ZM17.79 8.71C17.52 8.98 17.41 9.4 17.56 9.75C17.84 10.45 18 11.21 18 12C18 15.31 15.31 18 12 18V16.21C12 15.76 11.46 15.54 11.15 15.86L8.36 18.65C8.16 18.85 8.16 19.16 8.36 19.36L11.15 22.15C11.46 22.46 12 22.24 12 21.8V20C16.42 20 20 16.42 20 12C20 10.96 19.8 9.96 19.43 9.05C19.16 8.38 18.3 8.2 17.79 8.71Z" })));
};

var Icon$1l = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 16 16" }, props),
        React.createElement("circle", { cx: "8", cy: "8", r: "8", fill: "#F0B90B" }),
        React.createElement("path", { d: "M5.01656 8.00006L3.79256 9.23256L2.56006 8.00006L3.79256 6.76756L5.01656 8.00006ZM8.00006 5.01656L10.1081 7.12456L11.3406 5.89206L9.23256 3.79256L8.00006 2.56006L6.76756 3.79256L4.66806 5.89206L5.90056 7.12456L8.00006 5.01656ZM12.2076 6.76756L10.9836 8.00006L12.2161 9.23256L13.4401 8.00006L12.2076 6.76756ZM8.00006 10.9836L5.89206 8.87556L4.66806 10.1081L6.77606 12.2161L8.00006 13.4401L9.23256 12.2076L11.3406 10.0996L10.1081 8.87556L8.00006 10.9836ZM8.00006 9.23256L9.23256 8.00006L8.00006 6.76756L6.76756 8.00006L8.00006 9.23256Z", fill: "#FFFDFA" })));
};

var Icon$1k = function (props) {
    var theme = useTheme();
    var primaryColor = theme.isDark ? "#3C3742" : "#e9eaeb";
    var secondaryColor = theme.isDark ? "#666171" : "#bdc2c4";
    return (React.createElement(Svg, __assign({ viewBox: "0 0 72 72" }, props),
        React.createElement("path", { d: "M72 36C72 55.8823 55.8823 72 36 72C16.1177 72 0 55.8823 0 36C0 16.1177 16.1177 0 36 0C55.8823 0 72 16.1177 72 36Z", fill: primaryColor }),
        React.createElement("mask", { id: "mask0", "mask-type": "alpha", maskUnits: "userSpaceOnUse", x: "3", y: "3", width: "66", height: "66" },
            React.createElement("path", { d: "M68.25 36C68.25 53.8112 53.8112 68.25 36 68.25C18.1888 68.25 3.75 53.8112 3.75 36C3.75 18.1888 18.1888 3.75 36 3.75C53.8112 3.75 68.25 18.1888 68.25 36Z", fill: "#C4C4C4" })),
        React.createElement("g", { mask: "url(#mask0)" },
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M20.9927 23.2654C26.1289 23.1362 30.0824 27.7278 29.2039 32.7879L27.6838 41.5445C30.2298 41.0514 32.9304 40.7875 35.7229 40.7875C37.7063 40.7875 39.6424 40.9206 41.5089 41.1741L49.2862 29.5726C51.7713 25.8657 56.7909 24.8751 60.4978 27.3602C64.7827 30.2326 65.3155 36.33 61.5938 39.9021L55.2585 45.9828C59.9045 49.0009 63.1305 53.2977 63.1306 58.4066V62.322C63.1306 67.644 59.6097 72.0998 54.6877 75.1077C49.7272 78.1391 43.0165 79.9412 35.7229 79.9412C28.4292 79.9412 21.7186 78.1391 16.7581 75.1077C11.836 72.0998 8.31519 67.644 8.31519 62.322V58.4067C8.31522 54.4286 10.2963 50.9169 13.3384 48.1585L13.0101 31.6154C12.9208 27.115 16.4929 23.3785 20.9927 23.2654ZM15.617 49.1514C15.6003 49.0112 15.5903 48.8688 15.5874 48.7246L15.2471 31.571C15.1822 28.3014 17.7798 25.5842 21.049 25.502C24.7712 25.4084 27.637 28.733 26.9996 32.4052L24.8971 44.5163C25.6681 44.2915 26.4607 44.0899 27.2726 43.9131C29.9138 43.338 32.7585 43.0248 35.7229 43.0248C38.1625 43.0248 40.5211 43.237 42.7519 43.6326C42.8725 43.2609 43.0459 42.8995 43.2742 42.5589L51.1446 30.8185C52.9416 28.1379 56.5714 27.4216 59.252 29.2186C62.3505 31.2957 62.7358 35.7049 60.0446 38.2879L51.5469 46.4441C52.264 46.7988 52.9486 47.1771 53.5975 47.577C58.1074 50.3568 60.8932 54.1829 60.8932 58.4066V62.322C60.8932 70.8172 49.6241 77.7039 35.7229 77.7039C21.8217 77.7039 10.5525 70.8172 10.5525 62.322V58.4067C10.5526 54.9322 12.4377 51.7266 15.617 49.1514Z", fill: secondaryColor }),
            React.createElement("path", { d: "M60.8932 62.3221C60.8932 70.8173 49.624 77.704 35.7228 77.704C21.8216 77.704 10.5525 70.8173 10.5525 62.3221V58.4067H60.8932V62.3221Z", fill: primaryColor }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M26.9995 32.4051C27.637 28.733 24.7711 25.4083 21.0489 25.5019C17.7797 25.5842 15.1821 28.3013 15.247 31.5709L15.5874 48.7245C15.5903 48.8687 15.6002 49.0111 15.617 49.1513C12.4376 51.7266 10.5525 54.9321 10.5525 58.4066C10.5525 66.9018 21.8216 73.7885 35.7228 73.7885C49.624 73.7885 60.8932 66.9018 60.8932 58.4066C60.8932 53.5752 57.2481 49.264 51.5468 46.444L60.0445 38.2879C62.7358 35.7048 62.3504 31.2956 59.252 29.2185C56.5714 27.4215 52.9416 28.1378 51.1446 30.8184L43.2742 42.5588C43.0458 42.8994 42.8724 43.2609 42.7519 43.6326C40.521 43.2369 38.1625 43.0248 35.7228 43.0248C31.8473 43.0248 28.1763 43.56 24.897 44.5162L26.9995 32.4051Z", fill: primaryColor }),
            React.createElement("path", { d: "M32.0873 57.2881C32.0873 59.6049 30.8352 61.4831 29.2906 61.4831C27.746 61.4831 26.4939 59.6049 26.4939 57.2881C26.4939 54.9712 27.746 53.093 29.2906 53.093C30.8352 53.093 32.0873 54.9712 32.0873 57.2881Z", fill: secondaryColor }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M28.891 54.0353C29.461 54.8903 29.8499 56.1359 29.8499 57.5677C29.8499 58.1855 30.3508 58.6864 30.9686 58.6864C31.5864 58.6864 32.0873 58.1855 32.0873 57.5677C32.0873 55.7558 31.5997 54.0649 30.7526 52.7943C29.9107 51.5314 28.6248 50.5759 27.0532 50.5759C25.4816 50.5759 24.1957 51.5314 23.3538 52.7943C22.5067 54.0649 22.0191 55.7558 22.0191 57.5677C22.0191 58.55 22.1622 59.4908 22.4244 60.3463C22.6055 60.937 23.2311 61.2691 23.8218 61.088C24.4125 60.9069 24.7446 60.2813 24.5635 59.6906C24.3685 59.0543 24.2565 58.3349 24.2565 57.5677C24.2565 56.1359 24.6454 54.8903 25.2154 54.0353C25.7906 53.1725 26.4624 52.8133 27.0532 52.8133C27.644 52.8133 28.3158 53.1725 28.891 54.0353Z", fill: secondaryColor }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M48.1883 54.0353C48.7582 54.8903 49.1472 56.1359 49.1472 57.5677C49.1472 58.1855 49.648 58.6864 50.2658 58.6864C50.8837 58.6864 51.3845 58.1855 51.3845 57.5677C51.3845 55.7558 50.8969 54.0649 50.0498 52.7943C49.208 51.5314 47.9221 50.5759 46.3505 50.5759C44.7788 50.5759 43.4929 51.5314 42.6511 52.7943C41.804 54.0649 41.3164 55.7558 41.3164 57.5677C41.3164 58.55 41.4594 59.4908 41.7216 60.3463C41.9027 60.937 42.5284 61.2691 43.1191 61.088C43.7098 60.9069 44.0418 60.2813 43.8608 59.6906C43.6657 59.0543 43.5538 58.3349 43.5538 57.5677C43.5538 56.1359 43.9427 54.8903 44.5127 54.0353C45.0879 53.1725 45.7597 52.8133 46.3505 52.8133C46.9412 52.8133 47.613 53.1725 48.1883 54.0353Z", fill: secondaryColor }),
            React.createElement("path", { d: "M51.3844 57.2881C51.3844 59.6049 50.1323 61.4831 48.5877 61.4831C47.0431 61.4831 45.791 59.6049 45.791 57.2881C45.791 54.9712 47.0431 53.093 48.5877 53.093C50.1323 53.093 51.3844 54.9712 51.3844 57.2881Z", fill: secondaryColor }),
            React.createElement("path", { d: "M34.0221 25.9463V25.2697C34.0221 24.32 34.2121 23.5247 34.5919 22.8836C34.9956 22.2426 35.5297 21.6134 36.1945 20.9961C36.8118 20.4026 37.4172 19.8921 38.0108 19.4648C38.6043 19.0374 39.091 18.5863 39.4709 18.1115C39.8508 17.6367 40.0407 17.0787 40.0407 16.4377C40.0407 15.5118 39.7083 14.8589 39.0436 14.479C38.4025 14.0754 37.3223 13.8736 35.8028 13.8736C34.8056 13.8736 33.8203 14.0041 32.8469 14.2653C31.8735 14.5027 31.0425 14.8114 30.354 15.1912V10.3835C31.2325 9.95615 32.2652 9.61189 33.4523 9.35073C34.6632 9.08957 35.9808 8.95898 37.4054 8.95898C40.1594 8.95898 42.2606 9.5644 43.7088 10.7752C45.1571 11.9623 45.8812 13.6005 45.8812 15.6898C45.8812 17.0194 45.6082 18.0996 45.0621 18.9306C44.5161 19.7378 43.7207 20.5688 42.6761 21.4235C41.7976 22.1595 41.0616 22.8005 40.4681 23.3466C39.8745 23.8689 39.5777 24.5812 39.5777 25.4834V25.9463H34.0221ZM33.7728 32.2498V28.1187H39.7914V32.2498H33.7728Z", fill: secondaryColor })),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M71.9838 37.09L69.7348 37.0231C69.7449 36.6834 69.75 36.3423 69.75 36C69.75 35.6577 69.7449 35.3166 69.7348 34.9769L71.9838 34.91C71.9946 35.272 72 35.6354 72 36C72 36.3646 71.9946 36.728 71.9838 37.09ZM71.8544 32.7398L69.6134 32.941C69.5523 32.2603 69.471 31.5857 69.3702 30.9176L71.5949 30.5818C71.7025 31.2945 71.7892 32.014 71.8544 32.7398ZM71.2052 28.4414L69.0048 28.9115C68.8622 28.2441 68.6999 27.5841 68.5185 26.932L70.6861 26.3289C70.8798 27.0248 71.053 27.7292 71.2052 28.4414ZM70.0397 24.2525L67.9128 24.9864C67.6906 24.3424 67.4494 23.7072 67.1899 23.0815L69.2683 22.2196C69.5452 22.8874 69.8026 23.5652 70.0397 24.2525ZM68.3746 20.237L66.3524 21.2235C66.0538 20.6114 65.7373 20.0097 65.4034 19.419L67.3622 18.3119C67.7183 18.942 68.0561 19.584 68.3746 20.237ZM66.2353 16.4517L64.347 17.6751C63.977 17.104 63.5901 16.5448 63.1872 15.998L64.9984 14.6631C65.4281 15.2462 65.8407 15.8426 66.2353 16.4517ZM63.656 12.952L61.9283 14.3934C61.4925 13.8711 61.0413 13.3621 60.5752 12.8671L62.2132 11.3246C62.7102 11.8523 63.1914 12.3951 63.656 12.952ZM60.6754 9.78678L59.1329 11.4248C58.6379 10.9587 58.1289 10.5074 57.6066 10.0717L59.048 8.34397C59.6049 8.80865 60.1477 9.28984 60.6754 9.78678ZM57.3369 7.00159L56.002 8.8128C55.4552 8.40985 54.896 8.02303 54.3249 7.65302L55.5482 5.76468C56.1574 6.15933 56.7538 6.57187 57.3369 7.00159ZM53.6881 4.63782L52.581 6.5966C51.9903 6.26271 51.3886 5.94615 50.7765 5.64759L51.7629 3.62536C52.416 3.94392 53.058 4.28165 53.6881 4.63782ZM49.7804 2.7317L48.9185 4.81008C48.2928 4.55061 47.6576 4.30943 47.0136 4.08723L47.7475 1.96028C48.4348 2.19743 49.1126 2.4548 49.7804 2.7317ZM45.6711 1.31385L45.068 3.48152C44.4159 3.3001 43.7559 3.13777 43.0885 2.99517L43.5586 0.794831C44.2708 0.947003 44.9752 1.12024 45.6711 1.31385ZM41.4182 0.405049L41.0824 2.62985C40.4143 2.529 39.7397 2.44772 39.059 2.38662L39.2602 0.14563C39.986 0.210778 40.7055 0.297466 41.4182 0.405049ZM37.09 0.0161859C36.728 0.0054207 36.3646 0 36 0C35.6354 0 35.272 0.00542073 34.91 0.016186L34.9769 2.26519C35.3166 2.25509 35.6577 2.25 36 2.25C36.3423 2.25 36.6834 2.25509 37.0231 2.26519L37.09 0.0161859ZM32.7398 0.145631L32.941 2.38662C32.2603 2.44772 31.5857 2.529 30.9176 2.62985L30.5818 0.405049C31.2945 0.297467 32.014 0.210779 32.7398 0.145631ZM28.4414 0.794832L28.9115 2.99517C28.2441 3.13777 27.5841 3.3001 26.932 3.48152L26.3289 1.31386C27.0248 1.12024 27.7292 0.947004 28.4414 0.794832ZM24.2525 1.96028L24.9864 4.08723C24.3424 4.30944 23.7072 4.55061 23.0815 4.81008L22.2196 2.7317C22.8874 2.45481 23.5652 2.19743 24.2525 1.96028ZM20.237 3.62536L21.2235 5.64759C20.6114 5.94616 20.0097 6.26272 19.419 6.5966L18.3119 4.63783C18.942 4.28165 19.584 3.94392 20.237 3.62536ZM16.4517 5.76469L17.6751 7.65302C17.104 8.02303 16.5448 8.40985 15.998 8.81281L14.6631 7.00159C15.2462 6.57188 15.8426 6.15933 16.4517 5.76469ZM12.952 8.34398L14.3934 10.0717C13.8711 10.5075 13.3621 10.9587 12.8671 11.4248L11.3246 9.78679C11.8523 9.28984 12.3951 8.80865 12.952 8.34398ZM9.78678 11.3246L11.4248 12.8671C10.9587 13.3621 10.5074 13.8711 10.0717 14.3934L8.34397 12.952C8.80865 12.3951 9.28984 11.8523 9.78678 11.3246ZM7.00159 14.6631L8.8128 15.998C8.40985 16.5448 8.02303 17.104 7.65302 17.6751L5.76468 16.4518C6.15933 15.8426 6.57187 15.2462 7.00159 14.6631ZM4.63782 18.3119L6.5966 19.419C6.26271 20.0097 5.94615 20.6114 5.64759 21.2235L3.62536 20.2371C3.94392 19.584 4.28165 18.942 4.63782 18.3119ZM2.7317 22.2196L4.81008 23.0815C4.55061 23.7072 4.30943 24.3424 4.08723 24.9864L1.96028 24.2525C2.19743 23.5652 2.4548 22.8874 2.7317 22.2196ZM1.31385 26.3289L3.48152 26.932C3.3001 27.5841 3.13777 28.2441 2.99517 28.9115L0.794831 28.4414C0.947003 27.7292 1.12024 27.0248 1.31385 26.3289ZM0.405049 30.5818L2.62985 30.9176C2.529 31.5857 2.44772 32.2603 2.38662 32.941L0.14563 32.7398C0.210778 32.014 0.297466 31.2945 0.405049 30.5818ZM0.0161859 34.91C0.0054207 35.272 0 35.6354 0 36C0 36.3646 0.00542073 36.728 0.016186 37.09L2.26519 37.0231C2.25509 36.6834 2.25 36.3423 2.25 36C2.25 35.6577 2.25509 35.3166 2.26519 34.9769L0.0161859 34.91ZM0.145631 39.2602L2.38662 39.059C2.44772 39.7397 2.529 40.4143 2.62985 41.0824L0.40505 41.4182C0.297467 40.7055 0.210779 39.986 0.145631 39.2602ZM0.794833 43.5586L2.99517 43.0885C3.13777 43.7559 3.3001 44.4159 3.48152 45.068L1.31386 45.6711C1.12024 44.9752 0.947004 44.2708 0.794833 43.5586ZM1.96028 47.7475L4.08723 47.0136C4.30944 47.6576 4.55061 48.2928 4.81008 48.9185L2.7317 49.7804C2.45481 49.1126 2.19743 48.4348 1.96028 47.7475ZM3.62536 51.763L5.64759 50.7765C5.94616 51.3886 6.26272 51.9903 6.5966 52.581L4.63783 53.6881C4.28165 53.058 3.94392 52.416 3.62536 51.763ZM5.76469 55.5482L7.65302 54.3249C8.02303 54.896 8.40985 55.4552 8.81281 56.002L7.00159 57.3369C6.57188 56.7538 6.15933 56.1574 5.76469 55.5482ZM8.34398 59.048L10.0717 57.6066C10.5075 58.1289 10.9587 58.6379 11.4248 59.1329L9.78679 60.6754C9.28984 60.1477 8.80865 59.6049 8.34398 59.048ZM11.3246 62.2132L12.8671 60.5752C13.3621 61.0413 13.8711 61.4925 14.3934 61.9283L12.952 63.656C12.3951 63.1914 11.8523 62.7102 11.3246 62.2132ZM14.6631 64.9984L15.998 63.1872C16.5448 63.5901 17.104 63.977 17.6751 64.347L16.4518 66.2353C15.8426 65.8407 15.2462 65.4281 14.6631 64.9984ZM18.3119 67.3622L19.419 65.4034C20.0097 65.7373 20.6114 66.0538 21.2235 66.3524L20.2371 68.3746C19.584 68.0561 18.942 67.7184 18.3119 67.3622ZM22.2196 69.2683L23.0815 67.1899C23.7072 67.4494 24.3424 67.6906 24.9864 67.9128L24.2525 70.0397C23.5652 69.8026 22.8874 69.5452 22.2196 69.2683ZM26.3289 70.6861L26.932 68.5185C27.5841 68.6999 28.2441 68.8622 28.9115 69.0048L28.4414 71.2052C27.7292 71.053 27.0248 70.8798 26.3289 70.6861ZM30.5818 71.595L30.9176 69.3702C31.5857 69.471 32.2603 69.5523 32.941 69.6134L32.7398 71.8544C32.014 71.7892 31.2945 71.7025 30.5818 71.595ZM34.91 71.9838L34.9769 69.7348C35.3166 69.7449 35.6577 69.75 36 69.75C36.3423 69.75 36.6834 69.7449 37.0231 69.7348L37.09 71.9838C36.728 71.9946 36.3646 72 36 72C35.6354 72 35.272 71.9946 34.91 71.9838ZM39.2602 71.8544L39.059 69.6134C39.7397 69.5523 40.4143 69.471 41.0824 69.3702L41.4182 71.5949C40.7055 71.7025 39.986 71.7892 39.2602 71.8544ZM43.5586 71.2052L43.0885 69.0048C43.7559 68.8622 44.4159 68.6999 45.068 68.5185L45.6711 70.6861C44.9752 70.8798 44.2708 71.053 43.5586 71.2052ZM47.7475 70.0397L47.0136 67.9128C47.6576 67.6906 48.2928 67.4494 48.9185 67.1899L49.7804 69.2683C49.1126 69.5452 48.4348 69.8026 47.7475 70.0397ZM51.7629 68.3746L50.7765 66.3524C51.3886 66.0538 51.9903 65.7373 52.581 65.4034L53.6881 67.3622C53.058 67.7183 52.416 68.0561 51.7629 68.3746ZM55.5482 66.2353L54.3249 64.347C54.896 63.977 55.4552 63.5901 56.002 63.1872L57.3369 64.9984C56.7538 65.4281 56.1574 65.8407 55.5482 66.2353ZM59.048 63.656L57.6066 61.9283C58.1289 61.4925 58.6379 61.0413 59.1329 60.5752L60.6754 62.2132C60.1477 62.7102 59.6049 63.1914 59.048 63.656ZM62.2132 60.6754L60.5752 59.1329C61.0413 58.6379 61.4925 58.1289 61.9283 57.6066L63.656 59.048C63.1914 59.6049 62.7102 60.1477 62.2132 60.6754ZM64.9984 57.3369L63.1872 56.002C63.5901 55.4552 63.977 54.896 64.347 54.3249L66.2353 55.5482C65.8407 56.1574 65.4281 56.7538 64.9984 57.3369ZM67.3622 53.6881L65.4034 52.581C65.7373 51.9903 66.0538 51.3886 66.3524 50.7765L68.3746 51.7629C68.0561 52.416 67.7184 53.058 67.3622 53.6881ZM69.2683 49.7804L67.1899 48.9185C67.4494 48.2928 67.6906 47.6576 67.9128 47.0136L70.0397 47.7475C69.8026 48.4348 69.5452 49.1126 69.2683 49.7804ZM70.6861 45.6711L68.5185 45.068C68.6999 44.4159 68.8622 43.7559 69.0048 43.0885L71.2052 43.5586C71.053 44.2708 70.8798 44.9752 70.6861 45.6711ZM71.595 41.4182L69.3702 41.0824C69.471 40.4143 69.5523 39.7397 69.6134 39.059L71.8544 39.2602C71.7892 39.986 71.7025 40.7055 71.595 41.4182Z", fill: secondaryColor })));
};

var Icon$1j = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M4.5 12H7.5C8.05 12 8.5 11.55 8.5 11V7C8.5 6.45 8.05 6 7.5 6H4.5C3.95 6 3.5 6.45 3.5 7V11C3.5 11.55 3.95 12 4.5 12ZM4.5 19H7.5C8.05 19 8.5 18.55 8.5 18V14C8.5 13.45 8.05 13 7.5 13H4.5C3.95 13 3.5 13.45 3.5 14V18C3.5 18.55 3.95 19 4.5 19ZM10.5 19H13.5C14.05 19 14.5 18.55 14.5 18V14C14.5 13.45 14.05 13 13.5 13H10.5C9.95 13 9.5 13.45 9.5 14V18C9.5 18.55 9.95 19 10.5 19ZM16.5 19H19.5C20.05 19 20.5 18.55 20.5 18V14C20.5 13.45 20.05 13 19.5 13H16.5C15.95 13 15.5 13.45 15.5 14V18C15.5 18.55 15.95 19 16.5 19ZM10.5 12H13.5C14.05 12 14.5 11.55 14.5 11V7C14.5 6.45 14.05 6 13.5 6H10.5C9.95 6 9.5 6.45 9.5 7V11C9.5 11.55 9.95 12 10.5 12ZM15.5 7V11C15.5 11.55 15.95 12 16.5 12H19.5C20.05 12 20.5 11.55 20.5 11V7C20.5 6.45 20.05 6 19.5 6H16.5C15.95 6 15.5 6.45 15.5 7Z" })));
};

var Icon$1i = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 25 24" }, props),
        React.createElement("path", { d: "M19.2 3H5.19995C4.09995 3 3.19995 3.9 3.19995 5V19C3.19995 20.1 4.09995 21 5.19995 21H19.2C20.3 21 21.2 20.1 21.2 19V5C21.2 3.9 20.3 3 19.2 3ZM19.2 19H5.19995V5H19.2V19Z", fill: "#1FC7D4" }),
        React.createElement("path", { d: "M11.45 7.72021H6.44995V9.22022H11.45V7.72021Z", fill: "#1FC7D4" }),
        React.createElement("path", { d: "M18.2 15.75H13.2V17.25H18.2V15.75Z", fill: "#1FC7D4" }),
        React.createElement("path", { d: "M18.2 13.25H13.2V14.75H18.2V13.25Z", fill: "#1FC7D4" }),
        React.createElement("path", { d: "M8.19995 18H9.69995V16H11.7V14.5H9.69995V12.5H8.19995V14.5H6.19995V16H8.19995V18Z", fill: "#1FC7D4" }),
        React.createElement("path", { d: "M14.29 10.95L15.7 9.54L17.11 10.95L18.17 9.89L16.76 8.47L18.17 7.06L17.11 6L15.7 7.41L14.29 6L13.23 7.06L14.64 8.47L13.23 9.89L14.29 10.95Z", fill: "#1FC7D4" })));
};

var Icon$1h = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 18 13" }, props),
        React.createElement("path", { d: "M6 10.2001L2.5 6.70007C2.11 6.31007 1.49 6.31007 1.1 6.70007C0.709995 7.09007 0.709995 7.71007 1.1 8.10007L5.29 12.2901C5.68 12.6801 6.31 12.6801 6.7 12.2901L17.3 1.70007C17.69 1.31007 17.69 0.690068 17.3 0.300068C16.91 -0.0899316 16.29 -0.0899316 15.9 0.300068L6 10.2001Z" })));
};

var Icon$1g = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z" })));
};

var Icon$1f = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M14.71 15.88L10.83 12L14.71 8.12001C15.1 7.73001 15.1 7.10001 14.71 6.71001C14.32 6.32001 13.69 6.32001 13.3 6.71001L8.70998 11.3C8.31998 11.69 8.31998 12.32 8.70998 12.71L13.3 17.3C13.69 17.69 14.32 17.69 14.71 17.3C15.09 16.91 15.1 16.27 14.71 15.88Z" })));
};

var Icon$1e = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M9.29006 15.88L13.1701 12L9.29006 8.12001C8.90006 7.73001 8.90006 7.10001 9.29006 6.71001C9.68006 6.32001 10.3101 6.32001 10.7001 6.71001L15.2901 11.3C15.6801 11.69 15.6801 12.32 15.2901 12.71L10.7001 17.3C10.3101 17.69 9.68006 17.69 9.29006 17.3C8.91006 16.91 8.90006 16.27 9.29006 15.88Z" })));
};

var Icon$1d = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M8.11997 14.7101L12 10.8301L15.88 14.7101C16.27 15.1001 16.9 15.1001 17.29 14.7101C17.68 14.3201 17.68 13.6901 17.29 13.3001L12.7 8.7101C12.31 8.3201 11.68 8.3201 11.29 8.7101L6.69997 13.3001C6.30997 13.6901 6.30997 14.3201 6.69997 14.7101C7.08997 15.0901 7.72997 15.1001 8.11997 14.7101Z" })));
};

var Icon$1c = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M18.3 5.70997C17.91 5.31997 17.28 5.31997 16.89 5.70997L12 10.59L7.10997 5.69997C6.71997 5.30997 6.08997 5.30997 5.69997 5.69997C5.30997 6.08997 5.30997 6.71997 5.69997 7.10997L10.59 12L5.69997 16.89C5.30997 17.28 5.30997 17.91 5.69997 18.3C6.08997 18.69 6.71997 18.69 7.10997 18.3L12 13.41L16.89 18.3C17.28 18.69 17.91 18.69 18.3 18.3C18.69 17.91 18.69 17.28 18.3 16.89L13.41 12L18.3 7.10997C18.68 6.72997 18.68 6.08997 18.3 5.70997Z" })));
};

var Icon$1b = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M19.43 12.98C19.47 12.66 19.5 12.34 19.5 12C19.5 11.66 19.47 11.34 19.43 11.02L21.54 9.37C21.73 9.22 21.78 8.95 21.66 8.73L19.66 5.27C19.54 5.05 19.27 4.97 19.05 5.05L16.56 6.05C16.04 5.65 15.48 5.32 14.87 5.07L14.49 2.42C14.46 2.18 14.25 2 14 2H9.99996C9.74996 2 9.53996 2.18 9.50996 2.42L9.12996 5.07C8.51996 5.32 7.95996 5.66 7.43996 6.05L4.94996 5.05C4.71996 4.96 4.45996 5.05 4.33996 5.27L2.33996 8.73C2.20996 8.95 2.26996 9.22 2.45996 9.37L4.56996 11.02C4.52996 11.34 4.49996 11.67 4.49996 12C4.49996 12.33 4.52996 12.66 4.56996 12.98L2.45996 14.63C2.26996 14.78 2.21996 15.05 2.33996 15.27L4.33996 18.73C4.45996 18.95 4.72996 19.03 4.94996 18.95L7.43996 17.95C7.95996 18.35 8.51996 18.68 9.12996 18.93L9.50996 21.58C9.53996 21.82 9.74996 22 9.99996 22H14C14.25 22 14.46 21.82 14.49 21.58L14.87 18.93C15.48 18.68 16.04 18.34 16.56 17.95L19.05 18.95C19.28 19.04 19.54 18.95 19.66 18.73L21.66 15.27C21.78 15.05 21.73 14.78 21.54 14.63L19.43 12.98ZM12 15.5C10.07 15.5 8.49996 13.93 8.49996 12C8.49996 10.07 10.07 8.5 12 8.5C13.93 8.5 15.5 10.07 15.5 12C15.5 13.93 13.93 15.5 12 15.5Z" })));
};

var Icon$1a = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 12.75C13.63 12.75 15.07 13.14 16.24 13.65C17.32 14.13 18 15.21 18 16.38V17C18 17.55 17.55 18 17 18H7C6.45 18 6 17.55 6 17V16.39C6 15.21 6.68 14.13 7.76 13.66C8.93 13.14 10.37 12.75 12 12.75ZM4 13C5.1 13 6 12.1 6 11C6 9.9 5.1 9 4 9C2.9 9 2 9.9 2 11C2 12.1 2.9 13 4 13ZM5.13 14.1C4.76 14.04 4.39 14 4 14C3.01 14 2.07 14.21 1.22 14.58C0.48 14.9 0 15.62 0 16.43V17C0 17.55 0.45 18 1 18H4.5V16.39C4.5 15.56 4.73 14.78 5.13 14.1ZM20 13C21.1 13 22 12.1 22 11C22 9.9 21.1 9 20 9C18.9 9 18 9.9 18 11C18 12.1 18.9 13 20 13ZM24 16.43C24 15.62 23.52 14.9 22.78 14.58C21.93 14.21 20.99 14 20 14C19.61 14 19.24 14.04 18.87 14.1C19.27 14.78 19.5 15.56 19.5 16.39V18H23C23.55 18 24 17.55 24 17V16.43ZM12 6C13.66 6 15 7.34 15 9C15 10.66 13.66 12 12 12C10.34 12 9 10.66 9 9C9 7.34 10.34 6 12 6Z" })));
};

var Icon$19 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M15 1H4C2.9 1 2 1.9 2 3V16C2 16.55 2.45 17 3 17C3.55 17 4 16.55 4 16V4C4 3.45 4.45 3 5 3H15C15.55 3 16 2.55 16 2C16 1.45 15.55 1 15 1ZM19 5H8C6.9 5 6 5.9 6 7V21C6 22.1 6.9 23 8 23H19C20.1 23 21 22.1 21 21V7C21 5.9 20.1 5 19 5ZM18 21H9C8.45 21 8 20.55 8 20V8C8 7.45 8.45 7 9 7H18C18.55 7 19 7.45 19 8V20C19 20.55 18.55 21 18 21Z" })));
};

var Icon$18 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 20 20" }, props),
        React.createElement("path", { d: "M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18ZM9 14H11V16H9V14ZM10.61 4.04C8.55 3.74 6.73 5.01 6.18 6.83C6 7.41 6.44 8 7.05 8H7.25C7.66 8 7.99 7.71 8.13 7.33C8.45 6.44 9.4 5.83 10.43 6.05C11.38 6.25 12.08 7.18 12 8.15C11.9 9.49 10.38 9.78 9.55 11.03C9.55 11.04 9.54 11.04 9.54 11.05C9.53 11.07 9.52 11.08 9.51 11.1C9.42 11.25 9.33 11.42 9.26 11.6C9.25 11.63 9.23 11.65 9.22 11.68C9.21 11.7 9.21 11.72 9.2 11.75C9.08 12.09 9 12.5 9 13H11C11 12.58 11.11 12.23 11.28 11.93C11.3 11.9 11.31 11.87 11.33 11.84C11.41 11.7 11.51 11.57 11.61 11.45C11.62 11.44 11.63 11.42 11.64 11.41C11.74 11.29 11.85 11.18 11.97 11.07C12.93 10.16 14.23 9.42 13.96 7.51C13.72 5.77 12.35 4.3 10.61 4.04Z" })));
};

var Icon$17 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M4.5 14H6.5C7.05 14 7.5 13.55 7.5 13V11C7.5 10.45 7.05 10 6.5 10H4.5C3.95 10 3.5 10.45 3.5 11V13C3.5 13.55 3.95 14 4.5 14ZM4.5 19H6.5C7.05 19 7.5 18.55 7.5 18V16C7.5 15.45 7.05 15 6.5 15H4.5C3.95 15 3.5 15.45 3.5 16V18C3.5 18.55 3.95 19 4.5 19ZM4.5 9H6.5C7.05 9 7.5 8.55 7.5 8V6C7.5 5.45 7.05 5 6.5 5H4.5C3.95 5 3.5 5.45 3.5 6V8C3.5 8.55 3.95 9 4.5 9ZM9.5 14H19.5C20.05 14 20.5 13.55 20.5 13V11C20.5 10.45 20.05 10 19.5 10H9.5C8.95 10 8.5 10.45 8.5 11V13C8.5 13.55 8.95 14 9.5 14ZM9.5 19H19.5C20.05 19 20.5 18.55 20.5 18V16C20.5 15.45 20.05 15 19.5 15H9.5C8.95 15 8.5 15.45 8.5 16V18C8.5 18.55 8.95 19 9.5 19ZM8.5 6V8C8.5 8.55 8.95 9 9.5 9H19.5C20.05 9 20.5 8.55 20.5 8V6C20.5 5.45 20.05 5 19.5 5H9.5C8.95 5 8.5 5.45 8.5 6Z" })));
};

var Icon$16 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 32 32" }, props),
        React.createElement("image", { width: "32", height: "32", href: "/images/ben/logo.png" })));
};

var Icon$15 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 512 512" }, props),
        React.createElement("circle", { cx: "256", cy: "256", r: "256", fill: "url(#paint0_linear)" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M149.813 139.861C144.738 112.406 165.591 87.0417 193.238 87.0417C217.636 87.0417 237.414 107.022 237.414 131.669V186.687C243.517 186.252 249.718 186.028 255.998 186.028C262.032 186.028 267.992 186.234 273.862 186.636V131.669C273.862 107.022 293.641 87.0417 318.039 87.0417C345.686 87.0417 366.539 112.406 361.464 139.861L349.509 204.532C390.538 222.627 421.562 254.056 421.562 293.548V317.442C421.562 349.919 400.293 377.11 370.56 395.466C340.595 413.965 300.058 424.962 255.998 424.962C211.939 424.962 171.401 413.965 141.436 395.466C111.703 377.11 90.4342 349.919 90.4342 317.442V293.548C90.4342 254.265 121.139 222.957 161.822 204.825L149.813 139.861ZM334.189 213.028L348.178 137.354C351.701 118.299 337.227 100.695 318.039 100.695C301.105 100.695 287.378 114.562 287.378 131.669V201.683C282.941 201.108 278.433 200.653 273.862 200.323C268.003 199.899 262.042 199.682 255.998 199.682C249.707 199.682 243.505 199.918 237.414 200.376C232.844 200.72 228.335 201.189 223.899 201.777V131.669C223.899 114.562 210.172 100.695 193.238 100.695C174.05 100.695 159.576 118.299 163.099 137.354L177.134 213.279C133.257 229.744 103.95 259.533 103.95 293.548V317.442C103.95 369.283 172.024 411.308 255.998 411.308C339.972 411.308 408.047 369.283 408.047 317.442V293.548C408.047 259.36 378.439 229.44 334.189 213.028Z", fill: "#633001" }),
        React.createElement("path", { d: "M408.047 317.442C408.047 369.283 339.972 411.308 255.998 411.308C172.024 411.308 103.95 369.283 103.95 317.442V293.548H408.047V317.442Z", fill: "#FEDC90" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M163.099 137.354C159.576 118.299 174.05 100.695 193.238 100.695C210.172 100.695 223.899 114.562 223.899 131.669V201.777C234.247 200.404 244.986 199.682 255.998 199.682C266.755 199.682 277.252 200.371 287.378 201.683V131.669C287.378 114.562 301.105 100.695 318.039 100.695C337.227 100.695 351.701 118.299 348.178 137.354L334.189 213.028C378.439 229.44 408.047 259.36 408.047 293.548C408.047 345.389 339.972 387.415 255.998 387.415C172.024 387.415 103.95 345.389 103.95 293.548C103.95 259.533 133.257 229.744 177.134 213.279L163.099 137.354Z", fill: "#D1884F" }),
        React.createElement("path", { d: "M213.762 286.722C213.762 300.86 206.199 312.322 196.868 312.322C187.538 312.322 179.974 300.86 179.974 286.722C179.974 272.583 187.538 261.122 196.868 261.122C206.199 261.122 213.762 272.583 213.762 286.722Z", fill: "#633001" }),
        React.createElement("path", { d: "M330.333 286.722C330.333 300.86 322.769 312.322 313.439 312.322C304.108 312.322 296.544 300.86 296.544 286.722C296.544 272.583 304.108 261.122 313.439 261.122C322.769 261.122 330.333 272.583 330.333 286.722Z", fill: "#633001" }),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: "paint0_linear", x1: "256", y1: "0", x2: "256", y2: "512", gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: "#54DADE" }),
                React.createElement("stop", { offset: "0.762157", stopColor: "#24C7D6" })))));
};

var Icon$14 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 15 2" }, props),
        React.createElement("path", { d: "M13.2 2L1.20004 2C0.650043 2 0.200043 1.55 0.200043 1C0.200043 0.45 0.650043 0 1.20004 0L13.2 0C13.75 0 14.2 0.45 14.2 1C14.2 1.55 13.75 2 13.2 2Z" })));
};

var Icon$13 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z" })));
};

var Icon$12 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 64 64" }, props),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M2.43832 38.1153C2.43048 38.3002 2.42654 38.4857 2.42654 38.6718C2.42654 39.3754 2.48287 40.0702 2.59273 40.7545H2.42654V41.8317C2.42654 42.3575 2.45801 42.8784 2.51976 43.3937C3.7248 53.4491 16.4632 61.3609 32 61.3609C47.5368 61.3609 60.2752 53.4491 61.4802 43.3937C61.542 42.8784 61.5735 42.3575 61.5735 41.8317V40.7545H61.4073C61.5171 40.0702 61.5735 39.3754 61.5735 38.6718C61.5735 38.4857 61.5695 38.3002 61.5617 38.1153C61.1156 27.587 48.0511 19.1426 32 19.1426C15.9489 19.1426 2.88444 27.587 2.43832 38.1153ZM0.00951064 38.1153C0.229456 31.6916 4.24297 26.2955 9.82907 22.6067C15.6197 18.7827 23.4643 16.5034 32 16.5034C40.5358 16.5034 48.3803 18.7827 54.1709 22.6067C59.757 26.2955 63.7705 31.6916 63.9905 38.1153H64V41.8317C64 48.5003 59.9176 54.102 54.1709 57.8969C48.3803 61.7208 40.5358 64.0001 32 64.0001C23.4643 64.0001 15.6197 61.7208 9.82907 57.8969C4.08238 54.102 0 48.5003 0 41.8317V38.1153H0.00951064Z", fill: "#606063" }),
        React.createElement("path", { d: "M61.5734 41.832C61.5734 52.6177 48.3329 61.3612 32 61.3612C15.667 61.3612 2.42651 52.6177 2.42651 41.832V38.7405H61.5734V41.832Z", fill: "#BEBEBE" }),
        React.createElement("path", { d: "M61.5734 38.6718C61.5734 49.4575 48.3329 58.201 32 58.201C15.667 58.201 2.42651 49.4575 2.42651 38.6718C2.42651 27.8861 15.667 19.1426 32 19.1426C48.3329 19.1426 61.5734 27.8861 61.5734 38.6718Z", fill: "#FAF9FA" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6.97668 33.1548C6.97663 33.167 6.97661 33.1792 6.97661 33.1915C6.97661 34.0795 7.09495 34.9492 7.32173 35.794H6.97634V36.9377C6.97634 37.4425 7.01459 37.9414 7.08925 38.4332C8.21673 45.8588 17.6492 51.6547 29.1184 51.6547C40.5876 51.6547 50.0201 45.8588 51.1475 38.4332C51.2222 37.9414 51.2604 37.4425 51.2604 36.9377V35.794H50.9156C51.1362 34.9723 51.2542 34.127 51.2604 33.2641C51.2606 33.2399 51.2607 33.2157 51.2607 33.1915C51.2607 33.1792 51.2607 33.167 51.2606 33.1548C51.2309 25.0436 41.329 18.4744 29.1187 18.4744C16.9083 18.4744 7.00645 25.0436 6.97668 33.1548ZM4.55012 33.1548H4.5498V36.9377C4.5498 42.269 7.79116 46.6683 12.1963 49.5962C16.643 52.5518 22.632 54.2939 29.1184 54.2939C35.6048 54.2939 41.5937 52.5518 46.0405 49.5962C50.4456 46.6683 53.687 42.269 53.687 36.9377V33.2739C53.6872 33.2464 53.6872 33.2189 53.6872 33.1915C53.6872 27.8601 50.4459 23.4609 46.0408 20.533C41.594 17.5773 35.6051 15.8352 29.1187 15.8352C22.6322 15.8352 16.6433 17.5773 12.1965 20.533C7.80153 23.4542 4.56495 27.84 4.55012 33.1548Z", fill: "#633001" }),
        React.createElement("path", { d: "M51.2604 36.9379C51.2604 45.0659 41.3471 51.6549 29.1184 51.6549C16.8897 51.6549 6.97632 45.0659 6.97632 36.9379V33.4849H51.2604V36.9379Z", fill: "#FEDC90" }),
        React.createElement("path", { d: "M51.2604 33.1914C51.2604 41.3195 41.3471 47.9085 29.1184 47.9085C16.8897 47.9085 6.97632 41.3195 6.97632 33.1914C6.97632 25.0634 16.8897 18.4744 29.1184 18.4744C41.3471 18.4744 51.2604 25.0634 51.2604 33.1914Z", fill: "#D1884F" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13.6497 25.2371C13.6496 25.2493 13.6496 25.2615 13.6496 25.2737C13.6496 26.1618 13.7679 27.0315 13.9947 27.8762H13.6493V29.0199C13.6493 29.5248 13.6876 30.0237 13.7622 30.5154C14.8897 37.941 24.3222 43.737 35.7914 43.737C47.2605 43.737 56.693 37.941 57.8205 30.5154C57.8952 30.0237 57.9334 29.5248 57.9334 29.0199V27.8762H57.5886C57.8092 27.0545 57.9271 26.2092 57.9334 25.3464C57.9336 25.3222 57.9337 25.298 57.9337 25.2737C57.9337 25.2615 57.9337 25.2493 57.9336 25.2371C57.9038 17.1259 48.0019 10.5567 35.7916 10.5567C23.5813 10.5567 13.6794 17.1259 13.6497 25.2371ZM11.2231 25.2371H11.2228V29.0199C11.2228 34.3513 14.4641 38.7505 18.8693 41.6785C23.316 44.6341 29.3049 46.3762 35.7914 46.3762C42.2778 46.3762 48.2667 44.6341 52.7135 41.6785C57.1186 38.7505 60.36 34.3513 60.36 29.0199V25.3561C60.3601 25.3287 60.3602 25.3012 60.3602 25.2737C60.3602 19.9424 57.1189 15.5432 52.7137 12.6152C48.267 9.65961 42.2781 7.91748 35.7916 7.91748C29.3052 7.91748 23.3163 9.65961 18.8695 12.6152C14.4745 15.5364 11.2379 19.9222 11.2231 25.2371Z", fill: "#633001" }),
        React.createElement("path", { d: "M57.9334 29.0201C57.9334 37.1481 48.0201 43.7372 35.7913 43.7372C23.5626 43.7372 13.6493 37.1481 13.6493 29.0201V25.5671H57.9334V29.0201Z", fill: "#FEDC90" }),
        React.createElement("path", { d: "M57.9334 25.274C57.9334 33.402 48.0201 39.991 35.7913 39.991C23.5626 39.991 13.6493 33.402 13.6493 25.274C13.6493 17.1459 23.5626 10.5569 35.7913 10.5569C48.0201 10.5569 57.9334 17.1459 57.9334 25.274Z", fill: "#D1884F" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6.97668 17.3196C6.97663 17.3318 6.97661 17.344 6.97661 17.3563C6.97661 18.2443 7.09495 19.114 7.32173 19.9588H6.97634V21.1025C6.97634 21.6073 7.01459 22.1062 7.08925 22.598C8.21673 30.0236 17.6492 35.8195 29.1184 35.8195C40.5876 35.8195 50.0201 30.0236 51.1475 22.598C51.2222 22.1062 51.2604 21.6073 51.2604 21.1025V19.9588H50.9156C51.1362 19.1371 51.2542 18.2917 51.2604 17.4289C51.2606 17.4047 51.2607 17.3805 51.2607 17.3563C51.2607 17.344 51.2607 17.3318 51.2606 17.3196C51.2309 9.20843 41.329 2.63919 29.1187 2.63919C16.9083 2.63919 7.00645 9.20843 6.97668 17.3196ZM4.55012 17.3196H4.5498V21.1025C4.5498 26.4338 7.79116 30.833 12.1963 33.761C16.643 36.7166 22.632 38.4587 29.1184 38.4587C35.6048 38.4587 41.5937 36.7166 46.0405 33.761C50.4456 30.833 53.687 26.4338 53.687 21.1025V17.4387C53.6872 17.4112 53.6872 17.3837 53.6872 17.3563C53.6872 12.0249 50.4459 7.62568 46.0408 4.69775C41.594 1.74213 35.6051 0 29.1187 0C22.6322 0 16.6433 1.74213 12.1965 4.69775C7.80153 7.61896 4.56495 12.0047 4.55012 17.3196Z", fill: "#633001" }),
        React.createElement("path", { d: "M51.2604 21.1027C51.2604 29.2307 41.3471 35.8197 29.1184 35.8197C16.8897 35.8197 6.97632 29.2307 6.97632 21.1027V17.6497H51.2604V21.1027Z", fill: "#FEDC90" }),
        React.createElement("path", { d: "M51.2604 17.3562C51.2604 25.4842 41.3471 32.0733 29.1184 32.0733C16.8897 32.0733 6.97632 25.4842 6.97632 17.3562C6.97632 9.22822 16.8897 2.63916 29.1184 2.63916C41.3471 2.63916 51.2604 9.22822 51.2604 17.3562Z", fill: "#D1884F" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.214 18.272C12.214 20.9856 14.0269 23.4161 16.8871 25.0513L14.9054 28.7844L14.9059 28.7847H14.9054V38.2326C14.9054 39.4819 15.8366 40.4947 16.9853 40.4947C18.134 40.4947 19.0652 39.4819 19.0652 38.2326V30.7188L21.1972 26.7024C22.5605 27.0169 24.0238 27.1876 25.5468 27.1876C32.9103 27.1876 38.8796 23.196 38.8796 18.272C38.8796 13.3481 32.9103 9.35645 25.5468 9.35645C18.1833 9.35645 12.214 13.3481 12.214 18.272Z", fill: "url(#paint0_linear)" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M16.8871 25.0513C16.5702 24.8701 16.2663 24.6792 15.9762 24.4793C13.6475 22.8741 12.2139 20.685 12.2139 18.272C12.2139 13.3481 18.1832 9.35641 25.5468 9.35641C32.9103 9.35641 38.8796 13.3481 38.8796 18.272C38.8796 23.1959 32.9103 27.1876 25.5468 27.1876C24.0238 27.1876 22.5604 27.0168 21.1972 26.7024L19.0652 30.7187V38.2325C19.0652 39.4819 18.134 40.4947 16.9853 40.4947C15.8366 40.4947 14.9054 39.4819 14.9054 38.2325V28.7847L16.8871 25.0513ZM12.7822 28.8244V38.2325C12.7822 40.7573 14.664 42.804 16.9853 42.804C19.3066 42.804 21.1884 40.7573 21.1884 38.2325V31.3375L22.2942 29.2544C23.3445 29.4135 24.433 29.4969 25.5468 29.4969C29.5564 29.4969 33.2881 28.4148 36.0865 26.5435C38.8503 24.6954 41.0028 21.836 41.0028 18.272C41.0028 14.708 38.8503 11.8486 36.0865 10.0005C33.2881 8.12923 29.5564 7.04712 25.5468 7.04712C21.5371 7.04712 17.8054 8.12923 15.007 10.0005C12.2432 11.8486 10.0907 14.708 10.0907 18.272C10.0907 21.4 11.738 23.9758 14.0266 25.8213L13.0813 27.6021C12.9912 27.7662 12.9192 27.9435 12.8685 28.1307C12.8064 28.3589 12.7783 28.5928 12.7822 28.8244Z", fill: "#633001" }),
        React.createElement("path", { d: "M16.3791 14.5156C16.3791 17.0663 19.3667 19.1341 23.0521 19.1341C26.7375 19.1341 29.7251 17.0663 29.7251 14.5156C29.7251 11.9648 26.7375 9.89697 23.0521 9.89697C19.3667 9.89697 16.3791 11.9648 16.3791 14.5156Z", fill: "#9E7200" }),
        React.createElement("path", { d: "M16.3792 12.5361H29.7251V14.5155H16.3792V12.5361Z", fill: "#9E7200" }),
        React.createElement("path", { d: "M16.3791 12.5361C16.3791 15.0868 19.3667 17.1546 23.0521 17.1546C26.7375 17.1546 29.7251 15.0868 29.7251 12.5361C29.7251 9.98529 26.7375 7.91748 23.0521 7.91748C19.3667 7.91748 16.3791 9.98529 16.3791 12.5361Z", fill: "#F0B90B" }),
        React.createElement("path", { d: "M20.52 11.9795L22.4008 10.6777C22.7983 10.4027 23.3062 10.4027 23.7036 10.6777L25.5845 11.9795C25.959 12.2388 25.959 12.8336 25.5845 13.0928L23.7036 14.3946C23.3062 14.6697 22.7983 14.6697 22.4008 14.3946L20.52 13.0928C20.1454 12.8336 20.1454 12.2388 20.52 11.9795Z", fill: "#9E7200" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M17.1938 7.32218C18.7911 6.21664 20.8681 5.6084 23.0522 5.6084C25.2363 5.6084 27.3133 6.21664 28.9106 7.32218C30.4827 8.41029 31.8484 10.1975 31.8484 12.5363V14.5157C31.8484 16.8545 30.4827 18.6417 28.9106 19.7298C27.3133 20.8353 25.2363 21.4435 23.0522 21.4435C20.8681 21.4435 18.7911 20.8353 17.1938 19.7298C15.6217 18.6417 14.256 16.8545 14.256 14.5157V12.5363C14.256 10.1975 15.6217 8.41029 17.1938 7.32218ZM23.0522 7.91769C19.3668 7.91769 16.3792 9.9855 16.3792 12.5363V14.5157C16.3792 17.0664 19.3668 19.1343 23.0522 19.1343C26.7376 19.1343 29.7252 17.0664 29.7252 14.5157V12.5363C29.7252 9.9855 26.7376 7.91769 23.0522 7.91769Z", fill: "#633001" }),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: "paint0_linear", x1: "25.691", y1: "9.6549", x2: "25.691", y2: "40.2608", gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: "#9F4A08" }),
                React.createElement("stop", { offset: "0.370494", stopColor: "#7D3900" }),
                React.createElement("stop", { offset: "1", stopColor: "#8D4104" })))));
};

var Icon$11 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 90 90" }, props),
        React.createElement("image", { width: 90, height: 90, href: "/images/ben/9.png" })));
};

var Icon$10 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 90 90" }, props),
        React.createElement("image", { width: 90, height: 90, href: "/images/incubator/9.png" })));
};

var Icon$$ = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 48 48" }, props),
        React.createElement("path", { d: "M38 10H34C34 7.79086 32.2091 6 30 6H18C15.7909 6 14 7.79086 14 10H10C7.8 10 6 11.8 6 14V16C6 21.1 9.84 25.26 14.78 25.88C16.04 28.88 18.74 31.14 22 31.8V38H16C14.8954 38 14 38.8954 14 40C14 41.1046 14.8954 42 16 42H32C33.1046 42 34 41.1046 34 40C34 38.8954 33.1046 38 32 38H26V31.8C29.26 31.14 31.96 28.88 33.22 25.88C38.16 25.26 42 21.1 42 16V14C42 11.8 40.2 10 38 10ZM10 16V14H14V21.64C11.68 20.8 10 18.6 10 16ZM24 28C20.7 28 18 25.3 18 22V10H30V22C30 25.3 27.3 28 24 28ZM38 16C38 18.6 36.32 20.8 34 21.64V14H38V16Z" })));
};

var Icon$_ = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 20 20" }, props),
        React.createElement("path", { d: "M5 10C5 10.55 5.45 11 6 11H14C14.55 11 15 10.55 15 10C15 9.45 14.55 9 14 9H6C5.45 9 5 9.45 5 10ZM10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18Z" })));
};

var Icon$Z = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M23 12L20.56 9.21L20.9 5.52L17.29 4.7L15.4 1.5L12 2.96L8.6 1.5L6.71 4.69L3.1 5.5L3.44 9.2L1 12L3.44 14.79L3.1 18.49L6.71 19.31L8.6 22.5L12 21.03L15.4 22.49L17.29 19.3L20.9 18.48L20.56 14.79L23 12ZM9.38 16.01L7 13.61C6.61 13.22 6.61 12.59 7 12.2L7.07 12.13C7.46 11.74 8.1 11.74 8.49 12.13L10.1 13.75L15.25 8.59C15.64 8.2 16.28 8.2 16.67 8.59L16.74 8.66C17.13 9.05 17.13 9.68 16.74 10.07L10.82 16.01C10.41 16.4 9.78 16.4 9.38 16.01Z" })));
};

var Icon$Y = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 34 38" }, props),
        React.createElement("rect", { x: "8.83594", width: "5.30132", height: "17.3191", rx: "2.65066", fill: "#D1884F" }),
        React.createElement("rect", { x: "19.4385", width: "5.30132", height: "17.3191", rx: "2.65066", fill: "#D1884F" }),
        React.createElement("path", { d: "M8.5 13.0084C13.1944 8.40751 20.8056 8.40751 25.5 13.0084C30.1944 17.6093 30.1944 25.0689 25.5 29.6698L17.6538 37.3597C17.2927 37.7136 16.7073 37.7136 16.3462 37.3597L8.5 29.6698C3.80558 25.0689 3.80558 17.6093 8.5 13.0084Z", fill: "#D1884F" }),
        React.createElement("ellipse", { cx: "12.3696", cy: "19.9172", rx: "1.76711", ry: "2.59786", fill: "white" }),
        React.createElement("ellipse", { cx: "21.2056", cy: "19.9172", rx: "1.76711", ry: "2.59786", fill: "white" })));
};

var Icon$X = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 80 80" }, props),
        React.createElement("g", { clipPath: "url(#clip0)" },
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M26.0073 13.3635C24.9476 12.4048 23.2491 12.9058 22.8792 14.286C22.6061 15.3055 23.2111 16.3534 24.2305 16.6266L31.8797 18.6762L26.0073 13.3635ZM18.609 13.1418C19.8344 8.56857 25.4621 6.90878 28.9731 10.0851L41.2257 21.1698C43.051 22.8212 41.4235 25.8102 39.0459 25.1732L23.0863 20.8968C19.7085 19.9917 17.7039 16.5197 18.609 13.1418Z", fill: "#7645D9" }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M42.264 10.1052C42.7399 8.62854 44.609 8.17749 45.7061 9.27458C46.5164 10.0849 46.5164 11.3987 45.7061 12.209L39.6263 18.2888L42.264 10.1052ZM49.1002 5.88046C45.4652 2.24548 39.2724 3.73996 37.6954 8.63274L32.192 25.7073C31.3722 28.251 34.5252 30.1781 36.415 28.2883L49.1002 15.6031C51.785 12.9183 51.785 8.5653 49.1002 5.88046Z", fill: "#7645D9" }),
            React.createElement("path", { opacity: "0.6", d: "M70.9047 42.5535C71.2363 43.8171 73.0301 43.8171 73.3617 42.5535L74.3564 38.7636C74.4727 38.3202 74.819 37.9739 75.2624 37.8575L79.0523 36.8629C80.3159 36.5313 80.3159 34.7375 79.0523 34.4059L75.2624 33.4112C74.819 33.2949 74.4727 32.9486 74.3564 32.5051L73.3617 28.7153C73.0301 27.4517 71.2363 27.4517 70.9047 28.7153L69.91 32.5051C69.7937 32.9486 69.4474 33.2949 69.004 33.4112L65.2141 34.4059C63.9505 34.7375 63.9505 36.5313 65.2141 36.8629L69.004 37.8575C69.4474 37.9739 69.7937 38.3202 69.91 38.7636L70.9047 42.5535Z", fill: "#53DEE9" }),
            React.createElement("path", { d: "M67.9738 14.5792C67.9699 15.345 68.9855 15.6172 69.365 14.952L70.5032 12.957C70.6364 12.7235 70.885 12.58 71.1538 12.5814L73.4506 12.5932C74.2164 12.5971 74.4886 11.5814 73.8234 11.202L71.8284 10.0637C71.5949 9.93057 71.4514 9.68195 71.4528 9.41322L71.4646 7.11635C71.4685 6.35056 70.4528 6.07841 70.0734 6.74357L68.9351 8.73862C68.802 8.97203 68.5533 9.11558 68.2846 9.1142L65.9877 9.10239C65.222 9.09846 64.9498 10.1141 65.615 10.4936L67.61 11.6318C67.8434 11.765 67.987 12.0136 67.9856 12.2824L67.9738 14.5792Z", fill: "#53DEE9" }),
            React.createElement("path", { opacity: "0.8", d: "M12.6621 19.7326C13.3806 19.544 13.3806 18.5241 12.6621 18.3356L8.79571 17.3208C8.54359 17.2547 8.34669 17.0578 8.28052 16.8056L7.26579 12.9392C7.07722 12.2208 6.05731 12.2208 5.86875 12.9392L4.85402 16.8056C4.78785 17.0578 4.59095 17.2547 4.33883 17.3208L0.472442 18.3356C-0.246022 18.5241 -0.246022 19.544 0.472441 19.7326L4.33883 20.7473C4.59095 20.8135 4.78785 21.0104 4.85402 21.2625L5.86875 25.1289C6.05731 25.8474 7.07722 25.8474 7.26578 25.1289L8.28052 21.2625C8.34669 21.0104 8.54359 20.8135 8.79571 20.7473L12.6621 19.7326Z", fill: "#53DEE9" }),
            React.createElement("path", { d: "M16.1463 37.3821C17.0611 33.9679 20.5705 31.9418 23.9847 32.8566L57.9852 41.9671C61.3994 42.8819 63.4256 46.3912 62.5107 49.8054L56.8167 71.0558C55.9019 74.47 52.3925 76.4961 48.9783 75.5813L14.9778 66.4709C11.5636 65.556 9.53745 62.0467 10.4523 58.6325L16.1463 37.3821Z", fill: "url(#paint0_linear)" }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M57.157 45.058L23.1564 35.9476C21.4493 35.4902 19.6947 36.5032 19.2373 38.2103L13.5432 59.4607C13.0858 61.1678 14.0989 62.9225 15.806 63.3799L49.8066 72.4903C51.5137 72.9477 53.2683 71.9347 53.7257 70.2276L59.4198 48.9772C59.8772 47.2701 58.8641 45.5154 57.157 45.058ZM23.9847 32.8566C20.5705 31.9418 17.0611 33.9679 16.1463 37.3821L10.4523 58.6325C9.53745 62.0467 11.5636 65.556 14.9778 66.4709L48.9783 75.5813C52.3925 76.4961 55.9019 74.47 56.8167 71.0558L62.5107 49.8054C63.4256 46.3912 61.3994 42.8819 57.9852 41.9671L23.9847 32.8566Z", fill: "#0098A1" }),
            React.createElement("path", { d: "M35.9629 36.0654L46.0085 38.7571L37.0016 72.3714L26.956 69.6797L35.9629 36.0654Z", fill: "#7645D9" }),
            React.createElement("path", { d: "M11.8535 53.0029L14.5452 42.9573L61.111 55.4346L58.4193 65.4802L11.8535 53.0029Z", fill: "#7645D9" }),
            React.createElement("g", { style: { mixBlendMode: "multiply" } },
                React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M30.0918 57.9047L40.1732 60.606L39.7591 62.1515L29.6777 59.4502L30.0918 57.9047ZM42.8724 50.5325L32.791 47.8312L33.2051 46.2857L43.2865 48.987L42.8724 50.5325Z", fill: "#7645D9" })),
            React.createElement("path", { d: "M11.4611 31.1814C10.775 28.6207 12.2946 25.9887 14.8552 25.3026L58.1287 13.7075C60.6893 13.0214 63.3213 14.541 64.0074 17.1016L65.1462 21.3517C65.8324 23.9123 64.3128 26.5443 61.7521 27.2305L18.4787 38.8256C15.918 39.5117 13.286 37.9921 12.5999 35.4314L11.4611 31.1814Z", fill: "url(#paint1_linear)" }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M58.9569 16.7985L15.6834 28.3936C14.8299 28.6223 14.3233 29.4996 14.552 30.3531L15.6908 34.6032C15.9196 35.4568 16.7969 35.9633 17.6504 35.7346L60.9239 24.1395C61.7775 23.9108 62.284 23.0335 62.0553 22.1799L60.9165 17.9298C60.6878 17.0763 59.8104 16.5698 58.9569 16.7985ZM14.8552 25.3026C12.2946 25.9887 10.775 28.6207 11.4611 31.1814L12.5999 35.4314C13.286 37.9921 15.918 39.5117 18.4787 38.8256L61.7521 27.2305C64.3128 26.5443 65.8324 23.9123 65.1462 21.3517L64.0074 17.1016C63.3213 14.541 60.6893 13.0214 58.1287 13.7075L14.8552 25.3026Z", fill: "#0098A1" }),
            React.createElement("path", { d: "M31.4707 20.8506L41.5163 18.1589L45.1398 31.6818L35.0942 34.3735L31.4707 20.8506Z", fill: "#7645D9" }),
            React.createElement("g", { style: { mixBlendMode: "multiply" } },
                React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M31.9671 22.5998L41.9672 19.7998L41.5673 17.9998L31.3975 20.8215L31.9671 22.5998Z", fill: "#7645D9" }))),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: "paint0_linear", x1: "40.9849", y1: "37.4118", x2: "31.978", y2: "71.0261", gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: "#53DEE9" }),
                React.createElement("stop", { offset: "1", stopColor: "#1FC7D4" })),
            React.createElement("linearGradient", { id: "paint1_linear", x1: "36.4919", y1: "19.505", x2: "40.1154", y2: "33.028", gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: "#53DEE9" }),
                React.createElement("stop", { offset: "1", stopColor: "#1FC7D4" })),
            React.createElement("clipPath", { id: "clip0" },
                React.createElement("rect", { width: "80", height: "80", fill: "white", transform: "matrix(-1 0 0 1 80 0)" })))));
};

var Icon$W = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 80 80" }, props),
        React.createElement("path", { d: "M76.2856 28.6526C77.0883 29.4553 77.1989 30.7184 76.548 31.6485C64.6385 48.6643 49.9116 63.5221 33.0019 75.5817L31.6665 76.5341C30.6872 77.2325 29.3467 77.121 28.4962 76.2705L22.4847 70.259C26.0334 66.5844 25.9945 60.7286 22.3678 57.1019C18.7411 53.4752 12.8853 53.4362 9.21067 56.985L3.68116 51.4555C2.62962 50.4039 2.77462 48.6597 3.98536 47.7962L5.32156 46.8433C21.8225 35.0751 36.1934 20.5765 47.815 3.97204C48.6291 2.80897 50.296 2.66297 51.2998 3.66682L56.9276 9.29459C53.3922 12.97 53.4356 18.8158 57.0578 22.438C60.6799 26.0601 66.5257 26.1035 70.2011 22.5681L76.2856 28.6526Z", fill: "#DBCDF9" }),
        React.createElement("path", { d: "M78.9507 30.3151L57.459 57.5291L29.6615 78.5708L24.3156 73.1863L22.3868 70.8482L24.3156 68.0575L24.9915 65.2668L24.6194 62.29L23.5031 59.4993L21.6426 57.2668L19.4101 55.7784L16.9915 55.0342H14.0147L10.8519 56.1505L8.99148 57.8249L4.52637 52.4296L11.7898 51.3463C34.3187 47.9863 55.6053 38.8899 73.6048 24.9307L78.9507 30.3151Z", fill: "#A28BD4" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M19.7724 70.5193C19.7732 69.7287 20.0885 68.971 20.6487 68.4131L20.6586 68.4032C23.1622 65.8996 23.1622 61.8405 20.6586 59.3369C18.155 56.8333 14.0958 56.8333 11.5922 59.3369L11.5823 59.3468C11.0245 59.907 10.2667 60.2223 9.47617 60.2231C8.68561 60.2239 7.92718 59.9103 7.36817 59.3512L1.57656 53.5596C-0.776282 51.2068 -0.451848 47.304 2.25722 45.372L3.59342 44.419L5.32184 46.8426L3.98564 47.7955C2.7749 48.659 2.6299 50.4032 3.68144 51.4548L9.47304 57.2464L9.48735 57.232C9.49192 57.2275 9.49649 57.2229 9.50106 57.2183C13.1682 53.5659 19.1019 53.5705 22.7635 57.232C26.4247 60.8933 26.4295 66.8263 22.778 70.4936C22.7731 70.4984 22.7683 70.5033 22.7635 70.5081L22.7491 70.5224L28.4965 76.2698C29.347 77.1203 30.6875 77.2318 31.6668 76.5334L33.0022 75.581C49.9119 63.5214 64.6388 48.6636 76.5483 31.6478C77.1992 30.7178 77.0886 29.4546 76.2859 28.6519L70.2487 22.6148C70.2268 22.6371 70.2047 22.6594 70.1825 22.6816C70.1603 22.7038 70.138 22.7259 70.1156 22.7479C66.4445 26.3475 60.5503 26.3254 56.9064 22.6816C53.2625 19.0376 53.2405 13.1434 56.8404 9.47221C56.8623 9.44989 56.8843 9.42764 56.9064 9.40548C56.9286 9.38329 56.9509 9.36124 56.9733 9.33932L51.3001 3.66613C50.2962 2.66229 48.6293 2.80829 47.8153 3.97136C36.1937 20.5758 21.8228 35.0744 5.32184 46.8426L3.59342 44.419C19.8185 32.8476 33.9492 18.5913 45.3766 2.26445C47.252 -0.415092 51.0922 -0.751452 53.4049 1.56125L59.0781 7.23444C59.64 7.79626 59.9539 8.55937 59.95 9.35389C59.9461 10.1484 59.6247 10.9084 59.0574 11.4647C59.042 11.4798 59.0267 11.495 59.0113 11.5104C56.5077 14.014 56.5077 18.0731 59.0113 20.5767C61.5149 23.0803 65.5741 23.0803 68.0777 20.5767C68.0929 20.5615 68.1081 20.5461 68.1233 20.5306C68.6796 19.9633 69.4396 19.6419 70.2341 19.6381C71.0287 19.6342 71.7918 19.9481 72.3536 20.5099L78.3907 26.547C80.2148 28.3711 80.4662 31.2413 78.987 33.3547C66.8832 50.648 51.9161 65.7482 34.7306 78.0046L33.3952 78.9569C31.2319 80.4997 28.2705 80.2536 26.3916 78.3747L20.6442 72.6273C20.0852 72.0683 19.7715 71.3099 19.7724 70.5193Z", fill: "#633001" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M39.9888 14.0672L41.3044 15.3827C41.8856 15.964 41.8856 16.9064 41.3044 17.4876C40.7231 18.0688 39.7808 18.0688 39.1995 17.4876L37.884 16.1721C37.3027 15.5908 37.3027 14.6484 37.884 14.0672C38.4652 13.4859 39.4076 13.4859 39.9888 14.0672Z", fill: "#633001" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M45.5142 19.5926L46.8298 20.9081C47.411 21.4894 47.411 22.4317 46.8298 23.013C46.2485 23.5942 45.3062 23.5942 44.7249 23.013L43.4094 21.6974C42.8281 21.1162 42.8281 20.1738 43.4094 19.5926C43.9906 19.0113 44.933 19.0113 45.5142 19.5926Z", fill: "#633001" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M52.3542 28.5384C51.773 29.1196 50.8306 29.1196 50.2493 28.5384L48.6707 26.9597C48.0894 26.3785 48.0894 25.4361 48.6707 24.8549C49.2519 24.2736 50.1943 24.2736 50.7755 24.8549L52.3542 26.4335C52.9354 27.0148 52.9354 27.9571 52.3542 28.5384Z", fill: "#633001" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M57.8796 34.0638C57.2983 34.645 56.356 34.645 55.7747 34.0638L54.1961 32.4851C53.6148 31.9039 53.6148 30.9615 54.1961 30.3802C54.7773 29.799 55.7197 29.799 56.3009 30.3802L57.8796 31.9589C58.4608 32.5401 58.4608 33.4825 57.8796 34.0638Z", fill: "#633001" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M61.8267 35.9051L63.1423 37.2206C63.7235 37.8019 63.7235 38.7442 63.1423 39.3255C62.561 39.9067 61.6187 39.9067 61.0374 39.3255L59.7219 38.0099C59.1406 37.4287 59.1406 36.4863 59.7219 35.9051C60.3031 35.3238 61.2455 35.3238 61.8267 35.9051Z", fill: "#633001" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M67.3521 41.4305L68.6677 42.746C69.2489 43.3273 69.2489 44.2696 68.6677 44.8509C68.0864 45.4321 67.144 45.4321 66.5628 44.8509L65.2472 43.5353C64.666 42.9541 64.666 42.0117 65.2472 41.4305C65.8285 40.8492 66.7709 40.8492 67.3521 41.4305Z", fill: "#633001" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M32.2915 37.1288C30.6927 35.53 30.6927 32.9378 32.2915 31.3389C34.1033 29.5272 37.1152 29.806 38.5636 31.9196L42.2107 37.2416C45.3939 36.2204 48.7719 36.3559 51.0104 38.5945C53.0227 40.6067 53.3281 43.5721 52.6459 46.3981C51.9561 49.256 50.2117 52.2664 47.6467 54.8314C45.0817 57.3964 42.0713 59.1408 39.2134 59.8306C36.3874 60.5128 33.422 60.2073 31.4098 58.1951C29.1842 55.9696 29.0377 52.6168 30.0388 49.4519L24.694 45.7892C22.5804 44.3408 22.3016 41.3289 24.1134 39.5171C25.7122 37.9183 28.3044 37.9183 29.9032 39.5171L33.6067 43.2206C33.9734 42.7908 34.3625 42.3691 34.7735 41.9582C35.1704 41.5613 35.5772 41.1847 35.9918 40.8291L32.2915 37.1288Z", fill: "#633001" }),
        React.createElement("ellipse", { cx: "36.9019", cy: "50.5685", rx: "1.79015", ry: "2.60385", transform: "rotate(-45 36.9019 50.5685)", fill: "#DBCDF9" }),
        React.createElement("ellipse", { rx: "1.79015", ry: "2.60385", transform: "matrix(0.707107 -0.707106 0.707107 0.707106 43.5768 43.8947)", fill: "#DBCDF9" })));
};

var Icon$V = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 48 48" }, props),
        React.createElement("circle", { cx: "24", cy: "24", r: "24", fill: "url(#paint0_linear)" }),
        React.createElement("path", { d: "M39.0623 18.9777C39.3983 19.3138 39.4447 19.8426 39.1721 20.232C34.1862 27.3557 28.0207 33.576 20.9413 38.6248L20.3823 39.0235C19.9723 39.3159 19.4111 39.2692 19.055 38.9132L16.5383 36.3964C18.024 34.858 18.0077 32.4065 16.4893 30.8881C14.971 29.3698 12.5194 29.3535 10.981 30.8392L8.66608 28.5242C8.22585 28.084 8.28655 27.3538 8.79343 26.9923L9.35284 26.5933C16.261 21.6665 22.2775 15.5966 27.1429 8.64507C27.4837 8.15815 28.1816 8.09702 28.6019 8.51729L30.958 10.8734C29.4778 12.4121 29.496 14.8595 31.0125 16.3759C32.5289 17.8924 34.9762 17.9105 36.515 16.4304L39.0623 18.9777Z", fill: "#DBCDF9" }),
        React.createElement("path", { d: "M40.1776 19.6742L31.18 31.0674L19.5425 39.8766L17.3044 37.6224L16.4969 36.6435L17.3044 35.4752L17.5873 34.3068L17.4316 33.0606L16.9642 31.8923L16.1853 30.9576L15.2507 30.3345L14.2381 30.0229H12.9919L11.6678 30.4903L10.8889 31.1913L9.01953 28.9325L12.0604 28.4789C21.4923 27.0723 30.404 23.264 37.9396 17.4199L40.1776 19.6742Z", fill: "#A28BD4" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M15.4028 36.5059C15.4031 36.1749 15.5351 35.8577 15.7697 35.6241L15.7738 35.62C16.822 34.5718 16.822 32.8725 15.7738 31.8243C14.7257 30.7762 13.0263 30.7762 11.9781 31.8243L11.974 31.8285C11.7405 32.063 11.4232 32.195 11.0922 32.1953C10.7613 32.1957 10.4438 32.0643 10.2097 31.8303L7.78504 29.4056C6.80001 28.4206 6.93583 26.7867 8.07 25.9778L8.6294 25.5789L9.35301 26.5935L8.79361 26.9925C8.28673 27.354 8.22602 28.0842 8.66625 28.5244L11.0909 30.9491L11.0969 30.9431C11.0988 30.9412 11.1008 30.9393 11.1027 30.9374C12.638 29.4083 15.1221 29.4102 16.655 30.9431C18.1878 32.4759 18.1899 34.9598 16.6611 36.4951C16.6591 36.4971 16.6571 36.4992 16.655 36.5012L16.649 36.5072L19.0552 38.9134C19.4113 39.2694 19.9725 39.3161 20.3824 39.0237L20.9415 38.625C28.0208 33.5762 34.1863 27.3559 39.1723 20.2321C39.4448 19.8428 39.3985 19.314 39.0625 18.9779L36.535 16.4504C36.5258 16.4598 36.5166 16.4691 36.5073 16.4784C36.498 16.4877 36.4886 16.4969 36.4792 16.5061C34.9423 18.0132 32.4747 18.0039 30.9492 16.4784C29.4236 14.9528 29.4144 12.4852 30.9215 10.9482C30.9307 10.9389 30.9399 10.9296 30.9492 10.9203C30.9585 10.911 30.9678 10.9018 30.9771 10.8926L28.602 8.51747C28.1818 8.0972 27.4839 8.15833 27.1431 8.64525C22.2777 15.5968 16.2612 21.6667 9.35301 26.5935L8.6294 25.5789C15.4221 20.7344 21.338 14.766 26.1221 7.93065C26.9073 6.80885 28.515 6.66803 29.4832 7.63625L31.8584 10.0114C32.0936 10.2466 32.225 10.566 32.2234 10.8987C32.2217 11.2313 32.0872 11.5495 31.8497 11.7824C31.8432 11.7887 31.8368 11.7951 31.8304 11.8015C30.7822 12.8496 30.7822 14.549 31.8304 15.5972C32.8785 16.6453 34.5779 16.6453 35.626 15.5972C35.6324 15.5908 35.6388 15.5844 35.6452 15.5779C35.8781 15.3404 36.1962 15.2058 36.5289 15.2042C36.8615 15.2026 37.181 15.334 37.4162 15.5692L39.9437 18.0967C40.7073 18.8603 40.8126 20.062 40.1933 20.9467C35.126 28.1867 28.8599 34.5084 21.6651 39.6396L21.1061 40.0383C20.2004 40.6842 18.9606 40.5812 18.174 39.7946L15.7678 37.3884C15.5338 37.1544 15.4025 36.8369 15.4028 36.5059Z", fill: "#633001" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M23.8664 12.8716L24.4172 13.4223C24.6605 13.6657 24.6605 14.0602 24.4172 14.3035C24.1738 14.5469 23.7793 14.5469 23.536 14.3035L22.9852 13.7528C22.7419 13.5094 22.7419 13.1149 22.9852 12.8716C23.2285 12.6282 23.6231 12.6282 23.8664 12.8716Z", fill: "#633001" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M26.1799 15.1841L26.7306 15.7348C26.974 15.9782 26.974 16.3727 26.7306 16.616C26.4873 16.8594 26.0928 16.8594 25.8494 16.616L25.2987 16.0653C25.0553 15.8219 25.0553 15.4274 25.2987 15.1841C25.542 14.9407 25.9365 14.9407 26.1799 15.1841Z", fill: "#633001" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M29.0441 18.9295C28.8008 19.1729 28.4062 19.1728 28.1629 18.9295L27.502 18.2686C27.2587 18.0253 27.2587 17.6307 27.502 17.3874C27.7453 17.144 28.1399 17.144 28.3832 17.3874L29.0441 18.0483C29.2875 18.2916 29.2875 18.6862 29.0441 18.9295Z", fill: "#633001" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M31.3576 21.243C31.1143 21.4863 30.7197 21.4863 30.4764 21.243L29.8155 20.5821C29.5721 20.3387 29.5721 19.9442 29.8155 19.7009C30.0588 19.4575 30.4533 19.4575 30.6967 19.7009L31.3576 20.3618C31.6009 20.6051 31.6009 20.9996 31.3576 21.243Z", fill: "#633001" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M33.009 22.0141L33.5597 22.5649C33.8031 22.8082 33.8031 23.2028 33.5597 23.4461C33.3164 23.6895 32.9219 23.6895 32.6785 23.4461L32.1278 22.8953C31.8844 22.652 31.8844 22.2575 32.1278 22.0141C32.3711 21.7708 32.7656 21.7708 33.009 22.0141Z", fill: "#633001" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M35.3225 24.3266L35.8732 24.8774C36.1166 25.1207 36.1166 25.5153 35.8732 25.7586C35.6299 26.002 35.2354 26.002 34.992 25.7586L34.4412 25.2078C34.1979 24.9645 34.1979 24.57 34.4412 24.3266C34.6846 24.0833 35.0791 24.0833 35.3225 24.3266Z", fill: "#633001" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M20.6437 22.5266C19.9743 21.8573 19.9743 20.772 20.6437 20.1027C21.4022 19.3442 22.6632 19.4609 23.2695 20.3458L24.7964 22.5738C26.1291 22.1463 27.5433 22.2031 28.4805 23.1402C29.3229 23.9827 29.4507 25.2241 29.1652 26.4073C28.8764 27.6037 28.1461 28.8641 27.0722 29.9379C25.9984 31.0117 24.7381 31.742 23.5416 32.0308C22.3584 32.3164 21.117 32.1886 20.2745 31.3461C19.3428 30.4144 19.2815 29.0108 19.7006 27.6858L17.4629 26.1524C16.5781 25.546 16.4614 24.285 17.2199 23.5265C17.8892 22.8572 18.9745 22.8572 19.6438 23.5265L21.1943 25.077C21.3478 24.897 21.5107 24.7205 21.6828 24.5485C21.8489 24.3823 22.0193 24.2247 22.1928 24.0758L20.6437 22.5266Z", fill: "#633001" }),
        React.createElement("ellipse", { rx: "0.749452", ry: "1.09011", transform: "matrix(0.707107 -0.707106 0.707107 0.707106 22.5742 28.153)", fill: "#DBCDF9" }),
        React.createElement("ellipse", { cx: "25.3682", cy: "25.359", rx: "0.749453", ry: "1.09011", transform: "rotate(-45 25.3682 25.359)", fill: "#DBCDF9" }),
        React.createElement("path", { d: "M40.2095 34.2904C40.0804 34.7825 39.3818 34.7825 39.2527 34.2904L38.5576 31.6422C38.5123 31.4695 38.3775 31.3346 38.2048 31.2893L35.5566 30.5943C35.0645 30.4651 35.0645 29.7666 35.5566 29.6374L38.2048 28.9424C38.3775 28.8971 38.5123 28.7622 38.5576 28.5895L39.2527 25.9413C39.3818 25.4492 40.0804 25.4492 40.2095 25.9413L40.9045 28.5895C40.9499 28.7622 41.0847 28.8971 41.2574 28.9424L43.9056 29.6374C44.3977 29.7666 44.3977 30.4651 43.9056 30.5943L41.2574 31.2893C41.0847 31.3346 40.9499 31.4695 40.9045 31.6422L40.2095 34.2904Z", fill: "#53DEE9" }),
        React.createElement("path", { d: "M16.4183 7.94926C16.5088 7.60415 16.9988 7.60415 17.0893 7.94926L17.5767 9.80644C17.6085 9.92754 17.7031 10.0221 17.8242 10.0539L19.6814 10.5413C20.0265 10.6319 20.0265 11.1218 19.6814 11.2124L17.8242 11.6998C17.7031 11.7316 17.6085 11.8261 17.5767 11.9473L17.0893 13.8044C16.9988 14.1495 16.5088 14.1495 16.4183 13.8044L15.9309 11.9473C15.8991 11.8261 15.8045 11.7316 15.6834 11.6998L13.8262 11.2124C13.4811 11.1218 13.4811 10.6319 13.8262 10.5413L15.6834 10.0539C15.8045 10.0221 15.8991 9.92754 15.9309 9.80644L16.4183 7.94926Z", fill: "#53DEE9" }),
        React.createElement("path", { d: "M10.3511 38.7118C10.2924 38.9355 9.97486 38.9355 9.91616 38.7118L9.60024 37.5081C9.57964 37.4296 9.51834 37.3683 9.43985 37.3477L8.23612 37.0318C8.01244 36.9731 8.01244 36.6555 8.23612 36.5968L9.43985 36.2809C9.51834 36.2603 9.57964 36.199 9.60024 36.1205L9.91616 34.9168C9.97486 34.6931 10.2924 34.6931 10.3511 34.9168L10.667 36.1205C10.6876 36.199 10.7489 36.2603 10.8274 36.2809L12.0311 36.5968C12.2548 36.6555 12.2548 36.9731 12.0311 37.0318L10.8274 37.3477C10.7489 37.3683 10.6876 37.4296 10.667 37.5081L10.3511 38.7118Z", fill: "#53DEE9" }),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: "paint0_linear", x1: "24", y1: "0", x2: "24", y2: "48", gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: "#54DADE" }),
                React.createElement("stop", { offset: "0.762157", stopColor: "#24C7D6" })))));
};

var Icon$U = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M15.5 13.9996H14.71L14.43 13.7296C15.63 12.3296 16.25 10.4196 15.91 8.38965C15.44 5.60965 13.12 3.38965 10.32 3.04965C6.09001 2.52965 2.53002 6.08965 3.05002 10.3196C3.39002 13.1196 5.61002 15.4396 8.39002 15.9096C10.42 16.2496 12.33 15.6296 13.73 14.4296L14 14.7096V15.4996L18.25 19.7496C18.66 20.1596 19.33 20.1596 19.74 19.7496C20.15 19.3396 20.15 18.6696 19.74 18.2596L15.5 13.9996ZM9.50002 13.9996C7.01002 13.9996 5.00002 11.9896 5.00002 9.49965C5.00002 7.00965 7.01002 4.99965 9.50002 4.99965C11.99 4.99965 14 7.00965 14 9.49965C14 11.9896 11.99 13.9996 9.50002 13.9996Z" })));
};

var Icon$T = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 25" }, props),
        React.createElement("path", { d: "M16 17.01V11C16 10.45 15.55 10 15 10C14.45 10 14 10.45 14 11V17.01H12.21C11.76 17.01 11.54 17.55 11.86 17.86L14.65 20.64C14.85 20.83 15.16 20.83 15.36 20.64L18.15 17.86C18.47 17.55 18.24 17.01 17.8 17.01H16ZM8.65003 3.35002L5.86003 6.14002C5.54003 6.45002 5.76003 6.99002 6.21003 6.99002H8.00003V13C8.00003 13.55 8.45003 14 9.00003 14C9.55003 14 10 13.55 10 13V6.99002H11.79C12.24 6.99002 12.46 6.45002 12.14 6.14002L9.35003 3.35002C9.16003 3.16002 8.84003 3.16002 8.65003 3.35002Z" })));
};

var Icon$S = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 25" }, props),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.86 4.86003L21.65 7.65003C21.84 7.84003 21.84 8.16003 21.64 8.35003L18.85 11.14C18.54 11.46 18 11.24 18 10.79V9.00003H4C3.45 9.00003 3 8.55003 3 8.00003C3 7.45003 3.45 7.00003 4 7.00003H18V5.21003C18 4.76003 18.54 4.54003 18.86 4.86003ZM5.14001 19.14L2.35001 16.35C2.16001 16.16 2.16001 15.84 2.36001 15.65L5.15001 12.86C5.46001 12.54 6.00001 12.76 6.00001 13.21V15H20C20.55 15 21 15.45 21 16C21 16.55 20.55 17 20 17H6.00001V18.79C6.00001 19.24 5.46001 19.46 5.14001 19.14Z" })));
};

var Icon$R = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M4.47 20.9999H19.53C21.07 20.9999 22.03 19.3299 21.26 17.9999L13.73 4.98993C12.96 3.65993 11.04 3.65993 10.27 4.98993L2.74 17.9999C1.97 19.3299 2.93 20.9999 4.47 20.9999ZM12 13.9999C11.45 13.9999 11 13.5499 11 12.9999V10.9999C11 10.4499 11.45 9.99993 12 9.99993C12.55 9.99993 13 10.4499 13 10.9999V12.9999C13 13.5499 12.55 13.9999 12 13.9999ZM13 17.9999H11V15.9999H13V17.9999Z" })));
};

var Icon$Q = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 512.134 512.134" }, props),
        React.createElement("g", null,
            React.createElement("path", { d: "m318.513 0h30v56.092h-30z" }),
            React.createElement("path", { d: "m426.753 134.332h56.092v30h-56.092z" }),
            React.createElement("path", { d: "m400.276 42.812h49.515v30h-49.515z", transform: "matrix(.707 -.707 .707 .707 83.611 317.477)" }),
            React.createElement("path", { d: "m381.103 165.323c17.764-17.765 17.955-46.478.426-64.007-8.531-8.531-19.897-13.195-32.064-13.042-12.032.12-23.376 4.903-31.942 13.469l-7.381 7.381-96.019-96.019-45.943 45.943 255.619 255.619 45.944-45.943-96.019-96.019z" }),
            React.createElement("path", { d: "m29.289 335.47 27.253 27.253-7.381 7.381c-8.565 8.566-13.35 19.91-13.469 31.943-.121 12.146 4.511 23.533 13.042 32.064 8.423 8.423 19.628 13.045 31.601 13.045.153 0 .31-.001.464-.002 12.033-.12 23.377-4.903 31.942-13.469l7.381-7.381 27.253 27.253 21.288-21.288 79.865 79.864 51.701-51.7-197.953-197.951z" }),
            React.createElement("path", { d: "m123.024 240.803 119.018 119.018 133.974-50.509-202.482-202.483z" }))));
};

var Icon$P = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 168.1 168.1" }, props),
        React.createElement("g", null,
            React.createElement("path", { d: "M143.558,20.077c-6.823-3.625-14.633-5.699-22.954-5.699c-14.66,0-27.832,6.438-36.526,16.515\n\t\tC75.325,20.815,62.197,14.378,47.5,14.378c-8.313,0-16.141,2.068-22.957,5.699C9.913,27.83,0,42.774,0,60.033\n\t\tc0,4.944,0.835,9.639,2.349,14.082c8.125,35.202,60.155,79.606,81.733,79.606c20.982,0,73.512-44.404,81.672-79.606\n\t\tc1.514-4.443,2.346-9.138,2.346-14.082C168.107,42.774,158.185,27.83,143.558,20.077z M152.812,70.102\n\t\tc-0.472,1.313-1.695,2.132-3.043,2.132c-0.338,0-0.679,0-1.028-0.118c-1.691-0.571-2.567-2.377-2.003-4.074\n\t\tc0.91-2.684,1.378-5.373,1.378-8.008c0-9.565-5.444-18.378-14.153-22.949c-4.16-2.25-8.632-3.379-13.358-3.379\n\t\tc-1.779,0-3.185-1.378-3.185-3.195c0-1.749,1.405-3.182,3.185-3.182c5.744,0,11.261,1.378,16.352,4.073\n\t\tc10.827,5.748,17.547,16.692,17.547,28.632C154.502,63.407,153.949,66.791,152.812,70.102z" })),
        React.createElement("g", null),
        React.createElement("g", null),
        React.createElement("g", null),
        React.createElement("g", null),
        React.createElement("g", null),
        React.createElement("g", null),
        React.createElement("g", null),
        React.createElement("g", null),
        React.createElement("g", null),
        React.createElement("g", null),
        React.createElement("g", null),
        React.createElement("g", null),
        React.createElement("g", null),
        React.createElement("g", null),
        React.createElement("g", null)));
};

var Icon$O = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 511.549 511.549" }, props),
        React.createElement("g", null,
            React.createElement("path", { d: "m137.704 152.479c-10.331 0-18.735 8.404-18.735 18.734s8.404 18.734 18.735 18.734c10.33 0 18.734-8.404 18.734-18.734s-8.404-18.734-18.734-18.734z" }),
            React.createElement("path", { d: "m240.774 270.549v-170.547c-45.327-4.485-85.963-29.138-110.909-67.28-73.511 41.702-124.465 118.718-129.639 207.827h34.07c30.996 0 60.165 12.099 82.134 34.069l33.518 33.4h233.421c26.873 0 48.735 21.862 48.735 48.734 0 26.873-21.862 48.735-48.735 48.735h-127.595c-10.33 0-18.734 8.404-18.734 18.734s8.404 18.734 18.734 18.734h174.198c46.861-43.589 77.406-104.482 81.351-172.407h-270.549zm-103.07-50.602c-26.873 0-48.735-21.862-48.735-48.734s21.862-48.734 48.735-48.734c26.872 0 48.734 21.862 48.734 48.734s-21.862 48.734-48.734 48.734z" }),
            React.createElement("path", { d: "m255.774 375.487h127.595c10.331 0 18.735-8.404 18.735-18.735 0-10.33-8.404-18.734-18.735-18.734h-245.817l-42.317-42.168c-16.322-16.322-37.958-25.301-60.94-25.301h-34.069c7.794 134.203 119.427 241 255.549 241 49.52 0 95.791-14.148 135.011-38.593h-135.012c-26.872 0-48.734-21.862-48.734-48.734s21.862-48.735 48.734-48.735z" }),
            React.createElement("path", { d: "m270.774 187.866v52.683h52.683c-5.804-26.209-26.474-46.878-52.683-52.683z" }),
            React.createElement("path", { d: "m270.774 67.614v89.73c42.789 6.509 76.696 40.415 83.204 83.204h89.73c-7.277-92.02-80.913-165.655-172.934-172.934z" }),
            React.createElement("path", { d: "m270.774 0v37.533c52.724 3.551 101.806 25.771 139.525 63.491 37.719 37.719 59.939 86.801 63.49 139.525h37.533c-7.504-129.238-111.31-233.044-240.548-240.549z" }),
            React.createElement("path", { d: "m240.774 69.81v-69.81c-29.516 1.714-57.706 8.444-83.726 19.361 19.541 27.962 49.874 46.246 83.726 50.449z" }))));
};

var Icon$N = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 512 512" }, props),
        React.createElement("g", null,
            React.createElement("path", { d: "m509.936 202.411-91.001-155.062c-4.172-7.109-13.299-9.52-20.437-5.398l-54.537 31.487-49.124-18.069c-1.808-.665-3.639-1.223-5.484-1.692-13.831-3.516-28.492-1.543-41.002 5.68l-81.203 46.883c-17.936 10.355-24.081 33.29-13.726 51.226 10.355 17.936 33.29 24.081 51.226 13.726l89.107-51.447c9.282-5.359 20.718-5.359 30 0 0 0 179.527 103.685 180.103 104.041l2.675-2.202c5.692-4.686 7.135-12.814 3.403-19.173z" }),
            React.createElement("path", { d: "m487.123 248.706-178.368-102.98-89.107 51.446c-10.4 6.005-21.944 9.072-33.64 9.072-5.864 0-11.765-.771-17.58-2.328-17.416-4.667-31.973-15.836-40.987-31.451-9.015-15.613-11.409-33.804-6.742-51.22 3.852-14.378 12.146-26.797 23.705-35.768l-36.778-21.234c-7.333-4.234-16.716-1.562-20.719 5.9l-85.123 158.702c-3.829 7.139-1.298 16.03 5.719 20.08l7.797 4.501 13.685-23.704c11.353-19.665 32.52-31.881 55.24-31.881 11.148 0 22.16 2.955 31.844 8.547 5.571 3.216 10.54 7.18 14.807 11.753 6.897-2.518 14.264-3.871 21.806-3.871 11.148 0 22.159 2.955 31.844 8.547 14.746 8.513 25.295 22.261 29.702 38.709.485 1.809.874 3.627 1.198 5.449 6.134 1.417 12.059 3.739 17.556 6.913 14.747 8.513 25.296 22.261 29.703 38.709.485 1.809.874 3.627 1.198 5.449 6.134 1.417 12.058 3.738 17.555 6.912 30.442 17.577 40.91 56.643 23.336 87.084l-18.687 32.366 40.055 23.126c16.142 9.32 36.783 3.789 46.103-12.353 9.32-16.143 3.789-36.784-12.353-46.104l25.981 15c16.142 9.32 36.783 3.789 46.103-12.353s3.789-36.784-12.353-46.104l17.321 10c16.142 9.32 36.784 3.789 46.103-12.354 9.32-16.142 3.789-36.784-12.354-46.103l-17.32-10c16.142 9.32 36.783 3.789 46.103-12.354 9.32-16.142 3.789-36.783-12.353-46.103z" }),
            React.createElement("path", { d: "m266.438 350.94c-16.142-9.32-36.783-3.789-46.103 12.353l10-17.32c9.32-16.142 3.789-36.783-12.353-46.103s-36.783-3.789-46.103 12.353l10-17.321c9.32-16.142 3.789-36.783-12.353-46.103s-36.783-3.789-46.103 12.353l-10 17.32c9.319-16.142 3.789-36.783-12.354-46.103-16.142-9.32-36.783-3.789-46.103 12.353l-36.25 62.787c-9.32 16.142-3.789 36.784 12.353 46.103 16.142 9.32 36.784 3.789 46.103-12.354-9.32 16.142-3.789 36.784 12.353 46.103 16.142 9.32 36.784 3.789 46.103-12.354-9.32 16.142-3.789 36.784 12.354 46.103 16.142 9.32 36.783 3.789 46.103-12.354-9.32 16.142-3.789 36.784 12.353 46.103 16.142 9.32 36.784 3.789 46.103-12.354l26.25-45.466c9.321-16.138 3.79-36.78-12.353-46.099z" }))));
};

var Icon$M = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 512 512" }, props),
        React.createElement("g", null,
            React.createElement("g", null,
                React.createElement("rect", { x: "272.696", y: "280.342", width: "183.118", height: "231.658" }))),
        React.createElement("g", null,
            React.createElement("g", null,
                React.createElement("rect", { x: "56.186", y: "280.342", width: "183.118", height: "231.658" }))),
        React.createElement("g", null,
            React.createElement("g", null,
                React.createElement("path", { d: "M398.762,94.432c4.953-9.075,7.772-19.474,7.772-30.521C406.535,28.67,377.864,0,342.624,0\n\t\t\tc-26.065,0-52.735,13.468-73.168,36.951c-5.057,5.811-9.561,12.056-13.456,18.56c-3.895-6.504-8.399-12.749-13.456-18.56\n\t\t\tC222.111,13.468,195.442,0,169.376,0c-35.24,0-63.911,28.671-63.911,63.911c0,11.046,2.818,21.446,7.772,30.521H26.2v152.519\n\t\t\th213.104V94.432h33.391v152.519H485.8V94.432H398.762z M169.376,94.432c-16.828,0-30.52-13.692-30.52-30.521\n\t\t\tc0-16.829,13.692-30.52,30.52-30.52c30.299,0,59.106,30.993,67.489,61.04H169.376z M342.624,94.432h-67.489\n\t\t\tc8.383-30.048,37.19-61.04,67.489-61.04c16.828,0,30.52,13.692,30.52,30.52C373.143,80.741,359.452,94.432,342.624,94.432z" }))),
        React.createElement("g", null),
        React.createElement("g", null),
        React.createElement("g", null),
        React.createElement("g", null),
        React.createElement("g", null),
        React.createElement("g", null),
        React.createElement("g", null),
        React.createElement("g", null),
        React.createElement("g", null),
        React.createElement("g", null),
        React.createElement("g", null),
        React.createElement("g", null),
        React.createElement("g", null),
        React.createElement("g", null),
        React.createElement("g", null)));
};

var Icon$L = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 512.001 512.001" }, props),
        React.createElement("g", null,
            React.createElement("g", null,
                React.createElement("path", { d: "M501.433,54.65c-8.194-8.193-19.346-11.613-30.018-10.277c1.336-10.671-2.083-21.824-10.277-30.018\n\t\t\tc-14.09-14.09-36.934-14.09-51.024,0c-13.239,13.239-14.036,34.205-2.396,48.378l-49.64,49.64\n\t\t\tc7.974,5.678,15.49,12.035,22.502,19.048c8.314,8.314,15.702,17.337,22.133,26.99l50.342-50.341\n\t\t\tc14.173,11.64,35.139,10.843,48.378-2.396C515.523,91.584,515.523,68.74,501.433,54.65z" }))),
        React.createElement("g", null,
            React.createElement("g", null,
                React.createElement("path", { d: "M104.282,62.733c11.64-14.173,10.843-35.139-2.396-48.378c-14.09-14.09-36.934-14.09-51.024,0\n\t\t\tc-8.193,8.193-11.612,19.346-10.276,30.017c-10.671-1.336-21.824,2.083-30.018,10.277c-14.09,14.09-14.09,36.934,0,51.024\n\t\t\tc13.239,13.239,34.206,14.036,48.378,2.397l50.341,50.341c6.431-9.653,13.819-18.677,22.133-26.99\n\t\t\tc7.013-7.013,14.529-13.37,22.502-19.048L104.282,62.733z" }))),
        React.createElement("g", null,
            React.createElement("g", null,
                React.createElement("path", { d: "M501.434,406.327c-13.239-13.237-34.206-14.034-48.378-2.395l-50.343-50.343c-5.759,8.653-12.27,16.778-19.516,24.32\n\t\t\tv46.837l24.522,24.522c-11.64,14.173-10.843,35.139,2.396,48.378c14.09,14.09,36.934,14.09,51.024,0\n\t\t\tc8.193-8.193,11.613-19.346,10.277-30.018c10.671,1.336,21.824-2.083,30.018-10.277\n\t\t\tC515.523,443.261,515.523,420.417,501.434,406.327z" }))),
        React.createElement("g", null,
            React.createElement("g", null,
                React.createElement("path", { d: "M128.805,377.91c-7.246-7.543-13.757-15.668-19.516-24.32l-50.343,50.342c-14.173-11.64-35.139-10.843-48.378,2.396\n\t\t\tc-14.09,14.09-14.09,36.934,0,51.024c8.194,8.193,19.346,11.613,30.018,10.277c-1.336,10.671,2.083,21.824,10.277,30.018\n\t\t\tc14.09,14.09,36.934,14.09,51.024,0c13.239-13.239,14.036-34.205,2.396-48.378l24.522-24.522V377.91z" }))),
        React.createElement("g", null,
            React.createElement("g", null,
                React.createElement("path", { d: "M256,109.818c-80.735,0-146.183,65.448-146.183,146.183c0,43.417,18.934,82.405,48.988,109.179v62.019\n\t\t\tc0,0,15.744,24.563,49.798,38.182V403.69h30v69.427c5.498,0.708,11.293,1.102,17.397,1.102c6.105,0,11.901-0.394,17.399-1.102\n\t\t\tv-69.426h30v61.69c34.053-13.619,49.796-38.181,49.796-38.181v-62.019c30.054-26.774,48.988-65.762,48.988-109.179\n\t\t\tC402.184,175.266,336.735,109.818,256,109.818z M201.245,273.279c-16.622,0-30.097-13.475-30.097-30.097\n\t\t\tc0-16.622,13.475-30.097,30.097-30.097s30.097,13.475,30.097,30.097C231.342,259.804,217.868,273.279,201.245,273.279z\n\t\t\t M226.959,346.799L256,296.496l29.042,50.303H226.959z M310.755,273.279c-16.622,0-30.097-13.475-30.097-30.097\n\t\t\tc0-16.622,13.475-30.097,30.097-30.097c16.622,0,30.097,13.475,30.097,30.097C340.852,259.804,327.378,273.279,310.755,273.279z" }))),
        React.createElement("g", null),
        React.createElement("g", null),
        React.createElement("g", null),
        React.createElement("g", null),
        React.createElement("g", null),
        React.createElement("g", null),
        React.createElement("g", null),
        React.createElement("g", null),
        React.createElement("g", null),
        React.createElement("g", null),
        React.createElement("g", null),
        React.createElement("g", null),
        React.createElement("g", null),
        React.createElement("g", null),
        React.createElement("g", null)));
};

var Icon$K = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 511.996 511.996" }, props),
        React.createElement("path", { id: "XMLID_142_", d: "m504.394 113.749c-6.152-7.304-15.158-11.494-24.709-11.494h-22.923c-10.177-17.915-29.209-29.167-50.178-29.167h-4.741v-34.88c0-5.523-4.477-10-10-10-37.275 0-67.601 30.326-67.601 67.601v31.249c0 21.749-12.007 41.456-31.335 51.429l-32.65 16.847c-4.908 2.533-6.834 8.564-4.302 13.472 1.775 3.441 5.271 5.417 8.895 5.417 1.544 0 3.111-.358 4.577-1.115l32.65-16.847c26.009-13.42 42.165-39.937 42.165-69.202v-31.251c0-22.817 16.14-41.937 37.601-46.544v33.824c0 5.523 4.478 10 10 10h14.741c15.204 0 28.85 9.051 34.765 23.058 1.564 3.703 5.192 6.11 9.212 6.11h29.124c3.638 0 7.069 1.596 9.413 4.379s3.334 6.435 2.716 10.021l-3.701 21.468c-2.349 13.617-14.081 23.499-27.898 23.499h-44.52c-.105 0-.206.012-.31.016-.104-.003-.205-.016-.31-.016-5.522 0-10 4.477-10 10v48.895c0 35.372-6.828 69.86-20.293 102.507-.83 2.011-.98 4.238-.431 6.343l24.597 94.068c.43 1.643 1.27 3.149 2.443 4.377l8.789 9.204c1.589 1.664 1.175 3.436.786 4.343-.389.908-1.384 2.432-3.685 2.432h-33.314l-42.976-111.352v-46.244c0-5.523-4.478-10-10-10-5.523 0-10 4.477-10 10v48.107c0 1.231.227 2.452.671 3.601l40.868 105.886h-35.178c-4.827-31.284-31.933-55.313-64.547-55.313h-11.287l-4.464-26.488c-4.771-28.309-26-50.45-54.084-56.406l-18.916-4.012c-5.398-1.145-10.711 2.305-11.857 7.707-1.146 5.403 2.305 10.711 7.708 11.857l18.916 4.012c19.997 4.241 35.113 20.007 38.51 40.165l3.904 23.164h-61.613c-5.522 0-10 4.477-10 10s4.478 10 10 10h93.183c21.551 0 39.636 15.122 44.2 35.313h-139.017c-50.03 0-90.733-40.703-90.733-90.733 0-37.499 20.701-71.475 54.025-88.669l58.188-30.024c4.907-2.532 6.833-8.564 4.301-13.472s-8.567-6.835-13.472-4.301l-58.188 30.024c-15.964 8.237-29.505 19.689-40.026 33.33-1.105-5.242-1.667-10.617-1.667-16.1 0-27.922 15.129-53.802 39.482-67.54 6.597-3.721 9.727-11.176 7.79-18.552-2.039-7.765-9.014-13.197-16.99-13.259-.046-.001-.09-.007-.136-.007-.029 0-.059 0-.089.001-.012 0-.023.002-.035.002-59.709.066-109.231 49.243-110.417 109.682-.828 42.173 22.408 81.465 59.485 101.163 10.339 50.417 55.052 88.455 108.482 88.455h249.294c9.772 0 18.229-5.581 22.072-14.565 3.844-8.984 2.039-18.955-4.71-26.023l-7.002-7.331-23.102-88.351c13.627-34.148 20.534-70.13 20.534-107.002v-38.895h35.141c23.578 0 43.6-16.865 47.606-40.101l3.701-21.469c1.624-9.412-.974-18.999-7.128-26.303zm-484.376 180.815c.907-46.216 36.132-84.414 80.462-89.501-24.958 18.227-40.062 47.483-40.062 78.781 0 13.478 2.682 26.456 7.969 38.656-6.845 14.741-10.71 30.973-11.085 47.853-23.625-17.536-37.873-45.774-37.284-75.789z" }),
        React.createElement("path", { id: "XMLID_143_", d: "m416.709 134.128c1.859-1.86 2.93-4.44 2.93-7.07s-1.07-5.21-2.93-7.07-4.441-2.93-7.07-2.93c-2.64 0-5.21 1.07-7.07 2.93-1.869 1.86-2.93 4.44-2.93 7.07s1.061 5.21 2.93 7.07c1.86 1.86 4.44 2.93 7.07 2.93 2.629 0 5.2-1.07 7.07-2.93z" }),
        React.createElement("path", { id: "XMLID_144_", d: "m224.858 234.848c2.631 0 5.2-1.06 7.07-2.92 1.86-1.87 2.93-4.44 2.93-7.07s-1.069-5.21-2.93-7.08c-1.86-1.86-4.439-2.92-7.07-2.92-2.64 0-5.22 1.06-7.079 2.92-1.86 1.86-2.921 4.44-2.921 7.08 0 2.63 1.061 5.21 2.921 7.07s4.44 2.92 7.079 2.92z" })));
};

var Icon$J = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "-23 0 476 476.10904" }, props),
        React.createElement("path", { d: "m215.828125 361.476562c4.5 2.109376 9.859375.167969 11.96875-4.332031l88.148437-188.140625 4.902344 2.277344c2.621094 1.222656 5.695313.933594 8.042969-.75 2.347656-1.6875 3.605469-4.507812 3.285156-7.382812l-15.597656-140.578126c-.308594-2.769531-2.035156-5.183593-4.5625-6.363281-2.523437-1.183593-5.484375-.964843-7.808594.578125l-118.140625 78.285156c-2.414062 1.601563-3.773437 4.378907-3.558594 7.265626.21875 2.886718 1.976563 5.433593 4.601563 6.65625l4.875 2.269531-87.882813 187.5625c-2.101562 4.492187-.175781 9.839843 4.3125 11.957031l28.515626 13.457031-58.144532 123.433594c-1.882812 3.996094-.167968 8.765625 3.832032 10.644531l36.195312 17.03125c1.917969.902344 4.117188 1.007813 6.113281.289063 1.996094-.71875 3.625-2.199219 4.527344-4.121094l58.117187-123.375zm.457031-17.476562-63.261718-29.855469 79.734374-5.300781zm-37.03125-167.863281 119.554688-8.261719-14.183594 30.269531-119.785156 8.753907zm-22.203125 47.371093 119.789063-8.753906-14.128906 30.171875-119.734376 8.636719zm145.070313-186.148437 12.582031 113.414063-107.890625-50.253907zm-20.480469 115.664063-94.625 6.539062 19.46875-41.546875zm-146.445313 117.144531 119.730469-8.640625-14.414062 30.765625-117.273438 7.800781-1.691406-.800781zm-16.8125 187.300781-21.714843-10.21875 54.726562-116.179688 21.699219 10.246094zm0 0" }),
        React.createElement("path", { d: "m183.398438 20.832031 8.628906 5.324219-5.324219 8.628906c-1.558594 2.433594-1.683594 5.519532-.328125 8.070313 1.359375 2.550781 3.984375 4.171875 6.875 4.242187 2.890625.066406 5.589844-1.429687 7.066406-3.914062l5.324219-8.625 8.628906 5.324218c3.753907 2.246094 8.621094 1.0625 10.917969-2.664062s1.175781-8.605469-2.519531-10.953125l-8.625-5.324219 5.320312-8.628906c1.558594-2.433594 1.683594-5.515625.328125-8.070312-1.359375-2.550782-3.984375-4.1718755-6.875-4.23828175-2.890625-.07031245-5.589844 1.42578175-7.066406 3.91015575l-5.324219 8.625-8.628906-5.320312c-3.753906-2.25-8.621094-1.0625-10.917969 2.660156-2.296875 3.726563-1.175781 8.605469 2.519532 10.953125zm0 0" }),
        React.createElement("path", { d: "m395.519531 256.210938-10.109375.761718-.761718-10.109375c-.332032-4.402343-4.171876-7.707031-8.578126-7.375s-7.710937 4.171875-7.378906 8.578125l.761719 10.109375-10.105469.761719c-4.292968.320312-7.5625 3.976562-7.402344 8.273438.160157 4.300781 3.691407 7.707031 7.992188 7.703124.203125 0 .410156-.007812.613281-.023437l10.109375-.761719.761719 10.109375c.316406 4.167969 3.789063 7.394531 7.96875 7.398438.199219 0 .40625-.007813.613281-.023438 4.40625-.332031 7.707032-4.171875 7.375-8.578125l-.765625-10.109375 10.109375-.765625c2.875-.183594 5.425782-1.898437 6.683594-4.488281 1.257812-2.585937 1.027344-5.652344-.605469-8.027344-1.628906-2.371093-4.410156-3.683593-7.277343-3.4375zm0 0" }),
        React.createElement("path", { d: "m111.515625 58.628906 10.125.507813-.507813 10.125c-.222656 4.414062 3.175782 8.171875 7.589844 8.394531.132813.003906.269532.007812.40625.007812 4.261719 0 7.769532-3.34375 7.984375-7.597656l.507813-10.125 10.125.507813c.140625.007812.273437.011719.410156.011719 4.339844 0 7.890625-3.460938 8-7.800782.105469-4.339844-3.265625-7.972656-7.597656-8.1875l-10.125-.511718.507812-10.125c.21875-4.414063-3.175781-8.167969-7.589844-8.390626-4.414062-.21875-8.167968 3.179688-8.390624 7.589844l-.511719 10.125-10.125-.507812c-4.382813-.179688-8.09375 3.207031-8.3125 7.589844-.222657 4.382812 3.128906 8.125 7.507812 8.390624zm0 0" }),
        React.createElement("path", { d: "m53.480469 262.558594c3.550781 2.628906 8.5625 1.882812 11.191406-1.667969l6.03125-8.152344 8.148437 6.035157c3.550782 2.628906 8.5625 1.878906 11.191407-1.671876 2.628906-3.550781 1.882812-8.558593-1.671875-11.1875l-8.148438-6.03125 6.035156-8.148437c2.628907-3.550781 1.878907-8.5625-1.671874-11.191406-3.550782-2.628907-8.558594-1.882813-11.1875 1.671875l-6.035157 8.144531-8.144531-6.03125c-3.554688-2.628906-8.5625-1.882813-11.191406 1.667969-2.628906 3.554687-1.882813 8.5625 1.667968 11.191406l8.148438 6.03125-6.03125 8.148438c-2.628906 3.550781-1.882812 8.5625 1.667969 11.191406zm0 0" }),
        React.createElement("path", { d: "m335.777344 371.078125c2.464844-1.789063 3.699218-4.820313 3.183594-7.820313l-3.039063-17.730468 12.878906-12.558594c2.183594-2.125 2.96875-5.304688 2.027344-8.199219-.941406-2.898437-3.445313-5.007812-6.460937-5.445312l-17.800782-2.585938-7.960937-16.128906c-1.347657-2.730469-4.128907-4.457031-7.175781-4.457031-3.042969 0-5.824219 1.726562-7.171876 4.457031l-7.960937 16.132813-17.800781 2.585937c-3.011719.4375-5.515625 2.546875-6.457032 5.445313-.941406 2.894531-.15625 6.074218 2.023438 8.199218l12.882812 12.558594-3.042968 17.730469c-.515625 3 .71875 6.03125 3.183594 7.824219 2.464843 1.789062 5.730468 2.023437 8.425781.605468l15.921875-8.371094 15.921875 8.371094c2.695312 1.417969 5.960937 1.179688 8.421875-.613281zm-14.035156-34.074219c-1.886719 1.839844-2.746094 4.488282-2.300782 7.082032l1.011719 5.898437-5.300781-2.785156c-2.328125-1.222657-5.113282-1.222657-7.445313 0l-5.300781 2.785156 1.015625-5.898437c.445313-2.597657-.417969-5.242188-2.300781-7.082032l-4.285156-4.179687 5.921874-.859375c2.605469-.378906 4.855469-2.015625 6.023438-4.375l2.648438-5.367188 2.648437 5.367188c1.164063 2.359375 3.417969 3.996094 6.023437 4.375l5.921876.859375zm0 0" }),
        React.createElement("path", { d: "m22.144531 131.878906-4.640625 27.085938c-.515625 3 .71875 6.035156 3.179688 7.824218 2.464844 1.789063 5.730468 2.027344 8.425781.609376l24.324219-12.789063 24.320312 12.789063c2.695313 1.417968 5.960938 1.179687 8.425782-.609376 2.464843-1.789062 3.695312-4.824218 3.183593-7.824218l-4.644531-27.082032 19.675781-19.183593c2.179688-2.125 2.964844-5.304688 2.023438-8.199219-.941407-2.894531-3.445313-5.007812-6.457031-5.445312l-27.195313-3.949219-12.160156-24.644531c-1.347657-2.730469-4.128907-4.460938-7.175781-4.460938-3.042969 0-5.824219 1.730469-7.171876 4.460938l-12.160156 24.640624-27.195312 3.953126c-3.011719.4375-5.515625 2.546874-6.457032 5.441406-.941406 2.898437-.15625 6.078125 2.023438 8.203125zm18.414063-21.546875c2.605468-.378906 4.859375-2.015625 6.023437-4.378906l6.851563-13.875 6.847656 13.875c1.164062 2.363281 3.417969 4 6.023438 4.378906l15.3125 2.222657-11.082032 10.800781c-1.882812 1.839843-2.742187 4.488281-2.296875 7.082031l2.613281 15.253906-13.699218-7.203125c-2.328125-1.222656-5.113282-1.222656-7.445313 0l-13.699219 7.203125 2.613282-15.253906c.445312-2.59375-.414063-5.242188-2.296875-7.082031l-11.082031-10.800781zm0 0" }),
        React.createElement("path", { d: "m422.917969 131.476562-22.179688-3.222656-9.917969-20.101562c-1.347656-2.730469-4.128906-4.457032-7.171874-4.457032-3.046876 0-5.828126 1.726563-7.175782 4.457032l-9.917968 20.101562-22.183594 3.222656c-3.011719.4375-5.515625 2.546876-6.457032 5.441407-.941406 2.898437-.15625 6.078125 2.023438 8.203125l16.050781 15.644531-3.789062 22.089844c-.511719 3 .71875 6.035156 3.183593 7.824219 2.464844 1.789062 5.730469 2.027343 8.425782.609374l19.835937-10.429687 19.839844 10.429687c2.695313 1.417969 5.960937 1.179688 8.425781-.609374 2.460938-1.789063 3.695313-4.824219 3.183594-7.824219l-3.789062-22.089844 16.046874-15.644531c2.179688-2.125 2.964844-5.304688 2.027344-8.199219-.941406-2.898437-3.445312-5.007813-6.460937-5.445313zm-25.792969 20.765626c-1.886719 1.839843-2.746094 4.488281-2.300781 7.082031l1.757812 10.261719-9.210937-4.847657c-2.332032-1.222656-5.117188-1.222656-7.445313 0l-9.214843 4.847657 1.761718-10.261719c.445313-2.59375-.417968-5.242188-2.300781-7.082031l-7.453125-7.265626 10.296875-1.5c2.605469-.378906 4.859375-2.015624 6.027344-4.375l4.605469-9.335937 4.605468 9.335937c1.167969 2.359376 3.417969 3.996094 6.023438 4.375l10.300781 1.5zm0 0" }),
        React.createElement("path", { d: "m70.972656 384.191406 14.933594-14.554687c2.179688-2.125 2.964844-5.304688 2.023438-8.199219-.941407-2.898438-3.445313-5.007812-6.457032-5.445312l-20.636718-3-9.230469-18.703126c-1.347657-2.726562-4.128907-4.457031-7.175781-4.457031-3.042969 0-5.824219 1.730469-7.171876 4.457031l-9.230468 18.703126-20.636719 3c-3.011719.4375-5.515625 2.546874-6.457031 5.445312-.9414065 2.894531-.15625 6.074219 2.027344 8.199219l14.929687 14.554687-3.523437 20.554688c-.515626 3 .71875 6.035156 3.179687 7.824218 2.464844 1.789063 5.730469 2.023438 8.425781.609376l18.460938-9.699219 18.457031 9.699219c2.695313 1.414062 5.960937 1.179687 8.421875-.609376 2.464844-1.789062 3.699219-4.824218 3.183594-7.824218zm-14.179687-8.519531c-1.886719 1.835937-2.746094 4.484375-2.300781 7.082031l1.5 8.71875-7.832032-4.117187c-2.332031-1.222657-5.117187-1.222657-7.445312 0l-7.832032 4.117187 1.5-8.71875c.445313-2.597656-.417968-5.246094-2.300781-7.082031l-6.339843-6.179687 8.761718-1.269532c2.605469-.378906 4.855469-2.015625 6.019532-4.378906l3.917968-7.933594 3.917969 7.933594c1.164063 2.363281 3.417969 4 6.023437 4.378906l8.757813 1.269532zm0 0" }),
        React.createElement("path", { d: "m372.421875 53.4375 9.773437 2.703125-2.699218 9.769531c-1.175782 4.261719 1.324218 8.667969 5.585937 9.839844 4.257813 1.175781 8.664063-1.324219 9.839844-5.582031l2.699219-9.773438 9.773437 2.699219c2.757813.773438 5.71875.011719 7.765625-2 2.042969-2.007812 2.855469-4.957031 2.128906-7.726562-.722656-2.773438-2.875-4.945313-5.640624-5.695313l-9.773438-2.703125 2.699219-9.773438c1.175781-4.257812-1.324219-8.664062-5.582031-9.835937-4.261719-1.175781-8.667969 1.324219-9.839844 5.582031l-2.703125 9.769532-9.773438-2.699219c-2.757812-.773438-5.71875-.011719-7.761719 1.996093-2.042968 2.011719-2.859374 4.957032-2.132812 7.730469.722656 2.773438 2.875 4.945313 5.640625 5.695313zm0 0" }),
        React.createElement("path", { d: "m393.367188 422.324219-17.800782-2.585938-7.960937-16.128906c-1.347657-2.730469-4.128907-4.457031-7.175781-4.457031-3.042969 0-5.824219 1.726562-7.171876 4.457031l-7.960937 16.132813-17.800781 2.585937c-3.011719.4375-5.515625 2.546875-6.457032 5.445313-.941406 2.894531-.15625 6.074218 2.023438 8.199218l12.882812 12.558594-3.042968 17.730469c-.515625 3 .71875 6.03125 3.183594 7.824219 2.464843 1.789062 5.730468 2.023437 8.425781.605468l15.921875-8.371094 15.921875 8.371094c2.695312 1.417969 5.960937 1.183594 8.421875-.605468 2.464844-1.792969 3.699218-4.824219 3.183594-7.824219l-3.039063-17.730469 12.882813-12.558594c2.179687-2.125 2.964843-5.304687 2.023437-8.199218-.941406-2.898438-3.445313-5.007813-6.460937-5.445313zm-22.625 17.679687c-1.886719 1.839844-2.746094 4.488282-2.300782 7.082032l1.011719 5.898437-5.300781-2.785156c-2.328125-1.222657-5.113282-1.222657-7.445313 0l-5.300781 2.785156 1.015625-5.898437c.445313-2.597657-.417969-5.242188-2.300781-7.082032l-4.285156-4.179687 5.921874-.859375c2.605469-.378906 4.855469-2.015625 6.023438-4.375l2.648438-5.367188 2.648437 5.367188c1.164063 2.359375 3.417969 3.996094 6.023437 4.375l5.921876.859375zm0 0" }),
        React.createElement("path", { d: "m241.011719 420.699219c-2.847657-3.378907-7.894531-3.808594-11.273438-.957031l-7.75 6.535156-6.535156-7.75c-1.839844-2.195313-4.714844-3.242188-7.535156-2.742188-2.820313.503906-5.15625 2.472656-6.128907 5.167969-.96875 2.699219-.421874 5.707031 1.433594 7.890625l6.535156 7.75-7.75 6.535156c-2.203124 1.839844-3.253906 4.714844-2.75 7.539063.5 2.824219 2.472657 5.164062 5.171876 6.132812 2.699218.96875 5.710937.421875 7.894531-1.441406l7.75-6.535156 6.535156 7.75c1.839844 2.195312 4.714844 3.242187 7.535156 2.742187 2.820313-.503906 5.15625-2.472656 6.128907-5.171875.96875-2.695312.421874-5.703125-1.433594-7.886719l-6.527344-7.746093 7.75-6.539063c3.375-2.851562 3.800781-7.898437.949219-11.273437zm0 0" })));
};

var Flex = styled.div(templateObject_1$G || (templateObject_1$G = __makeTemplateObject(["\n  display: flex;\n  ", "\n  ", "\n"], ["\n  display: flex;\n  ", "\n  ", "\n"])), flexbox, space);
var templateObject_1$G;

var variants = {
    INFO: "info",
    DANGER: "danger",
    SUCCESS: "success",
    WARNING: "warning",
};

var getThemeColor = function (_a) {
    var theme = _a.theme, _b = _a.variant, variant = _b === void 0 ? variants.INFO : _b;
    switch (variant) {
        case variants.DANGER:
            return theme.colors.failure;
        case variants.WARNING:
            return theme.colors.warning;
        case variants.SUCCESS:
            return theme.colors.success;
        case variants.INFO:
        default:
            return theme.colors.secondary;
    }
};
var getIcon = function (variant) {
    if (variant === void 0) { variant = variants.INFO; }
    switch (variant) {
        case variants.DANGER:
            return Icon$1u;
        case variants.WARNING:
            return Icon$1v;
        case variants.SUCCESS:
            return Icon$1w;
        case variants.INFO:
        default:
            return Icon$1t;
    }
};
var IconLabel = styled.div(templateObject_1$F || (templateObject_1$F = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 16px 0 0 16px;\n  color: ", ";\n  padding: 12px;\n"], ["\n  background-color: ", ";\n  border-radius: 16px 0 0 16px;\n  color: ", ";\n  padding: 12px;\n"])), getThemeColor, function (_a) {
    var theme = _a.theme;
    return theme.alert.background;
});
var withHandlerSpacing = 32 + 12 + 8; // button size + inner spacing + handler position
var Details = styled.div(templateObject_2$e || (templateObject_2$e = __makeTemplateObject(["\n  flex: 1;\n  padding-bottom: 12px;\n  padding-left: 12px;\n  padding-right: ", ";\n  padding-top: 12px;\n"], ["\n  flex: 1;\n  padding-bottom: 12px;\n  padding-left: 12px;\n  padding-right: ", ";\n  padding-top: 12px;\n"])), function (_a) {
    var hasHandler = _a.hasHandler;
    return (hasHandler ? withHandlerSpacing + "px" : "12px");
});
var CloseHandler = styled.div(templateObject_3$7 || (templateObject_3$7 = __makeTemplateObject(["\n  border-radius: 0 16px 16px 0;\n  right: 8px;\n  position: absolute;\n  top: 8px;\n"], ["\n  border-radius: 0 16px 16px 0;\n  right: 8px;\n  position: absolute;\n  top: 8px;\n"])));
var StyledAlert = styled(Flex)(templateObject_4$3 || (templateObject_4$3 = __makeTemplateObject(["\n  position: relative;\n  background-color: ", ";\n  border-radius: 16px;\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n"], ["\n  position: relative;\n  background-color: ", ";\n  border-radius: 16px;\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n"])), function (_a) {
    var theme = _a.theme;
    return theme.alert.background;
});
var Alert = function (_a) {
    var title = _a.title, children = _a.children, variant = _a.variant, onClick = _a.onClick;
    var Icon = getIcon(variant);
    return (React.createElement(StyledAlert, null,
        React.createElement(IconLabel, { variant: variant, hasDescription: !!children },
            React.createElement(Icon, { color: "currentColor", width: "24px" })),
        React.createElement(Details, { hasHandler: !!onClick },
            React.createElement(Text, { bold: true }, title),
            typeof children === "string" ? React.createElement(Text, { as: "p" }, children) : children),
        onClick && (React.createElement(CloseHandler, null,
            React.createElement(IconButton, { size: "sm", variant: "text", onClick: onClick },
                React.createElement(Icon$1c, { width: "24px", color: "currentColor" }))))));
};
var templateObject_1$F, templateObject_2$e, templateObject_3$7, templateObject_4$3;

var Separator = styled.div(templateObject_1$E || (templateObject_1$E = __makeTemplateObject(["\n  align-items: center;\n  color: currentColor;\n  display: flex;\n  justify-content: center;\n  padding-left: 4px;\n  padding-right: 4px;\n\n  ", " {\n    padding-left: 8px;\n    padding-right: 8px;\n  }\n\n  ", " {\n    padding-left: 16px;\n    padding-right: 16px;\n  }\n"], ["\n  align-items: center;\n  color: currentColor;\n  display: flex;\n  justify-content: center;\n  padding-left: 4px;\n  padding-right: 4px;\n\n  ", " {\n    padding-left: 8px;\n    padding-right: 8px;\n  }\n\n  ", " {\n    padding-left: 16px;\n    padding-right: 16px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var StyledBreadcrumbs = styled.ul(templateObject_2$d || (templateObject_2$d = __makeTemplateObject(["\n  align-items: center;\n  color: ", ";\n  display: flex;\n  flex-wrap: wrap;\n  list-style-type: none;\n\n  ", "\n"], ["\n  align-items: center;\n  color: ", ";\n  display: flex;\n  flex-wrap: wrap;\n  list-style-type: none;\n\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.textDisabled;
}, space);
var insertSeparators = function (items, separator) {
    return items.reduce(function (accum, item, index) {
        if (index === 0) {
            return __spreadArray(__spreadArray([], accum), [item]);
        }
        return __spreadArray(__spreadArray([], accum), [
            React.createElement(Separator, { "aria-hidden": true, key: "seperator-" + index }, separator),
            item,
        ]);
    }, []);
};
var DefaultSeparator = React.createElement(Icon$1e, { color: "currentColor", width: "24px" });
var Breadcrumbs = function (_a) {
    var _b = _a.separator, separator = _b === void 0 ? DefaultSeparator : _b, children = _a.children;
    var validItems = Children.toArray(children).filter(function (child) { return isValidElement(child); });
    var items = insertSeparators(validItems, separator);
    return (React.createElement(StyledBreadcrumbs, null, items.map(function (item, index) { return (React.createElement("li", { key: "child-" + index }, item)); })));
};
var templateObject_1$E, templateObject_2$d;

var getBackgroundColor = function (_a) {
    var theme = _a.theme, variant = _a.variant;
    return theme.colors[variant === variants$1.SUBTLE ? "input" : "tertiary"];
};
var StyledButtonMenu = styled.div(templateObject_1$D || (templateObject_1$D = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 16px;\n  display: inline-flex;\n\n  & > button + button,\n  & > a + a {\n    margin-left: 2px; // To avoid focus shadow overlap\n  }\n"], ["\n  background-color: ", ";\n  border-radius: 16px;\n  display: inline-flex;\n\n  & > button + button,\n  & > a + a {\n    margin-left: 2px; // To avoid focus shadow overlap\n  }\n"])), getBackgroundColor);
var templateObject_1$D;

var ButtonMenu = function (_a) {
    var _b = _a.activeIndex, activeIndex = _b === void 0 ? 0 : _b, _c = _a.size, size = _c === void 0 ? sizes$1.MD : _c, _d = _a.variant, variant = _d === void 0 ? variants$1.PRIMARY : _d, onClick = _a.onClick, children = _a.children;
    return (React.createElement(StyledButtonMenu, { variant: variant }, Children.map(children, function (child, index) {
        return cloneElement(child, {
            isActive: activeIndex === index,
            onClick: onClick ? function () { return onClick(index); } : undefined,
            size: size,
            variant: variant,
        });
    })));
};

var InactiveButton = styled(Button)(templateObject_1$C || (templateObject_1$C = __makeTemplateObject(["\n  background-color: transparent;\n  color: ", ";\n\n  &:hover:not(:disabled):not(:active) {\n    background-color: transparent;\n  }\n"], ["\n  background-color: transparent;\n  color: ", ";\n\n  &:hover:not(:disabled):not(:active) {\n    background-color: transparent;\n  }\n"])), function (_a) {
    var theme = _a.theme, colorKey = _a.colorKey;
    return theme.colors[colorKey];
});
var ButtonMenuItem = function (_a) {
    var _b = _a.isActive, isActive = _b === void 0 ? false : _b, _c = _a.size, size = _c === void 0 ? sizes$1.MD : _c, _d = _a.variant, variant = _d === void 0 ? variants$1.PRIMARY : _d, as = _a.as, props = __rest(_a, ["isActive", "size", "variant", "as"]);
    if (!isActive) {
        return (React.createElement(InactiveButton, __assign({ forwardedAs: as, size: size, variant: "tertiary", colorKey: variant === variants$1.PRIMARY ? "primary" : "textSubtle" }, props)));
    }
    return React.createElement(Button, __assign({ as: as, size: size, variant: variant }, props));
};
var templateObject_1$C;

/**
 * Priority: Warning --> Success --> Active
 */
var getBoxShadow$1 = function (_a) {
    var isActive = _a.isActive, isSuccess = _a.isSuccess, isWarning = _a.isWarning, theme = _a.theme;
    if (isWarning) {
        return theme.card.boxShadowWarning;
    }
    if (isSuccess) {
        return theme.card.boxShadowSuccess;
    }
    if (isActive) {
        return theme.card.boxShadowActive;
    }
    return theme.card.boxShadow;
};
var getBorderRadius = function (_a) {
    var borderRadius = _a.borderRadius;
    return borderRadius || "32px";
};
var StyledCard = styled.div(templateObject_1$B || (templateObject_1$B = __makeTemplateObject(["\n  background-color: ", ";\n  border: ", ";\n  border-radius: ", ";\n  box-shadow: ", ";\n  color: ", ";\n  overflow: hidden;\n  position: relative;\n\n  ", "\n"], ["\n  background-color: ", ";\n  border: ", ";\n  border-radius: ", ";\n  box-shadow: ", ";\n  color: ", ";\n  overflow: hidden;\n  position: relative;\n\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.card.background;
}, function (_a) {
    var theme = _a.theme;
    return theme.card.boxShadow;
}, getBorderRadius, getBoxShadow$1, function (_a) {
    var theme = _a.theme, isDisabled = _a.isDisabled;
    return theme.colors[isDisabled ? "textDisabled" : "text"];
}, space);
StyledCard.defaultProps = {
    isActive: false,
    isSuccess: false,
    isWarning: false,
    isDisabled: false,
    borderRadius: "32px"
};
var templateObject_1$B;

var Card = function (_a) {
    var ribbon = _a.ribbon, children = _a.children, props = __rest(_a, ["ribbon", "children"]);
    return (React.createElement(StyledCard, __assign({}, props),
        ribbon,
        children));
};

var CardBody = styled.div(templateObject_1$A || (templateObject_1$A = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), space);
CardBody.defaultProps = {
    p: "24px",
};
var templateObject_1$A;

var CardHeader = styled.div(templateObject_1$z || (templateObject_1$z = __makeTemplateObject(["\n  background: ", ";\n\n  ", "\n"], ["\n  background: ", ";\n\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.card.cardHeaderBackground;
}, space);
CardHeader.defaultProps = {
    p: "24px",
};
var templateObject_1$z;

var CardFooter = styled.div(templateObject_1$y || (templateObject_1$y = __makeTemplateObject(["\n  border-top: 1px solid ", ";\n  ", "\n"], ["\n  border-top: 1px solid ", ";\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.borderColor;
}, space);
CardFooter.defaultProps = {
    p: "24px",
};
var templateObject_1$y;

var StyledCardRibbon = styled.div(templateObject_1$x || (templateObject_1$x = __makeTemplateObject(["\n  background-color: ", ";\n  color: white;\n  margin: 0;\n  padding: 0;\n  padding: 8px 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  text-align: center;\n  transform: translateX(30%) translateY(0%) rotate(45deg);\n  transform-origin: top left;\n  width: 96px;\n\n  &:before,\n  &:after {\n    background-color: ", ";\n    content: \"\";\n    height: 100%;\n    margin: 0 -1px; /* Removes tiny gap */\n    position: absolute;\n    top: 0;\n    width: 100%;\n  }\n\n  &:before {\n    right: 100%;\n  }\n\n  &:after {\n    left: 100%;\n  }\n\n  & > div {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    width: 96px;\n  }\n"], ["\n  background-color: ", ";\n  color: white;\n  margin: 0;\n  padding: 0;\n  padding: 8px 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  text-align: center;\n  transform: translateX(30%) translateY(0%) rotate(45deg);\n  transform-origin: top left;\n  width: 96px;\n\n  &:before,\n  &:after {\n    background-color: ", ";\n    content: \"\";\n    height: 100%;\n    margin: 0 -1px; /* Removes tiny gap */\n    position: absolute;\n    top: 0;\n    width: 100%;\n  }\n\n  &:before {\n    right: 100%;\n  }\n\n  &:after {\n    left: 100%;\n  }\n\n  & > div {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    width: 96px;\n  }\n"])), function (_a) {
    var _b = _a.variantColor, variantColor = _b === void 0 ? "secondary" : _b, theme = _a.theme;
    return theme.colors[variantColor];
}, function (_a) {
    var _b = _a.variantColor, variantColor = _b === void 0 ? "secondary" : _b, theme = _a.theme;
    return theme.colors[variantColor];
});
var CardRibbon = function (_a) {
    var variantColor = _a.variantColor, text = _a.text;
    return (React.createElement(StyledCardRibbon, { variantColor: variantColor },
        React.createElement("div", { title: text }, text)));
};
var templateObject_1$x;

var scales$2 = {
    SM: "sm",
    MD: "md",
};

var getScale$1 = function (_a) {
    var scale = _a.scale;
    switch (scale) {
        case scales$2.SM:
            return "24px";
        case scales$2.MD:
        default:
            return "32px";
    }
};
var Checkbox = styled.input.attrs({ type: "checkbox" })(templateObject_1$w || (templateObject_1$w = __makeTemplateObject(["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  /* transition: background-color 0.2s ease-in-out; */\n  border: 0;\n  border-radius: 8px;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    content: \"\";\n    position: absolute;\n    border-bottom: 2px solid;\n    border-left: 2px solid;\n    border-color: transparent;\n    top: 30%;\n    left: 0;\n    right: 0;\n    width: 50%;\n    height: 25%;\n    margin: auto;\n    transform: rotate(-50deg);\n    transition: border-color 0.2s ease-in-out;\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      border-color: white;\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n"], ["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  /* transition: background-color 0.2s ease-in-out; */\n  border: 0;\n  border-radius: 8px;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    content: \"\";\n    position: absolute;\n    border-bottom: 2px solid;\n    border-left: 2px solid;\n    border-color: transparent;\n    top: 30%;\n    left: 0;\n    right: 0;\n    width: 50%;\n    height: 25%;\n    margin: auto;\n    transform: rotate(-50deg);\n    transition: border-color 0.2s ease-in-out;\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      border-color: white;\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n"])), getScale$1, getScale$1, function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.success;
});
Checkbox.defaultProps = {
    scale: scales$2.MD,
};
var templateObject_1$w;

var getLeft = function (_a) {
    var position = _a.position;
    if (position === "top-right") {
        return "100%";
    }
    return "50%";
};
var getBottom = function (_a) {
    var position = _a.position;
    if (position === "top" || position === "top-right") {
        return "100%";
    }
    return "auto";
};
var DropdownContent = styled.div(templateObject_1$v || (templateObject_1$v = __makeTemplateObject(["\n  width: max-content;\n  display: none;\n  flex-direction: column;\n  position: absolute;\n  transform: translate(-50%, 0);\n  left: ", ";\n  bottom: ", ";\n  background-color: ", ";\n  box-shadow: ", ";\n  padding: 16px;\n  max-height: 500px;\n  overflow-y: auto;\n  z-index: ", ";\n  border-radius: ", ";\n"], ["\n  width: max-content;\n  display: none;\n  flex-direction: column;\n  position: absolute;\n  transform: translate(-50%, 0);\n  left: ", ";\n  bottom: ", ";\n  background-color: ", ";\n  box-shadow: ", ";\n  padding: 16px;\n  max-height: 500px;\n  overflow-y: auto;\n  z-index: ", ";\n  border-radius: ", ";\n"])), getLeft, getBottom, function (_a) {
    var theme = _a.theme;
    return theme.nav.background;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.level1;
}, function (_a) {
    var theme = _a.theme;
    return theme.zIndices.dropdown;
}, function (_a) {
    var theme = _a.theme;
    return theme.radii.small;
});
var Container$4 = styled.div(templateObject_2$c || (templateObject_2$c = __makeTemplateObject(["\n  position: relative;\n  &:hover ", ", &:focus-within ", " {\n    display: flex;\n  }\n"], ["\n  position: relative;\n  &:hover ", ", &:focus-within ", " {\n    display: flex;\n  }\n"])), DropdownContent, DropdownContent);
var Dropdown = function (_a) {
    var target = _a.target, _b = _a.position, position = _b === void 0 ? "bottom" : _b, children = _a.children;
    return (React.createElement(Container$4, null,
        target,
        React.createElement(DropdownContent, { position: position }, children)));
};
Dropdown.defaultProps = {
    position: "bottom",
};
var templateObject_1$v, templateObject_2$c;

var tags = {
    H1: "h1",
    H2: "h2",
    H3: "h3",
    H4: "h4",
    H5: "h5",
    H6: "h6",
};
var sizes = {
    MD: "md",
    LG: "lg",
    XL: "xl",
    XXL: "xxl",
};

var _a$2;
var style = (_a$2 = {},
    _a$2[sizes.MD] = {
        fontSize: "20px",
    },
    _a$2[sizes.LG] = {
        fontSize: "24px",
    },
    _a$2[sizes.XL] = {
        fontSize: "40px",
    },
    _a$2[sizes.XXL] = {
        fontSize: "64px",
    },
    _a$2);
var Heading = styled(Text).attrs({ bold: true })(templateObject_1$u || (templateObject_1$u = __makeTemplateObject(["\n  ", "\n  font-weight:600;\n  line-height: 1.1;\n"], ["\n  ", "\n  font-weight:600;\n  line-height: 1.1;\n"])), function (_a) {
    var size = _a.size;
    return style[size || sizes.MD];
});
Heading.defaultProps = {
    as: tags.H2,
};
var templateObject_1$u;

var observerOptions = {
    root: null,
    rootMargin: "200px",
    threshold: 0,
};

var Wrapper$1 = styled.div(templateObject_1$t || (templateObject_1$t = __makeTemplateObject(["\n  position: relative;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: ", "px;\n  max-width: ", "px;\n  max-height: ", "px;\n  width: 100%;\n  padding-top: ", "%;\n  ", "\n"], ["\n  position: relative;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: ", "px;\n  max-width: ", "px;\n  max-height: ", "px;\n  width: 100%;\n  padding-top: ", "%;\n  ", "\n"])), function (_a) {
    var height = _a.height, responsive = _a.responsive;
    return (responsive ? 0 : height);
}, function (_a) {
    var width = _a.width;
    return width;
}, function (_a) {
    var height = _a.height;
    return height;
}, function (_a) {
    var width = _a.width, height = _a.height, responsive = _a.responsive;
    return (responsive ? (height / width) * 100 : 0);
}, space);
var templateObject_1$t;

var BackgroundImage = function (_a) {
    var src = _a.src, otherProps = __rest(_a, ["src"]);
    var imgRef = useRef(null);
    useEffect(function () {
        var img = imgRef.current;
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                var isIntersecting = entry.isIntersecting;
                if (isIntersecting) {
                    img.style.backgroundImage = "url(\"" + src + "\")";
                    observer.disconnect();
                }
            });
        }, observerOptions);
        observer.observe(img);
        return function () {
            observer.disconnect();
        };
    }, [src]);
    return React.createElement(Wrapper$1, __assign({ ref: imgRef }, otherProps));
};

var StyledImage = styled.img(templateObject_1$s || (templateObject_1$s = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n"])));
var Placeholder = styled.div(templateObject_2$b || (templateObject_2$b = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n"])));
var Image = function (_a) {
    var src = _a.src, alt = _a.alt, otherProps = __rest(_a, ["src", "alt"]);
    var imgRef = useRef(null);
    var _b = useState(false), isLoaded = _b[0], setIsLoaded = _b[1];
    useEffect(function () {
        var img = imgRef.current;
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                var isIntersecting = entry.isIntersecting;
                if (isIntersecting) {
                    setIsLoaded(true);
                    observer.disconnect();
                }
            });
        }, observerOptions);
        observer.observe(img);
        return function () {
            observer.disconnect();
        };
    }, [src]);
    return (React.createElement(Wrapper$1, __assign({ ref: imgRef }, otherProps), isLoaded ? React.createElement(StyledImage, { src: src, alt: alt }) : React.createElement(Placeholder, null)));
};
var templateObject_1$s, templateObject_2$b;

var scales$1 = {
    SM: "sm",
    MD: "md",
    LG: "lg",
};

/**
 * Priority: Warning --> Success
 */
var getBoxShadow = function (_a) {
    var _b = _a.isSuccess, isSuccess = _b === void 0 ? false : _b, _c = _a.isWarning, isWarning = _c === void 0 ? false : _c, theme = _a.theme;
    if (isWarning) {
        return theme.shadows.warning;
    }
    if (isSuccess) {
        return theme.shadows.success;
    }
    return theme.shadows.inset;
};
var getHeight = function (_a) {
    var _b = _a.scale, scale = _b === void 0 ? scales$1.MD : _b;
    switch (scale) {
        case scales$1.SM:
            return "32px";
        case scales$1.LG:
            return "48px";
        case scales$1.MD:
        default:
            return "40px";
    }
};
var Input$1 = styled.input(templateObject_1$r || (templateObject_1$r = __makeTemplateObject(["\n  background-color: ", ";\n  border: 0;\n  border-radius: 16px;\n  box-shadow: ", ";\n  color: ", ";\n  display: block;\n  font-size: 16px;\n  height: ", ";\n  outline: 0;\n  padding: 0 16px;\n  width: 100%;\n\n  &::placeholder {\n    color: ", ";\n  }\n\n  &:disabled {\n    background-color: ", ";\n    box-shadow: none;\n    color: ", ";\n    cursor: not-allowed;\n  }\n\n  &:focus:not(:disabled) {\n    box-shadow: ", ";\n  }\n"], ["\n  background-color: ", ";\n  border: 0;\n  border-radius: 16px;\n  box-shadow: ", ";\n  color: ", ";\n  display: block;\n  font-size: 16px;\n  height: ", ";\n  outline: 0;\n  padding: 0 16px;\n  width: 100%;\n\n  &::placeholder {\n    color: ", ";\n  }\n\n  &:disabled {\n    background-color: ", ";\n    box-shadow: none;\n    color: ", ";\n    cursor: not-allowed;\n  }\n\n  &:focus:not(:disabled) {\n    box-shadow: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, getBoxShadow, function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
}, getHeight, function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.backgroundDisabled;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.textDisabled;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
});
Input$1.defaultProps = {
    scale: scales$1.MD,
    isSuccess: false,
    isWarning: false,
};
var templateObject_1$r;

var GridLayout$1 = styled.div(templateObject_1$q || (templateObject_1$q = __makeTemplateObject(["\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  grid-gap: 16px;\n  ", " {\n    grid-template-columns: repeat(8, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 32px;\n  }\n"], ["\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  grid-gap: 16px;\n  ", " {\n    grid-template-columns: repeat(8, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 32px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.lg;
});
var templateObject_1$q;

var GridLayout = styled(GridLayout$1)(templateObject_1$p || (templateObject_1$p = __makeTemplateObject(["\n  & > div {\n    grid-column: span 6;\n    ", " {\n      grid-column: span 4;\n    }\n  }\n"], ["\n  & > div {\n    grid-column: span 6;\n    ", " {\n      grid-column: span 4;\n    }\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var templateObject_1$p;

var scales = {
    SM: "sm",
    MD: "md",
};

var getScale = function (_a) {
    var scale = _a.scale;
    switch (scale) {
        case scales.SM:
            return "24px";
        case scales.MD:
        default:
            return "32px";
    }
};
var getCheckedScale = function (_a) {
    var scale = _a.scale;
    switch (scale) {
        case scales.SM:
            return "12px";
        case scales.MD:
        default:
            return "20px";
    }
};
var Radio = styled.input.attrs({ type: "radio" })(templateObject_1$o || (templateObject_1$o = __makeTemplateObject(["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  /* transition: background-color 0.2s ease-in-out; */\n  border: 0;\n  border-radius: 50%;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    border-radius: 50%;\n    content: \"\";\n    height: ", ";\n    left: 6px;\n    position: absolute;\n    top: 6px;\n    width: ", ";\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      background-color: ", ";\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n  ", "\n"], ["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  /* transition: background-color 0.2s ease-in-out; */\n  border: 0;\n  border-radius: 50%;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    border-radius: 50%;\n    content: \"\";\n    height: ", ";\n    left: 6px;\n    position: absolute;\n    top: 6px;\n    width: ", ";\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      background-color: ", ";\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n  ", "\n"])), getScale, getScale, function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
}, getCheckedScale, getCheckedScale, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.success;
}, function (_a) {
    var theme = _a.theme;
    return theme.radio.handleBackground;
}, space);
Radio.defaultProps = {
    scale: scales.MD,
    m: 0,
};
var templateObject_1$o;

var getColor = function (color, theme) {
    return getThemeValue("colors." + color, color)(theme);
};

var getThemeTextColor = function (_a) {
    var outline = _a.outline, _b = _a.variant, variant = _b === void 0 ? "primary" : _b, theme = _a.theme;
    return outline ? getColor(variant, theme) : "#ffffff";
};
var StyledTag = styled.div(templateObject_1$n || (templateObject_1$n = __makeTemplateObject(["\n  align-items: center;\n  background-color: ", ";\n  border: 2px solid ", ";\n  border-radius: 16px;\n  color: ", ";\n  display: inline-flex;\n  font-size: 14px;\n  font-weight: 400;\n  height: 28px;\n  line-height: 1.5;\n  padding: 0 8px;\n  white-space: nowrap;\n\n  svg {\n    fill: ", ";\n  }\n"], ["\n  align-items: center;\n  background-color: ",
    ";\n  border: 2px solid ", ";\n  border-radius: 16px;\n  color: ", ";\n  display: inline-flex;\n  font-size: 14px;\n  font-weight: 400;\n  height: 28px;\n  line-height: 1.5;\n  padding: 0 8px;\n  white-space: nowrap;\n\n  svg {\n    fill: ", ";\n  }\n"])), function (_a) {
    var outline = _a.outline, theme = _a.theme, _b = _a.variant, variant = _b === void 0 ? "primary" : _b;
    return outline ? "transparent" : getColor(variant, theme);
}, function (_a) {
    var _b = _a.variant, variant = _b === void 0 ? "primary" : _b, theme = _a.theme;
    return getColor(variant, theme);
}, getThemeTextColor, getThemeTextColor);
var templateObject_1$n;

var Tag = function (_a) {
    var startIcon = _a.startIcon, endIcon = _a.endIcon, children = _a.children, props = __rest(_a, ["startIcon", "endIcon", "children"]);
    return (React.createElement(StyledTag, __assign({}, props),
        React.isValidElement(startIcon) &&
            React.cloneElement(startIcon, {
                mr: "0.5rem",
            }),
        children,
        React.isValidElement(endIcon) &&
            React.cloneElement(endIcon, {
                ml: "0.5rem",
            })));
};
Tag.defaultProps = {
    variant: "primary",
    outline: false,
};

var StyledLink$1 = styled(Text)(templateObject_1$m || (templateObject_1$m = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  width: fit-content;\n  &:hover {\n    text-decoration: underline;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  width: fit-content;\n  &:hover {\n    text-decoration: underline;\n  }\n"])));
var Link = function (_a) {
    var external = _a.external, props = __rest(_a, ["external"]);
    var internalProps = external ? getExternalLinkProps() : {};
    return React.createElement(StyledLink$1, __assign({ as: "a", bold: true }, internalProps, props));
};
Link.defaultProps = {
    color: "primary",
};
var templateObject_1$m;

var LinkExternal = function (_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    return (React.createElement(Link, __assign({ external: true }, props),
        children,
        React.createElement(Icon$13, { color: "primary", ml: "4px" })));
};

var Bar = styled.div(templateObject_1$l || (templateObject_1$l = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: ", ";\n  border-top-left-radius: 32px;\n  border-bottom-left-radius: 32px;\n  height: 16px;\n  transition: width 200ms ease;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: ", ";\n  border-top-left-radius: 32px;\n  border-bottom-left-radius: 32px;\n  height: 16px;\n  transition: width 200ms ease;\n"])), function (props) { return (props.primary ? props.theme.colors.secondary : props.theme.colors.secondary + "80"); });
Bar.defaultProps = {
    primary: false,
};
var StyledProgress = styled.div(templateObject_2$a || (templateObject_2$a = __makeTemplateObject(["\n  position: relative;\n  background-color: ", ";\n  border-radius: 32px;\n  box-shadow: ", ";\n  height: 16px;\n  overflow: hidden;\n"], ["\n  position: relative;\n  background-color: ", ";\n  border-radius: 32px;\n  box-shadow: ", ";\n  height: 16px;\n  overflow: hidden;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
});
var templateObject_1$l, templateObject_2$a;

var ProgressBunnyWrapper = styled.div(templateObject_1$k || (templateObject_1$k = __makeTemplateObject(["\n  display: flex;\n  z-index: 2;\n  top: -65%;\n  position: absolute;\n  transform: translate(-50%, -50%);\n  transition: left 200ms ease-out;\n"], ["\n  display: flex;\n  z-index: 2;\n  top: -65%;\n  position: absolute;\n  transform: translate(-50%, -50%);\n  transition: left 200ms ease-out;\n"])));
var templateObject_1$k;

var stepGuard = function (step) {
    if (step < 0) {
        return 0;
    }
    if (step > 100) {
        return 100;
    }
    return step;
};
var Progress = function (_a) {
    var _b = _a.primaryStep, primaryStep = _b === void 0 ? 0 : _b, _c = _a.secondaryStep, secondaryStep = _c === void 0 ? null : _c, _d = _a.showProgressBunny, showProgressBunny = _d === void 0 ? false : _d;
    return (React.createElement(StyledProgress, null,
        showProgressBunny && (React.createElement(ProgressBunnyWrapper, { style: { left: stepGuard(primaryStep) + "%" } },
            React.createElement(Icon$Y, null))),
        React.createElement(Bar, { primary: true, style: { width: stepGuard(primaryStep) + "%" } }),
        secondaryStep ? React.createElement(Bar, { style: { width: stepGuard(secondaryStep) + "%" } }) : null));
};

var rotate = keyframes(templateObject_1$j || (templateObject_1$j = __makeTemplateObject(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"], ["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"])));
var SpinnerIcon = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React.createElement("image", { width: "96", height: "96", href: "/images/ben/9.png" })));
};
var Container$3 = styled.div(templateObject_2$9 || (templateObject_2$9 = __makeTemplateObject(["\n  position: relative;\n"], ["\n  position: relative;\n"])));
var RotatingPancakeIcon = styled(SpinnerIcon)(templateObject_3$6 || (templateObject_3$6 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  animation: ", " 2s linear infinite;\n  transform: translate3d(0, 0, 0);\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  animation: ", " 2s linear infinite;\n  transform: translate3d(0, 0, 0);\n"])), rotate);
var Spinner = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 128 : _b;
    return (React.createElement(Container$3, null,
        React.createElement(RotatingPancakeIcon, { width: size * 0.5 + "px" })));
};
var templateObject_1$j, templateObject_2$9, templateObject_3$6;

var animation = {
    WAVES: "waves",
    PULSE: "pulse",
};
var variant = {
    RECT: "rect",
    CIRCLE: "circle",
};

var waves = keyframes(templateObject_1$i || (templateObject_1$i = __makeTemplateObject(["\n   from {\n        left: -150px;\n    }\n    to   {\n        left: 100%;\n    }\n"], ["\n   from {\n        left: -150px;\n    }\n    to   {\n        left: 100%;\n    }\n"])));
var pulse = keyframes(templateObject_2$8 || (templateObject_2$8 = __makeTemplateObject(["\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.4;\n  }\n  100% {\n    opacity: 1;\n  }\n"], ["\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.4;\n  }\n  100% {\n    opacity: 1;\n  }\n"])));
var Root = styled.div(templateObject_3$5 || (templateObject_3$5 = __makeTemplateObject(["\n  min-height: 20px;\n  display: block;\n  background-color: ", ";\n  border-radius: ", ";\n\n  ", "\n  ", "\n"], ["\n  min-height: 20px;\n  display: block;\n  background-color: ", ";\n  border-radius: ", ";\n\n  ", "\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.backgroundDisabled;
}, function (_a) {
    var variant$1 = _a.variant, theme = _a.theme;
    return (variant$1 === variant.CIRCLE ? theme.radii.circle : theme.radii.small);
}, layout, space);
var Pulse = styled(Root)(templateObject_4$2 || (templateObject_4$2 = __makeTemplateObject(["\n  animation: ", " 2s infinite ease-out;\n  transform: translate3d(0, 0, 0);\n"], ["\n  animation: ", " 2s infinite ease-out;\n  transform: translate3d(0, 0, 0);\n"])), pulse);
var Waves = styled(Root)(templateObject_5$1 || (templateObject_5$1 = __makeTemplateObject(["\n  position: relative;\n  overflow: hidden;\n  transform: translate3d(0, 0, 0);\n  &:before {\n    content: \"\";\n    position: absolute;\n    background-image: linear-gradient(90deg, transparent, rgba(243, 243, 243, 0.5), transparent);\n    top: 0;\n    left: -150px;\n    height: 100%;\n    width: 150px;\n    animation: ", " 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n  }\n"], ["\n  position: relative;\n  overflow: hidden;\n  transform: translate3d(0, 0, 0);\n  &:before {\n    content: \"\";\n    position: absolute;\n    background-image: linear-gradient(90deg, transparent, rgba(243, 243, 243, 0.5), transparent);\n    top: 0;\n    left: -150px;\n    height: 100%;\n    width: 150px;\n    animation: ", " 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n  }\n"])), waves);
var Skeleton = function (_a) {
    var _b = _a.variant, variant$1 = _b === void 0 ? variant.RECT : _b, _c = _a.animation, animation$1 = _c === void 0 ? animation.PULSE : _c, props = __rest(_a, ["variant", "animation"]);
    if (animation$1 === animation.WAVES) {
        return React.createElement(Waves, __assign({ variant: variant$1 }, props));
    }
    return React.createElement(Pulse, __assign({ variant: variant$1 }, props));
};
var templateObject_1$i, templateObject_2$8, templateObject_3$5, templateObject_4$2, templateObject_5$1;

var Handle = styled.div(templateObject_1$h || (templateObject_1$h = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 50%;\n  cursor: pointer;\n  height: 32px;\n  left: 4px;\n  position: absolute;\n  top: 4px;\n  transition: left 200ms ease-in;\n  width: 32px;\n  z-index: 1;\n"], ["\n  background-color: ", ";\n  border-radius: 50%;\n  cursor: pointer;\n  height: 32px;\n  left: 4px;\n  position: absolute;\n  top: 4px;\n  transition: left 200ms ease-in;\n  width: 32px;\n  z-index: 1;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.toggle.handleBackground;
});
var Input = styled.input(templateObject_2$7 || (templateObject_2$7 = __makeTemplateObject(["\n  cursor: pointer;\n  opacity: 0;\n  height: 100%;\n  position: absolute;\n  width: 100%;\n  z-index: 3;\n\n  &:checked + ", " {\n    left: calc(100% - 36px);\n  }\n\n  &:focus + ", " {\n    box-shadow: ", ";\n  }\n\n  &:hover + ", ":not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n"], ["\n  cursor: pointer;\n  opacity: 0;\n  height: 100%;\n  position: absolute;\n  width: 100%;\n  z-index: 3;\n\n  &:checked + ", " {\n    left: calc(100% - 36px);\n  }\n\n  &:focus + ", " {\n    box-shadow: ", ";\n  }\n\n  &:hover + ", ":not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n"])), Handle, Handle, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, Handle, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
});
var StyledToggle = styled.div(templateObject_3$4 || (templateObject_3$4 = __makeTemplateObject(["\n  align-items: center;\n  background-color: ", ";\n  border-radius: 24px;\n  box-shadow: ", ";\n  cursor: pointer;\n  display: inline-flex;\n  height: 40px;\n  position: relative;\n  /* transition: background-color 200ms; */\n  width: 72px;\n"], ["\n  align-items: center;\n  background-color: ", ";\n  border-radius: 24px;\n  box-shadow: ", ";\n  cursor: pointer;\n  display: inline-flex;\n  height: 40px;\n  position: relative;\n  /* transition: background-color 200ms; */\n  width: 72px;\n"])), function (_a) {
    var theme = _a.theme, checked = _a.checked;
    return theme.colors[checked ? "success" : "input"];
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
});
var templateObject_1$h, templateObject_2$7, templateObject_3$4;

var Toggle = function (_a) {
    var checked = _a.checked, props = __rest(_a, ["checked"]);
    var isChecked = !!checked;
    return (React.createElement(StyledToggle, { checked: isChecked },
        React.createElement(Input, __assign({ checked: checked }, props, { type: "checkbox" })),
        React.createElement(Handle, null)));
};

var byTextAscending = function (getTextProperty) { return function (objectA, objectB) {
    var upperA = getTextProperty(objectA).toUpperCase();
    var upperB = getTextProperty(objectB).toUpperCase();
    if (upperA < upperB) {
        return -1;
    }
    if (upperA > upperB) {
        return 1;
    }
    return 0;
}; };
var byTextDescending = function (getTextProperty) { return function (objectA, objectB) {
    var upperA = getTextProperty(objectA).toUpperCase();
    var upperB = getTextProperty(objectB).toUpperCase();
    if (upperA > upperB) {
        return -1;
    }
    if (upperA < upperB) {
        return 1;
    }
    return 0;
}; };

var sortByColumn = function (data, sortColumn, columns) {
    var isAscending = null;
    var sortedRows = __spreadArray([], data);
    columns.forEach(function (column) {
        // if the row was found
        if (sortColumn === column.name) {
            isAscending = column.sorted.asc;
            if (column.sort) {
                sortedRows = isAscending ? data.sort(column.sort) : data.sort(column.sort).reverse();
                // default to sort by string
            }
            else {
                sortedRows = isAscending
                    ? data.sort(byTextAscending(function (object) { return object.original[sortColumn]; }))
                    : data.sort(byTextDescending(function (object) { return object.original[sortColumn]; }));
            }
        }
    });
    return sortedRows;
};
var getPaginatedData = function (rows, perPage, page) {
    var start = (page - 1) * perPage;
    var end = start + perPage;
    return rows.slice(start, end);
};
var getColumnsByName = function (columns) {
    var columnsByName = {};
    columns.forEach(function (column) {
        var col = {
            name: column.name,
            label: column.label,
        };
        if (column.render) {
            col.render = column.render;
        }
        col.hidden = column.hidden;
        columnsByName[column.name] = col;
    });
    return columnsByName;
};
var createReducer = function () { return function (state, action) {
    var rows = [];
    var nextPage = 0;
    var prevPage = 0;
    var isAscending = null;
    var sortedRows = [];
    var columnCopy = [];
    var filteredRows = [];
    var selectedRowsById = {};
    var stateCopy = __assign({}, state);
    var rowIds = {};
    switch (action.type) {
        case "SET_ROWS":
            rows = __spreadArray([], action.data);
            // preserve sorting if a sort is already enabled when data changes
            if (state.sortColumn) {
                rows = sortByColumn(action.data, state.sortColumn, state.columns);
            }
            if (state.paginationEnabled === true) {
                rows = getPaginatedData(rows, state.pagination.perPage, state.pagination.page);
            }
            if (state.paginationEnabled === true) {
                rows = getPaginatedData(rows, state.pagination.perPage, state.pagination.page);
            }
            columnCopy = state.columns.map(function (column) {
                if (state.sortColumn === column.name) {
                    return __assign(__assign({}, column), { sorted: {
                            on: true,
                            asc: column.sorted.asc,
                        } });
                }
                return column;
            });
            return __assign(__assign({}, state), { rows: rows, originalRows: action.data, columns: columnCopy });
        case "NEXT_PAGE":
            nextPage = state.pagination.page + 1;
            return __assign(__assign({}, state), { rows: getPaginatedData(state.originalRows, state.pagination.perPage, nextPage), pagination: __assign(__assign({}, state.pagination), { page: nextPage, canNext: nextPage * state.pagination.perPage < state.originalRows.length, canPrev: nextPage !== 1 }) });
        case "PREV_PAGE":
            prevPage = state.pagination.page === 1 ? 1 : state.pagination.page - 1;
            return __assign(__assign({}, state), { rows: getPaginatedData(state.originalRows, state.pagination.perPage, prevPage), pagination: __assign(__assign({}, state.pagination), { page: prevPage, canNext: prevPage * state.pagination.perPage < state.originalRows.length, canPrev: prevPage !== 1 }) });
        case "TOGGLE_SORT":
            if (!(action.columnName in state.columnsByName)) {
                throw new Error("Invalid column, " + action.columnName + " not found");
            }
            // loop through all columns and set the sort parameter to off unless
            // it's the specified column (only one column at a time for )
            columnCopy = state.columns.map(function (column) {
                // if the row was found
                if (action.columnName === column.name) {
                    if (action.isAscOverride !== undefined) {
                        // force the sort order
                        isAscending = action.isAscOverride;
                    }
                    else {
                        // if it's undefined, start by setting to ascending, otherwise toggle
                        isAscending = column.sorted.asc === undefined ? true : !column.sorted.asc;
                    }
                    if (column.sort) {
                        sortedRows = isAscending ? state.rows.sort(column.sort) : state.rows.sort(column.sort).reverse();
                        // default to sort by string
                    }
                    else {
                        sortedRows = isAscending
                            ? state.rows.sort(byTextAscending(function (object) { return object.original[action.columnName]; }))
                            : state.rows.sort(byTextDescending(function (object) { return object.original[action.columnName]; }));
                    }
                    return __assign(__assign({}, column), { sorted: {
                            on: true,
                            asc: isAscending,
                        } });
                }
                // set sorting to false for all other columns
                return __assign(__assign({}, column), { sorted: {
                        on: false,
                        asc: false,
                    } });
            });
            return __assign(__assign({}, state), { columns: columnCopy, rows: sortedRows, sortColumn: action.columnName, columnsByName: getColumnsByName(columnCopy) });
        case "GLOBAL_FILTER":
            filteredRows = action.filter(state.originalRows);
            selectedRowsById = {};
            state.selectedRows.forEach(function (row) {
                var _a;
                selectedRowsById[row.id] = (_a = row.selected) !== null && _a !== void 0 ? _a : false;
            });
            return __assign(__assign({}, state), { rows: filteredRows.map(function (row) {
                    return selectedRowsById[row.id] ? __assign(__assign({}, row), { selected: selectedRowsById[row.id] }) : __assign({}, row);
                }), filterOn: true });
        case "SELECT_ROW":
            stateCopy = __assign({}, state);
            stateCopy.rows = stateCopy.rows.map(function (row) {
                var newRow = __assign({}, row);
                if (newRow.id === action.rowId) {
                    newRow.selected = !newRow.selected;
                }
                return newRow;
            });
            stateCopy.originalRows = stateCopy.originalRows.map(function (row) {
                var newRow = __assign({}, row);
                if (newRow.id === action.rowId) {
                    newRow.selected = !newRow.selected;
                }
                return newRow;
            });
            stateCopy.selectedRows = stateCopy.originalRows.filter(function (row) { return row.selected === true; });
            stateCopy.toggleAllState =
                stateCopy.selectedRows.length === stateCopy.rows.length
                    ? (stateCopy.toggleAllState = true)
                    : (stateCopy.toggleAllState = false);
            return stateCopy;
        case "SEARCH_STRING":
            stateCopy = __assign({}, state);
            stateCopy.rows = stateCopy.originalRows.filter(function (row) {
                return (row.cells.filter(function (cell) {
                    if (cell.value.includes(action.searchString)) {
                        return true;
                    }
                    return false;
                }).length > 0);
            });
            return stateCopy;
        case "TOGGLE_ALL":
            if (state.selectedRows.length < state.rows.length) {
                stateCopy.rows = stateCopy.rows.map(function (row) {
                    rowIds[row.id] = true;
                    return __assign(__assign({}, row), { selected: true });
                });
                stateCopy.toggleAllState = true;
            }
            else {
                stateCopy.rows = stateCopy.rows.map(function (row) {
                    rowIds[row.id] = false;
                    return __assign(__assign({}, row), { selected: false });
                });
                stateCopy.toggleAllState = false;
            }
            stateCopy.originalRows = stateCopy.originalRows.map(function (row) {
                return row.id in rowIds ? __assign(__assign({}, row), { selected: rowIds[row.id] }) : __assign({}, row);
            });
            stateCopy.selectedRows = stateCopy.originalRows.filter(function (row) { return row.selected; });
            return stateCopy;
        default:
            throw new Error("Invalid reducer action");
    }
}; };
var sortDataInOrder = function (data, columns) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return data.map(function (row) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var newRow = {};
        columns.forEach(function (column) {
            if (!(column.name in row)) {
                throw new Error("Invalid row data, " + column.name + " not found");
            }
            newRow[column.name] = row[column.name];
        });
        return newRow;
    });
};
var makeRender = function (
// eslint-disable-next-line
value, 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
render, row) {
    return render ? function () { return render({ row: row, value: value }); } : function () { return value; };
};
var makeHeaderRender = function (label, render) {
    return render ? function () { return render({ label: label }); } : function () { return label; };
};
var useTable = function (columns, data, options) {
    var columnsWithSorting = useMemo(function () {
        return columns.map(function (column) {
            return __assign(__assign({}, column), { label: column.label ? column.label : column.name, hidden: column.hidden ? column.hidden : false, sort: column.sort, sorted: {
                    on: false,
                    asc: false,
                } });
        });
    }, [columns]);
    var columnsByName = useMemo(function () { return getColumnsByName(columnsWithSorting); }, [columnsWithSorting]);
    var tableData = useMemo(function () {
        var sortedData = sortDataInOrder(data, columnsWithSorting);
        var newData = sortedData.map(function (row, idx) {
            return {
                id: idx,
                selected: false,
                hidden: false,
                original: row,
                cells: Object.entries(row)
                    .map(function (_a) {
                    var column = _a[0], value = _a[1];
                    return {
                        hidden: columnsByName[column].hidden,
                        field: column,
                        value: value,
                        render: makeRender(value, columnsByName[column].render, row),
                    };
                })
                    .filter(function (cell) { return !cell.hidden; }),
            };
        });
        return newData;
    }, [data, columnsWithSorting, columnsByName]);
    var reducer = createReducer();
    var _a = useReducer(reducer, {
        columns: columnsWithSorting,
        columnsByName: columnsByName,
        originalRows: tableData,
        rows: tableData,
        selectedRows: [],
        toggleAllState: false,
        filterOn: !!(options === null || options === void 0 ? void 0 : options.filter),
        sortColumn: options === null || options === void 0 ? void 0 : options.sortColumn,
        paginationEnabled: !!(options === null || options === void 0 ? void 0 : options.pagination),
        pagination: {
            page: 1,
            perPage: 10,
            canNext: true,
            canPrev: false,
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            nextPage: noop,
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            prevPage: noop,
        },
    }), state = _a[0], dispatch = _a[1];
    state.pagination.nextPage = useCallback(function () {
        dispatch({ type: "NEXT_PAGE" });
    }, [dispatch]);
    state.pagination.prevPage = useCallback(function () { return dispatch({ type: "PREV_PAGE" }); }, [dispatch]);
    useEffect(function () {
        dispatch({ type: "SET_ROWS", data: tableData });
    }, [tableData]);
    var headers = useMemo(function () {
        return __spreadArray([], state.columns.map(function (column) {
            var label = column.label ? column.label : column.name;
            return __assign(__assign({}, column), { render: makeHeaderRender(label, column.headerRender) });
        }));
    }, [state.columns]);
    useEffect(function () {
        if (options && options.filter) {
            dispatch({ type: "GLOBAL_FILTER", filter: options.filter });
        }
    });
    return {
        headers: headers.filter(function (column) { return !column.hidden; }),
        rows: state.rows,
        originalRows: state.originalRows,
        selectedRows: state.selectedRows,
        dispatch: dispatch,
        selectRow: function (rowId) { return dispatch({ type: "SELECT_ROW", rowId: rowId }); },
        toggleAll: function () { return dispatch({ type: "TOGGLE_ALL" }); },
        toggleSort: function (columnName, isAscOverride) {
            return dispatch({ type: "TOGGLE_SORT", columnName: columnName, isAscOverride: isAscOverride });
        },
        setSearchString: function (searchString) { return dispatch({ type: "SEARCH_STRING", searchString: searchString }); },
        pagination: state.pagination,
        toggleAllState: state.toggleAllState,
    };
};

var breakpointMap = {
    xs: 370,
    sm: 576,
    md: 852,
    lg: 968,
    xl: 1080,
};
var breakpoints = Object.values(breakpointMap).map(function (breakpoint) { return breakpoint + "px"; });
var mediaQueries$1 = {
    xs: "@media screen and (min-width: " + breakpointMap.xs + "px)",
    sm: "@media screen and (min-width: " + breakpointMap.sm + "px)",
    md: "@media screen and (min-width: " + breakpointMap.md + "px)",
    lg: "@media screen and (min-width: " + breakpointMap.lg + "px)",
    xl: "@media screen and (min-width: " + breakpointMap.xl + "px)",
    nav: "@media screen and (min-width: " + breakpointMap.lg + "px)",
};
var shadows = {
    level1: "0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)",
    active: "0px 0px 0px 1px #f98c08, 0px 0px 4px 8px rgba(255,176,81, 0.8)",
    success: "0px 0px 0px 1px #31D0AA, 0px 0px 0px 4px rgba(49, 208, 170, 0.2)",
    warning: "0px 0px 0px 1px #ED4B9E, 0px 0px 0px 4px rgba(237, 75, 158, 0.2)",
    focus: "0px 0px 0px 1px #ffb948, 0px 0px 0px 4px rgba(255,176,81, 0.4)",
    inset: "inset 0px 2px 2px -1px rgba(74, 74, 104, 0.1)",
};
var spacing = [0, 4, 8, 16, 24, 32, 48, 64];
var radii = {
    small: "4px",
    default: "16px",
    card: "32px",
    circle: "50%",
};
var zIndices = {
    dropdown: 10,
    modal: 100,
};
var base = {
    siteWidth: 1200,
    breakpoints: breakpoints,
    mediaQueries: mediaQueries$1,
    spacing: spacing,
    shadows: shadows,
    radii: radii,
    zIndices: zIndices,
};

/**
 * Can't use the media queries from "base.mediaQueries" because of how matchMedia works
 * In order for the listener to trigger we need have have the media query with a range, e.g.
 * (min-width: 370px) and (max-width: 576px)
 * @see https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList
 */
var mediaQueries = (function () {
    var prevMinWidth = 0;
    return Object.keys(breakpointMap).reduce(function (accum, size, index) {
        var _a, _b;
        // Largest size is just a min-width of second highest max-width
        if (index === Object.keys(breakpointMap).length - 1) {
            return __assign(__assign({}, accum), (_a = {}, _a[size] = "(min-width: " + prevMinWidth + "px)", _a));
        }
        var minWidth = prevMinWidth;
        var breakpoint = breakpointMap[size];
        // Min width for next iteration
        prevMinWidth = breakpoint + 1;
        return __assign(__assign({}, accum), (_b = {}, _b[size] = "(min-width: " + minWidth + "px) and (max-width: " + breakpoint + "px)", _b));
    }, {});
})();
var getKey = function (size) { return "is" + size.charAt(0).toUpperCase() + size.slice(1); };
var useMatchBreakpoints = function () {
    var _a = useState(function () {
        return Object.keys(mediaQueries).reduce(function (accum, size) {
            var _a;
            var key = getKey(size);
            var mql = window.matchMedia(mediaQueries[size]);
            return __assign(__assign({}, accum), (_a = {}, _a[key] = mql.matches, _a));
        }, {});
    }), state = _a[0], setState = _a[1];
    useEffect(function () {
        // Create listeners for each media query returning a function to unsubscribe
        var handlers = Object.keys(mediaQueries).map(function (size) {
            var mql = window.matchMedia(mediaQueries[size]);
            var handler = function (matchMediaQuery) {
                var key = getKey(size);
                setState(function (prevState) {
                    var _a;
                    return (__assign(__assign({}, prevState), (_a = {}, _a[key] = matchMediaQuery.matches, _a)));
                });
            };
            // Safari < 14 fix
            if (mql.addEventListener) {
                mql.addEventListener("change", handler);
            }
            return function () {
                // Safari < 14 fix
                if (mql.removeEventListener) {
                    mql.removeEventListener("change", handler);
                }
            };
        });
        return function () {
            handlers.forEach(function (unsubscribe) {
                unsubscribe();
            });
        };
    }, [setState]);
    return state;
};

var defaultParticleOptions = {
    size: 30,
    distance: 500,
};
var createParticle = function (x, y, imgSrc, options) {
    if (options === void 0) { options = {}; }
    var _a = __assign(__assign({}, defaultParticleOptions), options), size = _a.size, distance = _a.distance;
    var particle = document.createElement("particle");
    document.body.appendChild(particle);
    var width = Math.floor(Math.random() * size + 8);
    var height = width;
    var destinationX = (Math.random() - 0.5) * distance;
    var destinationY = (Math.random() - 0.5) * distance;
    var rotation = Math.random() * 520;
    var delay = Math.random() * 200;
    particle.style.backgroundRepeat = "no-repeat";
    particle.style.backgroundSize = "contain";
    particle.style.backgroundImage = "url(" + imgSrc + ")";
    particle.style.left = "0";
    particle.style.top = "0";
    particle.style.opacity = "0";
    particle.style.pointerEvents = "none";
    particle.style.position = "fixed";
    particle.style.width = width + "px";
    particle.style.height = height + "px";
    var animation = particle.animate([
        {
            transform: "translate(-50%, -50%) translate(" + x + "px, " + y + "px) rotate(0deg)",
            opacity: 1,
        },
        {
            transform: "translate(-50%, -50%) translate(" + (x + destinationX) + "px, " + (y + destinationY) + "px) rotate(" + rotation + "deg)",
            opacity: 0,
        },
    ], {
        duration: Math.random() * 1000 + 5000,
        easing: "cubic-bezier(0, .9, .57, 1)",
        delay: delay,
    });
    animation.onfinish = function () {
        particle.remove();
    };
};
var defaultOptions = {
    numberOfParticles: 30,
    debounceDuration: 200,
    particleOptions: {},
};
/**
 * @see https://css-tricks.com/playing-with-particles-using-the-web-animations-api/
 */
var useParticleBurst = function (options) {
    var _a = __assign(__assign({}, defaultOptions), options), selector = _a.selector, numberOfParticles = _a.numberOfParticles, debounceDuration = _a.debounceDuration, imgSrc = _a.imgSrc, disableWhen = _a.disableWhen, particleOptions = _a.particleOptions;
    var makeListener = useCallback(function () {
        return debounce(function (event) {
            var isDisabled = disableWhen && disableWhen();
            if (!isDisabled) {
                var node = event.currentTarget;
                if (event.clientX === 0 && event.clientY === 0) {
                    var _a = node.getBoundingClientRect(), left = _a.left, width = _a.width, top_1 = _a.top, height = _a.height;
                    var x = left + width / 2;
                    var y = top_1 + height / 2;
                    for (var i = 0; i < numberOfParticles; i += 1) {
                        createParticle(x, y, imgSrc, particleOptions);
                    }
                }
                else {
                    for (var i = 0; i < numberOfParticles; i += 1) {
                        createParticle(event.clientX, event.clientY + window.scrollY, imgSrc, particleOptions);
                    }
                }
            }
        }, debounceDuration, { leading: true });
    }, [debounceDuration, numberOfParticles, imgSrc, disableWhen, particleOptions]);
    var listener = makeListener();
    var initialize = useCallback(function () {
        if (selector) {
            document.querySelectorAll(selector).forEach(function (element) {
                element.addEventListener("click", listener);
            });
        }
        else {
            document.addEventListener("click", listener);
        }
    }, [selector, listener]);
    var teardown = useCallback(function () {
        if (selector) {
            document.querySelectorAll(selector).forEach(function (element) {
                element.removeEventListener("click", listener);
            });
        }
        else {
            document.removeEventListener("click", listener);
        }
    }, [selector, listener]);
    useEffect(function () {
        initialize();
        return function () { return teardown(); };
    }, [initialize, teardown]);
    return { initialize: initialize, teardown: teardown };
};

var StyledModal = styled.div(templateObject_1$g || (templateObject_1$g = __makeTemplateObject(["\n  background: ", ";\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n  border: 1px solid ", ";\n  border-radius: 32px;\n  width: 100%;\n  z-index: ", ";\n  overflow-y: auto;\n  ", " {\n    width: auto;\n    min-width: 360px;\n    max-width: 100%;\n  }\n"], ["\n  background: ", ";\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n  border: 1px solid ", ";\n  border-radius: 32px;\n  width: 100%;\n  z-index: ", ";\n  overflow-y: auto;\n  ", " {\n    width: auto;\n    min-width: 360px;\n    max-width: 100%;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.modal.background;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.borderColor;
}, function (_a) {
    var theme = _a.theme;
    return theme.zIndices.modal;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.xs;
});
var ModalHeader = styled.div(templateObject_2$6 || (templateObject_2$6 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  border-bottom: 1px solid #e9eaeb;\n  align-items: center;\n  padding: 12px 24px;\n"], ["\n  display: flex;\n  align-items: center;\n  border-bottom: 1px solid #e9eaeb;\n  align-items: center;\n  padding: 12px 24px;\n"])));
var ModalTitle = styled(Flex)(templateObject_3$3 || (templateObject_3$3 = __makeTemplateObject(["\n  align-items: center;\n  flex: 1;\n"], ["\n  align-items: center;\n  flex: 1;\n"])));
var Modal = function (_a) {
    var title = _a.title, onDismiss = _a.onDismiss, onBack = _a.onBack, children = _a.children, _b = _a.hideCloseButton, hideCloseButton = _b === void 0 ? false : _b, _c = _a.bodyPadding, bodyPadding = _c === void 0 ? "24px" : _c;
    return (React.createElement(StyledModal, null,
        React.createElement(ModalHeader, null,
            React.createElement(ModalTitle, null,
                onBack && (React.createElement(IconButton, { variant: "text", onClick: onBack, "area-label": "go back", mr: "8px" },
                    React.createElement(Icon$1r, { color: "primary" }))),
                React.createElement(Heading, null, title)),
            !hideCloseButton && (React.createElement(IconButton, { variant: "text", onClick: onDismiss, "aria-label": "Close the dialog" },
                React.createElement(Icon$1c, { color: "primary" })))),
        React.createElement(Flex, { flexDirection: "column", p: bodyPadding }, children)));
};
var templateObject_1$g, templateObject_2$6, templateObject_3$3;

var Overlay = styled.div.attrs({ role: "presentation" })(templateObject_1$f || (templateObject_1$f = __makeTemplateObject(["\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  background-color: #452a7a;\n  transition: opacity 0.4s;\n  opacity: ", ";\n  z-index: ", ";\n  pointer-events: ", ";\n"], ["\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  background-color: #452a7a;\n  transition: opacity 0.4s;\n  opacity: ", ";\n  z-index: ", ";\n  pointer-events: ", ";\n"])), function (_a) {
    var show = _a.show;
    return (show ? 0.6 : 0);
}, function (_a) {
    var zIndex = _a.zIndex;
    return zIndex;
}, function (_a) {
    var show = _a.show;
    return (show ? "initial" : "none");
});
Overlay.defaultProps = {
    show: false,
    zIndex: 10,
};
var templateObject_1$f;

var ModalWrapper = styled.div(templateObject_1$e || (templateObject_1$e = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: ", ";\n"], ["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.zIndices.modal - 1;
});
var Context = createContext({
    onPresent: function () { return null; },
    onDismiss: function () { return null; },
    setCloseOnOverlayClick: function () { return true; },
});
var ModalProvider = function (_a) {
    var children = _a.children;
    var _b = useState(false), isOpen = _b[0], setIsOpen = _b[1];
    var _c = useState(), modalNode = _c[0], setModalNode = _c[1];
    var _d = useState(true), closeOnOverlayClick = _d[0], setCloseOnOverlayClick = _d[1];
    var handlePresent = function (node) {
        setModalNode(node);
        setIsOpen(true);
    };
    var handleDismiss = function () {
        setModalNode(undefined);
        setIsOpen(false);
    };
    var handleOverlayDismiss = function () {
        if (closeOnOverlayClick) {
            handleDismiss();
        }
    };
    return (React.createElement(Context.Provider, { value: {
            onPresent: handlePresent,
            onDismiss: handleDismiss,
            setCloseOnOverlayClick: setCloseOnOverlayClick,
        } },
        isOpen && (React.createElement(ModalWrapper, null,
            React.createElement(Overlay, { show: true, onClick: handleOverlayDismiss }),
            React.isValidElement(modalNode) &&
                React.cloneElement(modalNode, {
                    onDismiss: handleDismiss,
                }))),
        children));
};
var templateObject_1$e;

var useModal = function (modal, closeOnOverlayClick) {
    if (closeOnOverlayClick === void 0) { closeOnOverlayClick = true; }
    var _a = useContext(Context), onPresent = _a.onPresent, onDismiss = _a.onDismiss, setCloseOnOverlayClick = _a.setCloseOnOverlayClick;
    var onPresentCallback = useCallback(function () {
        onPresent(modal);
    }, [modal, onPresent]);
    useEffect(function () {
        setCloseOnOverlayClick(closeOnOverlayClick);
    }, [closeOnOverlayClick, setCloseOnOverlayClick]);
    return [onPresentCallback, onDismiss];
};

var Icon$I = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 -58 504.36927 504" }, props),
        React.createElement("path", { d: "m203.4375 223.417969c16.773438 0 30.375-13.597657 30.375-30.375 0-16.773438-13.601562-30.371094-30.375-30.371094s-30.375 13.597656-30.375 30.371094c.019531 16.769531 13.609375 30.355469 30.375 30.375zm0-44.746094c7.9375 0 14.375 6.433594 14.375 14.371094 0 7.941406-6.4375 14.375-14.375 14.375s-14.375-6.433594-14.375-14.375c.011719-7.933594 6.441406-14.363281 14.375-14.371094zm0 0" }),
        React.createElement("path", { d: "m484.179688 289.183594h3.1875c2.855468.003906 5.496093-1.519532 6.925781-3.992188 1.429687-2.472656 1.429687-5.523437 0-7.996094l-31.183594-54.011718c-1.429687-2.472656-4.070313-4-6.929687-4-2.855469 0-5.496094 1.527344-6.925782 4l-31.1875 54.019531c-1.429687 2.472656-1.425781 5.519531.003906 7.992187 1.429688 2.46875 4.066407 3.992188 6.921876 3.988282h3.1875l-19.109376 33.109375c-1.425781 2.460937-1.425781 5.5.007813 7.957031 1.433594 2.460938 4.074219 3.960938 6.917969 3.933594h32.183594v38h-61.199219l-.066407-131.371094c0-.195312-.015624-.386719-.03125-.574219.113282-2.050781-.566406-4.066406-1.898437-5.628906l-103.46875-120.648437c-1.523437-1.765626-3.742187-2.78125-6.074219-2.777344l-72.261718.007812v.121094c-2.238282.140625-4.335938 1.15625-5.835938 2.828125l-31.582031 37.445313-17.582031-30.402344h3.1875c2.855468.003906 5.496093-1.519532 6.925781-3.992188 1.429687-2.472656 1.429687-5.523437 0-7.996094l-31.183594-54.011718c-1.429687-2.472656-4.070313-4-6.929687-4-2.855469 0-5.496094 1.527344-6.925782 4l-31.1875 54.015625c-1.429687 2.472656-1.429687 5.519531 0 7.992187 1.429688 2.476563 4.070313 3.996094 6.925782 3.992188h3.1875l-19.113282 33.109375c-1.425781 2.460937-1.421875 5.5.011719 7.960937 1.429687 2.457032 4.070313 3.957032 6.917969 3.929688h30.183594v51.589844l-13.316407 15.703124c-1.117187.914063-1.929687 2.140626-2.335937 3.523438-.472656 1.03125-.722656 2.144531-.730469 3.277344 0 .214844 0 .425781.023437.636718-.113281 1.386719-.164062 2.921876-.210937 4.628907-.105469 3.726562-.1875 9.148437-.234375 16.113281-.078125 11.664062-.078125 27.867188 0 48.167969.015625 3.757812.035156 7.515625.050781 11.242187l-17.246093-29.882812h3.1875c2.855468.003906 5.496093-1.519532 6.925781-3.992188 1.429687-2.472656 1.429687-5.523437 0-7.996094l-31.183594-54.011718c-1.429687-2.472656-4.070313-4-6.929687-4-2.855469 0-5.496094 1.527344-6.925782 4l-31.1875 54.015625c-1.429687 2.472656-1.429687 5.519531 0 7.992187 1.429688 2.476563 4.070313 3.996094 6.925782 3.992188h3.1875l-19.113282 33.109375c-1.425781 2.460937-1.421875 5.5.011719 7.960937 1.429687 2.457032 4.070313 3.957032 6.917969 3.929688h30.183594v36h-12.191407c-4.417969 0-8 3.582031-8 8 0 4.417968 3.582031 8 8 8h452c4.417969 0 8-3.582032 8-8 0-4.417969-3.582031-8-8-8h-13.808593v-38h32.1875c2.847656.027344 5.496093-1.480469 6.929687-3.945313 1.429687-2.464843 1.429687-5.507812-.003906-7.972656zm-171.332032-41.332032 58.070313-.027343.0625 124.359375h-58.070313zm48.675782-16.027343-52.648438.027343-88.347656-104.667968 51.238281-.023438zm-158.117188-100.121094 84.804688 100.46875-169.507813.089844zm-90.441406-22.511719c-1.429688-2.476562-4.070313-4.003906-6.929688-4.007812h-3.183594l17.328126-30.015625 17.332031 30.015625h-3.183594c-2.859375.003906-5.503906 1.53125-6.929687 4.007812-1.429688 2.457032-1.429688 5.492188 0 7.945313l19.109374 33.046875h-27.191406c-.433594 0-.875-.117188-1.328125-.117188s-.894531.117188-1.328125.117188h-22.808594l19.109376-33.046875c1.429687-2.453125 1.429687-5.488281.003906-7.945313zm13.214844 56.992188h27.164062l-27.164062 32.601562zm-85.214844 113.007812c-1.429688-2.476562-4.070313-4.003906-6.929688-4.007812h-3.183594l17.328126-30.015625 17.332031 30.015625h-3.183594c-2.859375.003906-5.503906 1.53125-6.929687 4.007812-1.429688 2.457032-1.429688 5.492188 0 7.945313l19.109374 33.046875h-27.191406c-.433594 0-.875-.117188-1.328125-.117188s-.902343.117188-1.328125.117188h-22.808594l19.109376-33.046875c1.429687-2.453125 1.429687-5.488281.003906-7.945313zm13.214844 56.992188h34.1875c1.875.019531 3.695312-.628906 5.136718-1.828125.101563 15.789062.207032 29.828125.277344 37.828125h-39.601562zm149-56c-4.417969 0-8 3.582031-8 8v84h-85.398438c-.378906-43-.683594-102.972656-.253906-123.914063l187.320312-.101562.0625 124.015625h-85.730468v-84c0-4.417969-3.582032-8-8-8zm226.671874 38 19.109376-33.042969c1.429687-2.46875 1.429687-5.515625 0-7.984375-1.429688-2.46875-4.074219-3.984375-6.925782-3.972656h-3.183594l17.328126-30.015625 17.332031 30.015625h-3.183594c-2.859375.003906-5.503906 1.53125-6.929687 4.007812-1.429688 2.457032-1.429688 5.492188 0 7.945313l19.109374 33.046875zm0 0" }),
        React.createElement("path", { d: "m306.261719 84.351562c5.179687 3.183594 11.886719 4.707032 20.5 4.730469l54.101562.097657h.175781c8.535157 0 15.191407-1.492188 20.347657-4.628907 4.855469-2.949219 10.644531-8.777343 10.675781-19.863281-.046875-11.425781-6.292969-21.925781-16.3125-27.421875-1.335938-20.8125-18.578125-37.027344-39.433594-37.082031h-.097656c-20.023438.003906-36.898438 14.945312-39.324219 34.820312-12.574219 4.339844-21.058593 16.113282-21.199219 29.410156-.035156 11.085938 5.726563 16.960938 10.566407 19.9375zm19.140625-34.925781c4.265625-.402343 7.457031-4.09375 7.238281-8.371093-.019531-.433594-.035156-.871094-.03125-1.316407.03125-13.015625 10.589844-23.550781 23.605469-23.554687h.0625c13.039062.039062 23.582031 10.636718 23.550781 23.675781 0 .582031-.03125 1.230469-.097656 1.980469-.316407 3.746094 2.019531 7.207031 5.609375 8.316406 6.351562 1.988281 10.6875 7.855469 10.71875 14.511719-.011719 3.898437-1.441406 5.308593-2.988282 6.25-1.765624 1.074219-5.335937 2.355469-12.171874 2.332031l-54.101563-.136719c-6.859375-.015625-10.398437-1.3125-12.160156-2.394531-1.539063-.945312-2.964844-2.359375-2.953125-6.261719.078125-7.773437 5.988281-14.246093 13.71875-15.03125zm0 0" }),
        React.createElement("path", { d: "m414.714844 125.390625c4.175781 2.550781 9.492187 3.792969 16.265625 3.792969h40.015625c23.300781 0 25.117187-15.535156 25.117187-20.300782-.054687-8.808593-4.679687-16.957031-12.214843-21.519531-1.609376-15.65625-14.566407-27.699219-30.296876-28.164062-15.734374-.464844-29.375 10.796875-31.902343 26.332031-9.585938 3.78125-15.871094 13.050781-15.835938 23.351562 0 7.15625 3.144531 13.015626 8.851563 16.507813zm15.386718-25.574219c4.265626-.414062 7.449219-4.117187 7.214844-8.402344-.015625-.28125-.027344-.5625-.027344-.847656.070313-8.445312 6.9375-15.257812 15.386719-15.257812s15.316407 6.8125 15.382813 15.257812c0 .378906-.019532.800782-.058594 1.285156-.3125 3.75 2.03125 7.214844 5.628906 8.316407 3.832032 1.183593 6.453125 4.714843 6.484375 8.722656 0 1.605469 0 4.300781-9.117187 4.300781h-40.015625c-9.117188 0-9.117188-2.691406-9.117188-4.300781.035157-4.679687 3.582031-8.585937 8.238281-9.074219zm0 0" })));
};

var Icon$H = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 12.75C13.63 12.75 15.07 13.14 16.24 13.65C17.32 14.13 18 15.21 18 16.38V17C18 17.55 17.55 18 17 18H7C6.45 18 6 17.55 6 17V16.39C6 15.21 6.68 14.13 7.76 13.66C8.93 13.14 10.37 12.75 12 12.75ZM4 13C5.1 13 6 12.1 6 11C6 9.9 5.1 9 4 9C2.9 9 2 9.9 2 11C2 12.1 2.9 13 4 13ZM5.13 14.1C4.76 14.04 4.39 14 4 14C3.01 14 2.07 14.21 1.22 14.58C0.48 14.9 0 15.62 0 16.43V17C0 17.55 0.45 18 1 18H4.5V16.39C4.5 15.56 4.73 14.78 5.13 14.1ZM20 13C21.1 13 22 12.1 22 11C22 9.9 21.1 9 20 9C18.9 9 18 9.9 18 11C18 12.1 18.9 13 20 13ZM24 16.43C24 15.62 23.52 14.9 22.78 14.58C21.93 14.21 20.99 14 20 14C19.61 14 19.24 14.04 18.87 14.1C19.27 14.78 19.5 15.56 19.5 16.39V18H23C23.55 18 24 17.55 24 17V16.43ZM12 6C13.66 6 15 7.34 15 9C15 10.66 13.66 12 12 12C10.34 12 9 10.66 9 9C9 7.34 10.34 6 12 6Z" })));
};

var Icon$G = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M4 18H20C20.55 18 21 17.55 21 17C21 16.45 20.55 16 20 16H4C3.45 16 3 16.45 3 17C3 17.55 3.45 18 4 18ZM4 13H20C20.55 13 21 12.55 21 12C21 11.45 20.55 11 20 11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13ZM3 7C3 7.55 3.45 8 4 8H20C20.55 8 21 7.55 21 7C21 6.45 20.55 6 20 6H4C3.45 6 3 6.45 3 7Z" })));
};

var Icon$F = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M4 18H15C15.55 18 16 17.55 16 17C16 16.45 15.55 16 15 16H4C3.45 16 3 16.45 3 17C3 17.55 3.45 18 4 18ZM4 13H12C12.55 13 13 12.55 13 12C13 11.45 12.55 11 12 11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13ZM3 7C3 7.55 3.45 8 4 8H15C15.55 8 16 7.55 16 7C16 6.45 15.55 6 15 6H4C3.45 6 3 6.45 3 7ZM20.3 14.88L17.42 12L20.3 9.12C20.69 8.73 20.69 8.1 20.3 7.71C19.91 7.32 19.28 7.32 18.89 7.71L15.3 11.3C14.91 11.69 14.91 12.32 15.3 12.71L18.89 16.3C19.28 16.69 19.91 16.69 20.3 16.3C20.68 15.91 20.69 15.27 20.3 14.88Z" })));
};

var Icon$E = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 463.937 463.937" }, props),
        React.createElement("path", { d: "M460.414,216.518l-85.6-73.1c0.1-0.5,0.2-1,0.3-1.6v-95.6c-0.1-5.7-4.6-10.3-10.3-10.5h-47.8c-5.5,0-10,4.9-10,10.5v39.6\n\t\t\tl-68.5-58.4c-3.7-3.2-9.2-3.2-13,0l-221.9,189c-4.3,3.5-4.8,9.8-1.3,14.1s9.8,4.8,14.1,1.3c0.1-0.1,0.1-0.1,0.2-0.2l215.4-183.4\n\t\t\tl77.1,65.7l46.1,39.2l92.3,78.6c4.2,3.6,10.5,3.1,14.1-1.1C465.114,226.418,464.614,220.118,460.414,216.518z M355.014,126.518\n\t\t\tl-28-23.6v-47.1h28V126.518z" }),
        React.createElement("path", { d: "M416.314,236.718l-28.1-24l-149.7-127.9c-3.7-3.2-9.2-3.2-13,0l-149.7,127.9l-28.1,24c-4.2,3.6-4.7,9.9-1.1,14.1\n\t\t\tc3.5,4.2,9.7,4.7,13.8,1.2l0.1-0.1l12.5-10.8v187.5c0.1,5.6,4.7,10.2,10.3,10.3h297.3c5.6-0.1,10.2-4.6,10.3-10.3v-187.5\n\t\t\tl12.5,10.8c1.8,1.5,4,2.4,6.4,2.4c2.9,0,5.7-1.3,7.6-3.5C421.114,246.518,420.514,240.218,416.314,236.718z M272.014,418.818h-80\n\t\t\tv-108h80V418.818z M292.014,418.818v-117.7c0-5.5-4.1-10.3-9.6-10.3h-100.8c-5.5,0-9.6,4.8-9.6,10.3v117.7h-79v-194.8l139-118.4\n\t\t\tl139,118.4v194.8H292.014z" })));
};

var Icon$D = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 512 512" }, props),
        React.createElement("path", { d: "m110.393 324.421c0 91.485 65.319 165.914 145.607 165.914s145.607-74.429 145.607-165.914-65.319-165.914-145.607-165.914-145.607 74.429-145.607 165.914zm145.607-153.914c73.671 0 133.607 69.046 133.607 153.914s-59.936 153.914-133.607 153.914-133.607-69.045-133.607-153.914 59.936-153.914 133.607-153.914z" }),
        React.createElement("path", { d: "m320.721 144.332c27.931 0 50.655-27.514 50.655-61.333s-22.724-61.334-50.655-61.334-50.655 27.514-50.655 61.335 22.723 61.332 50.655 61.332zm0-110.667c21.314 0 38.655 22.131 38.655 49.334s-17.341 49.333-38.655 49.333-38.655-22.132-38.655-49.332 17.34-49.335 38.655-49.335z" }),
        React.createElement("path", { d: "m425.229 107.745c-24.769 0-44.92 24.326-44.92 54.227s20.151 54.228 44.92 54.228 44.921-24.326 44.921-54.228-20.15-54.227-44.921-54.227zm0 96.455c-18.152 0-32.92-18.943-32.92-42.228s14.768-42.227 32.92-42.227 32.921 18.943 32.921 42.227-14.768 42.228-32.921 42.228z" }),
        React.createElement("path", { d: "m191.279 144.332c27.932 0 50.655-27.514 50.655-61.333s-22.723-61.334-50.655-61.334-50.655 27.514-50.655 61.335 22.724 61.332 50.655 61.332zm0-110.667c21.315 0 38.655 22.131 38.655 49.334s-17.34 49.333-38.655 49.333-38.655-22.132-38.655-49.332 17.341-49.335 38.655-49.335z" }),
        React.createElement("path", { d: "m86.771 216.2c24.769 0 44.92-24.326 44.92-54.228s-20.151-54.227-44.92-54.227-44.921 24.326-44.921 54.227 20.15 54.228 44.921 54.228zm0-96.455c18.152 0 32.92 18.943 32.92 42.227s-14.768 42.228-32.92 42.228-32.921-18.943-32.921-42.228 14.768-42.227 32.921-42.227z" })));
};

var Icon$C = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 429.655 429.655" }, props),
        React.createElement("g", null,
            React.createElement("g", null,
                React.createElement("path", { d: "M418.407,40.127c-7.9-8.4-19-13.2-30.6-13.2c-23.1,0-41.8,18.7-41.8,41.8c0,3.7,0.5,7.4,1.5,11l-45.3,32.1\n\t\t\tc-16.2-16.4-42.7-16.6-59.1-0.4c-11.6,11.5-15.5,28.6-9.9,44l-41.8,35.2c-13.2-18.9-39.2-23.6-58.2-10.4\n\t\t\tc-7.2,5-12.6,12.2-15.5,20.4l-34.7-14.1c-3.9-22.8-25.4-38.1-48.2-34.2c-22.8,3.9-38.1,25.4-34.2,48.2\n\t\t\tc3.9,22.8,25.4,38.1,48.2,34.2c15-2.5,27.4-13,32.5-27.3l34.7,14.1c3.9,22.8,25.4,38.1,48.2,34.2c20.1-3.4,34.8-20.8,34.8-41.2\n\t\t\tc0-1.3-0.1-2.7-0.2-4l45.6-38.5c17.1,15.5,43.5,14.3,59-2.8c9.9-10.9,13.3-26.2,9.1-40.2l44.8-31.8c15.8,16.9,42.2,17.7,59.1,2\n\t\t\tC433.307,83.427,434.107,57.027,418.407,40.127z M41.807,215.427c-12,0-21.8-9.8-21.8-21.8s9.8-21.8,21.8-21.8s21.8,9.8,21.8,21.8\n\t\t\tC63.607,205.627,53.807,215.427,41.807,215.427z M157.107,236.427c-12,0-21.8-9.8-21.8-21.8s9.8-21.8,21.8-21.8\n\t\t\ts21.8,9.8,21.8,21.8C178.907,226.627,169.207,236.427,157.107,236.427z M272.507,163.027c-12,0-21.8-9.8-21.8-21.8\n\t\t\ts9.8-21.8,21.8-21.8s21.8,9.8,21.8,21.8S284.507,163.027,272.507,163.027z M387.807,90.527c-12,0-21.8-9.8-21.8-21.8\n\t\t\ts9.8-21.8,21.8-21.8s21.8,9.8,21.8,21.8C409.607,80.827,399.907,90.527,387.807,90.527z" }))),
        React.createElement("g", null,
            React.createElement("g", null,
                React.createElement("path", { d: "M415.807,143.727h-56c-5.5,0-10,4.5-10,10v238c0,5.5,4.5,10,10,10h56c5.5,0,10-4.5,10-10v-238\n\t\t\tC425.807,148.227,421.307,143.727,415.807,143.727z M405.807,382.727h-36v-219h36V382.727z" }))),
        React.createElement("g", null,
            React.createElement("g", null,
                React.createElement("path", { d: "M300.807,215.727h-56c-5.5,0-10,4.5-10,10v166c0,5.5,4.5,10,10,10h56c5.5,0,10-4.5,10-10v-166\n\t\t\tC310.807,220.227,306.307,215.727,300.807,215.727z M290.807,382.727h-36v-147h36V382.727z" }))),
        React.createElement("g", null,
            React.createElement("g", null,
                React.createElement("path", { d: "M184.807,290.727h-56c-5.5,0-10,4.5-10,10v92c0,5.5,4.5,10,10,10h56c5.5,0,10-4.5,10-10v-92\n\t\t\tC194.807,295.227,190.307,290.727,184.807,290.727z M174.807,382.727h-36v-72h36V382.727z" }))),
        React.createElement("g", null,
            React.createElement("g", null,
                React.createElement("path", { d: "M69.807,269.727h-56c-5.5,0-10,4.5-10,10v113c0,5.5,4.5,10,10,10h56c5.5,0,10-4.5,10-10v-113\n\t\t\tC79.807,274.227,75.307,269.727,69.807,269.727z M59.807,382.727h-36v-93h36V382.727z" }))),
        React.createElement("g", null),
        React.createElement("g", null),
        React.createElement("g", null),
        React.createElement("g", null),
        React.createElement("g", null),
        React.createElement("g", null),
        React.createElement("g", null),
        React.createElement("g", null),
        React.createElement("g", null),
        React.createElement("g", null),
        React.createElement("g", null),
        React.createElement("g", null),
        React.createElement("g", null),
        React.createElement("g", null),
        React.createElement("g", null)));
};

var Icon$B = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM18.92 8H15.97C15.65 6.75 15.19 5.55 14.59 4.44C16.43 5.07 17.96 6.35 18.92 8ZM12 4.04C12.83 5.24 13.48 6.57 13.91 8H10.09C10.52 6.57 11.17 5.24 12 4.04ZM4.26 14C4.1 13.36 4 12.69 4 12C4 11.31 4.1 10.64 4.26 10H7.64C7.56 10.66 7.5 11.32 7.5 12C7.5 12.68 7.56 13.34 7.64 14H4.26ZM5.08 16H8.03C8.35 17.25 8.81 18.45 9.41 19.56C7.57 18.93 6.04 17.66 5.08 16ZM8.03 8H5.08C6.04 6.34 7.57 5.07 9.41 4.44C8.81 5.55 8.35 6.75 8.03 8ZM12 19.96C11.17 18.76 10.52 17.43 10.09 16H13.91C13.48 17.43 12.83 18.76 12 19.96ZM14.34 14H9.66C9.57 13.34 9.5 12.68 9.5 12C9.5 11.32 9.57 10.65 9.66 10H14.34C14.43 10.65 14.5 11.32 14.5 12C14.5 12.68 14.43 13.34 14.34 14ZM14.59 19.56C15.19 18.45 15.65 17.25 15.97 16H18.92C17.96 17.65 16.43 18.93 14.59 19.56ZM16.36 14C16.44 13.34 16.5 12.68 16.5 12C16.5 11.32 16.44 10.66 16.36 10H19.74C19.9 10.64 20 11.31 20 12C20 12.69 19.9 13.36 19.74 14H16.36Z" })));
};

var Logo$1 = function (_a) {
    var isDark = _a.isDark, props = __rest(_a, ["isDark"]);
    return (React.createElement(Svg, __assign({ viewBox: "0 0 170 26" }, props),
        React.createElement("image", { width: "170", height: "26", href: isDark ? '/images/ben/LogoTextNewDark.png' : '/images/ben/LogoTextNewWhite.png' })));
};

var Icon$A = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.1534 13.6089L4.15362 13.61C4.77322 16.8113 7.42207 19.3677 10.647 19.8853L10.6502 19.8858C13.0412 20.2736 15.2625 19.6103 16.9422 18.2833C11.3549 16.2878 7.9748 10.3524 9.26266 4.48816C5.69846 5.77194 3.35817 9.51245 4.1534 13.6089ZM10.0083 2.21054C4.76622 3.2533 1.09895 8.36947 2.19006 13.9901C2.97006 18.0201 6.28006 21.2101 10.3301 21.8601C13.8512 22.4311 17.0955 21.1608 19.2662 18.8587C19.2765 18.8478 19.2866 18.837 19.2968 18.8261C19.4385 18.6745 19.5757 18.5184 19.7079 18.3581C19.7105 18.355 19.713 18.3519 19.7156 18.3487C19.8853 18.1426 20.0469 17.9295 20.2001 17.7101C20.4101 17.4001 20.2401 16.9601 19.8701 16.9201C19.5114 16.8796 19.1602 16.8209 18.817 16.7452C18.7964 16.7406 18.7758 16.736 18.7552 16.7313C18.6676 16.7114 18.5804 16.6903 18.4938 16.6681C18.4919 16.6676 18.4901 16.6672 18.4882 16.6667C13.0234 15.2647 9.72516 9.48006 11.4542 4.03417C11.4549 4.03214 11.4555 4.03012 11.4562 4.0281C11.4875 3.92954 11.5205 3.83109 11.5552 3.73278C11.5565 3.72911 11.5578 3.72543 11.5591 3.72175C11.6768 3.38921 11.8136 3.05829 11.9701 2.73005C12.1301 2.39005 11.8501 2.01005 11.4701 2.03005C11.1954 2.04379 10.924 2.06848 10.6561 2.10368C10.6517 2.10427 10.6472 2.10486 10.6428 2.10545C10.4413 2.13221 10.2418 2.16492 10.0446 2.2034C10.0325 2.20576 10.0204 2.20814 10.0083 2.21054Z" })));
};

var Icon$z = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 -159 452.088 452" }, props),
        React.createElement("path", { d: "m226.042969.0429688c-37.128907 0-67.230469 30.1015622-67.230469 67.2343752 0 37.128906 30.101562 67.230468 67.230469 67.230468 37.132812 0 67.234375-30.101562 67.234375-67.230468-.042969-37.113282-30.121094-67.1914065-67.234375-67.2343752zm0 114.4648432c-26.085938 0-47.230469-21.144531-47.230469-47.230468 0-26.085938 21.144531-47.234375 47.230469-47.234375 26.085937 0 47.234375 21.148437 47.234375 47.234375-.03125 26.070312-21.160156 47.203125-47.234375 47.230468zm0 0" }),
        React.createElement("path", { d: "m384.855469.0429688c-37.128907 0-67.230469 30.1015622-67.230469 67.2343752 0 37.128906 30.101562 67.230468 67.230469 67.230468 37.132812 0 67.234375-30.101562 67.234375-67.230468-.042969-37.113282-30.121094-67.1914065-67.234375-67.2343752zm0 114.4648432c-26.085938 0-47.230469-21.144531-47.230469-47.230468 0-26.085938 21.144531-47.234375 47.230469-47.234375 26.085937 0 47.234375 21.148437 47.234375 47.234375-.03125 26.070312-21.160156 47.199218-47.234375 47.230468zm0 0" }),
        React.createElement("path", { d: "m0 67.277344c0 37.128906 30.101562 67.234375 67.234375 67.234375 37.128906 0 67.230469-30.101563 67.230469-67.234375 0-37.132813-30.101563-67.2343752-67.234375-67.2343752-37.113281.0429687-67.1875002 30.1210932-67.230469 67.2343752zm114.464844 0c0 26.085937-21.144532 47.230468-47.230469 47.234375-26.085937 0-47.234375-21.148438-47.234375-47.234375 0-26.085938 21.144531-47.234375 47.230469-47.234375 26.074219.03125 47.207031 21.160156 47.234375 47.234375zm0 0" })));
};

var Icon$y = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 -1 462.85427 462" }, props),
        React.createElement("path", { d: "m183.980469 218.214844c12.875 0 23.308593-10.4375 23.308593-23.3125s-10.433593-23.308594-23.308593-23.308594-23.3125 10.433594-23.3125 23.308594c.015625 12.871094 10.441406 23.296875 23.3125 23.3125zm0-30.621094c4.035156 0 7.308593 3.273438 7.308593 7.308594 0 4.039062-3.273437 7.3125-7.308593 7.3125-4.039063 0-7.3125-3.273438-7.3125-7.3125.003906-4.035156 3.273437-7.304688 7.3125-7.308594zm0 0" }),
        React.createElement("path", { d: "m309.824219 277.550781c19.480469 0 35.273437-15.792969 35.273437-35.277343 0-19.480469-15.792968-35.273438-35.273437-35.273438s-35.273438 15.792969-35.273438 35.273438c.023438 19.472656 15.800781 35.253906 35.273438 35.277343zm0-54.550781c10.644531 0 19.273437 8.628906 19.273437 19.273438 0 10.644531-8.628906 19.277343-19.273437 19.277343s-19.273438-8.632812-19.273438-19.277343c.015625-10.636719 8.636719-19.257813 19.273438-19.273438zm0 0" }),
        React.createElement("path", { d: "m243.789062 276.59375c11.027344-.003906 19.964844-8.941406 19.960938-19.96875 0-11.023438-8.941406-19.960938-19.964844-19.960938-11.027344.003907-19.964844 8.945313-19.960937 19.96875.015625 11.019532 8.949219 19.949219 19.964843 19.960938zm0-23.925781c2.191407 0 3.960938 1.773437 3.960938 3.960937s-1.773438 3.964844-3.960938 3.964844-3.960937-1.773438-3.964843-3.960938c0-2.191406 1.777343-3.964843 3.964843-3.964843zm0 0" }),
        React.createElement("path", { d: "m45.214844 168.992188c-25.152344 6.25-38.988282 16.300781-41.125 29.878906-3.019532 19.148437 17.8125 38.4375 61.910156 57.332031 16.058594 6.773437 32.480469 12.65625 49.1875 17.617187 18.433594 54.945313 70.402344 94.640626 131.472656 94.640626 46.6875-.015626 90.226563-23.53125 115.839844-62.5625 4.402344-.257813 8.699219-.574219 12.871094-.960938 47.773437-4.425781 73.523437-16.375 76.539062-35.527344 3.902344-24.777344-33.863281-45.988281-68.117187-59.921875-9.871094-66.828125-67.597657-118.285156-137.132813-118.285156-49.960937.035156-96.050781 26.933594-120.648437 70.421875-32.457031-.25-60.324219 2.28125-80.796875 7.367188zm201.445312 183.46875c-48.570312-.046876-92.550781-28.722657-112.191406-73.148438 27.554688 7.3125 55.476562 13.175781 83.648438 17.558594 41.167968 6.484375 81.085937 9.820312 116.160156 9.820312 2.671875 0 5.300781-.027344 7.917968-.066406-23.242187 28.980469-58.386718 45.839844-95.535156 45.835938zm176.101563-104.183594c9.230469 7.109375 14.09375 13.902344 13.347656 18.644531-1.199219 7.640625-18.21875 18.007813-62.210937 22.082031-.648438.0625-1.308594.113282-1.964844.171875 8.816406-18.539062 13.378906-38.8125 13.355468-59.34375 0-.792969-.015624-1.582031-.027343-2.371093 15.800781 6.878906 28.625 13.984374 37.496093 20.816406zm-176.101563-141.074219c43.652344-.015625 84.015625 23.183594 105.980469 60.902344s22.214844 84.273437.65625 122.226562c-38.363281 1.5-84.59375-1.691406-132.6875-9.265625-31.238281-4.832031-62.15625-11.558594-92.578125-20.140625-9.625-36.765625-1.664062-75.914062 21.554688-106 23.21875-30.085937 59.074218-47.710937 97.074218-47.722656zm-136.21875 148.386719c-13.800781-4.429688-26.597656-9.148438-38.136718-14.09375-40.609376-17.398438-53.613282-32.5-52.410157-40.136719 1.519531-9.652344 29.167969-23.335937 98.359375-23.746094-10.050781 24.699219-12.761718 51.773438-7.8125 77.976563zm0 0" }),
        React.createElement("path", { d: "m148.207031 361.945312c-.941406-2.898437-3.445312-5.007812-6.457031-5.445312l-39.09375-5.679688-17.480469-35.425781c-1.347656-2.730469-4.128906-4.457031-7.175781-4.457031s-5.828125 1.726562-7.175781 4.457031l-17.480469 35.425781-39.09375 5.679688c-3.011719.4375-5.515625 2.546875-6.457031 5.445312-.941407 2.894532-.15625 6.074219 2.023437 8.199219l28.289063 27.574219-6.679688 38.933594c-.515625 3.003906.71875 6.035156 3.179688 7.824218 2.464843 1.792969 5.730469 2.027344 8.425781.609376l34.964844-18.382813 34.96875 18.382813c2.695312 1.417968 5.960937 1.183593 8.425781-.609376 2.460937-1.789062 3.695313-4.820312 3.179687-7.824218l-6.675781-38.933594 28.289063-27.574219c2.179687-2.125 2.964844-5.304687 2.023437-8.199219zm-44.492187 27.253907c-1.882813 1.835937-2.742188 4.484375-2.300782 7.078125l4.652344 27.101562-24.34375-12.800781c-2.328125-1.222656-5.113281-1.222656-7.445312 0l-24.339844 12.800781 4.648438-27.101562c.445312-2.59375-.414063-5.242188-2.300782-7.078125l-19.691406-19.195313 27.214844-3.953125c2.605468-.382812 4.855468-2.019531 6.019531-4.378906l12.171875-24.660156 12.171875 24.660156c1.164063 2.363281 3.417969 4 6.023437 4.378906l27.210938 3.953125zm0 0" }),
        React.createElement("path", { d: "m390.980469 130.949219-3.636719 21.214843c-.515625 3 .71875 6.035157 3.179688 7.824219 2.464843 1.789063 5.730468 2.027344 8.425781.609375l19.050781-10.015625 19.050781 10.015625c2.695313 1.417969 5.960938 1.179688 8.425781-.609375 2.464844-1.789062 3.699219-4.824219 3.183594-7.824219l-3.636718-21.214843 15.414062-15.023438c2.179688-2.125 2.964844-5.304687 2.023438-8.199219-.9375-2.898437-3.441407-5.007812-6.457032-5.445312l-21.300781-3.09375-9.523437-19.300781c-1.347657-2.730469-4.128907-4.460938-7.175782-4.460938s-5.828125 1.730469-7.175781 4.460938l-9.523437 19.300781-21.300782 3.09375c-3.011718.4375-5.515625 2.546875-6.457031 5.445312-.941406 2.894532-.15625 6.074219 2.023437 8.199219zm16.785156-16.535157c2.605469-.378906 4.855469-2.015624 6.019531-4.375l4.214844-8.539062 4.214844 8.539062c1.164062 2.359376 3.417968 3.996094 6.023437 4.375l9.417969 1.371094-6.816406 6.644532c-1.882813 1.835937-2.742188 4.484374-2.300782 7.082031l1.613282 9.382812-8.429688-4.433593c-2.328125-1.222657-5.113281-1.222657-7.445312 0l-8.425782 4.433593 1.609376-9.382812c.445312-2.597657-.414063-5.246094-2.300782-7.082031l-6.8125-6.644532zm0 0" }),
        React.createElement("path", { d: "m186.980469 55.949219-3.636719 21.214843c-.515625 3 .71875 6.035157 3.179688 7.824219 2.464843 1.789063 5.730468 2.027344 8.425781.609375l19.050781-10.015625 19.050781 10.015625c2.695313 1.417969 5.960938 1.179688 8.425781-.609375 2.464844-1.789062 3.699219-4.824219 3.183594-7.824219l-3.636718-21.214843 15.414062-15.023438c2.179688-2.125 2.964844-5.304687 2.023438-8.199219-.9375-2.898437-3.441407-5.007812-6.457032-5.445312l-21.300781-3.09375-9.523437-19.300781c-1.347657-2.730469-4.128907-4.460938-7.175782-4.460938s-5.828125 1.730469-7.175781 4.460938l-9.523437 19.300781-21.300782 3.09375c-3.011718.4375-5.515625 2.546875-6.457031 5.445312-.941406 2.894532-.15625 6.074219 2.023437 8.199219zm16.785156-16.535157c2.605469-.378906 4.855469-2.015624 6.019531-4.375l4.214844-8.539062 4.214844 8.539062c1.164062 2.359376 3.417968 3.996094 6.023437 4.375l9.417969 1.371094-6.816406 6.648438c-1.882813 1.839844-2.742188 4.484375-2.300782 7.082031l1.613282 9.382813-8.429688-4.429688c-2.328125-1.226562-5.113281-1.226562-7.445312 0l-8.425782 4.429688 1.609376-9.382813c.445312-2.597656-.414063-5.242187-2.300782-7.082031l-6.8125-6.644532zm0 0" }),
        React.createElement("path", { d: "m32 107.546875c17.671875 0 32-14.324219 32-32 0-17.671875-14.328125-32-32-32s-32 14.328125-32 32c.0195312 17.664063 14.335938 31.980469 32 32zm0-48c8.835938 0 16 7.164063 16 16s-7.164062 16-16 16-16-7.164063-16-16c.011719-8.832031 7.167969-15.988281 16-16zm0 0" }),
        React.createElement("path", { d: "m399 361.832031c-27.0625 0-49 21.941407-49 49 0 27.0625 21.9375 49 49 49s49-21.9375 49-49c-.03125-27.046875-21.949219-48.96875-49-49zm0 82c-18.226562 0-33-14.773437-33-33 0-18.222656 14.773438-33 33-33s33 14.777344 33 33c-.019531 18.21875-14.785156 32.980469-33 33zm0 0" })));
};

var Icon$x = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "-62 0 462 462.00046" }, props),
        React.createElement("path", { d: "m274.625 23.601562c-32.832031 0-60 25.398438-63.980469 56.398438h-81.296875l-22.386718-56.121094c-5.71875-14.472656-19.734376-23.9531248-35.296876-23.878906h-63.664062c-4.417969 0-8 3.582031-8 8s3.582031 8 8 8h63.664062c9.003907-.054688 17.121094 5.425781 20.433594 13.800781l20.027344 50.199219h-42.867188c-2.097656.023438-4.09375.890625-5.542968 2.40625-1.445313 1.515625-2.222656 3.550781-2.152344 5.644531v208.988281c-.09375 42.4375 34.253906 76.90625 76.695312 76.960938h5.304688v72h-35c-4.417969 0-8 3.582031-8 8s3.582031 8 8 8h127c4.417969 0 8-3.582031 8-8s-3.582031-8-8-8h-36v-72h6.183594c42.460937-.046875 76.851562-34.5 76.816406-76.960938v-144.816406c33.769531-4.285156 58.414062-34.054687 56.316406-68.03125-2.097656-33.976562-30.214844-60.492187-64.253906-60.589844zm-150.722656 72.398438h142.660156v73h-189v-73zm59.660156 350h-24v-72h24zm22.183594-88h-13.441406c-.242188 0-.492188-.039062-.742188-.039062s-.5.039062-.746094.039062h-38.511718c-.242188 0-.492188-.039062-.742188-.039062s-.5.039062-.746094.039062h-12.558594c-16.136718-.019531-31.605468-6.460938-42.988281-17.894531-11.386719-11.4375-17.757812-26.929688-17.707031-43.066407v-112.039062h189v112.039062c.046875 33.628907-27.1875 60.925782-60.816406 60.960938zm76.816406-221.941406v-48.007813c.042969-2.109375-.757812-4.144531-2.226562-5.65625-1.46875-1.515625-3.480469-2.375-5.589844-2.394531h-47.925782c3.882813-22 23.820313-40.398438 47.789063-40.398438 25.210937.089844 46.160156 19.453126 48.234375 44.578126 2.070312 25.125-15.425781 47.660156-40.28125 51.878906zm0 0" })));
};

var Icon$w = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M5.66 4.2L6.05 4.59C6.44 4.97 6.44 5.61 6.05 5.99L6.04 6C5.65 6.39 5.03 6.39 4.64 6L4.25 5.61C3.86 5.23 3.86 4.6 4.25 4.21L4.26 4.2C4.64 3.82 5.27 3.81 5.66 4.2Z" }),
        React.createElement("path", { d: "M1.99 10.95H3.01C3.56 10.95 4 11.39 4 11.95V11.96C4 12.51 3.56 12.95 3 12.94H1.99C1.44 12.94 1 12.5 1 11.95V11.94C1 11.39 1.44 10.95 1.99 10.95Z" }),
        React.createElement("path", { d: "M12 1H12.01C12.56 1 13 1.44 13 1.99V2.96C13 3.51 12.56 3.95 12 3.94H11.99C11.44 3.94 11 3.5 11 2.95V1.99C11 1.44 11.44 1 12 1Z" }),
        React.createElement("path", { d: "M18.34 4.2C18.73 3.82 19.36 3.82 19.75 4.21C20.14 4.6 20.14 5.22 19.75 5.61L19.36 6C18.98 6.39 18.35 6.39 17.96 6L17.95 5.99C17.56 5.61 17.56 4.98 17.95 4.59L18.34 4.2Z" }),
        React.createElement("path", { d: "M18.33 19.7L17.94 19.31C17.55 18.92 17.55 18.3 17.95 17.9C18.33 17.52 18.96 17.51 19.35 17.9L19.74 18.29C20.13 18.68 20.13 19.31 19.74 19.7C19.35 20.09 18.72 20.09 18.33 19.7Z" }),
        React.createElement("path", { d: "M20 11.95V11.94C20 11.39 20.44 10.95 20.99 10.95H22C22.55 10.95 22.99 11.39 22.99 11.94V11.95C22.99 12.5 22.55 12.94 22 12.94H20.99C20.44 12.94 20 12.5 20 11.95Z" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6 11.95C6 8.64 8.69 5.95 12 5.95C15.31 5.95 18 8.64 18 11.95C18 15.26 15.31 17.95 12 17.95C8.69 17.95 6 15.26 6 11.95ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" }),
        React.createElement("path", { d: "M12 22.9H11.99C11.44 22.9 11 22.46 11 21.91V20.95C11 20.4 11.44 19.96 11.99 19.96H12C12.55 19.96 12.99 20.4 12.99 20.95V21.91C12.99 22.46 12.55 22.9 12 22.9Z" }),
        React.createElement("path", { d: "M5.66 19.69C5.27 20.08 4.64 20.08 4.25 19.69C3.86 19.3 3.86 18.68 4.24 18.28L4.63 17.89C5.02 17.5 5.65 17.5 6.04 17.89L6.05 17.9C6.43 18.28 6.44 18.91 6.05 19.3L5.66 19.69Z" })));
};

var Icon$v = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 3C7.02985 3 3 7.02985 3 11.9904C3 16.9606 7.02985 21 12 21C16.9701 21 21 16.9606 21 11.9904C21 7.02985 16.9701 3 12 3ZM16.4328 8.65139C16.3753 9.48614 14.8305 15.7228 14.8305 15.7228C14.8305 15.7228 14.7345 16.0874 14.3987 16.097C14.2836 16.097 14.1301 16.0874 13.9574 15.9243C13.6023 15.6269 12.7964 15.0512 12.0384 14.5235C12.0096 14.5522 11.9808 14.581 11.9424 14.6098C11.7697 14.7633 11.5107 14.984 11.2324 15.2527C11.1269 15.3486 11.0117 15.4542 10.8966 15.5693L10.887 15.5789C10.8198 15.6461 10.7623 15.694 10.7143 15.7324C10.3401 16.0394 10.3017 15.7804 10.3017 15.6461L10.5032 13.4488V13.4296L10.5128 13.4104C10.5224 13.3817 10.5416 13.3721 10.5416 13.3721C10.5416 13.3721 14.4659 9.87953 14.5714 9.50533C14.581 9.48614 14.5522 9.46695 14.5043 9.48614C14.2452 9.57249 9.72601 12.4318 9.22708 12.7484C9.19829 12.7676 9.11194 12.758 9.11194 12.758L6.91471 12.0384C6.91471 12.0384 6.65565 11.9328 6.742 11.693C6.76119 11.645 6.78998 11.597 6.89552 11.5299C7.38486 11.1844 15.8955 8.12367 15.8955 8.12367C15.8955 8.12367 16.1354 8.04691 16.2793 8.09488C16.3465 8.12367 16.3849 8.15245 16.4232 8.2484C16.4328 8.28678 16.4424 8.36354 16.4424 8.44989C16.4424 8.49787 16.4328 8.55544 16.4328 8.65139Z" })));
};

var Icon$u = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 485 485.25041" }, props),
        React.createElement("path", { d: "m449.945312 126.476562c-2.714843-2.714843-6.972656-3.121093-10.148437-.964843-22.820313 15.464843-53.410156 12.503906-72.839844-7.050781-19.644531-19.640626-22.53125-49.621094-7.011719-72.894532 2.113282-3.171875 1.695313-7.398437-1-10.09375l-21.183593-21.179687c-19.136719-19.082031-50.117188-19.054688-69.21875.0625l-254.191407 255.121093c-18.992187 19.125-18.964843 50.003907.066407 69.09375l16.136719 16.136719c2.925781 2.925781 7.597656 3.140625 10.773437.496094 22.660156-18.859375 55.957031-17.335937 76.800781 3.507813s22.363282 54.140624 3.507813 76.796874c-2.644531 3.179688-2.429688 7.851563.492187 10.773438l24.667969 24.667969c19.109375 19.066406 50.046875 19.066406 69.160156 0l254.65625-254.652344c19.097657-19.097656 19.097657-50.0625 0-69.15625zm9.351563 78.507813-254.65625 254.652344c-12.855469 12.828125-33.671875 12.828125-46.527344 0l-19.769531-19.765625c19.546875-28.980469 15.8125-67.753906-8.90625-92.472656s-63.488281-28.453126-92.46875-8.90625l-11.238281-11.234376c-12.804688-12.84375-12.824219-33.621093-.042969-46.488281l254.230469-255.164062c12.859375-12.828125 33.671875-12.828125 46.53125 0l16.746093 16.746093c-15.753906 28.675782-10.679687 64.308594 12.457032 87.441407 23.132812 23.132812 58.761718 28.210937 87.4375 12.460937l16.199218 16.199219c12.851563 12.847656 12.851563 33.679687 0 46.53125zm0 0" }),
        React.createElement("path", { d: "m271.851562 76.328125c-3.125-3.125-8.191406-3.125-11.3125 0l-184.550781 184.550781c-3.125 3.125-3.125 8.191406 0 11.316406l136.664063 136.664063c3.125 3.125 8.191406 3.125 11.316406 0l184.550781-184.550781c3.125-3.125 3.125-8.1875 0-11.3125zm-53.539062 315.5625-125.355469-125.355469 28.738281-28.738281 125.355469 125.355469zm40.054688-40.054687-125.355469-125.351563 133.183593-133.1875 125.351563 125.355469zm0 0" }),
        React.createElement("path", { d: "m242.113281 172.347656c-2.441406-1.820312-5.703125-2.097656-8.417969-.714844-2.710937 1.378907-4.40625 4.183594-4.367187 7.230469l.386719 29.757813-24.300782 17.183594c-2.488281 1.761718-3.757812 4.777343-3.28125 7.785156.472657 3.007812 2.617188 5.484375 5.523438 6.386718l28.421875 8.835938 8.835937 28.421875c.902344 2.90625 3.378907 5.050781 6.386719 5.527344 3.007813.476562 6.027344-.796875 7.785157-3.285157l17.183593-24.296874 29.761719.378906c3.042969.039062 5.847656-1.652344 7.230469-4.367188 1.382812-2.714844 1.105469-5.976562-.71875-8.417968l-17.796875-23.851563 9.554687-28.1875c.980469-2.882813.234375-6.074219-1.917969-8.226563-2.152343-2.152343-5.34375-2.898437-8.226562-1.917968l-28.1875 9.558594zm41.828125 28.601563-5.699218 16.816406c-.847657 2.492187-.410157 5.242187 1.164062 7.355469l10.621094 14.230468-17.757813-.226562c-2.632812-.039062-5.117187 1.226562-6.632812 3.378906l-10.253907 14.5-5.273437-16.957031c-.78125-2.515625-2.75-4.484375-5.265625-5.265625l-16.957031-5.273438 14.5-10.253906c2.148437-1.519531 3.410156-4 3.375-6.632812l-.226563-17.757813 14.230469 10.621094c2.113281 1.574219 4.863281 2.011719 7.355469 1.167969zm0 0" })));
};

var Icon$t = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 512 512" }, props),
        React.createElement("path", { d: "M404.469,283.627A6.1,6.1,0,0,0,410,277.655v-43.31a6.1,6.1,0,0,0-5.537-5.972l-27.957-2.7a121.1,121.1,0,0,0-14.144-33.433l17.727-21.4a6,6,0,0,0-.362-8.05l-30.246-30.554a6,6,0,0,0-8.095-.4L319.942,149.62a125.047,125.047,0,0,0-33.453-14.1l-2.7-27.961A6.12,6.12,0,0,0,277.82,102H234.447a6.119,6.119,0,0,0-5.972,5.556l-2.7,27.895a121.093,121.093,0,0,0-33.49,14.1l-21.4-17.731a6,6,0,0,0-8.068.38L132.2,162.762a6,6,0,0,0-.381,8.079l17.765,21.427a125.54,125.54,0,0,0-14.119,33.4l-27.981,2.7A6.056,6.056,0,0,0,102,234.345v43.31a6.054,6.054,0,0,0,5.484,5.972l27.93,2.7a121.1,121.1,0,0,0,14.131,33.433l-17.733,21.4a6,6,0,0,0,.384,8.076l30.618,30.555a6,6,0,0,0,8.069.371l21.443-17.779a125.047,125.047,0,0,0,33.453,14.1l2.7,27.961A6.119,6.119,0,0,0,234.447,410H277.82a6.118,6.118,0,0,0,5.972-5.556l2.7-27.9a121.088,121.088,0,0,0,33.49-14.1l21.405,17.731a6,6,0,0,0,8.068-.38l30.616-30.558a6,6,0,0,0,.38-8.079l-17.765-21.427a125.717,125.717,0,0,0,14.179-33.409Zm-38.354-4.162a113.763,113.763,0,0,1-15.848,37.48,6,6,0,0,0,.409,7.1L367.719,344.6,344.84,367.437l-20.564-17.051a6,6,0,0,0-7.139-.386,109.24,109.24,0,0,1-37.466,15.754,6.157,6.157,0,0,0-4.712,5.423L272.374,398h-32.48l-2.586-26.823a6.078,6.078,0,0,0-4.722-5.358,113.2,113.2,0,0,1-37.522-15.828,6,6,0,0,0-7.073.412l-20.563,17.042-22.879-22.837,17.043-20.557a6,6,0,0,0,.377-7.152,109.26,109.26,0,0,1-15.81-37.409,6.072,6.072,0,0,0-5.347-4.695L114,272.208V239.792l26.812-2.586a6.038,6.038,0,0,0,5.31-4.671,113.753,113.753,0,0,1,15.863-37.48,6,6,0,0,0-.4-7.1L144.545,167.4l22.881-22.833,20.564,17.051a6,6,0,0,0,7.14.386A109.231,109.231,0,0,1,232.6,146.246a6.156,6.156,0,0,0,4.712-5.423L239.894,114h32.48l2.585,26.823a6.081,6.081,0,0,0,4.722,5.358A113.2,113.2,0,0,1,317.2,162.009a6,6,0,0,0,7.072-.412l20.538-17.02,22.553,22.789L350.3,187.949a6,6,0,0,0-.377,7.152,109.26,109.26,0,0,1,15.81,37.409,6.134,6.134,0,0,0,5.4,4.7L398,239.792v32.422L371.5,274.8A6.135,6.135,0,0,0,366.115,279.465Z" }),
        React.createElement("path", { d: "M255.978,161.419A94.581,94.581,0,1,0,350.69,256,94.754,94.754,0,0,0,255.978,161.419Zm0,177.162A82.581,82.581,0,1,1,338.69,256,82.741,82.741,0,0,1,255.978,338.581Z" }),
        React.createElement("path", { d: "M256,227.3a11.32,11.32,0,0,1,11.307,11.307,6,6,0,0,0,12,0A23.347,23.347,0,0,0,263,216.376V212a6,6,0,0,0-12,0v3.846a23.306,23.306,0,0,0,5,46.069,11.307,11.307,0,1,1-11.307,11.307,6,6,0,0,0-12,0A23.346,23.346,0,0,0,250,295.742V302a6,6,0,0,0,12,0v-6.258a23.306,23.306,0,0,0-6-45.827,11.308,11.308,0,0,1,0-22.615Z" }),
        React.createElement("path", { d: "M466.3,235.763a6,6,0,0,0-9.236,0l-38.2,46.055a6.3,6.3,0,0,0-.812,6.557A6.168,6.168,0,0,0,423.48,292h30.191a208.8,208.8,0,0,1-71.342,130.851c-36.759,31.519-82.945,49.508-126.715,49.508-28.551,0-58.4-7.737-86.314-22.293a214.454,214.454,0,0,1-73.489-63.058,6,6,0,1,0-9.681,7.075,226.467,226.467,0,0,0,77.622,66.583c29.622,15.445,61.387,23.607,91.862,23.607,46.592,0,95.625-18.956,134.526-52.312A222.137,222.137,0,0,0,465.764,292h34.112a6.206,6.206,0,0,0,4.619-10.094ZM436.252,280l25.426-30.656L487.105,280Z" }),
        React.createElement("path", { d: "M93.95,223.625A6.168,6.168,0,0,0,88.52,220H58.329A208.8,208.8,0,0,1,129.671,89.149C166.43,57.63,212.616,39.641,256.386,39.641c28.551,0,58.4,7.737,86.314,22.293a214.454,214.454,0,0,1,73.489,63.058,6,6,0,1,0,9.681-7.075,226.467,226.467,0,0,0-77.622-66.583c-29.622-15.445-61.387-23.607-91.862-23.607-46.592,0-95.625,18.956-134.526,52.312A222.137,222.137,0,0,0,46.236,220H12.124a6.206,6.206,0,0,0-4.619,10.094l38.2,46.1a5.989,5.989,0,0,0,9.236.033l38.2-46.137A6.141,6.141,0,0,0,93.95,223.625ZM50.322,262.657,24.9,232H75.748Z" })));
};

var Icon$s = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M8.65854 19C15.4488 19 19.1659 13.2338 19.1659 8.23717C19.1659 8.07728 19.1659 7.91739 19.1561 7.7475C19.878 7.21785 20.5024 6.5483 21 5.78881C20.3366 6.08861 19.6244 6.28847 18.8732 6.38841C19.6341 5.91872 20.2195 5.17921 20.5024 4.28981C19.7902 4.72951 19 5.03931 18.1512 5.20919C17.478 4.45969 16.522 4 15.4585 4C13.4195 4 11.761 5.69887 11.761 7.78747C11.761 8.08728 11.8 8.36709 11.8585 8.6469C8.79512 8.497 6.07317 6.97801 4.24878 4.68954C3.92683 5.25916 3.75122 5.90873 3.75122 6.59827C3.75122 7.90739 4.40488 9.06662 5.39024 9.74617C4.78537 9.72618 4.21951 9.5563 3.72195 9.27648C3.72195 9.28648 3.72195 9.30646 3.72195 9.32645C3.72195 11.1552 5 12.6942 6.67805 13.034C6.36585 13.1239 6.0439 13.1639 5.70244 13.1639C5.46829 13.1639 5.23415 13.1439 5.00976 13.0939C5.47805 14.6029 6.8439 15.6922 8.46341 15.7222C7.19512 16.7415 5.60488 17.3411 3.87805 17.3411C3.58537 17.3411 3.28293 17.3311 3 17.2911C4.62927 18.3704 6.57073 19 8.65854 19Z" })));
};

var Icon$r = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "m21.325 9.308c-.758 0-1.425.319-1.916.816-1.805-1.268-4.239-2.084-6.936-2.171l1.401-6.406 4.461 1.016c0 1.108.89 2.013 1.982 2.013 1.113 0 2.008-.929 2.008-2.038s-.889-2.038-2.007-2.038c-.779 0-1.451.477-1.786 1.129l-4.927-1.108c-.248-.067-.491.113-.557.365l-1.538 7.062c-2.676.113-5.084.928-6.895 2.197-.491-.518-1.184-.837-1.942-.837-2.812 0-3.733 3.829-1.158 5.138-.091.405-.132.837-.132 1.268 0 4.301 4.775 7.786 10.638 7.786 5.888 0 10.663-3.485 10.663-7.786 0-.431-.045-.883-.156-1.289 2.523-1.314 1.594-5.115-1.203-5.117zm-15.724 5.41c0-1.129.89-2.038 2.008-2.038 1.092 0 1.983.903 1.983 2.038 0 1.109-.89 2.013-1.983 2.013-1.113.005-2.008-.904-2.008-2.013zm10.839 4.798c-1.841 1.868-7.036 1.868-8.878 0-.203-.18-.203-.498 0-.703.177-.18.491-.18.668 0 1.406 1.463 6.07 1.488 7.537 0 .177-.18.491-.18.668 0 .207.206.207.524.005.703zm-.041-2.781c-1.092 0-1.982-.903-1.982-2.011 0-1.129.89-2.038 1.982-2.038 1.113 0 2.008.903 2.008 2.038-.005 1.103-.895 2.011-2.008 2.011z" })));
};

var Icon$q = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 512 512" }, props),
        React.createElement("path", { d: "M256,165.058a77.763,77.763,0,1,0,77.763,77.763A77.851,77.851,0,0,0,256,165.058Zm0,143.526a65.763,65.763,0,1,1,65.763-65.763A65.837,65.837,0,0,1,256,308.584Z" }),
        React.createElement("path", { d: "M256,224.048a18.18,18.18,0,0,0-8,34.512V271a6,6,0,0,0,12,0V259.98a18.188,18.188,0,0,0-4-35.932Zm0,24.39a6.195,6.195,0,1,1,6.195-6.195A6.2,6.2,0,0,1,256,248.438Z" }),
        React.createElement("path", { d: "M448.574,255a28.414,28.414,0,0,0,7.578,13.731,28.2,28.2,0,1,0,0-39.7A29.153,29.153,0,0,0,448.574,243H369.615a118.781,118.781,0,0,0-7.478-41h33.655A27.036,27.036,0,0,0,423,174.8v-10.8c0-8.543,7.235-15.991,15.778-15.991h4.835a25.617,25.617,0,0,0,7.577,14.1,28,28,0,1,0,19.854-47.7,27.665,27.665,0,0,0-19.853,7.983A28.056,28.056,0,0,0,443.613,136h-4.835C423.618,136,411,148.831,411,163.991v10.8A15.025,15.025,0,0,1,395.792,190H356.718c-2.4-4-4.718-8.678-7.718-12.86V123.15c0-51.092-41.907-92.659-93-92.659s-93,41.567-93,92.659v53.99c-3,4.182-5.322,8.86-7.718,12.86H116.208A15.025,15.025,0,0,1,101,174.8v-10.8C101,148.831,88.382,136,73.222,136H68.387a28.5,28.5,0,1,0-7.578,26.1A25.6,25.6,0,0,0,68.387,148h4.835C81.765,148,89,155.448,89,163.991v10.8A27.036,27.036,0,0,0,116.208,202h33.655a118.781,118.781,0,0,0-7.478,41H63.426a29.166,29.166,0,0,0-7.577-13.975,27.945,27.945,0,1,0,0,39.708A28.42,28.42,0,0,0,63.426,255H143.01a113.992,113.992,0,0,0,15.761,47H116.208A26.9,26.9,0,0,0,89,329.041v13.3A15.9,15.9,0,0,1,73.222,358H68.387a29.049,29.049,0,0,0-7.577-13.937,28,28,0,1,0,0,39.709A28.538,28.538,0,0,0,68.387,370h4.835A27.913,27.913,0,0,0,101,342.339v-13.3A14.888,14.888,0,0,1,116.208,314h50.941c7.84,9,16.851,17.882,27.851,24.667V373.22A15.714,15.714,0,0,1,179.559,389h-13.3A27.083,27.083,0,0,0,139,416.207v4.853a28.607,28.607,0,0,0-13.971,7.558,28.042,28.042,0,1,0,39.6,0h.112A27.9,27.9,0,0,0,151,421.06v-4.853A15.071,15.071,0,0,1,166.261,401h13.3A27.726,27.726,0,0,0,207,373.22V345.341a112,112,0,0,0,47,11.069V426a29.029,29.029,0,0,0-13.932,7.577h-.04a28.065,28.065,0,1,0,39.75,0A28.567,28.567,0,0,0,266,426v-70a110.5,110.5,0,0,0,40-11.336v28.55A28.039,28.039,0,0,0,333.805,401h10.8A15.182,15.182,0,0,1,360,416.207v4.834a28.636,28.636,0,0,0-13.8,7.577,28.126,28.126,0,1,0,39.706,0,28.952,28.952,0,0,0-13.9-7.577v-4.834A27.194,27.194,0,0,0,344.608,389h-10.8A16.027,16.027,0,0,1,318,373.22V337.777A125.764,125.764,0,0,0,344.851,314h50.941A14.888,14.888,0,0,1,411,329.041v13.3A27.913,27.913,0,0,0,438.778,370h4.835a28.543,28.543,0,0,0,7.577,13.77,28.158,28.158,0,1,0,0-39.7A29.033,29.033,0,0,0,443.613,358h-4.835A15.9,15.9,0,0,1,423,342.339v-13.3A26.9,26.9,0,0,0,395.792,302H353.229a113.992,113.992,0,0,0,15.761-47Zm16.064-17.612a16.075,16.075,0,1,1-4.71,11.368A15.971,15.971,0,0,1,464.638,237.388ZM459.677,131.13a16.075,16.075,0,1,1-4.71,11.368A15.967,15.967,0,0,1,459.677,131.13ZM52.323,153.866a16.075,16.075,0,1,1,4.71-11.368A15.971,15.971,0,0,1,52.323,153.866Zm-4.96,106.258a16.076,16.076,0,1,1,4.709-11.368A16.094,16.094,0,0,1,47.363,260.124ZM52.323,375.2a16.077,16.077,0,1,1,0-22.736h0a16.075,16.075,0,0,1,0,22.736Zm103.813,84.639a16.07,16.07,0,1,1,0-22.735A16.1,16.1,0,0,1,156.136,459.839Zm226.043-11.368a16.077,16.077,0,0,1-27.445,11.368h0a16.077,16.077,0,1,1,27.446-11.368Zm77.5-96.007h0a16.075,16.075,0,1,1-4.71,11.368A15.971,15.971,0,0,1,459.677,352.464ZM175,123.15c0-44.476,36.524-80.659,81-80.659s81,36.183,81,80.659v39.736c-4-4.064-9-7.828-13-11.251V123.15c0-37.331-30.67-67.7-68-67.7s-68,30.37-68,67.7v28.485c-4,3.423-9,7.187-13,11.251Zm137,20.677a114.547,114.547,0,0,0-112,0V123.15c0-30.714,25.286-55.7,56-55.7s56,24.987,56,55.7ZM271.211,464.8a16.076,16.076,0,0,1-22.735-22.736h0A16.077,16.077,0,1,1,271.211,464.8ZM256,344.438A101.617,101.617,0,1,1,357.616,242.821,101.732,101.732,0,0,1,256,344.438Z" })));
};

var Icon$p = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 367.488 367.488" }, props),
        React.createElement("path", { d: "M366.745,70.58c-1.089-1.609-3.256-2.391-6.626-2.391c-1.835,0-3.77,0.227-5.25,0.424c-0.324,0.043-0.609,0.065-0.857,0.065\n\tc-0.471,0-0.638-0.08-0.656-0.07c-0.178-0.625,1.309-3.102,2.294-4.744c1.056-1.759,2.252-3.752,3.151-5.808\n\tc0.4-0.914,0.743-1.951,0.249-2.705c-0.261-0.399-0.708-0.628-1.228-0.628c-1.363,0-3.702,1.654-7.405,4.352\n\tc-1.648,1.201-3.771,2.749-5.007,3.428c0.471-1.447,1.783-4.158,2.799-6.257c3.352-6.926,5.154-10.905,3.226-12.19\n\tc-0.313-0.208-0.671-0.308-1.065-0.308c-2.211,0-5.302,3.529-10.131,9.324c-1.566,1.88-3.065,3.701-4.29,4.98\n\tc0.658-2.637,2.482-7.566,3.575-10.545c2.166-5.905,2.234-6.069,1.812-6.674l-0.322-0.265h-0.521c-0.614,0-0.94,0.315-1.157,0.639\n\tc-1.083,1.625-7.429,9.218-14.776,18.215c-9.186,11.247-20.618,25.244-27.213,33.885c-5.552,7.275-15.321,16.252-26.632,26.648\n\tc-12.835,11.795-27.382,25.164-39.671,39.647c-9.291,10.95-15.632,19.579-18.879,25.688c-1.11-2.641-3.512-7.23-7.478-9.434\n\tc-2.497-1.387-2.524-2.064-2.64-4.912c-0.03-0.726-0.063-1.561-0.145-2.538c-0.292-3.503-2.637-4.507-4.35-5.239\n\tc-1.22-0.522-1.985-0.881-2.321-1.664c-0.354-0.828-0.529-2.516-0.714-4.303c-0.432-4.178-0.921-8.914-4.155-9.474\n\tc-2.194-0.379-2.553-2.841-2.82-6.278c-0.147-1.894-0.275-3.53-1.057-4.506c-0.417-0.521-0.979-0.796-1.627-0.796\n\tc-1.109,0-2.238,0.821-3.433,1.69c-1.21,0.879-2.591,1.923-3.294,1.456c-0.682-0.455-0.436-2.507-0.199-4.491\n\tc0.332-2.768,0.744-6.212-0.665-9.061c-0.703-1.421-1.639-1.72-2.3-1.72c-1.993,0-3.793,2.671-5.698,5.5\n\tc-0.579,0.858-1.377,2.043-1.936,2.681c-0.063-1.228,0.327-3.785,0.601-5.588c0.895-5.886,1.334-9.849-0.647-11.264\n\tc-0.402-0.287-0.842-0.433-1.308-0.433c-1.934,0-3.523,2.531-5.205,5.211c-0.787,1.252-2.063,3.287-2.681,3.678\n\tc-0.082-0.81,0.498-2.995,0.894-4.489c1.103-4.156,2.475-9.329-1.082-10.298c-0.133-0.036-0.271-0.055-0.412-0.055\n\tc-2.719,0-8.7,10.338-17.778,30.726c-6.499,14.595-13.664,32.653-14.784,38.926c-1.278,7.16-0.536,8.665,0.182,10.12\n\tc0.418,0.849,0.78,1.582,0.629,4.002c-0.14,2.243-0.678,4.388-1.247,6.659c-1.07,4.268-2.176,8.682-0.785,14.247\n\tc1.162,4.648,7.209,14.769,12.544,23.698c3.621,6.06,7.709,12.902,8.01,14.507c-0.333,0.213-1.782,0.811-7.586,0.811\n\tc-7.13,0-17.116-0.859-23.724-1.428l-2.749-0.234c-9.665-0.805-36.443-6.166-43.041-7.887c-2.538-0.662-6.552-2.966-10.802-5.405\n\tc-6.211-3.564-12.633-7.25-17.146-7.585c-1.02-0.076-1.875-0.112-2.616-0.112c-4.49,0-6.282,1.348-11.073,4.949\n\tc-1.062,0.798-2.283,1.717-3.729,2.768c-9.126,6.638-14.019,9.476-20.79,13.403c-0.806,0.467-1.13,1.021-0.965,1.644\n\tc0.309,1.167,1.62,1.178,5.963,1.212c2.445,0.02,5.488,0.044,8.011,0.374c2.168,0.283,4.597,0.952,7.167,1.66\n\tc4.812,1.326,10.344,2.849,16.357,2.482c2.671-0.162,5.092-0.296,7.667-0.296c5.559,0,13.24,0.552,28.062,4.65\n\tc20.543,5.679,51.316,18.578,59.868,25.094c1.548,1.18,3.072,2.499,4.836,4.026c8.083,6.998,19.151,16.581,48.991,27.432\n\tc13.902,5.055,28.463,7.512,44.516,7.512c10.679,0,19.864-1.081,27.244-1.949c4.054-0.477,7.555-0.889,10.195-0.971\n\tc11.516-0.36,35.889-2.22,45.706-6.682c7.643-3.474,16.143-4.842,26.164-4.17c0.394,0.026,0.763,0.039,1.11,0.039\n\tc2.429,0,4.028-0.611,4.888-1.868c1.361-1.99,0.256-4.834-0.551-6.912c-0.115-0.296-0.225-0.578-0.355-0.884\n\tc0.247-0.401,2.149-0.791,3.286-1.023c2.866-0.587,6.114-1.252,6.676-3.874c0.09-0.423-0.006-0.862-0.273-1.237\n\tc-1.387-1.95-8.616-3.029-24.778-5.025c-10.793-1.333-23.025-2.845-26.244-4.702c-2.417-1.394-5.083-2.276-7.661-3.128\n\tc-5.369-1.775-10.44-3.452-13.952-9.422c-3.422-5.819,9.125-20.581,18.286-31.36c4.686-5.513,8.732-10.273,10.827-13.765\n\tc5.757-9.595,16.285-46.65,20.249-60.6c0.611-2.149,1.052-3.702,1.277-4.453c1.5-4.999,7.275-13.181,12.761-16.648\n\tc5.154-3.257,5.046-7.05,4.908-11.852c-0.023-0.81-0.047-1.659-0.047-2.552c0-6.047,4.308-10.327,8.964-14.052\n\tc5.427-4.341,5.902-11.041,1.338-18.865c-2.961-5.077,0.408-12.894,3.381-19.791c0.616-1.43,1.222-2.835,1.765-4.192\n\tC367.735,74.247,367.77,72.094,366.745,70.58z" })));
};

var Icon$o = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 506.161 506.161" }, props),
        React.createElement("path", { d: "m165.858 329.247c6.161-5.421 6.766-14.807 1.352-20.974l-.818-.939c-2.599-2.953-6.269-4.745-10.195-4.98-.327 0-.655 0-.989 0-3.605-.006-7.087 1.308-9.79 3.693l-19.921 17.488-18.142 15.923c-6.143 5.428-6.744 14.799-1.345 20.967l.832.953c5.425 6.158 14.811 6.763 20.981 1.352l13.945-12.237z" }),
        React.createElement("path", { d: "m118.026 369.9c-.413 0-.818 0-1.231-.036-4.876-.301-9.428-2.541-12.643-6.218l-.84-.96c-6.678-7.643-5.931-19.245 1.672-25.969l38.078-33.439c3.675-3.216 8.473-4.847 13.347-4.539 4.876.301 9.428 2.54 12.643 6.218l1.167 1.359c6.366 7.663 5.477 19.001-2.006 25.577l-38.064 33.439c-3.346 2.955-7.659 4.58-12.123 4.568zm37.167-64.032c-2.744.014-5.389 1.026-7.442 2.846l-38.064 33.439c-4.669 4.132-5.123 11.259-1.017 15.951l.84.96c4.128 4.676 11.262 5.131 15.951 1.017l38.057-33.439c4.682-4.122 5.14-11.257 1.025-15.944l-.832-.96c-1.97-2.253-4.76-3.624-7.748-3.806z" }),
        React.createElement("path", { d: "m219.282 366.414c-3.605-.005-7.089 1.305-9.797 3.685l-19.644 17.246c-6.173 5.417-6.786 14.812-1.37 20.985 5.417 6.173 14.812 6.786 20.985 1.37l19.644-17.246c6.173-5.41 6.791-14.8 1.381-20.973-2.827-3.226-6.91-5.073-11.199-5.067z" }),
        React.createElement("path", { d: "m199.667 416.942c-10.173.018-18.434-8.215-18.452-18.388-.009-5.317 2.28-10.38 6.279-13.884l19.651-17.246c7.748-6.414 19.154-5.672 26.004 1.693 6.714 7.651 5.956 19.295-1.693 26.011l-19.644 17.246c-3.357 2.953-7.676 4.577-12.145 4.568zm19.622-46.956c-2.746-.021-5.405.96-7.478 2.76l-19.651 17.246c-4.698 4.126-5.161 11.279-1.035 15.976 4.126 4.698 11.279 5.161 15.976 1.035l19.651-17.225c4.696-4.115 5.166-11.258 1.051-15.953-2.151-2.454-5.258-3.859-8.521-3.854z" }),
        React.createElement("path", { d: "m44.004 93.793-39.942 174.253 31.931 17.943 82.63-134.41z" }),
        React.createElement("path", { d: "m37.231 290.763-37.231-20.917 41.77-182.278 81.549 63.143zm-29.106-24.517 26.63 14.941 79.172-128.776-67.703-52.393z" }),
        React.createElement("path", { d: "m119.648 309.013c6.171-5.42 6.782-14.815 1.366-20.988l-.256-.292c-2.593-2.97-6.267-4.779-10.202-5.023-.327 0-.655 0-.989 0-3.605-.006-7.087 1.308-9.79 3.693l-23.856 20.889c-6.171 5.42-6.782 14.815-1.366 20.988 5.309 6.317 14.734 7.133 21.051 1.823.065-.055.13-.11.194-.166l1.807-1.587 18.157-15.937z" }),
        React.createElement("path", { d: "m86.152 337.172c-.455 0-.918 0-1.387-.05-4.97-.383-9.588-2.712-12.849-6.481-6.715-7.647-5.96-19.289 1.686-26.004l23.827-20.91c7.647-6.706 19.28-5.951 25.997 1.686 3.382 3.714 5.112 8.64 4.795 13.653-.301 4.879-2.543 9.435-6.225 12.65l-23.82 20.91c-3.317 2.935-7.595 4.553-12.024 4.546zm23.414-50.912c-2.744.011-5.391 1.023-7.442 2.846l-23.827 20.91c-4.696 4.121-5.161 11.269-1.04 15.964 0 0 .001.001.001.001 2.032 2.366 4.916 3.834 8.025 4.084 2.989.234 5.945-.758 8.189-2.746l23.82-20.91c4.692-4.124 5.157-11.269 1.039-15.965-1.998-2.411-4.895-3.899-8.018-4.119z" }),
        React.createElement("path", { d: "m202.755 350.641c.269-3.938-1.051-7.82-3.664-10.779l-.213-.242c-2.595-2.95-6.26-4.742-10.181-4.98-.327 0-.662 0-.989 0-3.605-.006-7.087 1.307-9.79 3.693l-2.334 2.049-24.105 21.159-6.403 5.592c-6.183 5.595-6.659 15.142-1.065 21.324 2.61 2.885 6.234 4.651 10.115 4.929 3.939.274 7.823-1.046 10.779-3.664l32.82-28.807c2.988-2.611 4.801-6.313 5.03-10.274z" }),
        React.createElement("path", { d: "m155.115 396.936c-.406 0-.804 0-1.209-.036-10.248-.634-18.041-9.456-17.406-19.704.304-4.916 2.547-9.511 6.236-12.775l32.792-28.843c3.681-3.207 8.475-4.837 13.347-4.539 4.869.298 9.417 2.532 12.629 6.204 3.375 3.708 5.101 8.628 4.781 13.632-.308 4.866-2.544 9.408-6.211 12.621l-32.82 28.807c-3.345 2.978-7.663 4.626-12.139 4.633zm22.767-53.937-30.458 26.737c-4.698 4.12-5.175 11.264-1.067 15.972 1.999 2.378 4.877 3.844 7.976 4.063 3.006.213 5.971-.795 8.225-2.796l32.82-28.807c4.695-4.116 5.165-11.258 1.049-15.954-.003-.004-.007-.008-.01-.012-1.993-2.391-4.877-3.861-7.983-4.07h-.754c-2.747 0-5.397 1.013-7.442 2.846z" }),
        React.createElement("path", { d: "m399.398 303.122-115.785-94.348c-44.339 23.543-75.736 11.426-90.748 1.843-7.825-5.106-10.029-15.59-4.923-23.415 1.586-2.431 3.772-4.413 6.346-5.755l38.59-20.497c-.996-.149-1.971-.277-2.846-.363-34.825 5.502-69.995 8.531-105.248 9.064l-67.461 109.722 15.04 11.462 17.68-15.524c12.275-10.776 30.962-9.561 41.738 2.714.001.001.002.003.004.004l.256.292c3.538 4.057 5.891 9.009 6.802 14.315 5.361-3.658 11.795-5.411 18.271-4.98 7.833.488 15.145 4.09 20.305 10.003l.832.953c5.187 5.881 7.808 13.591 7.278 21.415v.043c1.354-.138 2.716-.183 4.077-.135 7.833.489 15.144 4.091 20.305 10.003l-5.315 5.094 5.528-4.852c5.195 5.883 7.821 13.599 7.293 21.429 0 .1-.043.192-.05.292 16.199-1.153 30.265 11.045 31.418 27.244.096 1.352.099 2.709.008 4.061-.365 5.088-2.052 9.993-4.895 14.229l31.724 18.306c6.955 3.944 15.787 1.604 19.878-5.265 3.88-6.556 1.988-15-4.319-19.274l-50.514-35.004c-.043 0-.064-.078-.1-.107l-3.401-2.355c-3.3-2.371-4.053-6.967-1.682-10.267 2.312-3.219 6.759-4.027 10.056-1.828l71.247 49.355c6.572 4.555 15.592 2.92 20.147-3.652.003-.004.006-.008.009-.012 4.471-6.535 2.889-15.445-3.557-20.042l-70.898-50.287c-.043 0-.057-.078-.1-.107-3.312-2.358-4.086-6.954-1.729-10.267s6.954-4.086 10.267-1.729l79.485 56.391c6.952 4.909 16.568 3.253 21.477-3.7 4.752-6.729 3.37-16.006-3.136-21.059l-85.526-61.627c-3.38-2.255-4.292-6.822-2.037-10.202s6.822-4.292 10.202-2.037c.127.085.251.173.373.266l5.848 4.169h.078l79.265 57.11c.149.107.256.242.398.349l1.309.939c.249.172.487.359.711.562l1.423.975c6.625 4.747 15.807 3.478 20.896-2.889 3.043-3.845 4.028-8.929 2.64-13.632-.844-2.914-2.568-5.495-4.934-7.393z" }),
        React.createElement("path", { d: "m282.83 421.24c-3.145.001-6.234-.826-8.957-2.398l-35.026-20.199 2.134-3.13c7.907-11.928 4.646-28.007-7.282-35.914-3.783-2.508-8.159-3.978-12.689-4.263-.883-.043-1.768-.019-2.647.071l-4.774.299.277-4.048c.448-5.749-1.029-11.483-4.198-16.3l-2.668 2.348-4.81-5.236 2.704-2.59c-4.302-3.792-9.744-6.045-15.467-6.403-1.037-.034-2.076-.001-3.109.1l-3.821.285-.477-4.212v-.15c.373-6.782-1.926-13.44-6.403-18.548l-.84-.96c-8.565-9.832-23.125-11.713-33.909-4.383l-4.532 3.045-.953-5.379c-2.417-14.221-15.905-23.789-30.126-21.371-4.756.809-9.196 2.919-12.826 6.096l-19.871 17.445-19.957-15.19 70.158-114.12 1.914-.057c35.061-.535 70.041-3.543 104.679-9l.498-.1.505.043c.939.085 1.978.228 3.052.384l10.672 1.601-48.124 25.556c-6.556 3.387-9.124 11.448-5.737 18.004 1.062 2.055 2.639 3.799 4.577 5.062 14.123 9.014 44.261 20.761 87.148-1.999l2.085-1.11 117.606 95.828c2.92 2.371 5.038 5.582 6.069 9.199 1.718 5.8.508 12.074-3.244 16.819-6.284 7.853-17.615 9.416-25.791 3.557l-3.991-2.981-84.978-61.186c-1.698-1.219-4.063-.831-5.282.867-.004.005-.007.01-.011.016-1.221 1.702-.831 4.071.87 5.292.004.003.008.006.012.009l85.54 61.677c8.293 6.401 9.827 18.312 3.426 26.605-6.195 8.027-17.608 9.761-25.908 3.939l-79.507-56.363c-.825-.585-1.849-.818-2.846-.647-2.069.35-3.462 2.311-3.112 4.38.168.994.725 1.881 1.547 2.465l71.019 50.408c8.024 5.733 9.982 16.833 4.404 24.965-5.664 8.194-16.898 10.245-25.092 4.581-.003-.002-.006-.004-.009-.006l-71.232-49.362c-1.685-1.251-4.064-.899-5.315.786s-.899 4.064.786 5.315c.069.051.139.099.211.146l54.029 37.466c8.216 5.625 10.316 16.845 4.691 25.061-2.423 3.539-6.029 6.098-10.169 7.218-1.603.441-3.259.666-4.923.667zm-34.022-25.08 28.622 16.52c5.336 2.887 12.002.903 14.889-4.433 2.606-4.815 1.268-10.813-3.136-14.065l-40.376-28.018c2.734 5.325 3.964 11.295 3.557 17.267-.288 4.445-1.5 8.78-3.556 12.729zm-7.413-59.357c2.212-.004 4.372.669 6.19 1.928l71.232 49.355c4.961 3.429 11.763 2.19 15.197-2.768 3.375-4.927 2.185-11.649-2.675-15.119l-71.404-50.699c-4.725-3.742-5.522-10.607-1.78-15.332 3.585-4.526 10.074-5.477 14.807-2.17l79.507 56.391c5.368 3.747 12.757 2.432 16.504-2.936 3.597-5.154 2.546-12.219-2.395-16.103l-85.433-61.563c-4.902-3.505-6.034-10.32-2.529-15.222s10.32-6.034 15.222-2.529l5.934 4.205 80.965 58.405c.364.262.711.547 1.039.854l1.003.655c5.068 3.672 12.125 2.734 16.058-2.134 2.336-2.943 3.095-6.839 2.035-10.444-.619-2.234-1.913-4.222-3.707-5.692l-113.985-92.875c-44.958 22.98-77.009 10.331-92.228.605-9.487-6.155-12.188-18.835-6.033-28.322 1.927-2.971 4.592-5.391 7.734-7.024l21.814-11.583c-22.184 3.01-52.471 5.251-87.639 6.403l-64.745 105.366 10.181 7.748 15.503-13.603c13.747-12.071 34.678-10.712 46.749 3.035.003.003.006.007.009.01 2.974 3.364 5.244 7.29 6.674 11.547 5.037-2.448 10.627-3.535 16.214-3.152 8.783.545 16.982 4.583 22.767 11.213l.84.96c4.92 5.576 7.802 12.657 8.175 20.085h.711c7.662.501 14.908 3.664 20.483 8.943l.114-.1 1.928 2.206.206.228 2.241 2.554-.1.1c3.818 5.238 5.999 11.489 6.268 17.965h.434c3.16.206 6.275.863 9.249 1.949-1.368-5.858 2.273-11.716 8.131-13.084.833-.194 1.686-.29 2.541-.285z" }),
        React.createElement("path", { d: "m462.149 91.146-74.605 57.786 69.013 112.249c.454.235.881.519 1.274.847 1.183 1.219 1.898 2.816 2.021 4.511l10.338 16.812 31.902-17.95z" }),
        React.createElement("path", { d: "m468.922 288.124-12.557-20.433-.078-.825c-.046-.871-.399-1.698-.996-2.334l-1.366-.811-.42-.711-70.685-114.939 81.563-63.15 41.777 182.278zm-5.691-22.81 8.153 13.255 26.63-14.941-38.085-166.263-67.696 52.421 66.878 108.777c.441.264.849.579 1.217.939 1.56 1.583 2.583 3.616 2.924 5.813z" }),
        React.createElement("path", { d: "m368.385 168.86c-14.472 5.958-30.597 6.544-45.463 1.651l-39.166-12.714c-5.413-1.716-11.287-1.204-16.321 1.423l-13.276 7.051c-.142.071-.263.157-.413.221l-52.606 27.947c-.749.359-1.237 1.105-1.266 1.935-.058.751.307 1.473.946 1.871 15.474 9.875 41.977 17.075 79.919-4.696 2.644-1.513 5.946-1.245 8.31.676l119.584 97.471c1.665 1.369 3.169 2.923 4.482 4.632l29.569-29.59-63.015-102.494z" }),
        React.createElement("path", { d: "m412.809 301.649-2.476-3.138c-1.144-1.498-2.457-2.859-3.913-4.055l-119.612-97.443c-1.219-.974-2.908-1.112-4.269-.349-39.494 22.682-67.262 15.026-83.605 4.61-1.72-1.084-2.711-3.022-2.583-5.051.086-2.09 1.298-3.969 3.166-4.909l66.273-35.196c5.882-3.082 12.752-3.686 19.082-1.679l39.152 12.693c14.062 4.633 29.317 4.083 43.008-1.551l14.108-5.777 66.067 107.432zm-128.428-112.612c2.514-.005 4.953.854 6.908 2.433l119.591 97.471c.842.679 1.643 1.409 2.398 2.184l24.901-24.901-59.956-97.55-8.481 3.472c-15.258 6.281-32.259 6.896-47.932 1.736l-39.131-12.707c-4.506-1.415-9.39-.98-13.575 1.21l-64.267 34.151c14.891 8.651 39.387 13.923 74.156-6.047 1.641-.944 3.498-1.444 5.388-1.452z" })));
};

var Icon$n = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "-21 -21 682.66669 682" }, props),
        React.createElement("path", { d: "m629.609375 303.507812-81.988281-40.820312-180.261719 89.753906c-14.582031 7.261719-30.957031 11.101563-47.359375 11.101563s-32.777344-3.839844-47.359375-11.101563l-180.261719-89.753906-81.988281 40.820312c-6.367187 3.171876-10.390625 9.671876-10.390625 16.785157 0 7.117187 4.023438 13.613281 10.390625 16.785156l278.964844 138.898437c9.59375 4.78125 20.117187 7.167969 30.644531 7.167969 10.523438 0 21.050781-2.386719 30.644531-7.160156l278.964844-138.90625c6.367187-3.171875 10.390625-9.667969 10.390625-16.785156 0-7.113281-4.023438-13.613281-10.390625-16.785157zm0 0" }),
        React.createElement("path", { d: "m629.609375 460.65625-81.988281-40.824219-180.261719 89.757813c-14.582031 7.261718-30.957031 11.09375-47.359375 11.09375s-32.777344-3.832032-47.359375-11.09375l-180.261719-89.757813-81.988281 40.824219c-6.367187 3.167969-10.390625 9.671875-10.390625 16.78125 0 7.113281 4.023438 13.613281 10.390625 16.789062l278.964844 138.898438c9.59375 4.777344 20.117187 7.167969 30.644531 7.167969 10.523438-.003907 21.050781-2.390625 30.644531-7.167969l278.964844-138.898438c6.367187-3.175781 10.390625-9.675781 10.390625-16.789062s-4.023438-13.613281-10.390625-16.78125zm0 0" }),
        React.createElement("path", { d: "m10.390625 179.972656 278.964844 138.902344c9.59375 4.773438 20.117187 7.167969 30.644531 7.167969s21.050781-2.394531 30.644531-7.167969l278.964844-138.902344c6.367187-3.167968 10.390625-9.671875 10.390625-16.78125 0-7.117187-4.023438-13.621094-10.390625-16.789062l-278.964844-138.90625c-19.191406-9.550782-42.097656-9.550782-61.289062 0l-278.964844 138.90625c-6.367187 3.167968-10.390625 9.671875-10.390625 16.789062 0 7.109375 4.023438 13.613282 10.390625 16.78125zm0 0" })));
};

var Icon$m = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 502.436 502.436" }, props),
        React.createElement("g", null,
            React.createElement("path", { d: "M402.481,300.41c0.033-0.051,0.068-0.098,0.102-0.148C402.86,299.793,402.459,300.432,402.481,300.41z" }),
            React.createElement("path", { d: "M402.581,199.504c-0.029-0.055-0.062-0.105-0.094-0.16c0.064,0.113,0.143,0.254,0.201,0.359\n\t\t\tC402.651,199.637,402.616,199.571,402.581,199.504z" }),
            React.createElement("path", { d: "M406.079,55.139C406.471,54.674,405.678,55.6,406.079,55.139L406.079,55.139z" }),
            React.createElement("g", null,
                React.createElement("path", { d: "M292.844,383.368C293.102,383.25,293.04,383.279,292.844,383.368L292.844,383.368z" }),
                React.createElement("path", { d: "M465.85,19.072c-1.174-2.404-2.348-4.809-3.521-7.215c-3.99,2.063-7.865,4.352-11.678,6.723\n\t\t\t\tc-2.168,1.35-4.312,2.74-6.438,4.156l-2.803,1.896c-0.859-1.303-1.721-2.605-2.578-3.91l2.768-1.709\n\t\t\t\tc2.293-1.393,4.604-2.76,6.939-4.078c3.986-2.254,8.037-4.42,12.189-6.348c-0.797-1.635-1.596-3.27-2.395-4.904\n\t\t\t\tc-0.473-0.971-0.945-1.939-1.42-2.908c-0.367-0.752-0.23-0.936-1.041-0.643c-7.271,2.625-14.391,5.65-21.355,8.998\n\t\t\t\tc-16.805,8.078-33.145,17.945-47.258,30.191c-14.646,12.707-27.654,27.381-36.574,44.721\n\t\t\t\tc-8.943,17.389-13.643,36.518-13.912,56.063c-0.133,9.852,1.146,19.521,2.941,29.184c1.818,9.791,5.121,19.123,8.516,28.455\n\t\t\t\tc2.318,6.732,5.961,12.953,8.506,19.604c1.656,4.328,2.861,8.682,3.896,13.186c0.953,4.148,1.133,8.771,0.643,12.994\n\t\t\t\tc-0.48,4.143-1.887,7.734-3.979,11.306c-2.197,3.748-5.549,6.987-8.752,9.877c-3.389,3.059-7.027,5.823-10.812,8.371\n\t\t\t\tc-16.141,10.856-34.52,18.27-52.9,24.368c-0.593,0.197-1.188,0.379-1.781,0.572l-37.776,77.905\n\t\t\t\tc0.518-0.172,1.038-0.334,1.556-0.508c9.101-3.029,18.152-6.215,27.103-9.67c3.841-1.482,7.658-3.014,11.472-4.568\n\t\t\t\tc0.313-0.129,1.05-0.448,1.05-0.448s0.495,1.215,0.717,1.715c1.938,4.396,3.873,8.787,5.812,13.183\n\t\t\t\tc0.8,1.813,1.601,3.629,2.399,5.44c0.138,0.313,0.274,0.629,0.414,0.94c0.006,0.017-2.73,1.261-3.295,1.517\n\t\t\t\tc0.129-0.06,0.25-0.114,0.346-0.159c-0.1,0.047-0.235,0.108-0.444,0.204c-15.015,6.884-30.364,13.048-45.89,18.673\n\t\t\t\tc-5.586,2.023-11.205,3.959-16.837,5.852l-45.024,92.852c6.834-2.465,13.628-5.039,20.391-7.648\n\t\t\t\tc18.019-6.959,35.824-14.482,53.357-22.588c35.633-16.473,70.357-35.328,102.297-58.234\n\t\t\t\tc30.525-22.016,59.324-48.219,78.301-81.114c9.527-16.517,16.473-34.782,19.074-53.728c2.66-19.358,0.836-39.19-5.188-57.772\n\t\t\t\tc-3.971-12.25-9.643-24.102-16.756-34.852c-3.158-4.773-6.484-9.369-9.947-13.92c-1.967-2.58-4.131-5.012-6.264-7.455\n\t\t\t\tc-3.205-3.674-5.84-7.859-8.459-11.953c-4.441-6.939-7.707-14.865-9.32-22.945c-1.992-9.973-1.287-19.959,1.338-29.74\n\t\t\t\tc5.035-18.758,16.883-35.439,29.934-49.518c8.021-8.656,16.82-16.625,26.174-23.818c1.865-1.436,3.756-2.84,5.676-4.199\n\t\t\t\tC466.758,20.401,466.6,20.608,465.85,19.072z M403.092,299.358c0,0-0.201,0.381-0.51,0.903c-0.072,0.109-0.096,0.144-0.102,0.148\n\t\t\t\tc-8.385,12.725-18.254,23.93-29.76,33.943c-10.844,9.438-22.645,17.574-34.791,25.221c-3.59-6.113-7.18-12.229-10.77-18.344\n\t\t\t\tc15.223-8.717,30.031-18.301,42.879-30.336c6.33-5.932,11.947-12.385,17.027-19.408l1.197-1.566L403.092,299.358\n\t\t\t\t M402.489,199.344c-0.121-0.217-0.18-0.324,0.094,0.16c0.254,0.459,0.215,0.391,0.105,0.199\n\t\t\t\tc8.68,15.752,14.639,33.172,14.564,51.32c-5.246-0.1-10.494-0.201-15.74-0.301c0.66-13.469-2.85-26.854-8.238-39.109\n\t\t\t\tc-2.982-6.785-6.766-13.166-10.443-19.588c-3.178-5.543-5.941-11.195-8.627-16.988c2.039-0.92,4.078-1.84,6.117-2.758\n\t\t\t\tc1.311-0.59,4.99-2.266,4.99-2.266l0.332,0.695c2.414,4.66,4.896,9.178,7.66,13.639\n\t\t\t\tC396.393,189.333,399.608,194.237,402.489,199.344z M406.079,55.139c-9.127,10.514-17.299,21.643-23.01,34.42\n\t\t\t\tc-5.342,11.959-8.377,24.941-8.166,38.061c-3.402-0.049-6.807-0.098-10.211-0.146c0.506-17.471,6.057-34.4,14.984-49.367\n\t\t\t\tc4.535-7.607,9.904-14.607,15.695-21.293c1.395-1.611,2.891-3.137,4.355-4.684c0.527-0.555,2.143-2.352,2.143-2.352\n\t\t\t\ts3.311,3.207,4.785,4.619c0.02,0.018,0.035,0.035,0.055,0.053C406.489,54.67,406.28,54.901,406.079,55.139z" })),
            React.createElement("path", { d: "M291.195,210.11c0-70.35-57.233-127.584-127.583-127.584C93.263,82.526,36.03,139.76,36.03,210.11\n\t\t\tc0,20.615,4.921,40.1,13.64,57.353l113.942,234.973l113.96-235.01C286.28,250.182,291.195,230.709,291.195,210.11z\n\t\t\t M163.612,280.711c-38.931,0-70.604-31.671-70.604-70.602c0-38.932,31.674-70.605,70.604-70.605s70.604,31.674,70.604,70.605\n\t\t\tC234.215,249.04,202.542,280.711,163.612,280.711z" }))));
};

var Icon$l = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "-8 0 464 464" }, props),
        React.createElement("g", null,
            React.createElement("path", { d: "m154.632812 336.320312c-2.738281 4.984376-2.703124 10.839844.085938 15.679688 2.792969 4.839844 7.847656 7.800781 13.539062 7.910156l2.191407.050782c-6.5625-7.3125-11.664063-15.945313-14.808594-25.480469zm0 0" }),
            React.createElement("path", { d: "m154.71875 272c-2.789062 4.832031-2.824219 10.695312-.085938 15.679688l1.007813 1.839843c3.144531-9.535156 8.246094-18.160156 14.808594-25.480469l-2.191407.050782c-5.691406.117187-10.753906 3.078125-13.539062 7.910156zm0 0" }),
            React.createElement("path", { d: "m176.089844 367.742188c.117187 5.691406 3.078125 10.753906 7.910156 13.539062 4.816406 2.78125 10.679688 2.824219 15.679688.085938l1.839843-1.007813c-9.535156-3.144531-18.160156-8.246094-25.480469-14.808594zm0 0" }),
            React.createElement("path", { d: "m176 395.144531c-1.601562-.929687-3.039062-2.039062-4.433594-3.199219l-19.566406 64.054688 24-16 16 24 15.015625-61.03125c-2.191406-1.394531-4.273437-2.96875-6.085937-4.878906-8.296876 2.460937-17.242188 1.484375-24.929688-2.945313zm0 0" }),
            React.createElement("path", { d: "m277.550781 359.960938 2.191407-.050782c5.691406-.117187 10.753906-3.078125 13.539062-7.910156 2.78125-4.832031 2.824219-10.695312.085938-15.679688l-1.007813-1.839843c-3.152344 9.542969-8.246094 18.167969-14.808594 25.480469zm0 0" }),
            React.createElement("path", { d: "m209.320312 382.488281 1.054688 1.742188c2.945312 4.867187 8.039062 7.777343 13.625 7.777343s10.679688-2.902343 13.625-7.777343l1.054688-1.742188c-4.742188.984375-9.648438 1.511719-14.679688 1.511719s-9.9375-.527344-14.679688-1.511719zm0 0" }),
            React.createElement("path", { d: "m272 395.144531c-7.695312 4.429688-16.632812 5.40625-24.929688 2.945313-1.8125 1.917968-3.894531 3.484375-6.085937 4.878906l15.015625 61.03125 16-24 24 16-19.566406-64.054688c-1.394532 1.160157-2.832032 2.269532-4.433594 3.199219zm0 0" }),
            React.createElement("path", { d: "m271.910156 256.265625c-.117187-5.691406-3.078125-10.753906-7.910156-13.539063-4.824219-2.78125-10.6875-2.824218-15.679688-.085937l-1.839843 1.007813c9.535156 3.144531 18.160156 8.246093 25.480469 14.808593zm0 0" }),
            React.createElement("path", { d: "m224 368c30.871094 0 56-25.128906 56-56s-25.128906-56-56-56-56 25.128906-56 56 25.128906 56 56 56zm0-48c-13.230469 0-24-10.769531-24-24 0-10.414062 6.710938-19.214844 16-22.527344v-9.472656h16v9.472656c9.289062 3.3125 16 12.113282 16 22.527344h-16c0-4.414062-3.585938-8-8-8s-8 3.585938-8 8 3.585938 8 8 8c13.230469 0 24 10.769531 24 24 0 10.414062-6.710938 19.214844-16 22.527344v9.472656h-16v-9.472656c-9.289062-3.3125-16-12.113282-16-22.527344h16c0 4.414062 3.585938 8 8 8s8-3.585938 8-8-3.585938-8-8-8zm0 0" }),
            React.createElement("path", { d: "m199.679688 242.632812c-4.992188-2.722656-10.855469-2.6875-15.679688.085938-4.832031 2.792969-7.800781 7.847656-7.910156 13.539062l-.050782 2.191407c7.3125-6.5625 15.945313-11.664063 25.480469-14.808594zm0 0" }),
            React.createElement("path", { d: "m248.320312 381.367188c5 2.746093 10.863282 2.695312 15.679688-.085938 4.832031-2.792969 7.800781-7.847656 7.910156-13.539062l.050782-2.191407c-7.3125 6.5625-15.945313 11.664063-25.480469 14.808594zm0 0" }),
            React.createElement("path", { d: "m152 312c0-5.03125.527344-9.9375 1.511719-14.679688l-1.742188 1.054688c-4.867187 2.945312-7.769531 8.039062-7.769531 13.625s2.902344 10.679688 7.777344 13.625l1.742187 1.054688c-.992187-4.734376-1.519531-9.648438-1.519531-14.679688zm0 0" }),
            React.createElement("path", { d: "m296.222656 298.375-1.742187-1.054688c.992187 4.742188 1.519531 9.648438 1.519531 14.679688s-.527344 9.9375-1.511719 14.679688l1.742188-1.054688c4.867187-2.945312 7.769531-8.03125 7.769531-13.625s-2.902344-10.679688-7.777344-13.625zm0 0" }),
            React.createElement("path", { d: "m293.28125 272c-2.792969-4.832031-7.847656-7.800781-13.539062-7.910156l-2.191407-.050782c6.5625 7.3125 11.664063 15.945313 14.808594 25.480469l1.007813-1.839843c2.738281-4.984376 2.703124-10.839844-.085938-15.679688zm0 0" }),
            React.createElement("path", { d: "m238.679688 241.519531-1.054688-1.742187c-2.945312-4.867188-8.039062-7.777344-13.625-7.777344s-10.679688 2.902344-13.625 7.777344l-1.054688 1.742187c4.742188-.984375 9.648438-1.511719 14.679688-1.511719s9.9375.519532 14.679688 1.511719zm0 0" }),
            React.createElement("path", { d: "m32 32v31.191406c15.648438-3.191406 28-15.542968 31.191406-31.191406zm0 0" }),
            React.createElement("path", { d: "m32 320h31.191406c-3.191406-15.648438-15.542968-28-31.191406-31.191406zm0 0" }),
            React.createElement("path", { d: "m416 32h-31.191406c3.191406 15.648438 15.542968 28 31.191406 31.191406zm0 0" }),
            React.createElement("path", { d: "m416 320v-31.191406c-15.648438 3.191406-28 15.542968-31.191406 31.191406zm0 0" }),
            React.createElement("path", { d: "m320 312c0 2.761719-.464844 5.414062-1.136719 8h49.777344c3.527344-24.472656 22.886719-43.832031 47.359375-47.359375v-193.28125c-24.472656-3.527344-43.832031-22.886719-47.359375-47.359375h-289.28125c-3.527344 24.472656-22.886719 43.832031-47.359375 47.359375v193.28125c24.472656 3.527344 43.832031 22.886719 47.359375 47.359375h49.777344c-.671875-2.585938-1.136719-5.238281-1.136719-8 0-8.863281 3.617188-17.113281 9.910156-23.070312-2.476562-8.3125-1.484375-17.25 2.945313-24.929688 4.441406-7.679688 11.679687-13.007812 20.121093-15.023438 2.015626-8.441406 7.34375-15.679687 15.023438-20.121093 7.6875-4.429688 16.632812-5.414063 24.929688-2.945313 5.957031-6.292968 14.199218-9.910156 23.070312-9.910156s17.113281 3.617188 23.070312 9.910156c8.296876-2.46875 17.234376-1.484375 24.929688 2.945313 7.679688 4.441406 13.007812 11.679687 15.023438 20.121093 8.441406 2.015626 15.679687 7.34375 20.121093 15.023438 4.429688 7.679688 5.421875 16.617188 2.945313 24.929688 6.292968 5.964843 9.910156 14.207031 9.910156 23.070312zm0-176h-88v-16h88zm-160-88h128v48h-128zm-32 72h88v16h-88zm88 80h-88v-16h88zm72 0h-56v-16h56zm-160-32v-16h192v16zm176 32v-16h16v16zm0 0" }),
            React.createElement("path", { d: "m0 0v352h137.734375c-1.359375-5.246094-1.398437-10.71875 0-16h-121.734375v-320h416v320h-121.734375c1.40625 5.28125 1.359375 10.753906 0 16h137.734375v-352zm0 0" }),
            React.createElement("path", { d: "m176 64h96v16h-96zm0 0" }))));
};

var Icon$k = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 207.918 207.918" }, props),
        React.createElement("g", null,
            React.createElement("path", { d: "M59.655,180.863c-0.926,1.604-2.606,2.5-4.334,2.5c-0.849,0-1.708-0.217-2.496-0.671\n\tC22.606,165.237,3.833,132.739,3.834,97.879c0-20.076,6.034-39.288,17.232-55.5l-6.344-6.267c-1.372-1.355-1.842-3.379-1.208-5.2\n\tc0.634-1.822,2.26-3.116,4.177-3.326l21.274-2.333c1.499-0.168,2.988,0.354,4.059,1.413c1.071,1.058,1.608,2.543,1.462,4.041\n\tl-2.074,21.301c-0.187,1.92-1.461,3.561-3.275,4.217c-0.555,0.201-1.13,0.299-1.7,0.299c-1.294,0-2.563-0.502-3.515-1.443\n\tl-5.612-5.544c-9.411,14.238-14.476,30.926-14.476,48.343c0,31.3,16.856,60.48,43.993,76.153\n\tC60.218,175.414,61.037,178.472,59.655,180.863z M194.591,92.675c-2.761,0-5,2.238-5,5l0,0.204\n\tc0,48.457-39.422,87.879-87.879,87.879c-1.773,0-3.543-0.056-5.308-0.161l1.911-7.653c0.467-1.871-0.184-3.845-1.672-5.07\n\tc-1.49-1.228-3.551-1.486-5.297-0.67l-19.385,9.068c-1.364,0.639-2.368,1.857-2.732,3.318s-0.052,3.008,0.852,4.212l12.848,17.117\n\tc0.956,1.273,2.445,1.999,3.999,1.999c0.329,0,0.662-0.032,0.992-0.1c1.891-0.382,3.393-1.817,3.86-3.689l2.169-8.688\n\tc2.579,0.203,5.169,0.317,7.766,0.317c53.971,0,97.879-43.908,97.879-97.915l0-0.168C199.591,94.913,197.352,92.675,194.591,92.675z\n\t M202.255,51.683c-1.491-1.223-3.552-1.48-5.299-0.658l-7.485,3.52C173.208,21.73,139.285,0,101.712,0\n\tC84.453,0.001,67.485,4.556,52.64,13.173c-2.388,1.387-3.2,4.446-1.814,6.834c1.386,2.388,4.444,3.203,6.834,1.814\n\tC70.982,14.089,86.215,10.001,101.713,10c33.671,0,64.077,19.434,78.71,48.8l-7.89,3.711c-1.746,0.82-2.863,2.572-2.872,4.501\n\tc-0.009,1.929,1.092,3.691,2.83,4.528l19.281,9.288c0.686,0.33,1.428,0.495,2.17,0.495c0.727,0,1.454-0.158,2.128-0.476\n\tc1.363-0.641,2.364-1.861,2.726-3.323l5.142-20.774C204.401,54.878,203.746,52.906,202.255,51.683z M70.811,138.821\n\tc-2.761,0-5-2.238-5-5s2.239-5,5-5h25.902v-26.94h-7.435c-12.939,0-23.467-10.527-23.467-23.467\n\tc0-12.946,10.527-23.474,23.467-23.474h7.435v-5.746c0-2.762,2.239-5,5-5s5,2.238,5,5v5.746h25.902c2.761,0,5,2.238,5,5\n\ts-2.239,5-5,5h-25.902v26.94h7.431c12.942,0,23.471,10.529,23.471,23.471s-10.529,23.47-23.471,23.47h-7.431v7.741\n\tc0,2.762-2.239,5-5,5s-5-2.238-5-5v-7.741H70.811z M89.278,91.881h7.435V64.94h-7.435c-7.426,0-13.467,6.041-13.467,13.467\n\tC75.811,85.84,81.852,91.881,89.278,91.881z M106.713,128.821h7.431c7.428,0,13.471-6.043,13.471-13.47\n\tc0-7.428-6.043-13.471-13.471-13.471h-7.431V128.821z" }))));
};

var Icon$j = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 56 56" }, props),
        React.createElement("g", null,
            React.createElement("path", { id: "Shape", d: "m54.89 19.33c-1.65-3.16-4.39-5.33-7.89-5.33 1.9387753 4.8214002 2.9563558 9.9635739 3 15.16.1921013 6.0688357-2.3831761 11.8963206-7 15.84 5.82.28 10.9-2.58 12.85-8.55 1.83-5.66 1.45-12.53-.96-17.12z" }),
            React.createElement("path", { id: "Shape", d: "m18.16 44.81c3.2315917 2.0831812 6.9951556 3.1907245 10.84 3.19 3.83925-.0374554 7.5924307-1.1419431 10.84-3.19 5.22-3.34 8.16-8.69 8.16-15.64 0-11.67-7.36-29.17-19-29.17-11.1 0-18.22 15.8-18.92 27-.48 7.47 1.67 13.7 8.08 17.81zm6.36-41.71c1.3871963-.71080538 2.9213462-1.08749398 4.48-1.1.5522847 0 1 .44771525 1 1s-.4477153 1-1 1c-1.2497589.01216582-2.4792834.31697831-3.59.89-.4916536.2469243-1.0904244.05031299-1.34-.44-.1210697-.23840257-.1416226-.51536113-.0570687-.76902291.0845539-.25366177.2671714-.46289687.5070687-.58097709zm4.36 25.9c-2.88-.37-6.88-.87-6.88-5.5 0-3.22 2.93-5.1 6-5.44v-2.06c0-.5522847.4477153-1 1-1s1 .4477153 1 1v2.05c4.27.37 5.81 3.07 5.88 3.19.1786328.3126074.1769222.696768-.0044873 1.0077722-.1814095.3110043-.5149577.5016032-.875.5-.3600423-.0016031-.6918799-.1951648-.8705127-.5077722-.06-.13-1.35-2.24-5.13-2.24-2.08 0-5 1.09-5 3.5 0 2.73 1.85 3.1 5.12 3.51 2.88.36 6.88.86 6.88 5.49 0 2.5-1.6 5.11-6 5.5v2c0 .5522847-.4477153 1-1 1s-1-.4477153-1-1v-2c-4-.2-5.54-1.59-5.71-1.76-.3921222-.3921222-.3921222-1.0278778 0-1.42s1.0278778-.3921222 1.42 0c1.54 1.33 10.29 2.6 10.29-2.32 0-2.73-1.85-3.1-5.12-3.5zm-12.28-17.48c1.0099054-1.85917744 2.2422964-3.58855444 3.67-5.15.3783151-.40316784 1.0118321-.42331501 1.415-.04499997.4031678.37831504.423315 1.0118321.045 1.41499997-1.3167051 1.43547667-2.4518907 3.0274234-3.38 4.74-.2761424.4832492-.8917508.6511424-1.375.375s-.6511424-.8917508-.375-1.375z" }),
            React.createElement("path", { id: "Shape", d: "m15 45c-8.88-7.41-8.36-20.14-4-31-3.55 0-6.26 2.19-7.89 5.33-2.41 4.59-2.79 11.46-1 17.09 2.02 6.08 7.13 8.82 12.89 8.58z" }),
            React.createElement("path", { id: "Shape", d: "m51.37 50.82 5.18-.49c-2.69-2-2.54-1.91-2.62-2-.3695814-.3660786-.5548165-.8790296-.5043991-1.3967767.0504173-.5177471.3311345-.9853244.7643991-1.2732233l.33-.18-2.79-.63c-3.3740505 1.9352367-7.3317613 2.5918972-11.15 1.85-7.0998733 4.3760158-16.0601267 4.3760158-23.16 0-3.823751.72837-7.78190651.0763551-11.17-1.84l-2.77.63.25.13c.459298.2749348.76648497.7459757.8328805 1.2771399.06639553.5311643-.11539102 1.0633268-.4928805 1.4428601-.08.08 0 0-2.62 2l5.15.49c.64038677.0713049 1.18894097.490663 1.42571345 1.0899279.23677249.5992649.12299447 1.2803137-.29571345 1.7700721l-.56.86 6.55-2.17c.9183874-.2960905 1.9231368-.1323536 2.7.44l2.51 1.88c.1137149.0896251.2677225.108876.4.05 6.09-2.89 5.67-2.75 6.15-2.75.4614024.000194.9038362.1836422 1.23.51.13.13 0 0 2.29 3.4 2.27-3.39 2.16-3.26 2.29-3.4.5872385-.5903148 1.5116873-.6785576 2.2-.21l5.18 2.44c.1322775.058876.2862851.0396251.4-.05l2.51-1.88c.7768632-.5723536 1.7816126-.7360905 2.7-.44l6.55 2.17-.56-.86c-.4172055-.4855792-.5340677-1.1610366-.3042517-1.7585583.2298161-.5975217.7691853-1.0205824 1.4042517-1.1014417z" }),
            React.createElement("path", { id: "Shape", d: "m46.71 5.71 1-1c.2536586-.25365856.3527236-.62337399.2598781-.96987806-.0928455-.34650406-.363496-.61715454-.71-.71000002-.3465041-.09284548-.7162195.00621949-.9698781.25987808l-1 1c-.3921221.39212218-.3921221 1.02787781 0 1.41999996.3921222.39212216 1.0278778.39212218 1.42.00000004z" }),
            React.createElement("path", { id: "Shape", d: "m48.32 9 3-1c.3394023-.11432499.5920313-.40103461.6627241-.75212813s-.0512905-.71323147-.32-.95-.6433218-.31219686-.9827241-.19787187l-3 1c-.3394023.11432498-.5920313.40103461-.6627241.75212813-.0706929.35109352.0512905.71323148.32.95000001s.6433218.31219685.9827241.19787186z" }),
            React.createElement("path", { id: "Shape", d: "m12.71 4.29-1-1c-.2536586-.25365857-.623374-.35272352-.969878-.25987804-.3465041.09284548-.6171546.36349595-.71.71-.09284552.34650405.0062194.71621947.259878.96987804l1 1c.3921222.39212215 1.0278778.39212214 1.42-.00000002.3921221-.39212217.3921222-1.0278778 0-1.41999998z" }),
            React.createElement("path", { id: "Shape", d: "m6.05 6.68c-.10156011.25804893-.09140308.54668422.02804477.7969559.11944785.25027169.33745932.43970373.60195523.5230441 3.14 1 3.04 1 3.32 1 .4927375.00386501.9148502-.35178371.9946449-.83803264.0797947-.48624892-.2065147-.95815151-.6746449-1.11196736l-3-1c-.25193645-.08555066-.52757913-.06717426-.76592958.05106258-.23835046.11823684-.41975528.32658479-.50407042.57893742z" }))));
};

var Icon$i = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 427.1 427.1" }, props),
        React.createElement("g", null,
            React.createElement("g", null,
                React.createElement("path", { d: "M93.55,156.5c-31.5,0-57,25.5-57,57s25.5,57,57,57s57-25.5,57-57C150.45,182.1,124.95,156.6,93.55,156.5z M93.55,250.5\n                    c-20.4,0-37-16.5-37-37c0-20.4,16.5-37,37-37c20.4,0,37,16.5,37,37C130.45,233.9,113.95,250.4,93.55,250.5z" }))),
        React.createElement("g", null,
            React.createElement("g", null,
                React.createElement("path", { d: "M380.55,172.5h-203.5c-5.5,0-10,4.5-10,10s4.5,10,10,10h203.5c5.5,0,10-4.5,10-10S386.05,172.5,380.55,172.5z" }))),
        React.createElement("g", null,
            React.createElement("g", null,
                React.createElement("path", { d: "M286.65,234.5h-109.6c-5.5,0-10,4.5-10,10s4.4,10,10,10h109.6c5.5,0,10-4.5,10-10S292.15,234.5,286.65,234.5z" }))),
        React.createElement("g", null,
            React.createElement("g", null,
                React.createElement("path", { d: "M93.55,0c-31.5,0-57,25.5-57,57s25.5,57,57,57s57-25.5,57-57C150.45,25.5,124.95,0,93.55,0z M93.55,93.9\n                    c-20.4,0-37-16.5-37-37s16.5-37,37-37c20.4,0,37,16.5,37,37C130.45,77.4,113.95,93.9,93.55,93.9z" }))),
        React.createElement("g", null,
            React.createElement("g", null,
                React.createElement("path", { d: "M380.55,15.5h-203.5c-5.5,0-10,4.5-10,10s4.5,10,10,10h203.5c5.5,0,10-4.5,10-10S386.05,15.5,380.55,15.5z" }))),
        React.createElement("g", null,
            React.createElement("g", null,
                React.createElement("path", { d: "M286.65,78.5h-109.6c-5.5,0-10,4.5-10,10s4.4,10,10,10h109.6c5.5,0,10-4.5,10-10S292.15,78.5,286.65,78.5z" }))),
        React.createElement("g", null,
            React.createElement("g", null,
                React.createElement("path", { d: "M93.55,313.1c-31.5,0-57,25.5-57,57s25.5,57,57,57s57-25.5,57-57C150.45,338.6,124.95,313.1,93.55,313.1z M93.55,407\n                    c-20.4,0-37-16.5-37-37c0-20.4,16.5-37,37-37c20.4,0,37,16.5,37,37C130.45,390.5,113.95,407,93.55,407z" }))),
        React.createElement("g", null,
            React.createElement("g", null,
                React.createElement("path", { d: "M380.55,328.5h-203.5c-5.5,0-10,4.5-10,10s4.5,10,10,10h203.5c5.5,0,10-4.5,10-10S386.05,328.5,380.55,328.5z" }))),
        React.createElement("g", null,
            React.createElement("g", null,
                React.createElement("path", { d: "M286.65,391.5h-109.6c-5.5,0-10,4.5-10,10s4.5,10,10,10h109.6c5.5,0,10-4.5,10-10S292.15,391.5,286.65,391.5z" }))),
        React.createElement("g", null),
        React.createElement("g", null),
        React.createElement("g", null),
        React.createElement("g", null),
        React.createElement("g", null),
        React.createElement("g", null),
        React.createElement("g", null),
        React.createElement("g", null),
        React.createElement("g", null),
        React.createElement("g", null),
        React.createElement("g", null),
        React.createElement("g", null),
        React.createElement("g", null),
        React.createElement("g", null),
        React.createElement("g", null)));
};

var Icon$h = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 512 512" }, props),
        React.createElement("path", { d: "m452 120c-33.085938 0-60-26.914062-60-60s26.914062-60 60-60 60 26.914062 60 60-26.914062 60-60 60zm0-100c-22.054688 0-40 17.945312-40 40s17.945312 40 40 40 40-17.945312 40-40-17.945312-40-40-40zm0 0" }),
        React.createElement("path", { d: "m267.773438 110.390625h-257.773438c-5.523438 0-10-4.480469-10-10 0-34.566406 28.644531-62.621094 63.417969-61.558594 14.65625-24.117187 40.570312-38.832031 69.15625-38.832031 23.421875 0 45.75 10.277344 61.054687 27.804688 5.347656-1.328126 10.847656-1.996094 16.429688-1.996094 37.542968 0 68.085937 30.542968 68.085937 68.082031 0 2.472656-.148437 5.03125-.433593 7.605469-.566407 5.066406-4.84375 8.894531-9.9375 8.894531zm-246.558594-20h236.800781c-1.800781-24.886719-22.621094-44.582031-47.957031-44.582031-5.699219 0-11.273438.984375-16.566406 2.925781-4.195313 1.542969-8.910157.105469-11.535157-3.511719-11.460937-15.792968-29.921875-25.222656-49.382812-25.222656-23.273438 0-44.191407 12.957031-54.597657 33.8125-1.925781 3.859375-6.113281 6.046875-10.378906 5.433594-2.015625-.292969-4.039062-.441406-6.011718-.441406-19.484376 0-35.882813 13.46875-40.371094 31.585937zm0 0" }),
        React.createElement("path", { d: "m447.488281 468.601562c-.648437 0-1.296875-.070312-1.949219-.203124-.640624-.117188-1.269531-.308594-1.867187-.558594-.601563-.25-1.183594-.558594-1.722656-.917969-.550781-.371094-1.058594-.792969-1.519531-1.25-.46875-.460937-.878907-.972656-1.25-1.523437-.359376-.539063-.667969-1.117188-.917969-1.71875-.25-.609376-.441407-1.238282-.570313-1.871094-.132812-.648438-.191406-1.308594-.191406-1.957032 0-.652343.058594-1.3125.191406-1.953124.128906-.636719.320313-1.269532.570313-1.867188.25-.609375.558593-1.191406.917969-1.730469.359374-.550781.78125-1.058593 1.242187-1.519531.457031-.460938.976563-.882812 1.519531-1.242188.546875-.359374 1.128906-.667968 1.730469-.917968.597656-.25 1.226563-.441406 1.867187-.570313 1.289063-.261719 2.621094-.261719 3.910157 0 .640625.128907 1.269531.320313 1.871093.570313.601563.25 1.179688.558594 1.730469.917968.539063.359376 1.058594.78125 1.519531 1.242188.460938.460938.878907.96875 1.238282 1.519531.363281.539063.671875 1.121094.921875 1.730469.25.601562.441406 1.230469.570312 1.867188.128907.640624.199219 1.300781.199219 1.953124 0 .648438-.070312 1.308594-.199219 1.957032-.128906.632812-.320312 1.261718-.570312 1.871094-.25.601562-.558594 1.179687-.921875 1.71875-.359375.550781-.777344 1.0625-1.238282 1.523437-.460937.457031-.980468.878906-1.519531 1.25-.550781.359375-1.128906.667969-1.730469.917969-.601562.25-1.230468.441406-1.871093.558594-.648438.132812-1.300781.203124-1.960938.203124zm0 0" }),
        React.createElement("path", { d: "m502 405.207031h-18.527344v-111.378906l2.996094 2.199219c1.75 1.285156 3.828125 1.941406 5.921875 1.941406 1.539063 0 3.089844-.355469 4.515625-1.078125 3.363281-1.703125 5.484375-5.152344 5.484375-8.921875v-54.757812c0-3.183594-1.515625-6.175782-4.082031-8.0625l-136.753906-100.460938c-3.523438-2.585938-8.320313-2.585938-11.84375 0l-60.085938 44.140625-27.703125-20.351563c-3.523437-2.589843-8.320313-2.589843-11.84375 0l-27.707031 20.351563-60.085938-44.140625c-3.519531-2.585938-8.316406-2.585938-11.839844 0l-136.757812 100.464844c-2.5625 1.882812-4.078125 4.875-4.078125 8.058594v54.757812c0 3.769531 2.121094 7.222656 5.484375 8.921875 1.425781.722656 2.972656 1.078125 4.515625 1.078125 2.089844 0 4.171875-.652344 5.917969-1.9375l3-2.203125v111.378906h-18.527344c-5.523438 0-10 4.476563-10 10v86.792969c0 5.523438 4.476562 10 10 10h492c5.523438 0 10-4.476562 10-10v-86.792969c0-5.523437-4.476562-10-10-10zm-38.527344-126.070312.003906 126.070312h-79.632812l-.003906-87.59375 3 2.203125c.050781.039063.101562.074219.152344.113282.019531.011718.035156.019531.050781.03125.035156.027343.070312.050781.109375.074218.019531.015625.039062.027344.058594.042969.03125.019531.0625.042969.097656.0625.019531.015625.042968.03125.066406.042969.03125.023437.066406.042968.101562.066406.015626.011719.035157.023438.054688.03125.035156.023438.074219.046875.113281.070312.015625.007813.035157.019532.050781.03125.046876.023438.089844.050782.136719.078126.007813.003906.019531.011718.027344.015624.113281.0625.226563.125.34375.183594.007813.003906.011719.003906.019531.007813.046875.027343.097656.050781.148438.074219.011718.007812.027344.015624.039062.019531.042969.023437.089844.042969.136719.0625.011719.007812.023437.011719.035156.019531.050781.019531.097657.042969.144531.066406.011719.003906.019532.007813.027344.011719 2.296875 1.003906 4.902344 1.109375 7.285156.28125.007813-.003906.007813-.003906.011719-.003906.171875-.0625.339844-.125.507813-.195313.015625-.007812.03125-.011718.046875-.019531.03125-.011719.0625-.023437.09375-.039063.019531-.007812.039062-.015624.058593-.023437.027344-.011719.050782-.023437.078126-.035156.027343-.011719.050781-.023438.078124-.035157.023438-.007812.046876-.019531.070313-.03125.027344-.011718.058594-.027343.089844-.042968.019531-.007813.035156-.015625.054687-.027344.050782-.023438.097656-.046875.144532-.070312 3.363281-1.703126 5.484374-5.152344 5.484374-8.921876v-54.761718c0-3.183594-1.515624-6.175782-4.078124-8.058594l-54.890626-40.320312 11.84375-8.699219zm-184.800781 169.464843h-45.34375v-59.652343h45.34375zm10-79.652343h-65.34375c-5.519531 0-10 4.480469-10 10v69.652343h-65.167969v-145.679687l107.839844-79.21875 107.839844 79.21875.003906 145.679687h-65.171875v-69.652343c0-5.519531-4.480469-10-10-10zm66.960937-223.792969 126.757813 93.117188v29.941406l-120.835937-88.769532c-3.246094-2.382812-7.578126-2.570312-10.992188-.558593-.292969.171875-.574219.359375-.847656.558593l-22.816406 16.761719-20.378907-14.972656zm-99.632812 23.785156 126.757812 93.117188v29.941406l-2.996093-2.203125-117.839844-86.5625c-.277344-.203125-.558594-.390625-.847656-.558594-3.128907-1.84375-7.019531-1.84375-10.144531 0-.292969.171875-.574219.355469-.851563.558594l-117.839844 86.5625-2.996093 2.203125v-29.941406zm-226.390625 69.332032 126.757813-93.117188 49.113281 36.078125-20.378907 14.972656-22.816406-16.757812c-3.519531-2.589844-8.316406-2.589844-11.839844 0l-120.835937 88.765625zm18.917969 40.863281 107.839844-79.222657 11.84375 8.703126-54.890626 40.320312c-.039062.027344-.078124.058594-.117187.085938-2.058594 1.5625-3.417969 3.839843-3.828125 6.351562-.015625.097656-.03125.195312-.042969.292969-.011719.097656-.023437.195312-.035156.292969-.035156.339843-.054687.6875-.054687 1.035156v54.761718c0 3.769532 2.121093 7.21875 5.484374 8.921876.050782.023437.105469.050781.15625.078124 1.136719.546876 2.339844.867188 3.558594.964844 2.355469.191406 4.75-.457031 6.722656-1.90625l2.996094-2.203125v87.59375h-79.628906zm79.632812 146.070312v23.394531h-108.160156v-23.394531zm363.839844 66.792969h-472v-23.398438h387c5.523438 0 10-4.476562 10-10 0-5.519531-4.476562-10-10-10h-23.15625v-23.394531h108.15625zm0 0" }),
        React.createElement("path", { d: "m256 347.96875c-23.859375 0-43.273438-19.410156-43.273438-43.273438 0-23.859374 19.414063-43.269531 43.273438-43.269531s43.273438 19.410157 43.273438 43.269531c0 23.863282-19.414063 43.273438-43.273438 43.273438zm0-66.546875c-12.832031 0-23.273438 10.441406-23.273438 23.273437 0 12.832032 10.441407 23.273438 23.273438 23.273438s23.273438-10.441406 23.273438-23.273438c0-12.832031-10.441407-23.273437-23.273438-23.273437zm0 0" })));
};

var Icon$g = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 512 512" }, props),
        React.createElement("path", { d: "m494.5 163.435h-15.148c.32-3.371-1.116-6.231-4.31-8.58-.432-.203-9.814-4.58-25.674-9.513v-48.783c0-4.142-3.358-7.5-7.5-7.5-63.872 0-112.353 19.549-141.775 35.949-16.567 9.234-29.049 18.448-37.35 25.306-1.264-13.741-4.554-34.578-13.038-56.654-19.394-50.464-56.746-82.815-108.019-93.558-5.343-.422-8.355 2.025-9.038 7.341v34.272c-13.182-5.349-26.909-9.553-40.962-12.498-5.342-.421-8.355 2.025-9.038 7.341v103.296c-27.614 6.582-44.919 14.637-45.69 14.999-3.193 2.349-4.63 5.209-4.31 8.58h-15.148c-9.649 0-17.5 7.851-17.5 17.5v229.344c0 9.697 15 9.697 15 0v-229.342c0-1.378 1.122-2.5 2.5-2.5h15.148v294.927c0 4.142 3.358 7.5 7.5 7.5h431.704c4.142 0 7.5-3.358 7.5-7.5v-294.927h15.148c1.378 0 2.5 1.122 2.5 2.5v313.509c0 1.378-1.122 2.5-2.5 2.5h-215.952c-12.158-12.521-32.937-12.521-45.096 0h-215.952c-1.378 0-2.5-1.122-2.5-2.5v-38.5c0-9.697-15-9.697-15 0v38.5c0 9.649 7.851 17.5 17.5 17.5h219.378c2.345 0 4.555-1.097 5.973-2.964 6.524-8.59 19.774-8.59 26.298 0 1.418 1.867 3.628 2.964 5.973 2.964h219.378c9.649 0 17.5-7.851 17.5-17.5v-313.509c0-9.65-7.851-17.5-17.5-17.5zm-60.132-59.282v76.791c0 4.142 3.358 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-19.849c6.583 2.173 11.686 4.139 14.984 5.487v51.362 221.755c-55.426-17.545-101.396-15.805-134.467-9.097 28.806-12.618 66.355-22.99 111.983-22.99 4.142 0 7.5-3.358 7.5-7.5v-173.168c0-4.142-3.358-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v165.758c-60.176 1.449-106.015 20.106-134.275 35.858-16.052 8.947-28.281 17.882-36.577 24.667v-283.554c11.417-10.947 70.88-63.009 170.852-65.52zm-286.72-87.196c41.747 11.379 71.288 38.806 87.884 81.642 13.519 34.891 12.985 67.455 12.978 67.792-.001.057-.002.113-.002.169v227.619c-18.923-46.777-53.664-77.469-100.86-89.161zm-15 41.022v253.017c0 3.549 2.488 6.613 5.962 7.341 46.543 9.75 79.152 37.95 96.922 83.814 4.815 12.427 7.846 24.557 9.754 35.042-5.786-8.361-13.078-17.876-22.025-27.764-24.214-26.76-65.416-61.113-125.613-75.329v-188.338c0-.009 0-.017 0-.026v-99.748c12.026 3.038 23.748 7.057 35 11.991zm-85 108.601c6.1-2.495 18.401-7.104 35-11.276v184.808c0 3.549 2.488 6.613 5.962 7.341 59.276 12.418 99.694 45.811 123.164 71.638 9.57 10.531 17.188 20.703 22.985 29.328-9.12-4.5-20.536-9.252-34.132-13.247-33.308-9.786-86.312-16.576-152.978 4.527v-221.755-51.364zm0 288.902c64.845-21.61 116.117-15.374 148-6.137 17.137 4.965 30.626 11.286 40.028 16.517h-188.028zm228.625 10.38c9.235-5.14 22.457-11.341 39.329-16.298 32.02-9.407 83.534-15.816 148.75 5.918v10.38z" })));
};

var Icon$f = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 511.999 511.999" }, props),
        React.createElement("g", null,
            React.createElement("path", { d: "m256 282.924c-4.142 0-7.5 3.357-7.5 7.5v90c0 4.143 3.358 7.5 7.5 7.5s7.5-3.357 7.5-7.5v-90c0-4.143-3.358-7.5-7.5-7.5z" }),
            React.createElement("path", { d: "m503 297.924c4.142 0 7.5-3.357 7.5-7.5v-226.978c0-13.012-14.659-21.676-26.08-15.253l-5.096 2.866-24.062-24.45c-1.827-1.855-4.486-2.63-7.021-2.05-.979.224-17.111 3.985-40.479 12.898v-29.958c0-2.478-1.224-4.796-3.27-6.193-2.046-1.396-4.651-1.692-6.958-.793-70.109 27.384-106.842 70.539-125.311 101.919-7.497 12.739-12.671 24.561-16.223 34.45-3.552-9.889-8.726-21.711-16.223-34.45-18.469-31.38-55.202-74.535-125.311-101.919-2.307-.899-4.912-.604-6.958.793s-3.27 3.716-3.27 6.193v29.954c-23.317-8.891-39.443-12.656-40.48-12.893-2.539-.58-5.195.194-7.021 2.05l-24.062 24.45-5.096-2.867c-11.341-6.377-26.079 2.15-26.079 15.253v315.204c0 6.313 3.418 12.156 8.92 15.253l193.333 108.75c4.212 1.886 9.498 2.861 13.943 1.41 3.129 4.772 8.517 7.936 14.637 7.936h47.333c6.12 0 11.508-3.164 14.637-7.936 4.746 1.509 9.393 1.039 13.943-1.41l193.334-108.751c5.501-3.096 8.919-8.939 8.919-15.252v-40.227c0-9.697-15-9.697-15 0v40.227c0 .902-.489 1.737-1.274 2.179l-193.334 108.75c-2.075.699-3.317-.028-3.726-2.179v-311.052c-.276-1.496-.33-5.427 1.274-6.33l193.333-108.75c2.076-.698 3.318.028 3.727 2.179v226.978c.001 4.141 3.358 7.499 7.501 7.499zm-110.238-279.222v24.808c-7.085 3.018-14.588 6.442-22.353 10.31-27.388 13.642-61.643 34.82-90.239 65.217 1.523-2.93 3.176-5.934 4.98-8.997 16.354-27.786 48.133-65.489 107.612-91.338zm-110.596 208.362h-52.333v-18.333h52.333zm-52.333 15h52.333v186.718h-52.333zm0 201.718h52.333v18.334h-52.333zm52.333-250.051h-52.333v-17.384c0-1.379 1.122-2.5 2.5-2.5h47.333c1.378 0 2.5 1.121 2.5 2.5zm-217.757-153.533c10.906 2.911 42.706 12.288 78.232 31.014 8.277 4.362 15.553-8.758 6.994-13.27-10.632-5.604-20.888-10.382-30.398-14.434v-24.806c59.141 25.7 90.856 63.114 107.226 90.685 1.913 3.222 3.657 6.381 5.261 9.464-11.776-12.53-25.262-24.305-40.425-35.228-7.866-5.67-16.636 6.502-8.768 12.17 25.897 18.656 46.607 39.827 61.742 63.056-8.705-.713-16.151 2.152-23.362-1.904l-174.689-98.265zm149.186 449.361c-.829.014-1.658.021-2.488.021l-193.333-108.75c-.786-.442-1.275-1.277-1.275-2.18v-315.204c0-1.998 2.208-3.031 3.726-2.179l193.333 108.749c1.605.905 1.551 4.833 1.275 6.331v311.053c0 1.248-.776 1.888-1.238 2.159zm68.571 4.94c0 1.379-1.122 2.5-2.5 2.5h-47.333c-1.378 0-2.5-1.121-2.5-2.5v-17.383h52.333zm8.92-337.556c-7.343 4.131-14.481 1.292-23.35 1.904 29.369-44.988 74.814-74.351 109.024-91.433 32.391-16.174 60.673-24.499 70.831-27.215l18.186 18.48z" }),
            React.createElement("path", { d: "m462.615 130.968-140.006 80c-2.336 1.335-3.779 3.82-3.779 6.512v48.351c0 5.659 6.308 9.321 11.221 6.512l140.005-80c2.337-1.335 3.779-3.82 3.779-6.512v-48.351c0-5.253-6.043-9.473-11.22-6.512zm-3.78 50.51-125.005 71.428v-31.074l125.005-71.429z" }))));
};

var Icon$e = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 64 64" }, props),
        React.createElement("path", { d: "M63.023,34l.017-.008A1,1,0,0,0,64.011,33a.989.989,0,0,0-.989-1C62.74,31.91,62,30.693,62,28.5s.741-3.41,1.023-3.5l.014-.007a1,1,0,0,0,.08-1.986l-32.229-3.79a16.013,16.013,0,0,0-3.777,0l-23.23,2.79-.015,0C1.985,22.137,1,24.831,1,27.5A7.834,7.834,0,0,0,2.2,32,7.829,7.829,0,0,0,1,36.5a8.065,8.065,0,0,0,1.1,4.358C.719,42.248,0,45.132,0,48c0,3.942,1.351,7.933,3.934,8l33.949,3.994A.918.918,0,0,0,38,60a.939.939,0,0,0,.119-.007L46,59.047V63a1,1,0,0,0,.733.964A1.022,1.022,0,0,0,47,64a1,1,0,0,0,.857-.485l2.235-3.725L52.2,62.6A1,1,0,0,0,54,62V58.088l9.119-1.095A1,1,0,0,0,63,55c-.7,0-2-2.278-2-6,0-3.69,1.228-5.826,2-6a1.008,1.008,0,0,0,1.011-1,.99.99,0,0,0-.877-.992A1.169,1.169,0,0,0,63.015,41C62.728,40.89,62,39.676,62,37.5,62,35.3,62.741,34.09,63.023,34ZM32.287,57.321A12.384,12.384,0,0,1,31,51.21a13.239,13.239,0,0,1,1.153-5.9l3.293.387A12.639,12.639,0,0,0,34,52a13.83,13.83,0,0,0,1.1,5.652Zm-4.036-.475A12.619,12.619,0,0,1,27,50.79a12.941,12.941,0,0,1,1.186-5.941l1.87.22A16.273,16.273,0,0,0,29,51.21a16.826,16.826,0,0,0,.947,5.836Zm-16.164-1.9a13.591,13.591,0,0,1-1.067-5.7A11.863,11.863,0,0,1,12.412,43l13.563,1.593c.03,0,.057.018.087.018a.185.185,0,0,0,.023,0A16.294,16.294,0,0,0,25,50.79a16.965,16.965,0,0,0,.926,5.783Zm-3.993-.469A13.5,13.5,0,0,1,7.02,48.76,11.869,11.869,0,0,1,8.4,42.524l1.862.219a15.529,15.529,0,0,0-1.246,6.5,17.385,17.385,0,0,0,.8,5.438ZM4.022,40C3.74,39.91,3,38.693,3,36.5c0-2.174.726-3.386.992-3.494l4.737.552c.017,0,.03.013.046.015l20.114,2.36A11.906,11.906,0,0,0,28.25,40a13.254,13.254,0,0,0,.309,2.881l-1.913-.224A8.922,8.922,0,0,1,26,39a7.868,7.868,0,0,1,.2-1.775,1,1,0,1,0-1.949-.45A9.929,9.929,0,0,0,24,39a12.579,12.579,0,0,0,.435,3.4L12.047,40.944l-.021,0L8.04,40.474c-.009,0-.017,0-.026,0ZM9.64,24.668l3.883.455h.01l22.22,2.619A8.946,8.946,0,0,0,35,31.5a9.578,9.578,0,0,0,.525,3.2L13.882,32.159A12.08,12.08,0,0,1,13.5,29a14.75,14.75,0,0,1,.115-1.872,1,1,0,1,0-1.984-.256A16.749,16.749,0,0,0,11.5,29a15.174,15.174,0,0,0,.273,2.912L9.541,31.65A10.413,10.413,0,0,1,9,28,8.949,8.949,0,0,1,9.64,24.668ZM38,28h0a.945.945,0,0,0,.118-.007l22.4-2.685A9.571,9.571,0,0,0,60,28.5a8.923,8.923,0,0,0,.757,3.765L38.011,34.991C37.721,34.876,37,33.673,37,31.5,37,29.307,37.74,28.09,38,28ZM30.7,43.132A10.279,10.279,0,0,1,30.25,40a8.087,8.087,0,0,1,.732-3.821l4.774.56A8.926,8.926,0,0,0,35,40.5a9.578,9.578,0,0,0,.525,3.2Zm7.314.86C37.722,43.877,37,42.674,37,40.5c0-2.193.74-3.41,1-3.5a.939.939,0,0,0,.119-.007l22.4-2.685A9.571,9.571,0,0,0,60,37.5a8.821,8.821,0,0,0,.78,3.762ZM27.348,21.2a14.053,14.053,0,0,1,3.305,0l23.88,2.808L38,25.993,13.767,23.137h-.01l-1.269-.149Zm-23.361,2.8,3.608.423A11.091,11.091,0,0,0,7,28a14.5,14.5,0,0,0,.373,3.389L4.022,31C3.74,30.91,3,29.693,3,27.5,3,25.342,3.716,24.13,3.987,24.005ZM4,54c-.7,0-2-2.278-2-6,0-3.7,1.278-5.966,1.985-5.995l2.274.267A15.566,15.566,0,0,0,5.02,48.76a17.326,17.326,0,0,0,.809,5.448l-1.712-.2A.908.908,0,0,0,4,54Zm46.8,3.4a.985.985,0,0,0-.852-.4,1,1,0,0,0-.8.484L48,59.39V50.812l4-.482V59ZM54,56.073V50.089l.628-.076a1,1,0,0,0-.237-1.987l-1.5.182h-.007l-6,.72c-.011,0-.02.008-.031.009l-1.246.151a1,1,0,0,0,.115,1.993.945.945,0,0,0,.118-.007L46,51.054v5.979l-8,.96-.088-.01C37.222,57.816,36,55.683,36,52c0-3.722,1.3-6,2-6a.939.939,0,0,0,.119-.007L60.1,43.358A13.819,13.819,0,0,0,59,49a12.682,12.682,0,0,0,1.439,6.3Z" })));
};

var Icon$d = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 512 512" }, props),
        React.createElement("path", { d: "m492.14 268.122-23.027-145.264a6 6 0 0 0 -6.509-5.032 34.052 34.052 0 0 0 -30.739 35.574l1.487 60.854a43.269 43.269 0 0 0 -36.61 24.567l-21.537 45.221a53.862 53.862 0 0 1 -14.845 18.75l-4.476 3.589a88.933 88.933 0 0 0 -33.157 76.943l-11.871-5.653a6 6 0 0 0 -8 2.837l-23.613 49.592a6 6 0 0 0 2.837 8l108.82 51.817a6 6 0 0 0 8-2.836l23.617-49.588a6 6 0 0 0 -2.837-8l-3.827-1.823-3.13-17.837a25.4 25.4 0 0 1 5.8-17.882l56.351-68.192c.085-.1.167-.209.245-.318a91.487 91.487 0 0 0 17.1-54.474 5.882 5.882 0 0 0 -.079-.845zm-101.5 208.378-97.983-46.664 18.456-38.754 97.987 46.668zm74.844-160.228-56.22 68.034a37.349 37.349 0 0 0 -8.494 26.7 5.847 5.847 0 0 0 .073.589l1.709 9.74-66.952-31.878a77.019 77.019 0 0 1 27.786-73.714l4.476-3.589a65.909 65.909 0 0 0 18.177-22.954l21.537-45.221a31.293 31.293 0 0 1 35.973-16.829l-32.574 68.394a6 6 0 0 0 10.834 5.161l35.4-74.334a6 6 0 0 0 -2.837-8 43.258 43.258 0 0 0 -9-3.115l-1.52-62.229c0-.052 0-.1 0-.157a22.069 22.069 0 0 1 14.405-21.848l21.963 138.55a79.427 79.427 0 0 1 -14.736 46.703z" }),
        React.createElement("path", { d: "m209.141 380.508a6 6 0 0 0 -8-2.837l-11.871 5.653a88.933 88.933 0 0 0 -33.157-76.943l-4.476-3.589a53.862 53.862 0 0 1 -14.845-18.75l-21.537-45.221a43.27 43.27 0 0 0 -36.61-24.567l1.49-60.854a34.052 34.052 0 0 0 -30.735-35.574 6 6 0 0 0 -6.509 5.032l-23.031 145.264a5.882 5.882 0 0 0 -.073.848 91.487 91.487 0 0 0 17.1 54.474c.078.109.16.215.245.318l56.351 68.192a25.4 25.4 0 0 1 5.8 17.882l-3.13 17.837-3.827 1.827a6 6 0 0 0 -2.837 8l23.617 49.588a6 6 0 0 0 8 2.836l108.814-51.831a6 6 0 0 0 2.837-8zm-106.4 3.8-56.22-68.034a79.427 79.427 0 0 1 -14.736-46.7l21.956-138.547a22.069 22.069 0 0 1 14.405 21.848v.157l-1.52 62.229a43.258 43.258 0 0 0 -8.995 3.115 6 6 0 0 0 -2.837 8l35.4 74.334a6 6 0 0 0 10.834-5.161l-32.577-68.397a31.3 31.3 0 0 1 35.973 16.829l21.537 45.219a65.909 65.909 0 0 0 18.173 22.952l4.476 3.589a77.019 77.019 0 0 1 27.79 73.716l-66.948 31.884 1.709-9.74a5.847 5.847 0 0 0 .073-.589 37.349 37.349 0 0 0 -8.498-26.703zm18.619 92.192-18.46-38.75 97.984-46.665 18.456 38.754z" }),
        React.createElement("path", { d: "m341 189.759v-94.452l30-11.614v92.244a21.766 21.766 0 1 0 27.946 20.871 22.023 22.023 0 0 0 -15.946-20.964v-99.878a6.145 6.145 0 0 0 -.009-.623c.011-.16.046-.317.044-.48a6 6 0 0 0 -3.924-5.575l-129.011-47.42a5.991 5.991 0 0 0 -4.14 0l-129.01 47.42a6 6 0 0 0 -3.929 5.575 6.062 6.062 0 0 0 3.892 5.648l38.087 14.796v94.452a5.938 5.938 0 0 0 3.837 5.622 255.4 255.4 0 0 0 89.232 16.09 254.924 254.924 0 0 0 89.146-16.09 5.892 5.892 0 0 0 3.785-5.622zm45.976 7.049a9.766 9.766 0 1 1 -9.766-9.766 9.777 9.777 0 0 1 9.766 9.766zm-138.941-162.916 112.057 41.188-26.592 10.349a5.959 5.959 0 0 0 -.883.343l-84.583 32.919-84.586-32.92a5.922 5.922 0 0 0 -.877-.341l-26.592-10.35zm-2.108 96.829a5.825 5.825 0 0 0 2.142.408 5.389 5.389 0 0 0 2.056-.408l78.875-30.744v43.783a242.677 242.677 0 0 1 -162 0v-43.783zm-78.927 54.833v-29.109a253.049 253.049 0 0 0 81 13.243 253.049 253.049 0 0 0 81-13.243v29.109a242.69 242.69 0 0 1 -162 0z" })));
};

var Icon$c = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 61 60" }, props),
        React.createElement("g", null,
            React.createElement("path", { d: "m16 11c0 1.71 2.149 3 5 3s5-1.29 5-3-2.149-3-5-3-5 1.29-5 3zm5-1c1.936 0 3 .751 3 1s-1.064 1-3 1-3-.751-3-1 1.064-1 3-1z" }),
            React.createElement("path", { d: "m35 36c0 1.71 2.149 3 5 3s5-1.29 5-3-2.149-3-5-3-5 1.29-5 3zm8 0c0 .249-1.064 1-3 1s-3-.751-3-1 1.064-1 3-1 3 .751 3 1z" }),
            React.createElement("path", { d: "m60 35c-.0062626-.0706735-.0203488-.1404338-.042-.208.1416705-.4863826-.1027564-1.00187-.569-1.2l-5.553-2.341c-.531-1.323-2.425-2.251-4.836-2.251-.715 0 .268.332-4.079-1.5-.321-1.257-1.85-2.21-3.921-2.443 0-16.4.039-15.657-.078-15.935-.1037969-.23502811-.2907665-.4234222-.525-.529-.192-.083.006 0-5.561-2.346-.531-1.319-2.425-2.247-4.836-2.247-.715 0 .268.332-4.079-1.5-.86-3.331-8.981-3.336-9.842 0-4.338 1.828-3.362 1.5-4.079 1.5-2.411 0-4.3.928-4.836 2.247-2.79 1.177-5.7 2.4-5.56 2.346-.21505716.09265275-.38868048.26093929-.488.473-.173.343-.116-1.981-.116 33.934-.00013709.4024898.24104147.765834.612.922 40.103 16.885 37.943 16.078 38.388 16.078.338 0-.92.472 19.388-8.078.1868398-.0671184.3410039-.2030404.431-.38.25-.377.181.826.181-16.542zm-19 8.174 17-7.158v14.32l-17 7.158zm11-11.174c0 .249-1.064 1-3 1s-3-.751-3-1 1.064-1 3-1 3 .751 3 1zm-3 3c1.6897708.1321594 3.3507086-.4945405 4.532-1.71l2.893 1.219-16.425 6.916-16.425-6.916 2.893-1.219c1.1812914 1.2154595 2.8422292 1.8421594 4.532 1.71 4.881 0 6.418-3.4 3.592-5.124l1.016-.428c1.833 2.074 6.952 2.073 8.784 0l1.016.428c-2.854 1.739-1.231 5.124 3.592 5.124zm-13.921-7.5c-4.338 1.828-3.362 1.5-4.079 1.5-2.411 0-4.3.928-4.836 2.247l-4.164 1.753v-14.826l17-7.158v14.041c-2.071.233-3.6 1.186-3.921 2.443zm-4.079 3.5c1.936 0 3 .751 3 1s-1.064 1-3 1-3-.751-3-1 1.064-1 3-1zm-28-19.984 17 7.158v14.826l-17-7.154zm40 16.984c0 .249-1.064 1-3 1s-3-.751-3-1 1.064-1 3-1 3 .751 3 1zm-10-21c0 .249-1.064 1-3 1s-3-.751-3-1 1.064-1 3-1 3 .751 3 1zm-12-5c1.936 0 3 .751 3 1s-1.064 1-3 1-3-.751-3-1 1.064-1 3-1zm-4.392 2.448c1.833 2.074 6.952 2.073 8.784 0l1.016.428c-.8142491.40656202-1.350629 1.21570334-1.408 2.124 0 3.354 7.44 4.054 9.532 1.29l2.892 1.219-16.424 6.916-16.424-6.916 2.892-1.219c2.09 2.761 9.532 2.067 9.532-1.29-.057371-.90829666-.5937509-1.71743798-1.408-2.124zm-4.608 1.552c1.936 0 3 .751 3 1s-1.064 1-3 1-3-.751-3-1 1.064-1 3-1zm-9 22.016 17.61 7.415 18.39 7.743v14.32l-36-15.158z" }),
            React.createElement("path", { d: "m36.4 52.083-22-9.53c-.3295956-.1521805-.7157785-.1137825-1.0089549.1003198-.2931763.2141023-.447292.5702765-.4026479.9305529.044644.3602764.2810349.6680604.6176028.8041273l22 9.529c.3304506.1585417.7211554.1236044 1.0182342-.0910518s.4529246-.5746325.4061571-.9381512c-.0467675-.3635188-.2886538-.672326-.6303913-.804797z" }),
            React.createElement("path", { d: "m9.4 40.382-3-1.3c-.50672126-.2209139-1.0965861.0107787-1.3175.5175s.01077874 1.0965861.5175 1.3175l3 1.3c.32779118.1429063.7069223.1000826.99457833-.1123398s.44013517-.5621714.40000001-.9175c-.04013516-.3553287-.26678715-.662254-.59457834-.8051602z" }))));
};

var Icon$b = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 60 55" }, props),
        React.createElement("g", null,
            React.createElement("g", { transform: "translate(-1)" },
                React.createElement("circle", { cx: "52", cy: "10", r: "1" }),
                React.createElement("path", { d: "m7 34c2.03388665.1443204 4.022389-.6477664 5.4-2.151.2133645.3751101.4505158.7361813.71 1.081.2679598.3720868.2357194.8816529-.077 1.217-1.7781698 2.0494481-3.23876299 4.3541043-4.333 6.837-.23270079-.1849136-.45441109-.3832509-.664-.594-1.4326048-1.656901-3.93001803-1.8568544-5.608-.449-1.68933356 1.4232925-1.90512457 3.946525-.482 5.636.319.385 8.166 9.423 29.054 9.423s28.735-9.038 29.059-9.422c1.2682988-1.5112505 1.2409365-3.722757-.0643648-5.2021651-1.3053012-1.4794082-3.4961771-1.7820182-5.1536352-.7118349-1.4077184-3.1406845-3.3651262-6.0046633-5.78-8.457-.2760791-.2962524-.3520787-.727178-.194-1.1 1.5-4 .819-9.459.378-11.975.8196192.2326796 1.5646585.6744652 2.162 1.282.9356776.9902983 2.2307936 1.5619805 3.593 1.586 2.281 0 5-1.041 5-6 0-1.926-3.248-7.436-4.751-9.884 1.0214794-1.14143821 1.6370693-2.58847873 1.751-4.116 0-.55228475-.4477153-1-1-1-1.7054069-.00852592-3.397633.29899744-4.991.907-1.2670174-.5529358-2.6273606-.86070114-4.009-.907-10.332 0-13.092 11.284-13.8 16.14-.0668644.4947897-.4907218.8629891-.99.86h-13.21c-.8506512.0003516-1.696078.1329345-2.506.393-.9241284-2.7629011-3.5856286-4.5633277-6.494-4.393-2.1564262-.1131107-4.20236937.9608752-5.334 2.8-1.30991467 2.3392482-1.5171473 5.1383533-.566 7.645.66302939 1.2510668.8136404 2.7109179.42 4.071-.55873037 1.2257695-1.61360536 2.1551508-2.9 2.555-.25972737.1038589-.46408197.3117542-.5634645.5732272-.09938252.2614729-.08470705.5526187.0404645.8027728.139.261 1.415 2.553 5.903 2.553zm51.3 7.5c.4015245.3381775.6518922.8222972.6957985 1.3454208.0439064.5231235-.1222616 1.0422035-.4617985 1.4425792-.305.357-7.567 8.712-27.534 8.712s-27.229-8.355-27.529-8.711c-.50052127-.5937815-.61206173-1.423627-.28609378-2.1284979s1.03050642-1.1573202 1.80709378-1.1605021c.59326605.0009727 1.15650866.2610433 1.542.712.271.301 6.838 7.288 24.466 7.288 17.748 0 24.209-7 24.479-7.3.7282878-.8251367 1.9835828-.9141331 2.821-.2zm-25.026-5.592c2.8565717-.6822087 5.7901705-.9874697 8.726-.908.529521.0020445 1.0580992-.0448212 1.579-.14.3167184-.0705762.6480392.0157906.89.232 2.3381791 2.2897493 4.1622534 5.0509157 5.351 8.1-3.558 1.802-9.584 3.808-18.82 3.808-7.877 0-13.421-1.459-17.087-3.006 1.0476084-2.6340904 2.6432068-5.0153873 4.681-6.986.2209739-.2107629.5298682-.3023147.83-.246.8493697.1594644 1.7117915.2391447 2.576.238 3.7894778.1271971 7.5793776-.2398928 11.274-1.092zm21.726-16.908c-.6890961.0038479-1.3530149-.2587816-1.853-.733l4.494-4.493c.182758.3874867.303884.8011368.359 1.226 0 3.516-1.442 4-3 4zm-1.848-13.47c1.3 2.072 2.646 4.436 3.592 6.312l-5.169 5.169c-1.0586434-.698153-2.3075155-1.0513305-3.575-1.011-.3053703-.0001035-.5940514.1393278-.7838151.3785782-.1897638.2392504-.2598094.5520946-.1901849.8494218.017.074 1.718 7.5-.032 12.182-.4330331 1.1095237-.1742225 2.369904.661 3.219 2.3731578 2.424429 4.2724152 5.270941 5.6 8.393-.5356315.4275448-1.096658.822267-1.68 1.182-1.2963132-3.2302896-3.2546684-6.153345-5.749-8.581-.7074647-.6504782-1.6852882-.9196962-2.626-.723-.3961279.0697467-.7977916.1032186-1.2.1-3.0826337-.0825349-6.1628073.2388629-9.162.956-1.592045.3804323-3.2086071.6497479-4.838.806v-5.762c3.3123376-.0033074 5.9966926-2.6876624 6-6v-4h2c3.027 0 4.115-3.338 4.97-6.757.469-1.877 1.899-6.243 5.03-6.243 2.982 0 5.047-2.4 5.649-3.193.9959025-.39497708 2.0431688-.64551281 3.11-.744-.319289.84181069-.8197721 1.60311864-1.466 2.23-.3292493.329225-.3877123.84212375-.141 1.237zm-6.152-3.53c.7916235.01984333 1.5756097.16011785 2.325.416-.8644529.93450385-2.0546571 1.50150637-3.325 1.584-3.2 0-5.738 2.828-6.97 7.757-1.092 4.366-1.968 5.243-3.03 5.243h-.963c.0659135-.1870042.113798-.3798816.143-.576.632-4.337 3.049-14.424 11.82-14.424zm-15 17v4c0 2.209139-1.790861 4-4 4h-2c-2.209139 0-4-1.790861-4-4v-4zm-12 0v4c.0033074 3.3123376 2.6876624 5.9966926 6 6v5.907c-1.132.059-2.445.093-4 .093-.7379722.0022334-1.4745285-.0647263-2.2-.2-.9220924-.1778852-1.8736406.0960566-2.56.737-2.2306688 2.1471034-3.9822888 4.7414776-5.14 7.613-.669-.342-1.249-.676-1.744-.987 1.0333812-2.4340925 2.4414255-4.6914173 4.173-6.69.9486249-1.0532624 1.017395-2.6312015.164-3.763-2.0307319-2.7040322-2.4201575-6.3020945-1.015-9.378.9447327-2.077917 3.040133-3.3898061 5.322-3.332zm-13.607 9.229c.60389333-1.8822002.4236466-3.9283611-.5-5.676-.64616244-1.8844867-.47503015-3.9533021.472-5.706.77912316-1.2380413 2.17566822-1.9476476 3.635-1.847 2.1384925-.1903888 4.1061634 1.1786821 4.671 3.25-1.2017137.7948032-2.1652735 1.9007542-2.788 3.2-1.1960706 2.5894723-1.3531987 5.5391132-.439 8.241-.758 1.526-2.244 2.309-4.444 2.309-1.14128338.0559567-2.2766978-.1950914-3.288-.727 1.21810805-.6749492 2.16530854-1.7503981 2.681-3.044z" })))));
};

var Icon$a = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 64 64" }, props),
        React.createElement("g", null,
            React.createElement("path", { d: "m51.5 27c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5-.673-1.5-1.5-1.5z" }),
            React.createElement("path", { d: "m40.5 27c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5-.673-1.5-1.5-1.5z" }),
            React.createElement("path", { d: "m52.5 18c.827 0 1.5-.673 1.5-1.5s-.673-1.5-1.5-1.5-1.5.673-1.5 1.5.673 1.5 1.5 1.5z" }),
            React.createElement("path", { d: "m39.5 18c.827 0 1.5-.673 1.5-1.5s-.673-1.5-1.5-1.5-1.5.673-1.5 1.5.673 1.5 1.5 1.5z" }),
            React.createElement("path", { d: "m62.109 13.361c-.985-1.478-2.634-2.361-4.412-2.361h-.283l.012-.012c1.015-1.014 1.574-2.365 1.574-3.8 0-1.683-.804-3.29-2.15-4.3l-2.25-1.688c-.303-.229-.709-.263-1.047-.095-.339.17-.553.516-.553.895 0 1.548-.42 3.043-1.179 4.381-.806-.246-1.66-.381-2.546-.381h-6.551c-.885 0-1.74.135-2.545.381-.759-1.338-1.179-2.833-1.179-4.381 0-.379-.214-.725-.553-.895-.338-.167-.745-.132-1.047.095l-2.25 1.688c-1.346 1.009-2.15 2.617-2.15 4.3 0 1.436.559 2.786 1.574 3.801l.012.011h-.283c-1.777 0-3.427.883-4.412 2.361-.583.873-.891 1.891-.891 2.942v1.784l-14.725 1.338c-2.326.211-4.438 1.225-6.043 2.777-4.281 1.455-7.232 5.522-7.232 10.078v18.22c0 1.252.598 2.448 1.601 3.2l2.8 2.1c.175.133.387.2.599.2.152 0 .306-.035.447-.105.339-.17.553-.516.553-.895v-4.146c0-1.525-.848-2.896-2.211-3.578l-1.789-.894v-14.102c0-2.468 1.068-4.758 2.808-6.363-.126.34-.241.685-.33 1.043l-.105.426c-.254 1.011-.347 2.051-.277 3.091l.906 13.59c.004.06.014.118.028.176l2.95 11.8c-1.195.913-1.98 2.339-1.98 3.957v2c0 .553.447 1 1 1h8 4c.553 0 1-.447 1-1v-2c0-2.01-1.199-3.736-2.914-4.529l.339-2.369c.337-2.367.519-4.77.558-7.158.04.01.078.024.118.034.378 1.964 1.868 3.605 3.899 4.435v2.587h2v-2.068c.328.04.66.068 1 .068s.672-.028 1-.068v2.068h2v-2.587c1.811-.74 3.192-2.125 3.738-3.808 1.852-.281 3.681-.71 5.472-1.296.256 3.572.752 7.129 1.528 10.624l.058.261c-1.088.918-1.796 2.274-1.796 3.806v2c0 .553.447 1 1 1h8 4c.553 0 1-.447 1-1v-2c0-1.983-1.169-3.685-2.846-4.493l.144-.577c1.121-4.481 1.69-9.095 1.699-13.712 1.255-2.096 1.967-4.505 1.994-7.026 2.366-1.027 3.97-2.933 4.004-5.121h.002l.719-10.062c.892.636 1.949.991 3.066.991h1.218c.553 0 1-.447 1-1v-2.697c0-1.051-.308-2.069-.891-2.942zm-58.214 35.704c.681.341 1.105 1.027 1.105 1.789v2.146l-1.199-.899c-.502-.376-.801-.975-.801-1.601v-1.882zm45.222-41.065h.159c3.707 0 6.724 3.017 6.724 6.725 0 .16-.006.321-.017.479l-.328 4.592c-.538.13-1.09.204-1.655.204-3.859 0-7-3.141-7-7 0-1.887.772-3.686 2.117-5zm5.721-4.121.812.608c.845.634 1.35 1.644 1.35 2.701 0 .809-.31 1.592-.837 2.202-.682-.879-1.527-1.622-2.491-2.187.567-1.043.963-2.161 1.166-3.324zm-8.306 4.121c-.982 1.468-1.532 3.201-1.532 5 0 4.963 4.037 9 9 9 .51 0 1.012-.05 1.507-.133l-.244 3.412c-1.466-1.386-3.726-2.279-6.263-2.279-1.031 0-2.038.147-3 .438-.962-.291-1.969-.438-3-.438-2.537 0-4.797.893-6.263 2.278l-.719-10.073c-.012-.159-.018-.32-.018-.48 0-3.708 3.017-6.725 6.725-6.725zm-10.182-3.513.812-.608c.203 1.163.599 2.281 1.165 3.323-.964.566-1.808 1.309-2.491 2.187-.526-.609-.836-1.393-.836-2.201 0-1.057.505-2.067 1.35-2.701zm-5.35 11.816c0-.654.191-1.288.555-1.832.588-.883 1.56-1.411 2.616-1.454-.111.552-.171 1.123-.171 1.708 0 .207.008.413.022.621l.081 1.137-.551.551c-.623.622-1.452.966-2.334.966h-.218zm-7 6.697c0 2.206-1.794 4-4 4s-4-1.794-4-4c0-.62.146-1.216.415-1.761l6.8-.618c.512.691.785 1.513.785 2.379zm-16.729 10.027c2.078.142 3.729 1.86 3.729 3.973 0 1.933-1.378 3.549-3.203 3.919zm7.729 27.973h-2v-2h-2v2h-2v-1c0-1.654 1.346-3 3-3s3 1.346 3 3zm4-1v1h-2v-1c0-1.129-.39-2.159-1.023-2.997.008 0 .015-.003.023-.003 1.654 0 3 1.346 3 3zm-2.556-7.182-.314 2.195c-.044-.001-.085-.013-.13-.013-.655 0-1.3.129-1.899.375.49-3.462 1.365-6.838 2.617-10.086.091.03.184.05.275.08-.016 2.482-.197 4.987-.549 7.449zm9.556-3.818c-2.117 0-3.92-1.062-4.648-2.552 1.978.355 3.982.552 6.003.552h.289c.915 0 1.827-.037 2.735-.11-.847 1.25-2.481 2.11-4.379 2.11zm20 12h-2v-2h-2v2h-2v-1c0-1.654 1.346-3 3-3s3 1.346 3 3zm4 0h-2v-1c0-1.129-.39-2.159-1.023-2.997.008 0 .015-.003.023-.003 1.654 0 3 1.346 3 3zm-3-6c-.262 0-.522.027-.779.067l.002-.021c.347-3.127.569-6.292.683-9.462.732-.501 1.394-1.074 2.007-1.69-.181 3.557-.693 7.095-1.556 10.551l-.144.576c-.071-.003-.14-.021-.213-.021zm-.028-12c.011-.667.028-1.334.028-2l-2 .021c0 4.598-.257 9.241-.765 13.804l-.037.336c-.386-.095-.783-.161-1.198-.161-.476 0-.927.088-1.364.213-1.081-4.96-1.636-10.045-1.636-15.213l-2 .097c0 1.051.041 2.103.087 3.154l-.323.108c-3.27 1.088-6.674 1.641-10.119 1.641h-.289c-3.36 0-6.679-.535-9.874-1.571.321-.734.654-1.464 1.014-2.183l.399-.799-1.789-.895-.399.799c-2.307 4.614-3.834 9.532-4.571 14.662-.047-.001-.09-.013-.136-.013-.409 0-.8.063-1.181.156l-2.827-11.312-.061-.924c2.867-.449 5.069-2.929 5.069-5.92 0-3.263-2.619-5.92-5.864-5.993l-.044-.663c-.056-.832.018-1.664.221-2.474l.105-.427c.805-3.217 3.523-5.587 6.799-5.986-.132.5-.217 1.014-.217 1.543 0 3.309 2.691 6 6 6s6-2.691 6-6c0-.908-.212-1.779-.595-2.578l4.643-.422h1.17c1.117 0 2.175-.355 3.066-.992l.719 10.063h.002c.051 3.276 3.616 5.929 7.995 5.929 1.031 0 2.038-.147 3-.438.962.291 1.969.438 3 .438.675 0 1.326-.07 1.952-.188-.202 3.166-1.628 6.098-3.98 8.188zm2.028-10c-.928 0-1.829-.146-2.679-.435-.104-.035-.213-.053-.321-.053s-.217.018-.321.053c-.85.289-1.751.435-2.679.435-3.252 0-6-1.832-6-4s2.748-4 6-4c.928 0 1.829.146 2.679.435.209.07.434.07.643 0 .849-.289 1.75-.435 2.678-.435 3.252 0 6 1.832 6 4s-2.748 4-6 4zm12-15h-.218c-.882 0-1.711-.344-2.335-.967l-.55-.55.081-1.139c.014-.206.022-.412.022-.619 0-.585-.06-1.155-.17-1.708 1.055.043 2.027.571 2.616 1.454.363.544.554 1.177.554 1.832z" }),
            React.createElement("path", { d: "m31 33c-.033 0-.066 0-.101.001-.463-2.28-2.484-4.001-4.899-4.001-2.757 0-5 2.243-5 5s2.243 5 5 5c.033 0 .066 0 .101-.001.463 2.28 2.484 4.001 4.899 4.001 2.757 0 5-2.243 5-5s-2.243-5-5-5zm0 8c-1.654 0-3-1.346-3.003-2.938.005-.034.016-.134.017-.168.013-.316-.125-.62-.372-.819-.18-.145-.401-.221-.627-.221-.084 0-.169.011-.252.032-.297.078-.539.114-.763.114-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3.003 2.938c-.005.033-.016.135-.017.169-.013.316.126.621.373.819.247.197.573.267.881.187.294-.077.535-.113.76-.113 1.654 0 3 1.346 3 3s-1.346 3-3 3z" }))));
};

var Icon$9 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 128 128" }, props),
        React.createElement("path", { d: "m120.343 63.193c-.772-15.894-3.735-23.938-9.512-25.7a11.16 11.16 0 0 0 -4.917-5.83c-.019-.011-.039-.018-.058-.028l-.064-.031c-3.418-1.888-7.417-1.827-10.073-1.781-.365.006-.706.012-1.019.012-2.422 0-5.316.293-8.668.632a145.121 145.121 0 0 1 -14.992.958c-1.066 0-2.3-.02-3.672-.043l-1.736-.026c-5.818-.109-15.322-.284-23.206.874-.067-.167-.126-.341-.2-.5a19.615 19.615 0 0 0 4.434-14.358 1.75 1.75 0 0 0 -3.193-.788 39.286 39.286 0 0 1 -9.16 8.883 24.219 24.219 0 0 0 -5.4-.437h-.327a24.18 24.18 0 0 0 -5.4.437 39.286 39.286 0 0 1 -9.16-8.883 1.75 1.75 0 0 0 -3.193.788 19.612 19.612 0 0 0 4.433 14.352c-.091.2-.167.421-.249.633-3.243-.413-7.394.37-9.538 1.941a1.751 1.751 0 0 0 -.382 2.441 12.233 12.233 0 0 0 8.908 5.425c.035.412.057.81.107 1.236 1.649 14.016 5.835 17.764 10.787 18.709 1.846 1.777 3.478 3.443 4.846 4.955a58.6 58.6 0 0 1 3.843 5.153c1.075 7.379 2.3 22.052 1.148 31.378a1.751 1.751 0 0 0 1.737 1.965h5.72a1.751 1.751 0 0 0 1.716-1.4c.106-.526 1.991-9.86 3.238-16.179.477 9.334.417 15.734.416 15.814a1.75 1.75 0 0 0 1.75 1.769h7.08a1.75 1.75 0 0 0 1.725-1.456c.027-.16 2.732-16.081 3.46-25.672a1.753 1.753 0 0 0 -.546-1.408 9.821 9.821 0 0 1 -1.208-1.411c.811.018 1.655.034 2.523.047q1.957.029 3.816.028h.2c.975 0 1.924-.007 2.857-.018.216 0 .426-.007.64-.01q1.222-.018 2.393-.049c.244-.006.488-.012.729-.02.949-.029 1.88-.062 2.772-.1 1.156-.053 2.237-.121 3.283-.2 1.634 2.276 4.231 5.437 7.02 7.039l-1.979 21.317a1.751 1.751 0 0 0 1.743 1.912h7.085a1.75 1.75 0 0 0 1.725-1.456c.025-.143 2.2-12.949 3.174-22.509.447.278.9.546 1.392.786l-1.973 21.267a1.75 1.75 0 0 0 1.742 1.912h7.09a1.75 1.75 0 0 0 1.725-1.456c.166-.98 4.079-24.088 3.591-31.191-.124-1.846-.311-3.509-.492-5.117-.5-4.442-.933-8.278.3-13.8a40.231 40.231 0 0 0 .782-11.663c2.708 3.009 4.345 10.027 4.884 20.964-1.336.712-2.719 2.482-2.719 6.79a14.053 14.053 0 0 0 3.245 8.339 1.748 1.748 0 0 0 2.635 0 14.053 14.053 0 0 0 3.245-8.339c.004-4.517-1.512-6.254-2.903-6.897zm-33.958-29.249c3.257-.329 6.07-.614 8.315-.614.331 0 .693-.006 1.079-.013a25.646 25.646 0 0 1 5.4.321c-4.965 3.661-9.541 8.924-12.748 12.617-1.162 1.339-2.165 2.494-2.753 3.052-1.513 1.428-6.006 2.548-9.892 1.124-3.246-1.189-5.113-3.755-5.548-7.628a31.017 31.017 0 0 0 -1.638-7.903c.884.013 1.7.023 2.441.023a148.108 148.108 0 0 0 15.344-.979zm-42.765 4.681a22.467 22.467 0 0 0 -.258-2.847 13.716 13.716 0 0 1 4.805.522 8.137 8.137 0 0 1 -4.547 2.325zm-.744-15.895a17.007 17.007 0 0 1 -2.7 5.891 10.2 10.2 0 0 0 -2.006-1.631 45.7 45.7 0 0 0 4.706-4.26zm-23.566 4.261a10.183 10.183 0 0 0 -2 1.631 17.013 17.013 0 0 1 -2.7-5.892 45.714 45.714 0 0 0 4.7 4.261zm-5.191 8.788a22.45 22.45 0 0 0 -.258 2.847 8.136 8.136 0 0 1 -4.548-2.326 13.7 13.7 0 0 1 4.806-.521zm3.456 7.212c-.651-5.535.057-9.505 2.105-11.8 2.243-2.511 5.779-2.666 8.338-2.666h.9a19.668 19.668 0 0 1 5.08.453 1.691 1.691 0 0 0 .269.079 7.4 7.4 0 0 1 3.533 2.137c2.048 2.292 2.756 6.261 2.1 11.8-1.871 15.911-6.6 15.916-11.163 15.921a20.366 20.366 0 0 1 -2.639-.118 1.632 1.632 0 0 0 -.184-.027c-3.57-.545-6.854-3.152-8.339-15.779zm27.707 38.316a1.747 1.747 0 0 0 -.623 1.047c-.573 3.116-3.064 15.5-3.911 19.706h-2.348c.68-7.934.015-18.573-.815-26.036a44.585 44.585 0 0 0 8.106 4.88c-.245.262-.409.403-.409.403zm27.466-9.207c-.276.008-.565.013-.846.021q-.954.024-1.944.04-.615.009-1.244.015c-.63.007-1.273.01-1.924.011-.366 0-.725 0-1.1 0-.919 0-1.86-.011-2.814-.024l-1.118-.715c-4.917-3.139-8.165-5.214-9.107-7.942a2.164 2.164 0 0 1 .534-2.2c1.581-2.038 5.4-3.558 8.338-3.312 3.95.327 5.752.476 9.775 10.349.54 1.322 1.084 2.575 1.624 3.749zm18.67 29.961h-3.689l1.914-20.608a1.75 1.75 0 0 0 -1.109-1.793c-1.5-.583-3.43-2.3-5.4-4.746a34.077 34.077 0 0 0 7.771-1.64 16.684 16.684 0 0 0 3.627 5.657c-.648 7.746-2.457 19.124-3.114 23.129zm15.982-33.873c.176 1.569.359 3.192.478 4.962.393 5.718-2.447 23.659-3.308 28.91h-3.69l1.912-20.608a1.749 1.749 0 0 0 -1.1-1.791c-5.557-2.177-7.853-7.592-7.81-8.676a1.751 1.751 0 0 0 -2.807-1.706c-.961.765-4.123 2.1-14.349 2.652-.726-1.487-1.455-3.131-2.185-4.911-4.134-10.147-6.803-12.02-12.727-12.514-4.1-.335-9.1 1.706-11.391 4.655a5.716 5.716 0 0 0 -1.077 5.49c1.017 2.947 3.49 5.076 6.959 7.424a1.729 1.729 0 0 0 -1.127.775 1.75 1.75 0 0 0 -.071 1.737 20.9 20.9 0 0 0 2.905 4.366c-.65 7.746-2.458 19.109-3.115 23.107h-3.847c-.017-3.487-.145-11.8-.9-22 0-.025-.012-.047-.015-.071a1.734 1.734 0 0 0 -.074-.339c-.01-.031-.017-.063-.029-.093a1.685 1.685 0 0 0 -.2-.368c-.021-.03-.047-.056-.07-.084a1.744 1.744 0 0 0 -.214-.224c-.039-.034-.076-.066-.118-.1a1.726 1.726 0 0 0 -.306-.179c-.02-.009-.036-.025-.056-.033a39.076 39.076 0 0 1 -12.32-7.909c-.016-.026-.036-.048-.053-.072a62.155 62.155 0 0 0 -4.376-5.885c-.669-.739-1.406-1.519-2.19-2.324 5.99-.268 11.337-2.684 13.254-18.982.05-.426.072-.825.107-1.236a12.233 12.233 0 0 0 8.91-5.422 1.746 1.746 0 0 0 .119-1.857c4.471-.167 8.812-.109 12.15-.049.822 1.319 1.515 3.233 2.1 8.362.579 5.149 3.357 8.886 7.822 10.523a14.831 14.831 0 0 0 5.09.876c3.5 0 6.721-1.149 8.412-2.745.714-.678 1.718-1.834 2.989-3.3 3.279-3.776 8.647-9.953 13.935-13.3 3.6 2.745 4.523 8.812 2.743 18.027-1.36 6.05-.877 10.355-.36 14.912zm11.291 5.89a8.977 8.977 0 0 1 -1.062-4c0-2.731.651-3.75 1.062-3.75s1.063 1.019 1.063 3.75a8.96 8.96 0 0 1 -1.067 4z" })));
};

var Icon$8 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 -1 512 511" }, props),
        React.createElement("path", { d: "m256 131.46875c13.273438 0 24.066406-10.796875 24.066406-24.066406 0-13.273438-10.796875-24.070313-24.066406-24.070313s-24.066406 10.796875-24.066406 24.070313c0 13.269531 10.796875 24.066406 24.066406 24.066406zm0-33.136719c5 0 9.066406 4.070313 9.066406 9.070313 0 4.996094-4.066406 9.066406-9.066406 9.066406s-9.066406-4.066406-9.066406-9.066406 4.066406-9.070313 9.066406-9.070313zm0 0" }),
        React.createElement("path", { d: "m504.5 461.261719h-9.066406v-25.632813c0-4.140625-3.359375-7.5-7.5-7.5h-25.632813v-25.632812c0-4.140625-3.355469-7.5-7.5-7.5h-9.0625v-164.128906h9.0625c4.144531 0 7.5-3.359376 7.5-7.5v-25.632813h25.632813c4.144531 0 7.5-3.359375 7.5-7.5v-33.132813c0-4.140624-3.355469-7.5-7.5-7.5h-14.222656l-213.441407-147.769531c-2.566406-1.7773435-5.96875-1.7773435-8.539062 0l-213.4375 147.769531h-14.226563c-4.140625 0-7.5 3.355469-7.5 7.5v33.132813c0 4.140625 3.359375 7.5 7.5 7.5h25.632813v25.632813c0 4.140624 3.359375 7.5 7.5 7.5h9.066406v164.128906h-9.066406c-4.140625 0-7.5 3.355468-7.5 7.5v25.632812h-25.632813c-4.140625 0-7.5 3.359375-7.5 7.5v25.632813h-9.066406c-4.144531 0-7.5 3.355469-7.5 7.5v33.128906c0 4.144531 3.355469 7.5 7.5 7.5h497c4.144531 0 7.5-3.355469 7.5-7.5v-33.128906c0-4.140625-3.355469-7.5-7.5-7.5zm-57.199219-33.132813h-67.832031v-18.132812h67.832031zm-51.269531-33.132812v-164.128906h34.703125v164.128906zm51.269531-179.128906h-67.832031v-18.132813h67.832031zm-75.332031 15h9.0625v164.128906h-9.0625c-4.144531 0-7.5 3.355468-7.5 7.5v25.632812h-59.550781v-25.632812c0-4.144532-3.359375-7.5-7.5-7.5h-9.066407v-164.128906h9.066407c4.140625 0 7.5-3.359376 7.5-7.5v-25.632813h59.550781v25.632813c0 4.140624 3.355469 7.5 7.5 7.5zm-149.882812-33.132813h67.832031v18.132813h-67.832031zm16.5625 33.132813h34.703124v164.128906h-34.703124zm51.269531 179.128906v18.132812h-67.832031v-18.132812zm-258.351563-245.394532h9.070313.007812.003907 121.800781c4.144531 0 7.5-3.359374 7.5-7.5 0-4.144531-3.355469-7.5-7.5-7.5h-97.804688l191.355469-132.480468 191.359375 132.480468h-254.910156c-4.140625 0-7.5 3.355469-7.5 7.5 0 4.140626 3.359375 7.5 7.5 7.5h278.816406.023437 9.144532v18.132813h-448.867188zm33.132813 33.132813h67.835937v18.132813h-67.835937zm51.269531 33.132813v164.128906h-34.703125v-164.128906zm-51.269531 179.128906h67.835937v18.132812h-67.835937zm75.335937-15h-9.066406v-164.128906h9.066406c4.140625 0 7.5-3.359376 7.5-7.5v-25.632813h59.550782v25.632813c0 4.140624 3.355468 7.5 7.5 7.5h9.0625v164.128906h-9.0625c-4.144532 0-7.5 3.355468-7.5 7.5v25.632812h-59.550782v-25.632812c0-4.144532-3.359375-7.5-7.5-7.5zm-108.46875 48.132812h448.867188v18.132813h-448.867188zm465.433594 51.265625h-482v-18.132812h482zm0 0" })));
};

var Icon$7 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 512 512" }, props),
        React.createElement("g", null,
            React.createElement("path", { d: "m206.548 176.659h-20.344c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5h12.11c-1.992 9.896-8.237 19.005-21.12 19.005-14.614 0-26.504-11.89-26.504-26.505 0-14.614 11.89-26.504 26.504-26.504 5.312 0 10.435 1.563 14.813 4.522 3.432 2.317 8.094 1.415 10.413-2.016 2.319-3.433 1.417-8.095-2.016-10.414-6.868-4.64-14.894-7.093-23.211-7.093-22.885 0-41.504 18.618-41.504 41.504s18.619 41.505 41.504 41.505c21.699 0 36.854-17.067 36.854-41.505.001-4.142-3.357-7.499-7.499-7.499z" }),
            React.createElement("path", { d: "m336.632 219.654c1.28 3.602 4.696 6.01 8.514 6.01.021 0 .042 0 .062-.001 3.842-.025 7.255-2.487 8.509-6.176l22.205-66.843c1.307-3.931-.822-8.176-4.753-9.481-3.927-1.307-8.176.821-9.481 4.753l-16.665 50.166-17.49-50.386c-1.358-3.914-5.635-5.99-9.544-4.626-3.913 1.358-5.984 5.631-4.626 9.544z" }),
            React.createElement("path", { d: "m266.342 142.655c-22.886 0-41.504 18.618-41.504 41.504s18.619 41.505 41.504 41.505 41.504-18.619 41.504-41.505-18.618-41.504-41.504-41.504zm0 68.009c-14.615 0-26.504-11.89-26.504-26.505 0-14.614 11.89-26.504 26.504-26.504s26.504 11.89 26.504 26.504c0 14.615-11.89 26.505-26.504 26.505z" }),
            React.createElement("path", { d: "m497.9 191.658c7.774 0 14.1-6.325 14.1-14.101v-20.8c0-7.774-6.325-14.1-14.1-14.1h-9.721v-18.65c0-14.304-8.54-27.088-21.759-32.568l-199.181-82.531c-7.146-2.959-15.343-2.96-22.49.001l-199.182 82.531c-13.217 5.48-21.757 18.264-21.757 32.568v18.65h-9.71c-7.775 0-14.1 6.325-14.1 14.1v20.8c0 7.775 6.325 14.101 14.1 14.101h9.71v29.529c0 4.143 3.358 7.5 7.5 7.5h38.231v204.426h-30.728v-176.903c0-4.143-3.358-7.5-7.5-7.5s-7.5 3.357-7.5 7.5v205.502h-9.708c-7.777 0-14.105 6.327-14.105 14.104v15.39c0 7.777 6.328 14.104 14.105 14.104h483.791c7.777 0 14.104-6.327 14.104-14.104v-15.39c0-7.777-6.327-14.104-14.104-14.104h-9.715l-.001-270.055zm-.9-15h-84.38v-19h84.38zm-23.819 52.029v204.426h-30.728v-204.426zm-45.728 204.426h-73.823v-174.926h39.057c10.991 0 19.934-8.942 19.934-19.934v-9.566h14.833v204.426zm-171.453-88.733c-4.142 0-7.5 3.357-7.5 7.5v81.233h-29.41v-84.273c.01-3.764 1.677-7.296 4.579-9.696l25.513-21.09c3.948-3.264 9.677-3.262 13.625.006l25.465 21.081c2.907 2.406 4.574 5.951 4.574 9.726v84.246h-29.346v-81.233c0-4.143-3.357-7.5-7.5-7.5zm-51.91-86.193-.002 174.926h-30.728v-174.926zm88.82 0v65.322l-20.538-17.003c-9.483-7.851-23.256-7.858-32.747-.012l-20.536 16.975v-65.282zm15 174.926v-174.926h30.72v174.926zm-269.1-309.105c0-8.218 4.908-15.562 12.501-18.711l199.179-82.53c3.499-1.449 7.513-1.448 11.009-.001l199.178 82.529c7.596 3.149 12.503 10.494 12.503 18.712v18.65h-60.56v-12.593c0-10.991-8.942-19.934-19.934-19.934h-54.713c-4.143 0-7.5 3.357-7.5 7.5s3.357 7.5 7.5 7.5h54.713c2.721 0 4.934 2.213 4.934 4.934v108.188c0 2.721-2.213 4.934-4.934 4.934h-273.378c-2.72 0-4.934-2.213-4.934-4.934v-108.187c0-2.721 2.213-4.934 4.934-4.934h183.612c4.143 0 7.5-3.357 7.5-7.5s-3.357-7.5-7.5-7.5h-183.612c-10.991 0-19.934 8.942-19.934 19.934v12.593h-60.564zm-23.81 33.65h84.374v19h-84.374zm84.374 34v22.029l-60.564-.003v-22.026zm-14.833 37.029h14.833v9.566c0 10.991 8.942 19.934 19.934 19.934h39.052v174.926h-73.819zm323.866 233.026c-4.143 0-7.5 3.357-7.5 7.5s3.357 7.5 7.5 7.5h88.593v13.599h-482v-13.599h358.271c4.143 0 7.5-3.357 7.5-7.5s-3.357-7.5-7.5-7.5h-334.458v-13.6h434.367v13.6zm64.773-248.029-60.56.003v-22.029h60.56z" }),
            React.createElement("path", { d: "m243.894 89.933c1.919 0 3.839-.732 5.303-2.196l24.207-24.206c2.929-2.93 2.929-7.678 0-10.607-2.93-2.927-7.678-2.929-10.607 0l-24.206 24.206c-2.929 2.93-2.929 7.678 0 10.607 1.464 1.464 3.384 2.196 5.303 2.196z" }),
            React.createElement("path", { d: "m390.87 274.393c-4.143 0-7.5 3.357-7.5 7.5v18.401c0 4.143 3.357 7.5 7.5 7.5s7.5-3.357 7.5-7.5v-18.401c0-4.142-3.357-7.5-7.5-7.5z" }),
            React.createElement("path", { d: "m390.87 325.978c-4.143 0-7.5 3.357-7.5 7.5v18.401c0 4.143 3.357 7.5 7.5 7.5s7.5-3.357 7.5-7.5v-18.401c0-4.142-3.357-7.5-7.5-7.5z" }),
            React.createElement("path", { d: "m390.87 377.563c-4.143 0-7.5 3.357-7.5 7.5v18.402c0 4.143 3.357 7.5 7.5 7.5s7.5-3.357 7.5-7.5v-18.402c0-4.142-3.357-7.5-7.5-7.5z" }),
            React.createElement("path", { d: "m122.403 274.393c-4.142 0-7.5 3.357-7.5 7.5v18.401c0 4.143 3.358 7.5 7.5 7.5s7.5-3.357 7.5-7.5v-18.401c0-4.142-3.358-7.5-7.5-7.5z" }),
            React.createElement("path", { d: "m122.403 325.978c-4.142 0-7.5 3.357-7.5 7.5v18.401c0 4.143 3.358 7.5 7.5 7.5s7.5-3.357 7.5-7.5v-18.401c0-4.142-3.358-7.5-7.5-7.5z" }),
            React.createElement("path", { d: "m122.403 377.563c-4.142 0-7.5 3.357-7.5 7.5v18.402c0 4.143 3.358 7.5 7.5 7.5s7.5-3.357 7.5-7.5v-18.402c0-4.142-3.358-7.5-7.5-7.5z" }))));
};

var Icon$6 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 512 512" }, props),
        React.createElement("g", null,
            React.createElement("path", { d: "m504.5 497h-7.5v-200h7.5c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5h-122.393v-22.356l5.106 1.72c3.826 1.294 8.165-.744 9.502-4.714 1.322-3.925-.789-8.179-4.714-9.501l-31.001-10.442v-52.189h7.5c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5h-7.778c-3.758-51.134-45.614-91.841-97.222-93.788v-10.73h60.5c9.649 0 17.5-7.851 17.5-17.5v-30c0-9.649-7.851-17.5-17.5-17.5h-68c-4.142 0-7.5 3.357-7.5 7.5v68.232c-21.777.839-42.895 8.726-59.845 22.438-3.22 2.605-3.719 7.328-1.114 10.548 2.606 3.221 7.329 3.72 10.548 1.114 15.291-12.371 34.568-19.184 54.279-19.184h7.263c45.095 0 82.206 34.746 86.022 78.869h-179.32c1.292-15.054 6.456-29.397 15.152-41.859 2.37-3.397 1.538-8.072-1.859-10.442-3.397-2.368-8.071-1.539-10.443 1.858-10.462 14.994-16.581 32.3-17.905 50.443h-7.778c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5h7.5v52.189l-31.001 10.442c-3.925 1.322-6.036 5.576-4.714 9.501 1.323 3.926 5.577 6.035 9.502 4.714l5.106-1.72v22.357h-122.393c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5h7.5v200h-7.5c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5h497c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5zm-241-482h60.5c1.378 0 2.5 1.121 2.5 2.5v30c0 1.379-1.122 2.5-2.5 2.5h-60.5zm-97.5 169.518h180v47.137l-74.838-25.207c-9.777-3.294-20.545-3.293-30.323 0l-74.839 25.207zm-21.107 70.073 100.734-33.928c6.69-2.252 14.059-2.251 20.747 0l100.734 33.928v27.409h-222.215zm-47.173 242.409h-37.72v-30h37.72zm0-45h-37.72v-25.226c0-10.399 8.46-18.859 18.86-18.859s18.86 8.46 18.86 18.859zm30 45h-15v-70.226c0-18.67-15.189-33.859-33.86-33.859s-33.86 15.189-33.86 33.859v70.226h-15v-118.107h97.72zm0-133.107h-97.72v-66.893h73.197v15.5c0 12.406 10.093 22.5 22.5 22.5h2.022v28.893zm46.56 133.107h-31.56v-162h31.561v162zm48.767 0h-33.767v-162h33.767zm46.56 0h-31.56v-162h31.56zm53.113 0h-38.112v-162h2.001c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5h-160.912c-4.136 0-7.5-3.364-7.5-7.5v-15.5h275.605v15.5c0 4.136-3.364 7.5-7.5 7.5h-69.694c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5h6.111v162zm46.56 0h-31.56v-162h31.561v162zm82.72 0h-37.72v-30h37.72zm0-45h-37.72v-25.226c0-10.399 8.46-18.859 18.86-18.859s18.86 8.46 18.86 18.859zm30 45h-15v-70.226c0-18.67-15.189-33.859-33.86-33.859s-33.86 15.189-33.86 33.859v70.226h-15v-118.107h97.72zm0-133.107h-97.72v-28.893h2.022c12.407 0 22.5-10.094 22.5-22.5v-15.5h73.198z" }))));
};

var IconModule = /*#__PURE__*/Object.freeze({
    __proto__: null,
    FarmIcon: Icon$I,
    GroupsIcon: Icon$H,
    HamburgerIcon: Icon$G,
    HamburgerCloseIcon: Icon$F,
    HomeIcon: Icon$E,
    IfoIcon: Icon$D,
    InfoIcon: Icon$C,
    LanguageIcon: Icon$B,
    LogoIcon: Logo$1,
    MoonIcon: Icon$A,
    MoreIcon: Icon$z,
    NftIcon: Icon$y,
    PoolIcon: Icon$x,
    SunIcon: Icon$w,
    TelegramIcon: Icon$v,
    TicketIcon: Icon$u,
    TradeIcon: Icon$t,
    TwitterIcon: Icon$s,
    RedditIcon: Icon$r,
    AuditIcon: Icon$q,
    GooseIcon: Icon$p,
    HandshakeIcon: Icon$o,
    LayerIcon: Icon$n,
    RoadmapIcon: Icon$m,
    BondsIcon: Icon$l,
    VaultsIcon: Icon$k,
    EggHouseIcon: Icon$j,
    BenIcon: Icon$K,
    ListingIcon: Icon$i,
    IboIcon: Icon$J,
    TownIcon: Icon$h,
    TutorialIcon1: Icon$g,
    TutorialIcon2: Icon$f,
    TutorialIcon3: Icon$e,
    TutorialIcon4: Icon$d,
    ToyIcon: Icon$c,
    ToyIcon2: Icon$b,
    CattleIcon1: Icon$a,
    CattleIcon2: Icon$9,
    GovernmentIcon1: Icon$8,
    GovernmentIcon2: Icon$7,
    GovernmentIcon3: Icon$6
});

var MenuButton = styled(Button)(templateObject_1$d || (templateObject_1$d = __makeTemplateObject(["\n  color: ", ";\n  padding: 0 8px;\n  border-radius: 8px;\n"], ["\n  color: ", ";\n  padding: 0 8px;\n  border-radius: 8px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
});
MenuButton.defaultProps = {
    variant: "text",
    size: "sm",
};
var templateObject_1$d;

var StyledLink = styled(Link$1)(templateObject_1$c || (templateObject_1$c = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  .mobile-icon {\n    width: 32px;\n    ", " {\n      display: none;\n    }\n  }\n  .desktop-icon {\n    width: 170px;\n    display: none;\n    ", " {\n      display: block;\n    }\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  .mobile-icon {\n    width: 32px;\n    ", " {\n      display: none;\n    }\n  }\n  .desktop-icon {\n    width: 170px;\n    display: none;\n    ", " {\n      display: block;\n    }\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
});
var Logo = function (_a) {
    var isPushed = _a.isPushed, togglePush = _a.togglePush, isDark = _a.isDark, href = _a.href;
    var isAbsoluteUrl = href.startsWith("http");
    var innerLogo = (React.createElement(React.Fragment, null,
        React.createElement(Icon$16, { className: "mobile-icon" }),
        React.createElement(Logo$1, { className: "desktop-icon", isDark: isDark })));
    return (React.createElement(Flex, null,
        React.createElement(MenuButton, { "aria-label": "Toggle menu", onClick: togglePush, mr: "24px" }, isPushed ? (React.createElement(Icon$F, { width: "24px", color: "textSubtle" })) : (React.createElement(Icon$G, { width: "24px", color: "textSubtle" }))),
        isAbsoluteUrl ? (React.createElement(StyledLink, { as: "a", href: href, "aria-label": "Pancake home page" }, innerLogo)) : (React.createElement(StyledLink, { to: href, "aria-label": "Pancake home page" }, innerLogo))));
};
var templateObject_1$c;

var links = [
    {
        label: "Home",
        icon: "HomeIcon",
        href: "/",
    },
    {
        label: "Trade",
        icon: "TradeIcon",
        items: [
            {
                label: "Exchange",
                href: "https://exchange.benswap.finance",
            },
            {
                label: "Liquidity",
                href: "https://exchange.benswap.finance/#/pool",
            },
        ],
    },
    {
        label: "Farms",
        icon: "FarmIcon",
        href: "/farms",
    },
    {
        label: "Pools",
        icon: "PoolIcon",
        href: "/pools",
    },
    {
        label: "Lottery",
        icon: "TicketIcon",
        href: "/lottery",
    },
    {
        label: "NFT",
        icon: "NftIcon",
        href: "/nft",
    },
    {
        label: "Profile & Teams",
        icon: "GroupsIcon",
        items: [
            {
                label: "Leaderboard",
                href: "/",
            },
            {
                label: "YourProfile",
                href: "/",
            },
        ],
        calloutClass: "rainbow",
    },
    {
        label: "Info",
        icon: "InfoIcon",
        items: [
            {
                label: "Overview",
                href: "https://pancakeswap.info",
            },
            {
                label: "Tokens",
                href: "https://pancakeswap.info/tokens",
            },
            {
                label: "Pairs",
                href: "https://pancakeswap.info/pairs",
            },
            {
                label: "Accounts",
                href: "https://pancakeswap.info/accounts",
            },
        ],
    },
    {
        label: "IFO",
        icon: "IfoIcon",
        items: [
            {
                label: "Next",
                href: "/ifo",
            },
            {
                label: "History",
                href: "/ifo/history",
            },
        ],
    },
    {
        label: "More",
        icon: "MoreIcon",
        items: [
            // {
            //   label: "Voting",
            //   href: "https://voting.pancakeswap.finance",
            // },
            {
                label: "Github",
                href: "https://github.com/BenTokenFinance",
            },
            {
                label: "Docs",
                href: "https://docs.benswap.finance/",
            },
            // {
            //   label: "Blog",
            //   href: "https://goosefinance.medium.com/",
            // },
        ],
    },
];
var socials = [
    {
        label: "Telegram",
        icon: "TelegramIcon",
        items: [
            {
                label: "English",
                href: "https://t.me/bentokenfinance",
            },
            // {
            //   label: "Bahasa Indonesia",
            //   href: "https://t.me/BenTokenFinanceIndonesia",
            // },
            // // {
            // //   label: "Tiếng Việt",
            // //   href: "https://t.me/PancakeSwapVN",
            // // },
            // {
            //   label: "Italiano",
            //   href: "https://t.me/BenTokenFinanceItalian",
            // },
            // {
            //   label: "русский",
            //   href: "https://t.me/BenTokenFinanceRussia",
            // },
            // {
            //   label: "Türkiye",
            //   href: "https://t.me/BenTokenFinanceTurkey",
            // },
            // {
            //   label: "Português",
            //   href: "https://t.me/PancakeSwapPortuguese",
            // },
            // {
            //   label: "Español",
            //   href: "https://t.me/BenTokenFinanceEspanol",
            // },
            // {
            //   label: "日本語",
            //   href: "https://t.me/goosefinancejapanese",
            // },
            // {
            //   label: "Français",
            //   href: "https://t.me/goosefinancefrench",
            // },
            // {
            //   label: "Announcements",
            //   href: "https://t.me/goosefinanceann",
            // },
            // {
            //   label: "Price Bot",
            //   href: "https://t.me/BinanceRocketEGG",
            // },
            // {
            //   label: "Polskie",
            //   href: "https://t.me/BenTokenFinancePolish",
            // },
            // {
            //   label: "Deutsche",
            //   href: "https://t.me/BenTokenFinanceGerman",
            // },
            {
                label: "中文",
                href: "https://t.me/bentokenchinese",
            },
        ],
    },
    {
        label: "Twitter",
        icon: "TwitterIcon",
        href: "https://twitter.com/BenTokenFinanc1",
    }
];
var MENU_HEIGHT = 64;
var MENU_ENTRY_HEIGHT = 48;
var SIDEBAR_WIDTH_FULL = 240;
var SIDEBAR_WIDTH_REDUCED = 56;

var rainbowAnimation = keyframes(templateObject_1$b || (templateObject_1$b = __makeTemplateObject(["\n  0%,\n  100% {\n    background-position: 0 0;\n  }\n  50% {\n    background-position: 100% 0;\n  }\n"], ["\n  0%,\n  100% {\n    background-position: 0 0;\n  }\n  50% {\n    background-position: 100% 0;\n  }\n"])));
var LinkLabel = styled.div(templateObject_2$5 || (templateObject_2$5 = __makeTemplateObject(["\n  color: ", ";\n  transition: color 0.4s;\n  flex-grow: 1;\n"], ["\n  color: ", ";\n  transition: color 0.4s;\n  flex-grow: 1;\n"])), function (_a) {
    var isPushed = _a.isPushed, theme = _a.theme;
    return (isPushed ? theme.colors.textSubtle : "transparent");
});
var MenuEntry = styled.div(templateObject_3$2 || (templateObject_3$2 = __makeTemplateObject(["\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  height: ", "px;\n  padding: ", ";\n  font-size: ", ";\n  background-color: ", ";\n  color: ", ";\n  box-shadow: ", ";\n\n  a {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n  }\n\n  svg {\n    fill: ", ";\n  }\n\n  span {\n    font-family: 'Verdana',sans-serif;\n  }\n\n  &:hover {\n    background-color: ", ";\n  }\n\n  // Safari fix\n  flex-shrink: 0;\n\n  &.rainbow {\n    -webkit-background-clip: text;\n    animation: ", " 3s ease-in-out infinite;\n    background: ", ";\n    background-size: 200% 100%;\n    font-weight: bold;\n  }\n"], ["\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  height: ", "px;\n  padding: ", ";\n  font-size: ", ";\n  background-color: ", ";\n  color: ", ";\n  box-shadow: ", ";\n\n  a {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n  }\n\n  svg {\n    fill: ", ";\n  }\n\n  span {\n    font-family: 'Verdana',sans-serif;\n  }\n\n  &:hover {\n    background-color: ", ";\n  }\n\n  // Safari fix\n  flex-shrink: 0;\n\n  &.rainbow {\n    -webkit-background-clip: text;\n    animation: ", " 3s ease-in-out infinite;\n    background: ", ";\n    background-size: 200% 100%;\n    font-weight: bold;\n  }\n"])), MENU_ENTRY_HEIGHT, function (_a) {
    var secondary = _a.secondary;
    return (secondary ? "0 32px" : "0 16px");
}, function (_a) {
    var secondary = _a.secondary;
    return (secondary ? "14px" : "16px");
}, function (_a) {
    var secondary = _a.secondary, theme = _a.theme;
    return (secondary ? theme.colors.background : "transparent");
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
}, function (_a) {
    var isActive = _a.isActive, theme = _a.theme;
    return (isActive ? "inset 4px 0px 0px " + theme.colors.primary : "none");
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.tertiary;
}, rainbowAnimation, function (_a) {
    var theme = _a.theme;
    return theme.colors.gradients.bubblegum;
});
MenuEntry.defaultProps = {
    secondary: false,
    isActive: false,
    role: "button",
};
var templateObject_1$b, templateObject_2$5, templateObject_3$2;

var Container$2 = styled.div(templateObject_1$a || (templateObject_1$a = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  // Safari fix\n  flex-shrink: 0;\n"], ["\n  display: flex;\n  flex-direction: column;\n  // Safari fix\n  flex-shrink: 0;\n"])));
var AccordionContent = styled.div(templateObject_2$4 || (templateObject_2$4 = __makeTemplateObject(["\n  max-height: ", ";\n  transition: max-height 0.3s ease-out;\n  overflow: hidden;\n  border-color: ", ";\n  border-style: solid;\n  border-width: 1px;\n"], ["\n  max-height: ", ";\n  transition: max-height 0.3s ease-out;\n  overflow: hidden;\n  border-color: ", ";\n  border-style: solid;\n  border-width: 1px;\n"])), function (_a) {
    var isOpen = _a.isOpen, maxHeight = _a.maxHeight;
    return (isOpen ? maxHeight + "px" : 0);
}, function (_a) {
    var isOpen = _a.isOpen, isPushed = _a.isPushed;
    return (isOpen && isPushed ? "rgba(133, 133, 133, 0.1)" : "transparent");
});
var Accordion = function (_a) {
    var label = _a.label, icon = _a.icon, isPushed = _a.isPushed, pushNav = _a.pushNav, _b = _a.initialOpenState, initialOpenState = _b === void 0 ? false : _b, children = _a.children, className = _a.className;
    useEffect(function () {
        if (initialOpenState) {
            setIsOpen(!!initialOpenState);
        }
    }, [initialOpenState]);
    var _c = useState(!!initialOpenState), isOpen = _c[0], setIsOpen = _c[1];
    var handleClick = function () {
        if (isPushed) {
            setIsOpen(function (prevState) { return !prevState; });
        }
        else {
            pushNav(true);
            setIsOpen(true);
        }
    };
    return (React.createElement(Container$2, null,
        React.createElement(MenuEntry, { onClick: handleClick, className: className },
            icon,
            React.createElement(LinkLabel, { isPushed: isPushed },
                React.createElement("span", null, label)),
            isOpen ? React.createElement(Icon$1o, null) : React.createElement(Icon$1p, null)),
        React.createElement(AccordionContent, { isOpen: isOpen, isPushed: isPushed, maxHeight: React.Children.count(children) * MENU_ENTRY_HEIGHT }, children)));
};
var templateObject_1$a, templateObject_2$4;

var MenuLink = function (_a) {
    var href = _a.href, otherProps = __rest(_a, ["href"]);
    var isHttpLink = href === null || href === void 0 ? void 0 : href.startsWith("http");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var Tag = isHttpLink ? "a" : NavLink;
    var props = isHttpLink ? { href: href } : { to: href };
    return React.createElement(Tag, __assign({}, props, otherProps));
};

var Icons$1 = IconModule;
var Container$1 = styled.div(templateObject_1$9 || (templateObject_1$9 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n  overflow-x: hidden;\n  height: 100%;\n"], ["\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n  overflow-x: hidden;\n  height: 100%;\n"])));
var PanelBody = function (_a) {
    var isPushed = _a.isPushed, pushNav = _a.pushNav, isMobile = _a.isMobile, links = _a.links;
    var location = useLocation();
    // Close the menu when a user clicks a link on mobile
    var handleClick = isMobile ? function () { return pushNav(false); } : undefined;
    var checkChildren = function (children) {
        if (children) {
            var pathname_1 = location.pathname;
            var res = children.find(function (t) { var _a; return ((_a = matchPath(pathname_1, { path: t })) === null || _a === void 0 ? void 0 : _a.isExact) === true; });
            return res ? true : false;
        }
        return false;
    };
    return (React.createElement(Container$1, null, links.map(function (entry) {
        var Icon = Icons$1[entry.icon];
        var iconElement = React.createElement(Icon, { width: "24px", mr: "14px" });
        var calloutClass = entry.calloutClass ? entry.calloutClass : undefined;
        if (entry.items) {
            return (React.createElement(Accordion, { key: entry.label, isPushed: isPushed, pushNav: pushNav, icon: iconElement, label: entry.label, initialOpenState: (entry.items.findIndex(function (t) { return t.isActive || t.href === location.pathname || checkChildren(t.children); })) + 1, className: calloutClass }, isPushed &&
                entry.items.map(function (item) { return (React.createElement(MenuEntry, { key: item.href, secondary: true, isActive: item.isActive || item.href === location.pathname || checkChildren(item.children), onClick: handleClick },
                    React.createElement(MenuLink, { href: item.href },
                        React.createElement("span", null, item.label)))); })));
        }
        return (React.createElement(MenuEntry, { key: entry.label, isActive: entry.isActive || entry.href === location.pathname, className: calloutClass },
            React.createElement(MenuLink, { href: entry.href, onClick: handleClick },
                iconElement,
                React.createElement(LinkLabel, { isPushed: isPushed },
                    React.createElement("span", null, entry.label)))));
    })));
};
var templateObject_1$9;

var Icons = IconModule;
var MoonIcon = Icons.MoonIcon, SunIcon = Icons.SunIcon, LanguageIcon = Icons.LanguageIcon;
var Container = styled.div(templateObject_1$8 || (templateObject_1$8 = __makeTemplateObject(["\n  flex: none;\n  padding: 8px 4px;\n  background-color: ", ";\n  border-top: solid 2px rgba(133, 133, 133, 0.1);\n"], ["\n  flex: none;\n  padding: 8px 4px;\n  background-color: ", ";\n  border-top: solid 2px rgba(133, 133, 133, 0.1);\n"])), function (_a) {
    var theme = _a.theme;
    return theme.nav.background;
});
var PriceLink = styled.a(templateObject_2$3 || (templateObject_2$3 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  svg {\n    transition: transform 0.3s;\n  }\n  :hover {\n    svg {\n      transform: scale(1.2);\n    }\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  svg {\n    transition: transform 0.3s;\n  }\n  :hover {\n    svg {\n      transform: scale(1.2);\n    }\n  }\n"])));
// const SettingsEntry = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   height: ${MENU_ENTRY_HEIGHT}px;
//   padding: 0 8px;
// `;
var SettingsEntry = styled.div(templateObject_3$1 || (templateObject_3$1 = __makeTemplateObject(["\n  display: block;\n  text-align: center;\n  justify-content: space-between;\n  height: ", "px;\n  padding: 0 8px;\n"], ["\n  display: block;\n  text-align: center;\n  justify-content: space-between;\n  height: ", "px;\n  padding: 0 8px;\n"])), MENU_ENTRY_HEIGHT);
var SocialEntry = styled.div(templateObject_4$1 || (templateObject_4$1 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: ", "px;\n  padding: 0 16px;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: ", "px;\n  padding: 0 16px;\n"])), MENU_ENTRY_HEIGHT);
var PanelFooter = function (_a) {
    var isPushed = _a.isPushed, pushNav = _a.pushNav, toggleTheme = _a.toggleTheme, isDark = _a.isDark, cakePriceUsd = _a.cakePriceUsd, currentLang = _a.currentLang, langs = _a.langs, setLang = _a.setLang, priceLink = _a.priceLink;
    if (!isPushed) {
        return (React.createElement(Container, null,
            React.createElement(IconButton, { variant: "text", onClick: function () { return pushNav(true); } },
                React.createElement(Icon$1b, null))));
    }
    return (React.createElement(Container, null,
        React.createElement(SocialEntry, null,
            cakePriceUsd ? (React.createElement(PriceLink, { href: priceLink, target: "_blank" },
                React.createElement(Icon$11, { width: "24px", mr: "8px" }),
                React.createElement(Text, { color: "textSubtle", bold: true }, "$" + cakePriceUsd.toFixed(3)))) : (React.createElement(Skeleton, { width: 80, height: 24 })),
            React.createElement(Flex, null, socials.map(function (social, index) {
                var Icon = Icons[social.icon];
                var iconProps = { width: "24px", color: "textSubtle", style: { cursor: "pointer" } };
                var mr = index < socials.length - 1 ? "8px" : 0;
                if (social.items) {
                    return (React.createElement(Dropdown, { key: social.label, position: "top", target: React.createElement(Icon, __assign({}, iconProps, { mr: mr })) }, social.items.map(function (item) { return (React.createElement(Link, { external: true, key: item.label, href: item.href, "aria-label": item.label, color: "textSubtle" }, item.label)); })));
                }
                return (React.createElement(Link, { external: true, key: social.label, href: social.href, "aria-label": social.label, mr: mr },
                    React.createElement(Icon, __assign({}, iconProps))));
            }))),
        React.createElement(SettingsEntry, null,
            React.createElement(Button, { variant: "text", style: { float: "left", width: '50%' }, onClick: function () { return toggleTheme(!isDark); } },
                React.createElement(Flex, { alignItems: "center" },
                    React.createElement(SunIcon, { color: isDark ? "textDisabled" : "text", width: "24px" }),
                    React.createElement(Text, { color: "textDisabled", mx: "4px" }, "/"),
                    React.createElement(MoonIcon, { color: isDark ? "text" : "textDisabled", width: "24px" }))),
            React.createElement("div", { style: { float: "right", width: '50%' } },
                React.createElement(Dropdown, { position: "top-right", target: React.createElement(Button, { variant: "text", startIcon: React.createElement(LanguageIcon, { color: "textSubtle", width: "24px" }) },
                        React.createElement(Text, { color: "textSubtle" }, currentLang === null || currentLang === void 0 ? void 0 : currentLang.toUpperCase())) }, langs.map(function (lang) { return (React.createElement(MenuButton, { key: lang.code, fullWidth: true, onClick: function () { return setLang(lang); }, 
                    // Safari fix
                    style: { minHeight: "32px", height: "auto" } }, lang.language)); }))))));
};
var templateObject_1$8, templateObject_2$3, templateObject_3$1, templateObject_4$1;

var StyledPanel = styled.div(templateObject_1$7 || (templateObject_1$7 = __makeTemplateObject(["\n  position: fixed;\n  padding-top: ", ";\n  top: 0;\n  left: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  flex-shrink: 0;\n  background-color: ", ";\n  width: ", ";\n  height: 100vh;\n  transition: padding-top 0.2s, width 0.2s;\n  border-right: ", ";\n  z-index: 11;\n  overflow: ", ";\n  transform: translate3d(0, 0, 0);\n\n  ", " {\n    border-right: 2px solid rgba(133, 133, 133, 0.1);\n    width: ", ";\n  }\n"], ["\n  position: fixed;\n  padding-top: ", ";\n  top: 0;\n  left: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  flex-shrink: 0;\n  background-color: ", ";\n  width: ", ";\n  height: 100vh;\n  transition: padding-top 0.2s, width 0.2s;\n  border-right: ", ";\n  z-index: 11;\n  overflow: ", ";\n  transform: translate3d(0, 0, 0);\n\n  ", " {\n    border-right: 2px solid rgba(133, 133, 133, 0.1);\n    width: ", ";\n  }\n"])), function (_a) {
    var showMenu = _a.showMenu;
    return (showMenu ? "80px" : 0);
}, function (_a) {
    var theme = _a.theme;
    return theme.nav.background;
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? SIDEBAR_WIDTH_FULL + "px" : 0);
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? "2px solid rgba(133, 133, 133, 0.1)" : 0);
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? "initial" : "hidden");
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED) + "px";
});
var Panel = function (props) {
    var isPushed = props.isPushed, showMenu = props.showMenu;
    return (React.createElement(StyledPanel, { isPushed: isPushed, showMenu: showMenu },
        React.createElement(PanelBody, __assign({}, props)),
        React.createElement(PanelFooter, __assign({}, props))));
};
var templateObject_1$7;

var Icon$5 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React.createElement("circle", { cx: "48", cy: "48", r: "48", fill: "white" }),
        React.createElement("path", { d: "M77.7602 16.9155L51.9419 36.0497L56.7382 24.7733L77.7602 16.9155Z", fill: "#E17726" }),
        React.createElement("path", { d: "M18.2656 16.9155L43.8288 36.2283L39.2622 24.7733L18.2656 16.9155Z", fill: "#E27625" }),
        React.createElement("path", { d: "M68.4736 61.2808L61.6108 71.7918L76.3059 75.8482L80.4899 61.5104L68.4736 61.2808Z", fill: "#E27625" }),
        React.createElement("path", { d: "M15.5356 61.5104L19.6941 75.8482L34.3892 71.7918L27.5519 61.2808L15.5356 61.5104Z", fill: "#E27625" }),
        React.createElement("path", { d: "M33.5984 43.5251L29.491 49.699L44.0584 50.3624L43.5482 34.6724L33.5984 43.5251Z", fill: "#E27625" }),
        React.createElement("path", { d: "M62.4274 43.525L52.2991 34.4937L51.9419 50.3622L66.5094 49.6989L62.4274 43.525Z", fill: "#E27625" }),
        React.createElement("path", { d: "M34.3892 71.7922L43.1654 67.5316L35.6137 61.6128L34.3892 71.7922Z", fill: "#E27625" }),
        React.createElement("path", { d: "M52.8345 67.5316L61.6107 71.7922L60.3861 61.6128L52.8345 67.5316Z", fill: "#E27625" }),
        React.createElement("path", { d: "M61.6107 71.7923L52.8345 67.5317L53.5233 73.2465L53.4468 75.6446L61.6107 71.7923Z", fill: "#D5BFB2" }),
        React.createElement("path", { d: "M34.3892 71.7923L42.5531 75.6446L42.502 73.2465L43.1654 67.5317L34.3892 71.7923Z", fill: "#D5BFB2" }),
        React.createElement("path", { d: "M42.7062 57.8369L35.4097 55.6939L40.5631 53.3213L42.7062 57.8369Z", fill: "#233447" }),
        React.createElement("path", { d: "M53.2937 57.8369L55.4367 53.3213L60.6412 55.6939L53.2937 57.8369Z", fill: "#233447" }),
        React.createElement("path", { d: "M34.3893 71.7918L35.6649 61.2808L27.552 61.5104L34.3893 71.7918Z", fill: "#CC6228" }),
        React.createElement("path", { d: "M60.3352 61.2808L61.6108 71.7918L68.4736 61.5104L60.3352 61.2808Z", fill: "#CC6228" }),
        React.createElement("path", { d: "M66.5094 49.6987L51.9419 50.362L53.294 57.8371L55.4371 53.3215L60.6416 55.6941L66.5094 49.6987Z", fill: "#CC6228" }),
        React.createElement("path", { d: "M35.4098 55.6941L40.5633 53.3215L42.7063 57.8371L44.0584 50.362L29.491 49.6987L35.4098 55.6941Z", fill: "#CC6228" }),
        React.createElement("path", { d: "M29.491 49.6987L35.6139 61.6129L35.4098 55.6941L29.491 49.6987Z", fill: "#E27525" }),
        React.createElement("path", { d: "M60.6414 55.6941L60.3862 61.6129L66.5092 49.6987L60.6414 55.6941Z", fill: "#E27525" }),
        React.createElement("path", { d: "M44.0584 50.3618L42.7063 57.8369L44.4156 66.6641L44.7728 55.0305L44.0584 50.3618Z", fill: "#E27525" }),
        React.createElement("path", { d: "M51.9415 50.3618L51.2527 55.005L51.5843 66.6641L53.2937 57.8369L51.9415 50.3618Z", fill: "#E27525" }),
        React.createElement("path", { d: "M53.2938 57.8374L51.5845 66.6646L52.8346 67.532L60.3862 61.6132L60.6413 55.6943L53.2938 57.8374Z", fill: "#F5841F" }),
        React.createElement("path", { d: "M35.4097 55.6943L35.6138 61.6132L43.1654 67.532L44.4155 66.6646L42.7062 57.8374L35.4097 55.6943Z", fill: "#F5841F" }),
        React.createElement("path", { d: "M53.4468 75.6443L53.5233 73.2462L52.8855 72.6849H43.1143L42.502 73.2462L42.5531 75.6443L34.3892 71.792L37.2465 74.1391L43.0378 78.1445H52.962L58.7533 74.1391L61.6107 71.792L53.4468 75.6443Z", fill: "#C0AC9D" }),
        React.createElement("path", { d: "M52.8346 67.5315L51.5845 66.6641H44.4156L43.1655 67.5315L42.5022 73.2462L43.1145 72.6849H52.8857L53.5235 73.2462L52.8346 67.5315Z", fill: "#161616" }),
        React.createElement("path", { d: "M78.8314 37.2998L80.9999 26.7377L77.7599 16.9155L52.8345 35.4119L62.4271 43.5247L75.9485 47.4791L78.9335 43.984L77.6323 43.04L79.7243 41.1521L78.1426 39.902L80.2091 38.3458L78.8314 37.2998Z", fill: "#763E1A" }),
        React.createElement("path", { d: "M15 26.7377L17.194 37.2998L15.7909 38.3458L17.8574 39.902L16.2756 41.1521L18.3676 43.04L17.0665 43.984L20.0514 47.4791L33.5984 43.5247L43.1655 35.4119L18.2656 16.9155L15 26.7377Z", fill: "#763E1A" }),
        React.createElement("path", { d: "M75.9487 47.4793L62.4272 43.5249L66.5092 49.6989L60.3862 61.613L68.4736 61.511H80.4898L75.9487 47.4793Z", fill: "#F5841F" }),
        React.createElement("path", { d: "M33.5983 43.5249L20.0513 47.4793L15.5356 61.511H27.5519L35.6137 61.613L29.4908 49.6989L33.5983 43.5249Z", fill: "#F5841F" }),
        React.createElement("path", { d: "M51.9415 50.3617L52.8344 35.4115L56.7378 24.7729H39.262L43.1653 35.4115L44.0583 50.3617L44.3899 55.0559L44.4154 66.664H51.5843L51.6099 55.0559L51.9415 50.3617Z", fill: "#F5841F" })));
};

var Icon$4 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React.createElement("circle", { cx: "48", cy: "48", r: "48", fill: "white" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M66.4573 43.7107C64.8919 42.1452 64.8919 39.6071 66.4573 38.0416C68.0228 36.4762 70.5609 36.4762 72.1264 38.0416C73.6918 39.6071 73.6918 42.1452 72.1264 43.7107C70.5609 45.2762 68.0228 45.2762 66.4573 43.7107ZM52.9933 57.1747C51.8192 56.0006 51.8192 54.097 52.9933 52.9229C54.1674 51.7488 56.071 51.7488 57.2451 52.9229C58.4192 54.097 58.4192 56.0006 57.2451 57.1747C56.071 58.3488 54.1674 58.3488 52.9933 57.1747ZM74.2523 50.0884C73.0782 48.9143 73.0782 47.0107 74.2523 45.8366C75.4263 44.6625 77.3299 44.6625 78.504 45.8366C79.6781 47.0107 79.6781 48.9143 78.504 50.0884C77.3299 51.2625 75.4263 51.2625 74.2523 50.0884ZM67.166 57.1747C65.9919 56.0006 65.9919 54.097 67.166 52.9229C68.34 51.7488 70.2436 51.7488 71.4177 52.9229C72.5918 54.097 72.5918 56.0006 71.4177 57.1747C70.2436 58.3488 68.34 58.3488 67.166 57.1747ZM82.0472 56.466C81.2645 55.6833 81.2645 54.4142 82.0472 53.6315C82.8299 52.8488 84.099 52.8488 84.8817 53.6315C85.6644 54.4142 85.6644 55.6833 84.8817 56.466C84.099 57.2488 82.8299 57.2488 82.0472 56.466ZM74.9609 63.5523C74.1782 62.7696 74.1782 61.5005 74.9609 60.7178C75.7436 59.9351 77.0127 59.9351 77.7954 60.7178C78.5781 61.5005 78.5781 62.7696 77.7954 63.5523C77.0127 64.3351 75.7436 64.3351 74.9609 63.5523ZM59.371 50.797C57.8056 49.2315 57.8056 46.6934 59.371 45.1279C60.9365 43.5625 63.4746 43.5625 65.0401 45.1279C66.6055 46.6934 66.6055 49.2315 65.0401 50.797C63.4746 52.3625 60.9365 52.3625 59.371 50.797ZM59.371 36.6244C57.8056 35.0589 57.8056 32.5208 59.371 30.9553C60.9365 29.3899 63.4746 29.3899 65.0401 30.9553C66.6055 32.5208 66.6055 35.0589 65.0401 36.6244C63.4746 38.1898 60.9365 38.1898 59.371 36.6244ZM52.2847 43.7107C50.7193 42.1452 50.7193 39.6071 52.2847 38.0416C53.8502 36.4762 56.3883 36.4762 57.9538 38.0416C59.5192 39.6071 59.5192 42.1452 57.9538 43.7107C56.3883 45.2762 53.8502 45.2762 52.2847 43.7107ZM38.0462 43.7107C36.4808 42.1452 36.4808 39.6071 38.0462 38.0416C39.6117 36.4762 42.1498 36.4762 43.7153 38.0416C45.2807 39.6071 45.2807 42.1452 43.7153 43.7107C42.1498 45.2762 39.6117 45.2762 38.0462 43.7107ZM24.5823 57.1747C23.4082 56.0006 23.4082 54.097 24.5823 52.9229C25.7564 51.7488 27.66 51.7488 28.8341 52.9229C30.0081 54.097 30.0081 56.0006 28.8341 57.1747C27.66 58.3488 25.7564 58.3488 24.5823 57.1747ZM45.8412 50.0884C44.6671 48.9143 44.6671 47.0107 45.8412 45.8366C47.0153 44.6625 48.9189 44.6625 50.093 45.8366C51.2671 47.0107 51.2671 48.9143 50.093 50.0884C48.9189 51.2625 47.0153 51.2625 45.8412 50.0884ZM38.7549 57.1747C37.5808 56.0006 37.5808 54.097 38.7549 52.9229C39.929 51.7488 41.8326 51.7488 43.0067 52.9229C44.1807 54.097 44.1807 56.0006 43.0067 57.1747C41.8326 58.3488 39.929 58.3488 38.7549 57.1747ZM11.1183 56.466C10.3356 55.6833 10.3356 54.4142 11.1183 53.6315C11.901 52.8488 13.1701 52.8488 13.9528 53.6315C14.7356 54.4142 14.7356 55.6833 13.9528 56.466C13.1701 57.2488 11.901 57.2488 11.1183 56.466ZM18.2046 63.5523C17.4219 62.7696 17.4219 61.5005 18.2046 60.7178C18.9873 59.9351 20.2564 59.9351 21.0391 60.7178C21.8219 61.5005 21.8219 62.7696 21.0391 63.5523C20.2564 64.3351 18.9873 64.3351 18.2046 63.5523ZM46.5498 63.5523C45.7671 62.7696 45.7671 61.5005 46.5498 60.7178C47.3325 59.9351 48.6016 59.9351 49.3843 60.7178C50.1671 61.5005 50.1671 62.7696 49.3843 63.5523C48.6016 64.3351 47.3325 64.3351 46.5498 63.5523ZM17.496 50.0884C16.3219 48.9143 16.3219 47.0107 17.496 45.8366C18.6701 44.6625 20.5737 44.6625 21.7478 45.8366C22.9218 47.0107 22.9218 48.9143 21.7478 50.0884C20.5737 51.2625 18.6701 51.2625 17.496 50.0884ZM30.9599 50.797C29.3945 49.2315 29.3945 46.6934 30.9599 45.1279C32.5254 43.5625 35.0635 43.5625 36.629 45.1279C38.1944 46.6934 38.1944 49.2315 36.629 50.797C35.0635 52.3625 32.5254 52.3625 30.9599 50.797ZM30.9599 36.6244C29.3945 35.0589 29.3945 32.5208 30.9599 30.9553C32.5254 29.3899 35.0635 29.3899 36.629 30.9553C38.1944 32.5208 38.1944 35.0589 36.629 36.6244C35.0635 38.1898 32.5254 38.1898 30.9599 36.6244ZM23.8736 43.7107C22.3082 42.1452 22.3082 39.6071 23.8736 38.0416C25.4391 36.4762 27.9772 36.4762 29.5427 38.0416C31.1081 39.6071 31.1081 42.1452 29.5427 43.7107C27.9772 45.2762 25.4391 45.2762 23.8736 43.7107Z", fill: "#1D222A" })));
};

var Icon$3 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React.createElement("circle", { cx: "48", cy: "48", r: "48", fill: "white" }),
        React.createElement("path", { d: "M44.3288 35.3546V21.7134H19.0926C18.581 21.7134 18.24 22.0544 18.24 22.566V41.8342C18.24 42.3457 18.581 42.6867 19.0926 42.6867H28.8119V77.8129C28.8119 78.3244 29.153 78.6654 29.6645 78.6654H45.5224C46.0339 78.6654 46.375 78.3244 46.375 77.8129V35.3546H44.3288Z", fill: "#29AEFF" }),
        React.createElement("path", { d: "M61.8919 17.2798H55.7534H39.2134C38.7019 17.2798 38.3608 17.6208 38.3608 18.1324V73.3792C38.3608 73.8908 38.7019 74.2318 39.2134 74.2318H55.0713C55.5829 74.2318 55.9239 73.8908 55.9239 73.3792V59.397H62.0624C73.6575 59.397 83.0358 50.0187 83.0358 38.4237C83.0358 26.6581 73.487 17.2798 61.8919 17.2798Z", fill: "#2761E7" })));
};

var Icon$2 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React.createElement("g", { clipPath: "url(#clip0)" },
            React.createElement("path", { d: "M48.0048 96.0097C74.5172 96.0097 96.0097 74.5172 96.0097 48.0048C96.0097 21.4925 74.5172 0 48.0048 0C21.4925 0 0 21.4925 0 48.0048C0 74.5172 21.4925 96.0097 48.0048 96.0097Z", fill: "#3375BB" }),
            React.createElement("path", { d: "M48.0048 22.8922L49.3179 21.1833C48.9399 20.8928 48.4766 20.7354 48 20.7354C47.5233 20.7354 47.06 20.8928 46.682 21.1833L48.0048 22.8922ZM70.5783 29.5252H72.7313C72.7352 29.2396 72.6824 28.9561 72.576 28.6909C72.4696 28.4258 72.3118 28.1844 72.1116 27.9806C71.9114 27.7769 71.6729 27.6148 71.4097 27.5037C71.1465 27.3926 70.8639 27.3348 70.5783 27.3335V29.5252ZM48.0048 75.6377L46.8076 77.4335C47.1604 77.6697 47.5754 77.7958 48 77.7958C48.4245 77.7958 48.8395 77.6697 49.1924 77.4335L48.0048 75.6377ZM25.4506 29.5252V27.3625C25.165 27.3638 24.8824 27.4216 24.6192 27.5327C24.356 27.6437 24.1175 27.8058 23.9173 28.0096C23.7171 28.2134 23.5593 28.4548 23.4529 28.7199C23.3465 28.985 23.2937 29.2686 23.2976 29.5542L25.4506 29.5252ZM46.6917 24.5915C56.4626 32.1611 67.6528 31.6783 70.5879 31.6783V27.3625C67.5466 27.3625 57.8047 27.7487 49.3468 21.1833L46.6917 24.5915ZM68.4348 29.4866C68.2707 39.4892 67.8459 46.5471 67.0349 51.7704C66.2238 56.9938 65.1039 60.0448 63.6266 62.2268C62.1494 64.4089 60.257 65.8282 57.486 67.4792C54.715 69.1302 51.1716 70.9646 46.8076 73.8515L49.2406 77.4335C53.373 74.6818 56.8102 72.9246 59.7357 71.1771C62.6835 69.5717 65.2416 67.3367 67.228 64.6309C69.159 61.7344 70.4817 57.8724 71.3314 52.427C72.181 46.9815 72.6155 39.6534 72.7796 29.5542L68.4348 29.4866ZM49.2406 73.8515C44.9055 70.955 41.3718 69.1592 38.6201 67.4888C35.8684 65.8185 33.976 64.4861 32.4892 62.2268C31.0023 59.9676 29.7954 56.9648 28.9651 51.7704C28.1347 46.576 27.7678 39.4892 27.6037 29.4866L23.2976 29.5542C23.4617 39.6534 23.9058 47.0009 24.7458 52.427C25.5858 57.8531 26.8699 61.7151 28.8395 64.6309C30.8164 67.3382 33.3686 69.5739 36.3125 71.1771C39.2091 72.9246 42.6752 74.6818 46.8076 77.4335L49.2406 73.8515ZM25.4506 31.6783C28.3471 31.6783 39.547 32.1611 49.3179 24.5915L46.682 21.1833C38.2049 27.7487 28.463 27.3625 25.441 27.3625L25.4506 31.6783Z", fill: "white" })),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: "clip0" },
                React.createElement("rect", { width: "96", height: "96", fill: "white" })))));
};

var Icon$1 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React.createElement("path", { d: "M96 48C96 21.4903 74.5097 0 48 0C21.4903 0 0 21.4903 0 48C0 74.5097 21.4903 96 48 96C74.5097 96 96 74.5097 96 48Z", fill: "#3389FB" }),
        React.createElement("path", { d: "M29.6927 35.4245C39.8036 25.5252 56.1965 25.5252 66.3074 35.4245L67.5242 36.6159C68.0298 37.1109 68.0298 37.9134 67.5242 38.4084L63.3616 42.4839C63.1088 42.7314 62.699 42.7314 62.4462 42.4839L60.7717 40.8444C53.7181 33.9384 42.282 33.9384 35.2284 40.8444L33.4351 42.6002C33.1823 42.8477 32.7725 42.8477 32.5197 42.6002L28.3571 38.5247C27.8515 38.0297 27.8515 37.2272 28.3571 36.7322L29.6927 35.4245ZM74.9161 43.8532L78.6208 47.4805C79.1264 47.9755 79.1264 48.778 78.6208 49.2729L61.9159 65.6288C61.4103 66.1237 60.5907 66.1237 60.0851 65.6288C60.0851 65.6288 60.0851 65.6288 60.0851 65.6288L48.229 54.0206C48.1026 53.8968 47.8977 53.8968 47.7713 54.0206C47.7713 54.0206 47.7713 54.0206 47.7713 54.0206L35.9153 65.6288C35.4098 66.1237 34.5902 66.1237 34.0846 65.6288C34.0846 65.6288 34.0846 65.6288 34.0846 65.6288L17.3792 49.2727C16.8736 48.7778 16.8736 47.9753 17.3792 47.4803L21.0839 43.853C21.5895 43.3581 22.4091 43.3581 22.9146 43.853L34.771 55.4614C34.8974 55.5851 35.1023 55.5851 35.2287 55.4614C35.2287 55.4614 35.2287 55.4614 35.2287 55.4614L47.0844 43.853C47.59 43.358 48.4096 43.358 48.9152 43.853C48.9152 43.853 48.9152 43.853 48.9152 43.853L60.7715 55.4614C60.8979 55.5851 61.1028 55.5851 61.2292 55.4614L73.0854 43.8532C73.5909 43.3583 74.4105 43.3583 74.9161 43.8532Z", fill: "white" })));
};

var connectors = [
    {
        title: "Metamask",
        icon: Icon$5,
        connectorId: "injected",
    },
    {
        title: "TrustWallet",
        icon: Icon$2,
        connectorId: "injected",
    },
    {
        title: "MathWallet",
        icon: Icon$4,
        connectorId: "injected",
    },
    {
        title: "TokenPocket",
        icon: Icon$3,
        connectorId: "injected",
    },
    {
        title: "WalletConnect",
        icon: Icon$1,
        connectorId: "walletconnect",
    }
    // {
    //   title: "Binance Chain Wallet",
    //   icon: BinanceChain,
    //   connectorId: "bsc",
    // },
];
var localStorageKey = "accountStatus";

var WalletCard = function (_a) {
    var login = _a.login, walletConfig = _a.walletConfig, onDismiss = _a.onDismiss, mb = _a.mb;
    var title = walletConfig.title, Icon = walletConfig.icon;
    return (React.createElement(Button, { fullWidth: true, variant: "tertiary", onClick: function () {
            login(walletConfig.connectorId);
            window.localStorage.setItem(localStorageKey, "1");
            onDismiss();
        }, style: { justifyContent: "space-between" }, mb: mb, id: "wallet-connect-" + title.toLocaleLowerCase() },
        React.createElement(Text, { bold: true, color: "primary", mr: "16px" }, title),
        React.createElement(Icon, { width: "32px" })));
};

styled(Link)(templateObject_1$6 || (templateObject_1$6 = __makeTemplateObject(["\n  display: flex;\n  align-self: center;\n  align-items: center;\n  margin-top: 24px;\n"], ["\n  display: flex;\n  align-self: center;\n  align-items: center;\n  margin-top: 24px;\n"])));
var ConnectModal = function (_a) {
    var login = _a.login, _b = _a.onDismiss, onDismiss = _b === void 0 ? function () { return null; } : _b;
    return (React.createElement(Modal, { title: "Connect to a wallet", onDismiss: onDismiss }, connectors.map(function (entry, index) { return (React.createElement(WalletCard, { key: entry.title, login: login, walletConfig: entry, onDismiss: onDismiss, mb: index < connectors.length - 1 ? "8px" : "0" })); })));
};
var templateObject_1$6;

var StyleButton = styled(Text).attrs({ role: "button" })(templateObject_1$5 || (templateObject_1$5 = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  color: ", ";\n"], ["\n  position: relative;\n  display: flex;\n  align-items: center;\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.primary;
});
var Tooltip = styled.div(templateObject_2$2 || (templateObject_2$2 = __makeTemplateObject(["\n  display: ", ";\n  position: absolute;\n  bottom: -22px;\n  right: 0;\n  left: 0;\n  text-align: center;\n  background-color: ", ";\n  color: ", ";\n  border-radius: 16px;\n  opacity: 0.7;\n"], ["\n  display: ", ";\n  position: absolute;\n  bottom: -22px;\n  right: 0;\n  left: 0;\n  text-align: center;\n  background-color: ", ";\n  color: ", ";\n  border-radius: 16px;\n  opacity: 0.7;\n"])), function (_a) {
    var isTooltipDisplayed = _a.isTooltipDisplayed;
    return (isTooltipDisplayed ? "block" : "none");
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.contrast;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.invertedContrast;
});
var CopyToClipboard = function (_a) {
    var toCopy = _a.toCopy, children = _a.children, props = __rest(_a, ["toCopy", "children"]);
    var _b = useState(false), isTooltipDisplayed = _b[0], setIsTooltipDisplayed = _b[1];
    return (React.createElement(StyleButton, __assign({ small: true, bold: true, onClick: function () {
            if (navigator.clipboard) {
                navigator.clipboard.writeText(toCopy);
                setIsTooltipDisplayed(true);
                setTimeout(function () {
                    setIsTooltipDisplayed(false);
                }, 1000);
            }
        } }, props),
        children,
        React.createElement(Icon$19, { width: "20px", color: "primary", ml: "4px" }),
        React.createElement(Tooltip, { isTooltipDisplayed: isTooltipDisplayed }, "Copied")));
};
var templateObject_1$5, templateObject_2$2;

var Icon = function (props) {
    var theme = useTheme();
    var primaryColor = theme.isDark ? "#3C3742" : "#e9eaeb";
    var secondaryColor = theme.isDark ? "#666171" : "#bdc2c4";
    return (React.createElement(Svg, __assign({ viewBox: "0 0 32 32" }, props),
        React.createElement("path", { d: "M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16z", fill: primaryColor }),
        React.createElement("mask", { id: "A", "mask-type": "alpha", maskUnits: "userSpaceOnUse", x: "0", y: "0", width: "32", height: "32" },
            React.createElement("path", { d: "M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16z", fill: "#c4c4c4" })),
        React.createElement("g", { mask: "url(#A)" },
            React.createElement("path", { d: "M25.128 16.436c0 3.115-4.133 5.641-9.231 5.641s-9.231-2.526-9.231-5.641V15h18.461v1.436zm2.205 13.806c0-3.815-5.074-6.908-11.333-6.908S4.667 26.426 4.667 30.242V32h22.667v-1.759z", fill: secondaryColor }),
            React.createElement("path", { fillRule: "evenodd", d: "M10.234 5.601C9.942 4.264 10.96 3 12.328 3c1.184 0 2.143.959 2.143 2.143v3.873l1.427-.067c.589 0 1.166.034 1.724.098V5.143c0-1.184.959-2.143 2.143-2.143 1.368 0 2.386 1.264 2.093 2.601l-.931 4.258c2.529 1.006 4.201 2.749 4.201 4.731 0 3.115-4.133 5.641-9.231 5.641s-9.231-2.526-9.231-5.641c0-2.053 1.794-3.849 4.476-4.836l-.908-4.153z", fill: secondaryColor }),
            React.createElement("ellipse", { cx: "12.308", cy: "14.846", rx: "1.026", ry: "1.538", fill: primaryColor }),
            React.createElement("ellipse", { cx: "19.385", cy: "14.846", rx: "1.026", ry: "1.538", fill: primaryColor }))));
};

var StyledAvatar = styled.div(templateObject_1$4 || (templateObject_1$4 = __makeTemplateObject(["\n  margin-left: 8px;\n  position: relative;\n\n  img {\n    border-radius: 50%;\n  }\n"], ["\n  margin-left: 8px;\n  position: relative;\n\n  img {\n    border-radius: 50%;\n  }\n"])));
var Pip = styled.div(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 50%;\n  pointer-events: none;\n  height: 8px;\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 8px;\n"], ["\n  background-color: ", ";\n  border-radius: 50%;\n  pointer-events: none;\n  height: 8px;\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 8px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.failure;
});
var BAD_SRCS$1 = {};
var Avatar = function (_a) {
    var profile = _a.profile;
    var _b = profile.username, username = _b === void 0 ? "Bunny" : _b, image = profile.image, profileLink = profile.profileLink, noProfileLink = profile.noProfileLink, _c = profile.showPip, showPip = _c === void 0 ? false : _c;
    var _d = useState(0), refresh = _d[1];
    var link = profile.username ? profileLink : noProfileLink;
    var isExternal = link.startsWith("http");
    var ariaLabel = "Link to profile";
    var icon = image ? (React.createElement("img", { src: BAD_SRCS$1[image] ? "/images/unknown.png" : image, alt: "profile avatar", height: "32px", width: "32px", onError: function () {
            BAD_SRCS$1[image] = true;
            refresh(function (i) { return i + 1; });
        } })) : (React.createElement(Icon, { width: "32px", height: "32px" }));
    if (isExternal) {
        return (React.createElement(StyledAvatar, { title: username },
            React.createElement("a", { target: "_blank", href: link, "aria-label": ariaLabel }, icon),
            showPip && React.createElement(Pip, null)));
    }
    return (React.createElement(StyledAvatar, { title: username },
        React.createElement(Link$1, { to: link, "aria-label": ariaLabel }, icon),
        showPip && React.createElement(Pip, null)));
};
var templateObject_1$4, templateObject_2$1;

var BAD_SRCS = {};
var AccountModal = function (_a) {
    var _b;
    var connectorId = _a.connectorId, account = _a.account, profile = _a.profile, logout = _a.logout, _c = _a.onDismiss, onDismiss = _c === void 0 ? function () { return null; } : _c;
    var _d = useState(0), refresh = _d[1];
    return (React.createElement(Modal, { title: "Your wallet", onDismiss: onDismiss },
        profile && (React.createElement(Flex, { alignItems: "center", mb: "16px" },
            ((_b = profile.image) === null || _b === void 0 ? void 0 : _b.startsWith("http")) && (React.createElement(StyledAvatar, { style: { marginLeft: "0px", marginRight: "10px" }, title: profile === null || profile === void 0 ? void 0 : profile.username },
                React.createElement("a", { target: "_blank", href: "https://app.bch.domains/name/" + (profile === null || profile === void 0 ? void 0 : profile.username), "aria-label": "Link to profile" },
                    React.createElement("img", { src: BAD_SRCS[profile.image] ? "/images/unknown.png" : profile.image, alt: "profile avatar", height: "64px", width: "64px", onError: function () {
                            BAD_SRCS[profile.image] = true;
                            refresh(function (i) { return i + 1; });
                        } })))),
            React.createElement(LinkExternal, { href: "https://app.bch.domains/name/" + (profile === null || profile === void 0 ? void 0 : profile.username), fontSize: "20px", bold: true, style: { whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", marginBottom: "8px" } }, profile.username))),
        React.createElement(Text, { fontSize: "20px", bold: true, style: { whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", marginBottom: "8px" } }, account),
        React.createElement(Flex, { mb: "32px" },
            React.createElement(LinkExternal, { small: true, href: "https://sonar.cash/address/" + account, mr: "16px" }, "View on Sonar"),
            React.createElement(CopyToClipboard, { toCopy: account }, "Copy Address")),
        React.createElement(Flex, { justifyContent: "center" },
            React.createElement(Button, { size: "sm", variant: "secondary", onClick: function () {
                    logout();
                    window.localStorage.removeItem(localStorageKey);
                    onDismiss();
                    window.location.reload();
                } }, "Logout"),
            connectorId === 'walletconnect' ?
                React.createElement(Button, { ml: '5px', size: "sm", variant: "secondary", onClick: function () {
                        logout();
                        window.localStorage.removeItem('walletconnect');
                        window.localStorage.removeItem(localStorageKey);
                        onDismiss();
                        window.location.reload();
                    } }, "Disconnect")
                : '')));
};

var useWalletModal = function (login, logout, account, profile, connectorId) {
    var onPresentConnectModal = useModal(React.createElement(ConnectModal, { login: login }))[0];
    var onPresentAccountModal = useModal(React.createElement(AccountModal, { connectorId: connectorId, profile: profile, account: account || "", logout: logout }))[0];
    return { onPresentConnectModal: onPresentConnectModal, onPresentAccountModal: onPresentAccountModal };
};

var UserBlock = function (_a) {
    var account = _a.account, profile = _a.profile, login = _a.login, logout = _a.logout, connectorId = _a.connectorId;
    var _b = useWalletModal(login, logout, account, profile, connectorId), onPresentConnectModal = _b.onPresentConnectModal, onPresentAccountModal = _b.onPresentAccountModal;
    var accountEllipsis = (profile === null || profile === void 0 ? void 0 : profile.username) ? profile === null || profile === void 0 ? void 0 : profile.username :
        (account ? account.substring(0, 4) + "..." + account.substring(account.length - 4) : null);
    return (React.createElement("div", null, account ? (React.createElement(Button, { size: "sm", variant: "tertiary", onClick: function () {
            onPresentAccountModal();
        } }, accountEllipsis)) : (React.createElement(Button, { size: "sm", onClick: function () {
            onPresentConnectModal();
        } }, "Connect"))));
};

var Wrapper = styled.div(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject(["\n  position: relative;\n  width: 100%;\n"], ["\n  position: relative;\n  width: 100%;\n"])));
var StyledNav = styled.nav(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: fixed;\n  top: ", ";\n  left: 0;\n  transition: top 0.2s;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 8px;\n  padding-right: 16px;\n  width: 100%;\n  height: ", "px;\n  background-color: ", ";\n  border-bottom: solid 2px rgba(133, 133, 133, 0.1);\n  z-index: 20;\n  transform: translate3d(0, 0, 0);\n"], ["\n  position: fixed;\n  top: ", ";\n  left: 0;\n  transition: top 0.2s;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 8px;\n  padding-right: 16px;\n  width: 100%;\n  height: ", "px;\n  background-color: ", ";\n  border-bottom: solid 2px rgba(133, 133, 133, 0.1);\n  z-index: 20;\n  transform: translate3d(0, 0, 0);\n"])), function (_a) {
    var showMenu = _a.showMenu;
    return (showMenu ? 0 : "-" + MENU_HEIGHT + "px");
}, MENU_HEIGHT, function (_a) {
    var theme = _a.theme;
    return theme.nav.background;
});
var BodyWrapper = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n"], ["\n  position: relative;\n  display: flex;\n"])));
var Inner = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  flex-grow: 1;\n  margin-top: ", ";\n  transition: margin-top 0.2s;\n  transform: translate3d(0, 0, 0);\n  ", " {\n    margin-left: ", ";\n  }\n"], ["\n  flex-grow: 1;\n  margin-top: ", ";\n  transition: margin-top 0.2s;\n  transform: translate3d(0, 0, 0);\n  ", " {\n    margin-left: ", ";\n  }\n"])), function (_a) {
    var showMenu = _a.showMenu;
    return (showMenu ? MENU_HEIGHT + "px" : 0);
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED) + "px";
});
var MobileOnlyOverlay = styled(Overlay)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  position: fixed;\n  height: 100%;\n\n  ", " {\n    display: none;\n  }\n"], ["\n  position: fixed;\n  height: 100%;\n\n  ", " {\n    display: none;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
});
var Menu = function (_a) {
    var _b;
    var account = _a.account, login = _a.login, logout = _a.logout, isDark = _a.isDark, toggleTheme = _a.toggleTheme, langs = _a.langs, setLang = _a.setLang, currentLang = _a.currentLang, cakePriceUsd = _a.cakePriceUsd, links = _a.links, priceLink = _a.priceLink, profile = _a.profile, children = _a.children, connectorId = _a.connectorId;
    var isXl = useMatchBreakpoints().isXl;
    var isMobile = isXl === false;
    var _c = useState(!isMobile), isPushed = _c[0], setIsPushed = _c[1];
    var _d = useState(true), showMenu = _d[0], setShowMenu = _d[1];
    var refPrevOffset = useRef(window.pageYOffset);
    useEffect(function () {
        var handleScroll = function () {
            var currentOffset = window.pageYOffset;
            var isBottomOfPage = window.document.body.clientHeight === currentOffset + window.innerHeight;
            var isTopOfPage = currentOffset === 0;
            // Always show the menu when user reach the top
            if (isTopOfPage) {
                setShowMenu(true);
            }
            // Avoid triggering anything at the bottom because of layout shift
            else if (!isBottomOfPage) {
                if (currentOffset < refPrevOffset.current) {
                    // Has scroll up
                    setShowMenu(true);
                }
                else {
                    // Has scroll down
                    setShowMenu(false);
                }
            }
            refPrevOffset.current = currentOffset;
        };
        var throttledHandleScroll = throttle(handleScroll, 200);
        window.addEventListener("scroll", throttledHandleScroll);
        return function () {
            window.removeEventListener("scroll", throttledHandleScroll);
        };
    }, []);
    // Find the home link if provided
    var homeLink = links.find(function (link) { return link.label === "Home"; });
    return (React.createElement(Wrapper, null,
        React.createElement(StyledNav, { showMenu: showMenu },
            React.createElement(Logo, { isPushed: isPushed, togglePush: function () { return setIsPushed(function (prevState) { return !prevState; }); }, isDark: isDark, href: (_b = homeLink === null || homeLink === void 0 ? void 0 : homeLink.href) !== null && _b !== void 0 ? _b : "/" }),
            React.createElement(Flex, null,
                React.createElement(UserBlock, { connectorId: connectorId, account: account, profile: profile, login: login, logout: logout }),
                profile && React.createElement(Avatar, { profile: profile }))),
        React.createElement(BodyWrapper, null,
            React.createElement(Panel, { isPushed: isPushed, isMobile: isMobile, showMenu: showMenu, isDark: isDark, toggleTheme: toggleTheme, langs: langs, setLang: setLang, currentLang: currentLang, cakePriceUsd: cakePriceUsd, pushNav: setIsPushed, links: links, priceLink: priceLink }),
            React.createElement(Inner, { isPushed: isPushed, showMenu: showMenu }, children),
            React.createElement(MobileOnlyOverlay, { show: isPushed, onClick: function () { return setIsPushed(false); }, role: "presentation" }))));
};
var templateObject_1$3, templateObject_2, templateObject_3, templateObject_4, templateObject_5;

var ToastAction = function (_a) {
    var action = _a.action;
    if (action.url.startsWith("http")) {
        return (React.createElement(Button, __assign({ as: "a", size: "sm", href: action.url }, getExternalLinkProps()), action.text));
    }
    return (React.createElement(Button, { as: Link$1, size: "sm", to: action.url }, action.text));
};

var types = {
    SUCCESS: "success",
    DANGER: "danger",
    WARNING: "warning",
    INFO: "info",
};

var _a$1;
var alertTypeMap = (_a$1 = {},
    _a$1[types.INFO] = variants.INFO,
    _a$1[types.SUCCESS] = variants.SUCCESS,
    _a$1[types.DANGER] = variants.DANGER,
    _a$1[types.WARNING] = variants.WARNING,
    _a$1);
var StyledToast = styled.div(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n  right: 16px;\n  position: fixed;\n  max-width: calc(100% - 32px);\n  transition: all 250ms ease-in;\n  width: 100%;\n\n  ", " {\n    max-width: 400px;\n  }\n"], ["\n  right: 16px;\n  position: fixed;\n  max-width: calc(100% - 32px);\n  transition: all 250ms ease-in;\n  width: 100%;\n\n  ", " {\n    max-width: 400px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var Toast = function (_a) {
    var toast = _a.toast, onRemove = _a.onRemove, style = _a.style, ttl = _a.ttl, props = __rest(_a, ["toast", "onRemove", "style", "ttl"]);
    var timer = useRef();
    var ref = useRef(null);
    var removeHandler = useRef(onRemove);
    var id = toast.id, title = toast.title, description = toast.description, type = toast.type, action = toast.action;
    var handleRemove = useCallback(function () { return removeHandler.current(id); }, [id, removeHandler]);
    var handleMouseEnter = function () {
        clearTimeout(timer.current);
    };
    var handleMouseLeave = function () {
        if (timer.current) {
            clearTimeout(timer.current);
        }
        timer.current = window.setTimeout(function () {
            handleRemove();
        }, ttl);
    };
    useEffect(function () {
        if (timer.current) {
            clearTimeout(timer.current);
        }
        timer.current = window.setTimeout(function () {
            handleRemove();
        }, ttl);
        return function () {
            clearTimeout(timer.current);
        };
    }, [timer, ttl, handleRemove]);
    return (React.createElement(CSSTransition, __assign({ nodeRef: ref, timeout: 250, style: style }, props),
        React.createElement(StyledToast, { ref: ref, onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave },
            React.createElement(Alert, { title: title, variant: alertTypeMap[type], onClick: handleRemove }, action ? (React.createElement(React.Fragment, null,
                React.createElement(Text, { as: "p", mb: "8px" }, description),
                React.createElement(ToastAction, { action: action }))) : (description)))));
};
var templateObject_1$2;

var ZINDEX = 1000;
var TOP_POSITION = 80; // Initial position from the top
var StyledToastContainer = styled.div(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n  .enter,\n  .appear {\n    opacity: 0.01;\n  }\n\n  .enter.enter-active,\n  .appear.appear-active {\n    opacity: 1;\n    transition: opacity 250ms ease-in;\n  }\n\n  .exit {\n    opacity: 1;\n  }\n\n  .exit.exit-active {\n    opacity: 0.01;\n    transition: opacity 250ms ease-out;\n  }\n"], ["\n  .enter,\n  .appear {\n    opacity: 0.01;\n  }\n\n  .enter.enter-active,\n  .appear.appear-active {\n    opacity: 1;\n    transition: opacity 250ms ease-in;\n  }\n\n  .exit {\n    opacity: 1;\n  }\n\n  .exit.exit-active {\n    opacity: 0.01;\n    transition: opacity 250ms ease-out;\n  }\n"])));
var ToastContainer = function (_a) {
    var toasts = _a.toasts, onRemove = _a.onRemove, _b = _a.ttl, ttl = _b === void 0 ? 6000 : _b, _c = _a.stackSpacing, stackSpacing = _c === void 0 ? 24 : _c;
    return (React.createElement(StyledToastContainer, null,
        React.createElement(TransitionGroup, null, toasts.map(function (toast, index) {
            var zIndex = (ZINDEX - index).toString();
            var top = TOP_POSITION + index * stackSpacing;
            return (React.createElement(Toast, { key: toast.id, toast: toast, onRemove: onRemove, ttl: ttl, style: { top: top + "px", zIndex: zIndex } }));
        }))));
};
var templateObject_1$1;

var ResetCSS = createGlobalStyle(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  /* prettier-ignore */\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed, \n  figure, figcaption, footer, header, hgroup, \n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    vertical-align: baseline;\n  }\n  /* HTML5 display-role reset for older browsers */\n  /* prettier-ignore */\n  article, aside, details, figcaption, figure, \n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n  body {\n    line-height: 1;\n    font-size: 16px;\n  }\n  ol,\n  ul {\n    list-style: disc;\n    list-style-position: inside;\n  }\n  blockquote,\n  q {\n    quotes: none;\n  }\n  blockquote:before,\n  blockquote:after,\n  q:before,\n  q:after {\n    content: \"\";\n    content: none;\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n  a {\n    color: inherit;\n    text-decoration: none;\n  }\n  [role=\"button\"] {\n    cursor: pointer;\n  }\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  }\n  * {\n    font-family: 'Kanit', sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n  /* Scrollbar */\n  ::-webkit-scrollbar {\n    width: 8px;\n  }\n  ::-webkit-scrollbar-thumb {\n    background: ", "; \n    border-radius: 8px;\n  }\n  ::-webkit-scrollbar-track {\n    box-shadow: inset 0 0 5px ", "; \n    border-radius: 10px;\n  }\n"], ["\n  /* prettier-ignore */\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed, \n  figure, figcaption, footer, header, hgroup, \n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    vertical-align: baseline;\n  }\n  /* HTML5 display-role reset for older browsers */\n  /* prettier-ignore */\n  article, aside, details, figcaption, figure, \n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n  body {\n    line-height: 1;\n    font-size: 16px;\n  }\n  ol,\n  ul {\n    list-style: disc;\n    list-style-position: inside;\n  }\n  blockquote,\n  q {\n    quotes: none;\n  }\n  blockquote:before,\n  blockquote:after,\n  q:before,\n  q:after {\n    content: \"\";\n    content: none;\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n  a {\n    color: inherit;\n    text-decoration: none;\n  }\n  [role=\"button\"] {\n    cursor: pointer;\n  }\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  }\n  * {\n    font-family: 'Kanit', sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n  /* Scrollbar */\n  ::-webkit-scrollbar {\n    width: 8px;\n  }\n  ::-webkit-scrollbar-thumb {\n    background: ", "; \n    border-radius: 8px;\n  }\n  ::-webkit-scrollbar-track {\n    box-shadow: inset 0 0 5px ", "; \n    border-radius: 10px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
});
var templateObject_1;

var baseColors = {
    failure: "#ED4B9E",
    primary: "#f98c08",
    primaryBright: "#ffb948",
    primaryDark: "#f98c08",
    secondary: "#ffb948",
    success: "#31D0AA",
    warning: "#FFB237",
};
var brandColors = {
    binance: "#F0B90B",
};
var otherColors = {
    partner: "#57b4e6",
    promotion: "#cb8ef9",
    ecosystem: "#ff8f1d",
    friend: "#ff7979",
    core: "#deb41d",
    rugpull: "#8b8b8b"
};
var lightColors = __assign(__assign(__assign(__assign({}, baseColors), brandColors), otherColors), { background: "#FAF9FA", backgroundDisabled: "#E9EAEB", contrast: "#261d13", invertedContrast: "#FFFFFF", input: "#f4efea", tertiary: "#f5f3ef", text: "#333333", textDisabled: "#BDC2C4", textSubtle: "#703c2c", borderColor: "#E9EAEB", card: "#FFFFFF", gradients: {
        bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
    } });
var darkColors = __assign(__assign(__assign(__assign({}, baseColors), brandColors), otherColors), { background: "#353331", backgroundDisabled: "#423d37", contrast: "#FFFFFF", invertedContrast: "#261e13", input: "#5a4d3f", tertiary: "#473e35", text: "#fff", textDisabled: "#716a61", textSubtle: "#fff", borderColor: "#63584b", card: "#2c2926", gradients: {
        bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
    } });

var light$6 = {
    background: lightColors.card,
};
var dark$6 = {
    background: darkColors.card,
};

var _a, _b;
var PRIMARY = variants$1.PRIMARY, SECONDARY = variants$1.SECONDARY, TERTIARY = variants$1.TERTIARY, TEXT = variants$1.TEXT, DANGER = variants$1.DANGER, SUBTLE = variants$1.SUBTLE, SUCCESS = variants$1.SUCCESS;
var light$5 = (_a = {},
    _a[PRIMARY] = {
        background: lightColors.primary,
        backgroundActive: lightColors.primaryDark,
        backgroundHover: lightColors.primaryBright,
        border: 0,
        borderColorHover: "currentColor",
        boxShadow: "inset 0px -1px 0px rgba(14, 14, 44, 0.4)",
        boxShadowActive: "inset 0px -1px 0px rgba(14, 14, 44, 0.4)",
        color: "#FFFFFF",
    },
    _a[SECONDARY] = {
        background: "transparent",
        backgroundActive: "transparent",
        backgroundHover: "transparent",
        border: "2px solid " + lightColors.primary,
        borderColorHover: lightColors.primaryBright,
        boxShadow: "none",
        boxShadowActive: "none",
        color: lightColors.primary,
    },
    _a[TERTIARY] = {
        background: lightColors.tertiary,
        backgroundActive: lightColors.tertiary,
        backgroundHover: lightColors.tertiary,
        border: 0,
        borderColorHover: "currentColor",
        boxShadow: "none",
        boxShadowActive: "none",
        color: lightColors.primary,
    },
    _a[TEXT] = {
        background: "transparent",
        backgroundActive: "transparent",
        backgroundHover: lightColors.tertiary,
        border: 0,
        borderColorHover: "currentColor",
        boxShadow: "none",
        boxShadowActive: "none",
        color: lightColors.primary,
    },
    _a[DANGER] = {
        background: lightColors.failure,
        backgroundActive: "#D43285",
        backgroundHover: "#FF65B8",
        border: 0,
        borderColorHover: "currentColor",
        boxShadow: "none",
        boxShadowActive: "none",
        color: "#FFFFFF",
    },
    _a[SUBTLE] = {
        background: lightColors.textSubtle,
        backgroundActive: lightColors.textSubtle + "D9",
        backgroundHover: lightColors.textSubtle + "B3",
        border: 0,
        borderColorHover: "currentColor",
        boxShadow: "none",
        boxShadowActive: "none",
        color: "#FFFFFF",
    },
    _a[SUCCESS] = {
        background: lightColors.success,
        backgroundActive: lightColors.success + "D9",
        backgroundHover: lightColors.success + "B3",
        border: 0,
        borderColorHover: "currentColor",
        boxShadow: "none",
        boxShadowActive: "none",
        color: "#FFFFFF",
    },
    _a);
var dark$5 = (_b = {},
    _b[PRIMARY] = __assign({}, light$5.primary),
    _b[SECONDARY] = __assign({}, light$5.secondary),
    _b[TERTIARY] = __assign(__assign({}, light$5.tertiary), { background: darkColors.tertiary, backgroundActive: darkColors.tertiary, backgroundHover: darkColors.tertiary, color: darkColors.primary }),
    _b[TEXT] = __assign(__assign({}, light$5.text), { backgroundHover: darkColors.tertiary }),
    _b[DANGER] = __assign({}, light$5.danger),
    _b[SUBTLE] = __assign({}, light$5.subtle),
    _b[SUCCESS] = __assign({}, light$5.success),
    _b);

var light$4 = {
    background: lightColors.card,
    boxShadow: "0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)",
    boxShadowActive: shadows.active,
    boxShadowSuccess: shadows.success,
    boxShadowWarning: shadows.warning,
    cardHeaderBackground: "linear-gradient(111.68deg, #F2ECF2 0%, #E8F2F6 100%)",
    dropShadow: "drop-shadow(0px 1px 4px rgba(25, 19, 38, 0.15))",
};
var dark$4 = {
    background: darkColors.card,
    boxShadow: "0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)",
    boxShadowActive: shadows.active,
    boxShadowSuccess: shadows.success,
    boxShadowWarning: shadows.warning,
    cardHeaderBackground: "linear-gradient(166.77deg, #3B4155 0%, #3A3045 100%)",
    dropShadow: "drop-shadow(0px 1px 4px rgba(25, 19, 38, 0.15))",
};

var light$3 = {
    handleBackground: lightColors.card,
};
var dark$3 = {
    handleBackground: darkColors.card,
};

var light$2 = {
    handleBackground: lightColors.card,
};
var dark$2 = {
    handleBackground: darkColors.card,
};

var light$1 = {
    background: lightColors.card,
    hover: "#EEEAF4",
};
var dark$1 = {
    background: darkColors.card,
    hover: "#473d5d",
};

var light = {
    background: lightColors.card,
};
var dark = {
    background: darkColors.card,
};

var darkTheme = __assign(__assign({}, base), { isDark: true, alert: dark$6, button: dark$5, colors: darkColors, card: dark$4, toggle: dark$2, nav: dark$1, modal: dark, radio: dark$3 });

var lightTheme = __assign(__assign({}, base), { isDark: false, alert: light$6, button: light$5, colors: lightColors, card: light$4, toggle: light$2, nav: light$1, modal: light, radio: light$3 });

export { Icon$1s as AddIcon, Alert, Icon$1r as ArrowBackIcon, Icon$1q as ArrowDownIcon, Icon$1p as ArrowDropDownIcon, Icon$1o as ArrowDropUpIcon, Icon$1n as ArrowForwardIcon, Icon$1m as AutoRenewIcon, BackgroundImage, GridLayout$1 as BaseLayout, Icon$K as BenIcon, Icon$1l as BinanceIcon, Icon$1u as BlockIcon, Breadcrumbs, Icon$1k as BunnyPlaceholderIcon, Button, ButtonMenu, ButtonMenuItem, Icon$1i as CalculateIcon, Card, CardBody, CardFooter, CardHeader, CardRibbon, Icon$1j as CardViewIcon, GridLayout as CardsLayout, Checkbox, Icon$1w as CheckmarkCircleIcon, Icon$1h as CheckmarkIcon, Icon$1g as ChevronDownIcon, Icon$1f as ChevronLeftIcon, Icon$1e as ChevronRightIcon, Icon$1d as ChevronUpIcon, Icon$1c as CloseIcon, Icon$1b as CogIcon, Icon$1a as CommunityIcon, Icon$19 as CopyIcon, CopyToClipboard, Icon$O as CoreIcon, Dropdown, Icon$1v as ErrorIcon, Flex, Icon$M as GiftIcon, Icon$10 as GooseRoundIcon, Heading, Icon$P as HeartIcon, Icon$18 as HelpIcon, Icon$J as IboIcon, IconButton, Image, Icon$1t as InfoIcon, Input$1 as Input, Link, LinkExternal, Icon$17 as ListViewIcon, Icon$16 as LogoIcon, Icon$15 as LogoRoundIcon, Menu, Icon$14 as MinusIcon, Modal, ModalProvider, Icon$13 as OpenNewIcon, Icon$11 as PancakeRoundIcon, Icon$12 as PancakesIcon, Icon$N as PartnerIcon, Icon$$ as PrizeIcon, Progress, Icon$Y as ProgressBunny, Icon$Q as PromotionIcon, Radio, Icon$_ as RemoveIcon, ResetCSS, Icon$U as SearchIcon, Skeleton, Icon$L as SkeletonIcon, Spinner, Svg, Icon$T as SwapVertIcon, Icon$S as SyncAltIcon, Tag, Text, Icon$W as Ticket, Icon$V as TicketRound, ToastContainer, Toggle, Icon$Z as VerifiedIcon, Icon$R as WarningIcon, Icon$X as Won, variants as alertVariants, byTextAscending, byTextDescending, darkTheme as dark, darkColors, lightTheme as light, lightColors, makeRender, links as menuConfig, types as toastTypes, useMatchBreakpoints, useModal, useParticleBurst, useTable, useWalletModal };
