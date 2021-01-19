const errorHandleModular = new class {
    constructor() {
        /** 错误处理 */
        this.errorHandle = (resulrt, params) => {
        };
        /** 设置错误处理 */
        this.setErrorHandle = (callBack) => {
            this.errorHandle = callBack;
        };
    }
};
export default errorHandleModular;
