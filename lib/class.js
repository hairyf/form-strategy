class FormStrategy {
  validateContainer = {
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
  constructor(validateContainer = {}) {
    this.validateContainer = {...this.validateContainer, ...validateContainer}
  }
  validate = (type, value, name, params) => {
    const validateMethod = this.validateContainer[type]
    if (!validateMethod) {
      return {
        validate: false,
        error: `不存在 ${type} 规则验证, 请手动添加`
      }
    }
    if (typeof validateMethod.message === "function"){
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
  validateAll = (...validatesArgs) => {
    const findIndex = validatesArgs.findIndex(validatesItem => {
      const [type, value] = validatesItem
      const validateMethod = this.validateContainer[type]
      if (!validateMethod) {
        return true
      }
      const validateResult = validateMethod.validate(value)
      return !validateResult
    })
    const validatesItem = validatesArgs[findIndex]
    if (!validatesItem) {
      return {
        validate: true,
        error: ""
      }
    }
    const [type, value, name, params] = validatesItem
    return {
      ...this.validate(type, value, name, params)
    }
  }
}
export default FormStrategy