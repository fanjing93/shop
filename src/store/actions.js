import $axios from '@/api/index'
import api from '@/api/api'

const _get_theme = function () {
    return new Promise(async (resolve, reject) => {
        $axios({
            url: api.get_theme,
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


const actions = {
    async get_theme(context) {
        let res = await _get_theme();
        let {
            shop = {},
            theme = {}
        } = res.data;

        let {
            component_data = []
        } = theme;

        localStorage.setItem('domain', shop.domain);
        localStorage.setItem('favicon', shop.favicon);
        localStorage.setItem('logo_url', shop.logo_url);
        localStorage.setItem('shop_name', shop.shop_name);
        localStorage.setItem('shop_id', shop.shop_id);
        localStorage.setItem('page_id', theme.page_id);
        localStorage.setItem('page_name', theme.page_name);

        context.commit('LOGO_URL', shop.logo_url);
        context.commit('SHOP_NAME', shop.shop_name);
        context.commit('FAVICON', shop.favicon);
        context.commit('DOMAIN', shop.domain);
        context.commit('SHOP_ID', shop.shop_id);
        context.commit('PAGE_NAME', theme.page_name);
        context.commit('PAGE_ID', theme.page_id);
        context.commit('COMPONENT_DATA', component_data);
    }
};

export default actions;
