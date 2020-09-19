/** 校验规则配置 */
interface ValidateOptions {
  /** 校验器 */
  validate(value: any, params?: any): boolean;
  /** 提示消息 */
  message: string | ((params: any) => string);
  /** 提示别名 */
  name?: string;
}
/** 校验规则结果 */
interface ValidateResult {
  /** 校验是否成功 */
  validate: boolean;
  /** 错误信息 */
  error: string;
}
declare class FormStrategy<T> {
  private validateContainer: T
  constructor(validateContainer: T);
  validate(type: keyof T, value: any, name?: string, params?: any): ValidateResult;
  validateAll(...args: Array<[keyof T, any, string?, any?]>): ValidateResult;
}
export default FormStrategy