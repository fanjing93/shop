import axios from 'axios'
import qs from 'qs'
import $store from '../store/index'

axios.defaults.baseURL = '';   //配置接口地址

// 添加请求拦截器，在发送请求之前做些什么(**具体查看axios文档**)--------------------------------------------
axios.interceptors.request.use(function (config) {
    // 显示loading
    return config
}, function (error) {
    // 请求错误时弹框提示，或做些其他事
    return Promise.reject(error)
})

// 添加响应拦截器(**具体查看axios文档**)----------------------------------------------------------------
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么，允许在数据返回客户端前，修改响应的数据
    // 如果只需要返回体中数据，则如下，如果需要全部，则 return response 即可
    return response.data
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error)
})

// 封装数据返回失败提示函数---------------------------------------------------------------------------
function errorState(response) {
    // 隐藏loading
    // 如果http状态码正常，则直接返回数据
    if (response && (response.status === 200 || response.status === 304 || response.status === 400)) {
        // 如果不需要除了data之外的数据，可以直接 return response.data
        return response
    }
    // console.error('数据获取错误')
}

// 封装数据返回成功提示函数---------------------------------------------------------------------------
function successState(res) {
    // 隐藏loading
    // 统一判断后端返回的错误码(错误码与后台协商而定)
    if (res.code === 0) {
        return res
    }
    // console.error(res)
}

// 封装axios--------------------------------------------------------------------------------------
function api_axios(params) {
    let method = params.method ? params.method.toLocaleUpperCase() : 'GET';
    let data = params.data && Object.keys(params.data).length ? params.data : {};
    data['shop_id'] = localStorage.getItem('shop_id') || 139;
    if(params.loading){
        $store.commit('LOADING',true);
    }
    let httpDefault = {
        method: method,
        url: params.url,
        params: method === 'GET' || method === 'DELETE' ? data : null,
        data: method === 'POST' || method === 'PUT' ? qs.stringify(data) : null,
        timeout: 10000
    };

    // 注意**Promise**使用(Promise首字母大写)
    return new Promise((resolve, reject) => {
        axios(httpDefault).then((res) => {  // 此处的.then属于axios
            if(params.loading){
                $store.commit('LOADING',false);
            }
            successState(res)
            resolve(res)
        }).catch((response) => {
            if(params.loading){
                $store.commit('LOADING',false);
            }
            errorState(response)
            reject(response)
        })
    })
}

export default api_axios
