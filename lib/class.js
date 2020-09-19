class FormStrategy {
  constructor(validateContainer) {
    this.validateContainer = validateContainer
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
      ...validate(type, value, name, params)
    }
  }
}
export default FormStrategy