"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductBanner = void 0;
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var StyledProductBanner = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    border: none;\n    border-radius: ", ";\n    margin-bottom: ", ";\n    background-size: auto;\n    background: url(", ") no-repeat center;\n    display: flex;\n    flex-direction: column;\n    align-content: center;\n    justify-content: center;\n    padding: ", ";\n    box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.08);\n\n    ", "\n\n    ", "\n    \n    ", "\n"], ["\n    border: none;\n    border-radius: ", ";\n    margin-bottom: ", ";\n    background-size: auto;\n    background: url(", ") no-repeat center;\n    display: flex;\n    flex-direction: column;\n    align-content: center;\n    justify-content: center;\n    padding: ", ";\n    box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.08);\n\n    ", "\n\n    ", "\n    \n    ", "\n"])), function (props) { return props.theme.spacing[8]; }, function (props) { return props.theme.spacing[24]; }, function (props) { return props.backgroundImage; }, function (props) { return props.theme.spacing[24]; }, function (props) {
    return props.size === 'regular' &&
        "\n        height: 256px;\n    ";
}, function (props) {
    return props.size === 'large' &&
        "\n        height: 320px;\n    ";
}, function (props) {
    return props.size === 'hero' &&
        "\n        height: 540px;\n    ";
});
var ProductBanner = function (_a) {
    var children = _a.children, backgroundImage = _a.backgroundImage, _b = _a.size, size = _b === void 0 ? 'regular' : _b, className = _a.className;
    return (react_1.default.createElement(StyledProductBanner, { backgroundImage: backgroundImage, size: size, className: className },
        react_1.default.createElement("div", { className: "atlantum-product-banner-content" }, children)));
};
exports.ProductBanner = ProductBanner;
var templateObject_1;
//# sourceMappingURL=product-banner.js.map