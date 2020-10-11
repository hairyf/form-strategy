import { ValidateOptions } from "../from-types"

export default <T extends ValidateOptions>(validateContainer: T) => {
  const newValidateContainer: ValidateOptions = {
    empty: {
      validate(value) {
        return value.length > 0
      },
      message: "{__field__}不能为空"
    },
    email: {
      validate(value) {
        return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value)
      },
      message: "{__field__}格式不正确",
      name: "邮箱"
    },
    ...validateContainer
  }
  type TypeKey = "empty" | "email" | keyof T
  // 单验证方法
  const validate = (type: TypeKey, value: any, name?: string, params?: any) => {
    const validateMethod = newValidateContainer[type as string]
    // 不存在校验方法
    if (!validateMethod) {
      return {
        validate: false,
        error: `不存在 ${type} 规则验证, 请手动添加`
      }
    }
    if (typeof validateMethod.message === "function") {
      validateMethod.message = validateMethod.message(params)
    }
    const replaceName = name || validateMethod.name || type
    const errorMsg = validateMethod.message.replace("{__field__}", replaceName.toString())
    const validateResult = validateMethod.validate(value, params)
    return {
      validate: validateResult,
      error: validateResult ? "" : errorMsg
    }
  }
  // 多验证方法
  const validateAll = (...args: Array<[TypeKey, any, string?, any?]>) => {
    const findIndex = args.findIndex(validatesItem => {
      const [type, value] = validatesItem
      const validateMethod = newValidateContainer[type as string]
      // 不存在校验方法
      if (!validateMethod) {
        return true
      }
      const validateResult = validateMethod.validate(value)
      return !validateResult
    })
    const validatesItem = args[findIndex]
    // 未找到则代表校验通过
    if (!validatesItem) {
      return {
        validate: true,
        error: ""
      }
    }
    const [type, value, name, params] = validatesItem
    return validate(type, value, name, params)
  }

  return {
    validate,
    validateAll
  }
} 