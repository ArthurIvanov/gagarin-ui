"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
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
exports.AccordionItem = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var react_1 = __importDefault(require("react"));
var react_2 = require("react");
var icons_1 = require("../icons");
var StyledAccordionItem = styled_components_1.default.li(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    ul > li {\n        padding: ", ";\n        padding-left: ", ";\n        a:hover {\n            color: ", ";\n        }\n    }\n    .title {\n        outline: none;\n        cursor: pointer;\n        border-radius: ", ";\n        font-weight: ", ";\n        font-size: ", ";\n        font-family: ", ";\n        display: flex;\n        width: 100%;\n        border: none;\n        background-color: transparent;\n        align-items: center;\n        justify-content: space-between;\n        margin: 0;\n        padding: ", "\n            ", ";\n        transition: 0.2s ease;\n        color: ", ";\n\n        &:hover {\n            color: ", ";\n        }\n\n        &:focus {\n            box-shadow: 0 0 0 2px ", ";\n            color: ", ";\n        }\n    }\n\n    .content {\n        font-weight: ", ";\n        list-style: none;\n        padding: 0;\n        & > a {\n            padding-left: ", ";\n        }\n    }\n    .content__closed {\n        display: none;\n    }\n\n    .content__open {\n        display: block;\n    }\n    .icon {\n        transition: transform 0.1s ease;\n\n        &__rotated {\n            transform: rotateZ(180deg);\n        }\n    }\n"], ["\n    ul > li {\n        padding: ", ";\n        padding-left: ", ";\n        a:hover {\n            color: ", ";\n        }\n    }\n    .title {\n        outline: none;\n        cursor: pointer;\n        border-radius: ", ";\n        font-weight: ", ";\n        font-size: ", ";\n        font-family: ", ";\n        display: flex;\n        width: 100%;\n        border: none;\n        background-color: transparent;\n        align-items: center;\n        justify-content: space-between;\n        margin: 0;\n        padding: ", "\n            ", ";\n        transition: 0.2s ease;\n        color: ", ";\n\n        &:hover {\n            color: ", ";\n        }\n\n        &:focus {\n            box-shadow: 0 0 0 2px ", ";\n            color: ", ";\n        }\n    }\n\n    .content {\n        font-weight: ", ";\n        list-style: none;\n        padding: 0;\n        & > a {\n            padding-left: ", ";\n        }\n    }\n    .content__closed {\n        display: none;\n    }\n\n    .content__open {\n        display: block;\n    }\n    .icon {\n        transition: transform 0.1s ease;\n\n        &__rotated {\n            transform: rotateZ(180deg);\n        }\n    }\n"])), function (props) { return props.theme.spacing[12]; }, function (props) { return props.theme.spacing[24]; }, function (props) { return props.theme.colors.primary[200]; }, function (props) { return props.theme.borderRadius; }, function (props) { return props.theme.typography.fontWeight.medium; }, function (props) { return props.theme.typography.fontSize.base; }, function (props) { return props.theme.typography.family.base; }, function (props) { return props.theme.spacing[8]; }, function (props) { return props.theme.spacing[24]; }, function (props) { return props.theme.colors.neutral[400]; }, function (props) { return props.theme.colors.primary[200]; }, function (props) { return props.theme.colors.primary[100]; }, function (props) { return props.theme.colors.primary[200]; }, function (props) { return props.theme.typography.fontWeight.regular; }, function (props) { return props.theme.spacing[24]; });
var AccordionItem = function (_a) {
    var title = _a.title, children = _a.children, onClick = _a.onClick, className = _a.className;
    var _b = __read((0, react_2.useState)(false), 2), open = _b[0], setOpen = _b[1];
    onClick = function () {
        setOpen(!open);
    };
    return (react_1.default.createElement(StyledAccordionItem, { title: title, className: className },
        react_1.default.createElement("button", { className: "title", onClick: onClick },
            title,
            react_1.default.createElement(icons_1.Icon, { name: 'chevron-down', size: 24, className: "".concat(open
                    ? 'icon icon__rotated'
                    : 'icon') })),
        react_1.default.createElement("ul", { className: "".concat(open
                ? 'content content__open'
                : 'content content__closed') }, children)));
};
exports.AccordionItem = AccordionItem;
var templateObject_1;
//# sourceMappingURL=accordion-item.js.map