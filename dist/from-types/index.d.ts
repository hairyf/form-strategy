/** 校验规则配置 */
export interface ValidateContainerItem {
    /** 校验器 */
    validate(value: any, params?: any): boolean;
    /** 提示消息 */
    message: string | ((params: any) => string);
    /** 提示别名 */
    name?: string;
}
export interface ValidateOptions {
    [key: string]: ValidateContainerItem;
}
/** 校验规则结果 */
export interface ValidateResult {
    /** 校验是否成功 */
    validate: boolean;
    /** 错误信息 */
    error: string;
}
