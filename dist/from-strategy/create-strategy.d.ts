import { ValidateOptions, ValidateResult } from "../from-types";
export declare type SetErrorHandleCallBackType = (resulrt: ValidateResult, params: any) => void;
declare const _default: <T extends ValidateOptions<string> = {}>(validateContainer?: T) => {
    validate: (type: "empty" | "email" | keyof T, value: any, name?: string | undefined, params?: any) => {
        validate: boolean;
        error: string;
    };
    validateAll: (...args: ["empty" | "email" | keyof T, any, (string | undefined)?, any?][]) => ValidateResult;
    setErrorHandle: (callBack: SetErrorHandleCallBackType) => SetErrorHandleCallBackType;
};
export default _default;
