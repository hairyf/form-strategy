export default {
  validate(value: string) {
    return value.length > 0
  },
  message: "{__field__}不能为空"
}