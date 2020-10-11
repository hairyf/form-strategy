(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./from-strategy/module-strategy", "./from-strategy/create-strategy"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var module_strategy_1 = require("./from-strategy/module-strategy");
    Object.defineProperty(exports, "extend", { enumerable: true, get: function () { return module_strategy_1.extend; } });
    Object.defineProperty(exports, "validate", { enumerable: true, get: function () { return module_strategy_1.validate; } });
    Object.defineProperty(exports, "validateAll", { enumerable: true, get: function () { return module_strategy_1.validateAll; } });
    var create_strategy_1 = require("./from-strategy/create-strategy");
    Object.defineProperty(exports, "createFromStrategy", { enumerable: true, get: function () { return create_strategy_1.default; } });
});
