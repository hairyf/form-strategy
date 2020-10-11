export default {
  validate(value: string) {
    return /^-?\d+(,\d{3})*(\.\d{1,2})?$/.test(value)
  },
  message: "{__field__}不符合数字/货币金额格式",
  name: "该数值"
}