/*
 * @Author: Mr.Mao
 * @LastEditors: Mr.Mao
 * @Date: 2020-10-12 08:47:52
 * @LastEditTime: 2020-12-08 16:21:05
 * @Description: 
 * @任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */
export default {
  validate(value: string, params: number) {
    return typeof value === 'string' && value.length >= params
  },
  message: (params: number) => {
    return `{__field__}未达到${params}个长度`
  },
  name: "该字段"
}