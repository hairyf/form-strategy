export default {
  validate(value: string, params: number) {
    return value.length <= params
  },
  message: (params: number) => {
    return `{__field__}超出了${params}个长度限制`
  },
  name: "该字段"
}