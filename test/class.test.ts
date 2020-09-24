import FormStrategy from "../lib/class"
const { validate, validateAll } = new FormStrategy({
  max: {
    validate(value, params) {
      return value.length <= params
    },
    message: (params) => {
      return `{__field__}超出了${params}个长度限制`
    },
  },
  phone: {
    validate(value) {
      return /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-7|9])|(?:5[0-3|5-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1|8|9]))\d{8}$/.test(value)
    },
    message: "{__field__}格式不正确",
    name: "手机号"
  }
})
validate("phone", "17325862579")