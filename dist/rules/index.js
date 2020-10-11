(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./max", "./min", "./password", "./phone", "./tel-phone", "./user-name", "./wechat-code", "./not-english", "./not-chinese", "./english", "./chinese", "./bank-id", "./identity-id", "./car-id", "./passport", "./float", "./number", "./price", "./price-negative"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /** 长度最大校验(value: string, params: number); name: 该字段; message: {__field__}超出了${params}个长度限制 */
    var max_1 = require("./max");
    Object.defineProperty(exports, "max", { enumerable: true, get: function () { return max_1.default; } });
    /** 长度最低校验(value: string, params: number); name: 该字段; message: {__field__}未达到${params}个长度 */
    var min_1 = require("./min");
    Object.defineProperty(exports, "min", { enumerable: true, get: function () { return min_1.default; } });
    /** 密码校验(value: string); name: 密码; message: {__field__}至少最少6位, 1个大写字母, 1个小写字母, 1个数字, 1个特殊字符  */
    var password_1 = require("./password");
    Object.defineProperty(exports, "password", { enumerable: true, get: function () { return password_1.default; } });
    /** 手机号校验(value: string); name: 手机号; message: {__field__}格式不正确 */
    var phone_1 = require("./phone");
    Object.defineProperty(exports, "phone", { enumerable: true, get: function () { return phone_1.default; } });
    /** 座机校验(value: string); name: 座机; message: {__field__}格式不正确 */
    var tel_phone_1 = require("./tel-phone");
    Object.defineProperty(exports, "telPhone", { enumerable: true, get: function () { return tel_phone_1.default; } });
    /** 账号校验(value: string); name: 账号; message: {__field__}至少4到16位（字母，数字，下划线，减号） */
    var user_name_1 = require("./user-name");
    Object.defineProperty(exports, "userName", { enumerable: true, get: function () { return user_name_1.default; } });
    /** 微信号校验(value: string); name: 微信号; message: {__field__}格式不正确 */
    var wechat_code_1 = require("./wechat-code");
    Object.defineProperty(exports, "wechatCode", { enumerable: true, get: function () { return wechat_code_1.default; } });
    /** 不存在英文校验(value: string); name: 无; message: {__field__}不能包含字母 */
    var not_english_1 = require("./not-english");
    Object.defineProperty(exports, "notEnglish", { enumerable: true, get: function () { return not_english_1.default; } });
    /** 不存在中文校验(value: string); name: 无; message: {__field__}不能包含中文/汉字 */
    var not_chinese_1 = require("./not-chinese");
    Object.defineProperty(exports, "notChinese", { enumerable: true, get: function () { return not_chinese_1.default; } });
    /** 英文校验(value: string); name: 无; message: {__field__}不是英文字母 */
    var english_1 = require("./english");
    Object.defineProperty(exports, "english", { enumerable: true, get: function () { return english_1.default; } });
    /** 中文校验(value: string); name: 无; message: {__field__}不是中文/汉字 */
    var chinese_1 = require("./chinese");
    Object.defineProperty(exports, "chinese", { enumerable: true, get: function () { return chinese_1.default; } });
    /** 银行卡号校验(value: string); name: 银行卡号; message: {__field__}格式不正确 */
    var bank_id_1 = require("./bank-id");
    Object.defineProperty(exports, "bankId", { enumerable: true, get: function () { return bank_id_1.default; } });
    /** 身份证号校验(value: string); name: 身份证号; message: {__field__}格式不正确 */
    var identity_id_1 = require("./identity-id");
    Object.defineProperty(exports, "identityId", { enumerable: true, get: function () { return identity_id_1.default; } });
    /** 车牌号校验(value: string); name: 车牌号; message: {__field__}格式不正确 */
    var car_id_1 = require("./car-id");
    Object.defineProperty(exports, "carId", { enumerable: true, get: function () { return car_id_1.default; } });
    /** 护照校验(value: string); name: 护照; message: {__field__}格式不正确 */
    var passport_1 = require("./passport");
    Object.defineProperty(exports, "passport", { enumerable: true, get: function () { return passport_1.default; } });
    /** 浮点数校验(value: string); name: 该数值; message: {__field__}不是浮动数 */
    var float_1 = require("./float");
    Object.defineProperty(exports, "float", { enumerable: true, get: function () { return float_1.default; } });
    /** 数字校验(value: string); name: 该数值; message: {__field__}不是数字 */
    var number_1 = require("./number");
    Object.defineProperty(exports, "number", { enumerable: true, get: function () { return number_1.default; } });
    /** 数字/货币金额(value: string); name: 该数值; message: {__field__}不是正数或不符合数字/货币金额格式 */
    var price_1 = require("./price");
    Object.defineProperty(exports, "price", { enumerable: true, get: function () { return price_1.default; } });
    /** 数字/货币金额(负数, 千分位)(value: string); name: 该数; message: {__field__}不符合数字/货币金额格式 */
    var price_negative_1 = require("./price-negative");
    Object.defineProperty(exports, "priceNegative", { enumerable: true, get: function () { return price_negative_1.default; } });
});
