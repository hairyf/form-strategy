export default {
    validate(value) {
        return value.length > 0;
    },
    message: "{__field__}不能为空"
};
