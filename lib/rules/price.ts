export default {
  validate(value: string) {
    return /(?:^[1-9]([0-9]+)?(?:\.[0-9]{1,2})?$)|(?:^(?:0){1}$)|(?:^[0-9]\.[0-9](?:[0-9])?$)/.test(value)
  },
  message: "{__field__}不是正数或不符合数字/货币金额格式",
  name: "该数值"
}