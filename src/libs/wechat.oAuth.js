import $axios from '@/api/index'
import api from '@/api/api'


const _get_wechat_oAuth = function (params) {
    return new Promise(async (resolve, reject) => {
        $axios({
            url: api.get_oAuth,
            loading: true,
            data:{
                redirect_url: encodeURI(encodeURIComponent(params && params['redirect_url'] ? params['redirect_url'] : window.location.href))
            }
        }).then(res => {
            if (res.code === 0) {
                resolve(res);
            } else {
                reject();
                console.error(res);
            }
        }).catch(err => {
            reject();
            console.error(err);
        })
    })
};


export const get_wechat_oAuth = async ()=> {
    let res = await _get_wechat_oAuth();
    let {
        url = window.location.href
    } = res.data;
    window.location.href = url;
};
