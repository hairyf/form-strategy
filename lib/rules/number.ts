export default {
  validate(value: string) {
    return /^\d{1,}$/.test(value)
  },
  message: "{__field__}不是数字",
  name: "该数值"
}