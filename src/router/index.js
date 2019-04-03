import Vue from 'vue'
import VueRouter from 'vue-router'
import $axios from '../api/index'
import $store from '../store/index'

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '*',
            redirect: '/shelf'
        },
        {
            path: '/shelf',
            component: (resolve) => require(['../pages/entry/index'], resolve)
        },
        {
            path: '/center',
            component: (resolve) => require(['../pages/center/index'], resolve)
        },
        {
            path: '/cart',
            meta: {
                title: '购物车',
                requiredLogin: true
            },
            component: (resolve) => require(['../pages/cart/index'], resolve)
        },
        {
            path: '/product/:id',
            component: (resolve) => require(['../pages/product/index'], resolve)
        }
    ]
});

const get_theme = function () {
    return new Promise(async (resolve, reject) => {
        $axios({
            url: '/api/v1/dm/theme_page/buyer/query',
            loading: true
        }).then(res => {
            if (res.code === 0) {
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

                $store.commit('LOGO_URL', shop.logo_url);
                $store.commit('SHOP_NAME', shop.shop_name);
                $store.commit('FAVICON', shop.favicon);
                $store.commit('DOMAIN', shop.domain);
                $store.commit('SHOP_ID', shop.shop_id);
                $store.commit('PAGE_NAME', theme.page_name);
                $store.commit('PAGE_ID', theme.page_id);
                $store.commit('COMPONENT_DATA', component_data);

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

router.beforeEach((to, from, next) => {
    get_theme().then(res=>{
        next()
    });
});

export default router
