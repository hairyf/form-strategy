import { ValidateContainerItem, ValidateResult } from "../from-types"

/*
 * @Author: Mr.Mao
 * @LastEditors: Mr.Mao
 * @Date: 2021-01-19 11:58:53
 * @LastEditTime: 2021-01-19 14:42:26
 * @Description: 
 * @任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */
export type SetErrorHandleCallBackType = (resulrt:ValidateResult, params: any) => void
const errorHandleModular = new class {
   /** 错误处理 */
  errorHandle = (resulrt:ValidateResult, params: any) => {

  }
  /** 设置错误处理 */
  setErrorHandle = (callBack: SetErrorHandleCallBackType) => {
    this.errorHandle = callBack
  }
}
export default errorHandleModular
export {
  errorHandleModular
}