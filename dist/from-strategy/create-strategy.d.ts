import { ValidateOptions, ValidateResult } from "../from-types";
declare const _default: <T extends ValidateOptions<string> = {}>(validateContainer?: T) => {
    validate: (type: "empty" | "email" | keyof T, value: any, name?: string | undefined, params?: any) => {
        validate: boolean;
        error: string;
    };
    validateAll: (...args: ["empty" | "email" | keyof T, any, (string | undefined)?, any?][]) => ValidateResult;
};
export default _default;
