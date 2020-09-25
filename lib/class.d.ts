/** 校验规则配置 */
interface ValidateContainerItem {
  /** 校验器 */
  validate(value: any, params?: any): boolean;
  /** 提示消息 */
  message: string | ((params: any) => string);
  /** 提示别名 */
  name?: string;
}

interface ValidateOptions {
  [key: string]: ValidateContainerItem
}

/** 校验规则结果 */
interface ValidateResult {
  /** 校验是否成功 */
  validate: boolean;
  /** 错误信息 */
  error: string;
}
declare class FormStrategy<T extends ValidateOptions> {
  constructor(validateContainer: T);
  validate(type: "empty" | "email" | keyof T, value: any, name?: string, params?: any): ValidateResult;
  validateAll(...args: Array<["empty" | "email" | keyof T, any, string?, any?]>): ValidateResult;
}
export default FormStrategy