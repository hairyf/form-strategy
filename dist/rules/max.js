(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        validate(value, params) {
            return value.length <= params;
        },
        message: (params) => {
            return `{__field__}超出了${params}个长度限制`;
        },
        name: "该字段"
    };
});
