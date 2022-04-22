"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainNavigation = void 0;
var react_1 = __importStar(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var icons_1 = require("../icons");
var StyledMainHeader = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\n  right: 0;\n  left: 0;\n  top: ", ";\n  height: ", ";\n  padding: 0  ", ";\n  position: fixed;\n  \n  &::before {\n  position:absolute;\n  background: linear-gradient(180deg, rgba(245, 245, 247, 1) 50%, rgba(245, 245, 247, 0) 100%);\n  content: '';\n  height: ", ";\n  width: 100%;\n  top: -", ";\n  left: 0;\n  z-index: 10;\n  display: block;\n  \n}\n\n    .atlantum-main-header {\n        border-radius: ", ";\n        color: ", ";   \n        padding: ", ";\n        display: flex;\n        position: relative;\n        z-index: 100;\n        align-items: center;\n        justify-items: center;\n        background-color: ", ";\n        box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.08);   \n    \n        }\n    \n    a,\n    a:active,\n    a:visited {\n        display: block;\n        text-decoration: none;\n        margin: 0 0 0 ", ";\n        color: ", ";\n    }\n\n    button.atlantum-header-button {\n        display: block;\n        margin: 0;\n        padding: 0;\n        outline: none;\n        border: none;\n        background-color: transparent;\n    }\n\n    .atlantum-header-icon {\n        display: none;\n        color: ", ";\n        @media only screen and (max-width: 1050px) {\n            display: block;\n            margin: 0 ", ";\n        }\n    }\n      \n    }\n    \n"], ["\n\n  right: 0;\n  left: 0;\n  top: ", ";\n  height: ", ";\n  padding: 0  ", ";\n  position: fixed;\n  \n  &::before {\n  position:absolute;\n  background: linear-gradient(180deg, rgba(245, 245, 247, 1) 50%, rgba(245, 245, 247, 0) 100%);\n  content: '';\n  height: ", ";\n  width: 100%;\n  top: -", ";\n  left: 0;\n  z-index: 10;\n  display: block;\n  \n}\n\n    .atlantum-main-header {\n        border-radius: ", ";\n        color: ", ";   \n        padding: ", ";\n        display: flex;\n        position: relative;\n        z-index: 100;\n        align-items: center;\n        justify-items: center;\n        background-color: ", ";\n        box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.08);   \n    \n        }\n    \n    a,\n    a:active,\n    a:visited {\n        display: block;\n        text-decoration: none;\n        margin: 0 0 0 ", ";\n        color: ", ";\n    }\n\n    button.atlantum-header-button {\n        display: block;\n        margin: 0;\n        padding: 0;\n        outline: none;\n        border: none;\n        background-color: transparent;\n    }\n\n    .atlantum-header-icon {\n        display: none;\n        color: ", ";\n        @media only screen and (max-width: 1050px) {\n            display: block;\n            margin: 0 ", ";\n        }\n    }\n      \n    }\n    \n"])), function (props) { return props.theme.spacing[24]; }, function (props) { return props.theme.spacing[72]; }, function (props) { return props.theme.spacing[24]; }, function (props) { return props.theme.spacing[72]; }, function (props) { return props.theme.spacing[24]; }, function (props) { return props.theme.borderRadius; }, function (props) { return props.theme.colors.neutral[400]; }, function (props) { return props.theme.spacing[24]; }, function (props) { return props.theme.colors.neutral[400]; }, function (props) { return props.theme.spacing[12]; }, function (props) { return props.theme.colors.neutral[400]; }, function (props) { return props.theme.colors.neutral[400]; }, function (props) { return props.theme.spacing[12]; });
var MainNavigation = function (props) {
    var _a = __read((0, react_1.useState)(false), 2), checked = _a[0], setChecked = _a[1];
    var _b = __read((0, react_1.useState)(0), 2), windowWidth = _b[0], setWindowSize = _b[1];
    var sidebar = document.getElementById('atlantum-sidebar');
    console.log(windowWidth);
    (0, react_1.useEffect)(function () {
        var handleResize = function () {
            setWindowSize(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return function () { return window.removeEventListener('resize', handleResize); };
    }, []);
    if (windowWidth != undefined) {
        if (windowWidth < 1050) {
            if (sidebar !== null) {
                sidebar.style.left = '-304px';
            }
        }
        else if (windowWidth > 1050 && checked) {
            setChecked(false);
            if (sidebar) {
                sidebar.style.left = '24px';
                sidebar.style.transform = 'translateX(0px)';
            }
        }
        else {
            if (sidebar) {
                sidebar.style.left = '24px';
                sidebar.style.transform = 'translateX(0px)';
            }
        }
    }
    var onClick = function () {
        setChecked(!checked);
        if (!checked) {
            if (sidebar !== null) {
                sidebar.style.transform = 'translateX(328px)';
            }
        }
        else if (checked) {
            if (sidebar !== null) {
                sidebar.style.transform = 'translateX(0px)';
            }
        }
    };
    return (react_1.default.createElement(StyledMainHeader, null,
        react_1.default.createElement("header", { className: "atlantum-main-header" },
            react_1.default.createElement("button", { className: "atlantum-header-button", onClick: onClick }, checked ? (react_1.default.createElement(icons_1.Icon, { name: 'close', className: "atlantum-header-icon", size: 24 })) : (react_1.default.createElement(icons_1.Icon, { name: 'menu', className: "atlantum-header-icon", size: 24 }))),
            props.children)));
};
exports.MainNavigation = MainNavigation;
var templateObject_1;
//# sourceMappingURL=main-navigation.js.map