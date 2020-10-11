export default {
  validate(value: string) {
    return /^\S*(?=\S{6,})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/.test(value)
  },
  message: "{__field__}至少最少6位, 1个大写字母, 1个小写字母, 1个数字, 1个特殊字符",
  name: "密码"
}