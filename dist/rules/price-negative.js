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
        validate(value) {
            return /^-?\d+(,\d{3})*(\.\d{1,2})?$/.test(value);
        },
        message: "{__field__}不符合数字/货币金额格式",
        name: "该数值"
    };
});
