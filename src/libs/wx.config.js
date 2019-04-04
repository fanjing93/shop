import wx from 'weixin-js-sdk';
import $axios from '@/api/index'
import api from '../api/api'

const _get_wechat_jsapi = function () {
    return new Promise(async (resolve, reject) => {
        $axios({
            url: api.get_jsapi,
            loading: true
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


export const get_wechat_jsapi = async ()=> {
    let res = await _get_wechat_jsapi();
    console.log(res);
};
