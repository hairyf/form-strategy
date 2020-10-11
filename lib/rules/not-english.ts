export default {
  validate(value: string) {
    return /^[^A-Za-z]*$/.test(value)
  },
  message: "{__field__}不能包含字母"
}