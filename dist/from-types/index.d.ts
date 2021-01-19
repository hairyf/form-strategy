/** 校验规则配置 */
export interface ValidateContainerItem {
    /** 校验器 */
    validate(value: any, params?: any): boolean;
    /** 提示消息 */
    message: string | ((params: any) => string);
    /** 提示别名 */
    name?: string;
}
/** 校验容器配置 */
export declare type ValidateOptions<K extends string | number | symbol> = {
    [P in K]: ValidateContainerItem;
};
/** 校验规则结果 */
export interface ValidateResult {
    /** 当前校验索引 */
    index?: number;
    /** 校验是否成功 */
    validate: boolean;
    /** 错误信息 */
    error: string;
}
