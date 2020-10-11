export default {
  validate(value: string) {
    return /^\d+\.\d+$/.test(value)
  },
  message: "{__field__}不是浮动数",
  name: "该数值"
}