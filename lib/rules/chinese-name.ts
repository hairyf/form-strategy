export default {
  validate(value: string) {
    return /^(?:[\u4e00-\u9fa5·]{2,16})$/.test(value)
  },
  message: "{__field__}不符合中文姓名格式",
  name: "姓名"
}