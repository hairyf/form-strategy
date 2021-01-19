/** 长度最大校验(value: string, params: number); name: 该字段; message: {__field__}超出了${params}个长度限制 */
export { default as max } from "./max";
/** 长度最低校验(value: string, params: number); name: 该字段; message: {__field__}未达到${params}个长度 */
export { default as min } from "./min";
/** 密码校验(value: string); name: 密码; message: {__field__}至少最少6位, 1个大写字母, 1个小写字母, 1个数字, 1个特殊字符  */
export { default as password } from "./password";
/** 手机号校验(value: string); name: 手机号; message: {__field__}格式不正确 */
export { default as phone } from "./phone";
/** 座机校验(value: string); name: 座机; message: {__field__}格式不正确 */
export { default as telPhone } from "./tel-phone";
/** 账号校验(value: string); name: 账号; message: {__field__}至少4到16位（字母，数字，下划线，减号） */
export { default as userName } from "./user-name";
/** 微信号校验(value: string); name: 微信号; message: {__field__}格式不正确 */
export { default as wechatCode } from "./wechat-code";
/** 不存在英文校验(value: string); name: 无; message: {__field__}不能包含字母 */
export { default as notEnglish } from "./not-english";
/** 不存在中文校验(value: string); name: 无; message: {__field__}不能包含中文/汉字 */
export { default as notChinese } from "./not-chinese";
/** 英文校验(value: string); name: 无; message: {__field__}不是英文字母 */
export { default as english } from "./english";
/** 中文校验(value: string); name: 无; message: {__field__}不是中文/汉字 */
export { default as chinese } from "./chinese";
/** 中文姓名校验(value: string); name: 姓名; message: {__field__}不符合中文姓名格式 */
export { default as chineseName } from "./chinese-name";
/** 银行卡号校验(value: string); name: 银行卡号; message: {__field__}格式不正确 */
export { default as bankId } from "./bank-id";
/** 身份证号校验(value: string); name: 身份证号; message: {__field__}格式不正确 */
export { default as identityId } from "./identity-id";
/** 车牌号校验(value: string); name: 车牌号; message: {__field__}格式不正确 */
export { default as carId } from "./car-id";
/** 护照校验(value: string); name: 护照; message: {__field__}格式不正确 */
export { default as passport } from "./passport";
/** 浮点数校验(value: string); name: 该数值; message: {__field__}不是浮动数 */
export { default as float } from "./float";
/** 数字校验(value: string); name: 该数值; message: {__field__}不是数字 */
export { default as number } from "./number";
/** 数字/货币金额(value: string); name: 该数值; message: {__field__}不是正数或不符合数字/货币金额格式 */
export { default as price } from "./price";
/** 数字/货币金额(负数, 千分位)(value: string); name: 该数值; message: {__field__}不符合数字/货币金额格式 */
export { default as priceNegative } from "./price-negative";
/** 最低数值(value: number, params: number); name: 该数值; message: {__field__}未达到${params}个数量 */
export { default as countMin } from "./count-min";
/** 最高数值(value: number, params: number); name: 该数值; message: {__field__}超出了${params}个数量 */
export { default as countMax } from "./count-min";
