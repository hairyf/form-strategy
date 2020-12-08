/*
 * @Author: Mr.Mao
 * @LastEditors: Mr.Mao
 * @Date: 2020-10-12 08:47:52
 * @LastEditTime: 2020-12-08 15:03:42
 * @Description:
 * @任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */
export default {
    validate(value) {
        return /^[1-9][0-9]{4,10}$/.test(value);
    },
    message: "{__field__}格式不正确",
    name: "QQ账号"
};
