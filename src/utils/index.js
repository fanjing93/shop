const formatTime = (date, needHms = true) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();

    return [year, month, day].map(formatNumber).join('.') + (needHms ? ' ' + [hour, minute, second].map(formatNumber).join(':') : '')
};

const formatNumber = n => {
    n = n.toString();
    return n[1] ? n : '0' + n;
};

const formatPrice = (price, pop_zero = false) => {
    let result = price > 0 ? price / 100 : 0;
    return pop_zero ? parseFloat(formatFloat(result)) : formatFloat(result);
};

const formatFloat = (price, num = 2) => {
    return Math.abs(price).toFixed(num);
};

export default {
    install(Vue, options) {
        Vue.prototype.formatTime = formatTime;
        Vue.prototype.formatPrice = function (price, pop_zero = false) {
           /* this.$axios({
                url: '/api/v1/dm/theme_page/buyer/query'
            }).then(res=>{
                console.log(res);
            });*/
            let result = price > 0 ? price / 100 : 0;
            return pop_zero ? parseFloat(formatFloat(result)) : formatFloat(result);
        };
    }
}
