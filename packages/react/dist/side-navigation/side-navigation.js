"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SideNavigation = void 0;
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var StyledSideNavigation = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    border-radius: ", ";\n    color: ", ";\n    flex-direction: row;\n    position: fixed;\n    left: ", ";\n    bottom: ", ";\n    transform: translateX(0px);\n    padding: ", ";\n    top: 120px;\n    width: 256px;\n\n    background-color: ", ";\n    box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.08);\n    display: none;\n\n    @media only screen and (max-width: 1050px) {\n        display: block;\n    }\n"], ["\n    border-radius: ", ";\n    color: ", ";\n    flex-direction: row;\n    position: fixed;\n    left: ", ";\n    bottom: ", ";\n    transform: translateX(0px);\n    padding: ", ";\n    top: 120px;\n    width: 256px;\n\n    background-color: ", ";\n    box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.08);\n    display: none;\n\n    @media only screen and (max-width: 1050px) {\n        display: block;\n    }\n"])), function (props) { return props.theme.borderRadius; }, function (props) { return props.theme.colors.neutral[400]; }, function (props) { return props.theme.spacing[24]; }, function (props) { return props.theme.spacing[24]; }, function (props) { return props.theme.spacing[24]; }, function (props) { return props.theme.colors.neutral[100]; });
var SideNavigation = function (props) {
    return (react_1.default.createElement(StyledSideNavigation, { id: "atlantum-sidebar" }, props.children));
};
exports.SideNavigation = SideNavigation;
var templateObject_1;
//# sourceMappingURL=side-navigation.js.map