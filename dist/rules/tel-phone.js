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
            return /^\d{3}-\d{8}$|^\d{4}-\d{7,8}$/.test(value);
        },
        message: "{__field__}格式不正确",
        name: "座机"
    };
});
