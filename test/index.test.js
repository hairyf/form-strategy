import formStrategy from "../lib/form-strategy"

test("单次验证成功", () => {
  const status = formStrategy.validate(
    "email",
    "9561416545@qq.com"
  )
  expect(status).toEqual({
    validate: true,
    error: ""
  })
})

test("多次验证成功", () => {
  const status = formStrategy.validateAll(
    ["email", "9561416545@qq.com", "邮箱"],
    ["empty", "毛先生", "名称"]
  )
  expect(status).toEqual({
    validate: true,
    error: ""
  })
})

test("单次验证失败", () => {
  const status = formStrategy.validate(
    "email",
    "956141654.com"
  )
  expect(status).toEqual({
    validate: false,
    error: "邮箱格式不正确"
  })
})

test("多次验证失败", () => {
  const status = formStrategy.validateAll(
    ["email", "9561416545@qq.com", "邮箱"],
    ["empty", "", "名称"]
  )
  expect(status).toEqual({
    validate: false,
    error: "名称不能为空"
  })
})
