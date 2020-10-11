export default {
  validate(value: string) {
    return /^[a-zA-Z]+$/.test(value)
  },
  message: "{__field__}不是英文字母"
}