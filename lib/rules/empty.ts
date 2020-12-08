/*
 * @Author: Mr.Mao
 * @LastEditors: Mr.Mao
 * @Date: 2020-10-19 09:39:15
 * @LastEditTime: 2020-12-08 14:49:15
 * @Description: 不为空
 * @任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */
export default {
  validate(value: string) {
    return typeof value === 'string' && value.length > 0
  },
  message: "{__field__}不能为空"
}