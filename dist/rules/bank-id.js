export default {
    validate(value) {
        return /^[1-9]\d{9,29}$/.test(value);
    },
    message: "{__field__}格式不正确",
    name: "银行卡号"
};
