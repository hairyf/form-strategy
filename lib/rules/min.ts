export default {
  validate(value: string, params: number) {
    return value.length >= params
  },
  message: (params: number) => {
    return `{__field__}未达到${params}个长度`
  },
  name: "该字段"
}