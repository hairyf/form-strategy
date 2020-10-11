import { createFromStrategy } from "../lib"
const { validate, validateAll } = createFromStrategy({
  max: {
    validate(value, params) {
      return value.length <= params
    },
    message: (params) => {
      return `{__field__}超出了${params}个长度限制`
    },
  },
  phone: {
    validate(value) {
      return /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-7|9])|(?:5[0-3|5-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1|8|9]))\d{8}$/.test(value)
    },
    message: "{__field__}格式不正确",
    name: "手机号"
  }
})
describe("class-strategy", () => {
  test("单次验证成功", () => {
    const status = validate("email", "9561416545@qq.com")
    expect(status).toEqual({
      validate: true,
      error: ""
    })
  })
  test("多次验证成功", () => {
    const status = validateAll(
      ["email", "9561416545@qq.com", "邮箱"],
      ["empty", "毛先生", "名称"]
    )
    expect(status).toEqual({
      validate: true,
      error: ""
    })
  })
  test("单次验证失败", () => {
    const status = validate("email", "956141654.com")
    expect(status).toEqual({
      validate: false,
      error: "邮箱格式不正确"
    })
  })
  test("多次验证失败", () => {
    const status = validateAll(
      ["email", "9561416545@qq.com", "邮箱"],
      ["empty", "", "名称"]
    )
    expect(status).toEqual({
      validate: false,
      error: "名称不能为空"
    })
  })
  test("添加新规则验证, 并通过规则", () => {
    const status = validate("phone", "17324162579", "手机号")
    expect(status).toEqual({
      validate: true,
      error: ""
    })
  })
  test("添加规则时, 传递参数", () => {
    const status = validate("max", "12123131231231231", "手机号", 11)
    expect(status).toEqual({
      validate: false,
      error: "手机号超出了11个长度限制"
    })
  })
})
