import FormStrategy from "../lib/class"
const { validate, validateAll } = new FormStrategy({
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
})