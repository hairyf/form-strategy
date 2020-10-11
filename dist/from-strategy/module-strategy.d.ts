import { ValidateContainerItem } from "../types";
export declare const extend: (type: string, option: ValidateContainerItem) => void;
export declare const validate: (type: string, value: any, name?: string | undefined, params?: any) => {
    validate: boolean;
    error: string;
};
export declare const validateAll: (...args: Array<[string, any, string?, any?]>) => {
    validate: boolean;
    error: string;
};
