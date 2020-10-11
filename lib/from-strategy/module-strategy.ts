import { ValidateOptions, ValidateContainerItem } from "../types"

// 验证规则容器
const validateContainer: ValidateOptions = {
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
  }
}

// 添加验证规则函数
export const extend = (type: string, option: ValidateContainerItem) => {
  validateContainer[type] = option
}

// 单规则验证
export const validate = (type: string, value: any, name?: string, params?: any) => {
  const validateMethod = validateContainer[type]
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
  const errorMsg = validateMethod.message.replace("{__field__}", replaceName)
  const validateResult = validateMethod.validate(value, params)
  return {
    validate: validateResult,
    error: validateResult ? "" : errorMsg
  }
}

// 多验证方法
export const validateAll = (...args: Array<[string, any, string?, any?]>) => {
  const findIndex = args.findIndex(validatesItem => {
    const [type, value] = validatesItem
    const validateMethod = validateContainer[type]
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