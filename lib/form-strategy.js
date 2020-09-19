// 验证规则容器
const validateContainer = {
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
const extend = (type, options) => {
  validateContainer[type] = options
}
// 单规则验证
const validate = (type, value, name, params) => {
  const validateMethod = validateContainer[type]
  if (!validateMethod) {
    return {
      validate: false,
      error: `不存在 ${type} 规则验证, 请手动添加`
    }
  }
  const replaceName = name || validateMethod.name || type
  const errorMsg = validateMethod.message.replace("{__field__}", replaceName)
  const validateResult = validateMethod.validate(value, params)
  return {
    validate: validateResult,
    error: validateResult ? "" : errorMsg
  }
}
// 多规则验证
const validateAll = (...validatesArgs) => {
  const findIndex = validatesArgs.findIndex(validatesItem => {
    const [type, value] = validatesItem
    const validateMethod = validateContainer[type]
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

module.exports = {
  extend,
  validate,
  validateAll
}