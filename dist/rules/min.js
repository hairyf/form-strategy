export default {
    validate(value, params) {
        return value.length >= params;
    },
    message: (params) => {
        return `{__field__}未达到${params}个长度`;
    },
    name: "该字段"
};
