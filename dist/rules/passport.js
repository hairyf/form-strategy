export default {
    validate(value) {
        return /(^[EeKkGgDdSsPpHh]\d{8}$)|(^(([Ee][a-fA-F])|([DdSsPp][Ee])|([Kk][Jj])|([Mm][Aa])|(1[45]))\d{7}$)/.test(value);
    },
    message: "{__field__}格式不正确",
    name: "护照"
};
