export default {
  validate(value: string) {
    return /^[a-zA-Z0-9_-]{4,16}$/.test(value)
  },
  message: "{__field__}至少4到16位（字母，数字，下划线，减号）",
  name: "账号"
}