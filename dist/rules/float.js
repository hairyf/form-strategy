export default {
    validate(value) {
        return /^\d+\.\d+$/.test(value);
    },
    message: "{__field__}不是浮动数",
    name: "该数值"
};
