export default {
    validate(value) {
        return /^\d{3}-\d{8}$|^\d{4}-\d{7,8}$/.test(value);
    },
    message: "{__field__}格式不正确",
    name: "座机"
};
