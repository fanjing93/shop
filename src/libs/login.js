import $axios from '@/api/index'
import api from '@/api/api'
import {getBrowserType} from '@/utils/index'
import {get_wechat_oAuth} from '@/libs/wechat.oAuth'


const _check_login = () => {
  return new Promise(async (resolve, reject)=>{
      $axios({
          url: api.check_login
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

const _login = () => {
    return new Promise(async (resolve, reject)=>{
        $axios({
            url: api.login
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



export const check_login = async () => {
    return new  Promise (async (resolve, reject)=>{
        let res = await _check_login(),
            browserType = getBrowserType();
        if(res.code !== 0){
            if(browserType === 2){
                await get_wechat_oAuth();
                resolve();
            }else{
                // TODO 非微信环境下登陆
                // resolve();
            }
        }
    });

};
