export default {
    validate(value) {
        return /^[a-zA-Z][-_a-zA-Z0-9]{5,19}$/.test(value);
    },
    message: "{__field__}格式不正确",
    name: "微信号"
};
