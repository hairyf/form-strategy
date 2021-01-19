export default {
    validate(value) {
        return /^[1-9][0-9]{4,10}$/.test(value);
    },
    message: "{__field__}格式不正确",
    name: "QQ账号"
};
