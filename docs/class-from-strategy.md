# class-form-strategy 类表单策略验证

[![NPM version](https://img.shields.io/npm/v/form-strategy.svg)](https://www.npmjs.com/package/form-strategy)

类表单验证跟默认表单验证的使用方法类似，只是将规则内置设置的位置放到了`FormStrategy`类中。利用`TypeScript`的泛型，可以为规则提供良好的类型推测。

# 具体使用

首先，还是先将该库进行引入。

~~~js
npm install form-strategy --save
~~~

创建验证容器

~~~js
import FormStrategy from "form-strategy/dist/class"
const { validate, validateAll } = new FormStrategy({
  // 这里放置规则容器.... key值对应规则名称, 参数则相同
  max: {
    validate(value, params) {
      return value.length <= params
    },
    message: (params) => {
      return `{__field__}超出了${params}个长度限制`
    },
  }
})
// validate与validateAll使用方法一致, 则不多阐述
const status = validate("phone", "9561416545@qq.com", "手机号", 8)
{
  validate: true, // 表单是否通过验证, true为通过, 相反则不通过
  error: "手机号超出了8个长度限制" // 错误信息
}
~~~

