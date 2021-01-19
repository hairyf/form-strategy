/*
 * @Author: Mr.Mao
 * @LastEditors: Mr.Mao
 * @Date: 2020-12-08 14:44:17
 * @LastEditTime: 2020-12-08 14:48:41
 * @Description: 最低数值
 * @任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */
export default {
  validate: (value: number, length: number) => {
    return typeof value === 'number' && value <= length;
  },
  message: (length: number) => {
    return `{__field__}超出了${length}个数量`;
  },
}