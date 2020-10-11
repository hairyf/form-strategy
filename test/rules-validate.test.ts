import { createFromStrategy } from "../lib"
import * as rules from "../lib/rules"

const { validate } = createFromStrategy({
  ...rules
})

describe("rules-validate", () => {
  test("数字/货币金额(负数, 千分位)校验失败", () => {
    const status = validate("priceNegative", "asdas")
    expect(status).toEqual({
      validate: false,
      error: "该数值不符合数字/货币金额格式"
    })
  })
  test("数字/货币金额(负数, 千分位)校验成功", () => {
    const status = validate("priceNegative", "-8.99")
    expect(status).toEqual({
      validate: true,
      error: ""
    })
  })

  test("数字/货币金额校验失败", () => {
    const status = validate("price", "asdas")
    expect(status).toEqual({
      validate: false,
      error: "该数值不是正数或不符合数字/货币金额格式"
    })
  })
  test("数字/货币金额校验成功", () => {
    const status = validate("price", "8.99")
    expect(status).toEqual({
      validate: true,
      error: ""
    })
  })

  test("数字校验失败", () => {
    const status = validate("number", "asda")
    expect(status).toEqual({
      validate: false,
      error: "该数值不是数字"
    })
  })
  test("数字校验成功", () => {
    const status = validate("number", "9123")
    expect(status).toEqual({
      validate: true,
      error: ""
    })
  })

  test("浮点数校验失败", () => {
    const status = validate("float", "123")
    expect(status).toEqual({
      validate: false,
      error: "该数值不是浮动数"
    })
  })
  test("浮点数校验成功", () => {
    const status = validate("float", "0.09")
    expect(status).toEqual({
      validate: true,
      error: ""
    })
  })

  test("护照校验失败", () => {
    const status = validate("passport", "asb")
    expect(status).toEqual({
      validate: false,
      error: "护照格式不正确"
    })
  })
  test("护照校验成功", () => {
    const status = validate("passport", "141234567")
    expect(status).toEqual({
      validate: true,
      error: ""
    })
  })

  test("车牌号校验失败", () => {
    const status = validate("carId", "asb")
    expect(status).toEqual({
      validate: false,
      error: "车牌号格式不正确"
    })
  })
  test("车牌号校验成功", () => {
    const status = validate("carId", "京A00599")
    expect(status).toEqual({
      validate: true,
      error: ""
    })
  })

  test("身份证号校验失败", () => {
    const status = validate("identityId", "asb")
    expect(status).toEqual({
      validate: false,
      error: "身份证号格式不正确"
    })
  })
  test("身份证号校验成功", () => {
    const status = validate("identityId", "652801198202286713")
    expect(status).toEqual({
      validate: true,
      error: ""
    })
  })

  test("银行卡号校验失败", () => {
    const status = validate("bankId", "asb")
    expect(status).toEqual({
      validate: false,
      error: "银行卡号格式不正确"
    })
  })
  test("银行卡号校验成功", () => {
    const status = validate("bankId", "6216610200016587010")
    expect(status).toEqual({
      validate: true,
      error: ""
    })
  })

  test("中文校验失败", () => {
    const status = validate("chinese", "asb")
    expect(status).toEqual({
      validate: false,
      error: "chinese不是中文/汉字"
    })
  })
  test("中文校验成功", () => {
    const status = validate("chinese", "我是")
    expect(status).toEqual({
      validate: true,
      error: ""
    })
  })

  test("英文字母校验失败", () => {
    const status = validate("english", "我是")
    expect(status).toEqual({
      validate: false,
      error: "english不是英文字母"
    })
  })
  test("英文字母校验成功", () => {
    const status = validate("english", "asbasd")
    expect(status).toEqual({
      validate: true,
      error: ""
    })
  })

  test("不存在中文校验失败", () => {
    const status = validate("notChinese", "我是")
    expect(status).toEqual({
      validate: false,
      error: "notChinese不能包含中文/汉字"
    })
  })
  test("不存在中文校验成功", () => {
    const status = validate("notChinese", "123")
    expect(status).toEqual({
      validate: true,
      error: ""
    })
  })

  test("不存在英文校验失败", () => {
    const status = validate("notEnglish", "github666")
    expect(status).toEqual({
      validate: false,
      error: "notEnglish不能包含字母"
    })
  })
  test("不存在英文校验成功", () => {
    const status = validate("notEnglish", "123")
    expect(status).toEqual({
      validate: true,
      error: ""
    })
  })

  test("微信号校验失败", () => {
    const status = validate("wechatCode", "1")
    expect(status).toEqual({
      validate: false,
      error: "微信号格式不正确"
    })
  })
  test("微信号校验成功", () => {
    const status = validate("wechatCode", "github666")
    expect(status).toEqual({
      validate: true,
      error: ""
    })
  })

  test("账号校验失败", () => {
    const status = validate("userName", "1")
    expect(status).toEqual({
      validate: false,
      error: "账号至少4到16位（字母，数字，下划线，减号）"
    })
  })
  test("账号校验成功", () => {
    const status = validate("userName", "xiaohua_qq")
    expect(status).toEqual({
      validate: true,
      error: ""
    })
  })

  test("座机校验失败", () => {
    const status = validate("telPhone", "1")
    expect(status).toEqual({
      validate: false,
      error: "座机格式不正确"
    })
  })
  test("座机校验成功", () => {
    const status = validate("telPhone", "0936-4211235")
    expect(status).toEqual({
      validate: true,
      error: ""
    })
  })

  test("密码校验失败", () => {
    const status = validate("password", "1")
    expect(status).toEqual({
      validate: false,
      error: "密码至少最少6位, 1个大写字母, 1个小写字母, 1个数字, 1个特殊字符"
    })
  })
  test("密码校验成功", () => {
    const status = validate("password", "Kd@curry666")
    expect(status).toEqual({
      validate: true,
      error: ""
    })
  })

  test("长度最小校验失败", () => {
    const status = validate("min", "1", "", 2)
    expect(status).toEqual({
      validate: false,
      error: "该字段未达到2个长度"
    })
  })
  test("长度最小校验成功", () => {
    const status = validate("min", "1", "", 1)
    expect(status).toEqual({
      validate: true,
      error: ""
    })
  })

  test("长度最大校验失败", () => {
    const status = validate("max", "123", "", 2)
    expect(status).toEqual({
      validate: false,
      error: "该字段超出了2个长度限制"
    })
  })
  test("长度最大校验成功", () => {
    const status = validate("max", "123", "", 3)
    expect(status).toEqual({
      validate: true,
      error: ""
    })
  })

  test("手机号校验失败", () => {
    const status = validate("phone", "13")
    expect(status).toEqual({
      validate: false,
      error: "手机号格式不正确"
    })
  })
  test("手机号校验成功", () => {
    const status = validate("phone", "17325862579")
    expect(status).toEqual({
      validate: true,
      error: ""
    })
  })
})