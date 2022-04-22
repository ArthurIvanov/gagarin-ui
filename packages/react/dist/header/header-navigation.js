"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var StyledHeaderNavigation = styled_components_1.default.ul(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    padding: 0;\n    display: flex;\n    list-style: none;\n    margin: 0 0 0 40px;\n    a {\n        color: ", ";\n    }\n    & > *:not(:last-child) {\n        margin-right: 24px;\n    }\n"], ["\n    padding: 0;\n    display: flex;\n    list-style: none;\n    margin: 0 0 0 40px;\n    a {\n        color: ", ";\n    }\n    & > *:not(:last-child) {\n        margin-right: 24px;\n    }\n"])), function (props) { return props.theme.colors.neutral[400]; });
var HeaderNavigation = function (props) {
    return react_1.default.createElement(StyledHeaderNavigation, null, props.children);
};
exports.default = HeaderNavigation;
var templateObject_1;
//# sourceMappingURL=header-navigation.js.map