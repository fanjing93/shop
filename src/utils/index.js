const formatNumber = n => {
    n = n.toString();
    return n[1] ? n : '0' + n;
};

const formatFloat = (price, num = 2) => {
    return Math.abs(price).toFixed(num);
};

export const formatTime = (date, needHms = true) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();

    return [year, month, day].map(formatNumber).join('.') + (needHms ? ' ' + [hour, minute, second].map(formatNumber).join(':') : '')
};

export const formatPrice = (price, pop_zero = false) => {
    let result = price > 0 ? price / 100 : 0;
    return pop_zero ? parseFloat(formatFloat(result)) : formatFloat(result);
};

export const getBrowserType = ()=>{
    let ua = navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == "micromessenger") {
        // 微信
        return 2;
    } else {
        // web
        return 3;
    }
};
