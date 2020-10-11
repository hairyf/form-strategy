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
            return /^[a-zA-Z0-9_-]{4,16}$/.test(value);
        },
        message: "{__field__}至少4到16位（字母，数字，下划线，减号）",
        name: "账号"
    };
});
