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
var text_link_1 = require("../text-link");
var StyledHeaderNavigationItem = styled_components_1.default.li(templateObject_1 || (templateObject_1 = __makeTemplateObject([""], [""])));
var HeaderNavigationItem = function (_a) {
    var children = _a.children;
    return (react_1.default.createElement(StyledHeaderNavigationItem, null,
        react_1.default.createElement(text_link_1.TextLink, null, children)));
};
exports.default = HeaderNavigationItem;
var templateObject_1;
//# sourceMappingURL=header-navigation-item.js.map