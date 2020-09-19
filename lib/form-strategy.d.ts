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

type Extend = (type: string, options: ValidateOptions) => void;
type Validate = (type: string, value: any, name?: string, params?: any) => ValidateResult;
type ValidateAll = (...args: Array<any>) => ValidateResult;
interface FormStrategy {
  extend: Extend;
  validate: Validate;
  validateAll: ValidateAll;
}

/** 添加校验规则 */
export const extend: Extend;
/** 进行单次校验 */
export const validate: Validate;
/** 进行多次校验 */
export const validateAll: ValidateAll;

/** 表单校验对象 */
declare const formStrategy: FormStrategy
export default formStrategy