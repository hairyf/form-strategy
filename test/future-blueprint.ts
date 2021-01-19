/*
 * @Author: Mr.Mao
 * @LastEditors: Mr.Mao
 * @Date: 2021-01-19 14:55:32
 * @LastEditTime: 2021-01-19 15:00:47
 * @Description: 
 * @任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */
createFromStrategy({
  errorHandle: (error) => {
    console.log(error)
  },
  relus: {
    max: {
      validate(value: string) {
        return /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-7|9])|(?:5[0-3|5-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1|8|9]))\d{8}$/.test(value)
      },
      message: "{__field__}格式不正确",
      name: "手机号"
    }
  }
})

(async () => {
  await validate("email", "9561416545@qq.com")
})