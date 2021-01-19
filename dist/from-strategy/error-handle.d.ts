import { ValidateResult } from "../from-types";
export declare type SetErrorHandleCallBackType = (resulrt: ValidateResult, params: any) => void;
declare const errorHandleModular: {
    /** 错误处理 */
    errorHandle: (resulrt: ValidateResult, params: any) => void;
    /** 设置错误处理 */
    setErrorHandle: (callBack: SetErrorHandleCallBackType) => void;
};
export default errorHandleModular;
export { errorHandleModular };
