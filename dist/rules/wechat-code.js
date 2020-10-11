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
            return /^[a-zA-Z][-_a-zA-Z0-9]{5,19}$/.test(value);
        },
        message: "{__field__}格式不正确",
        name: "微信号"
    };
});
