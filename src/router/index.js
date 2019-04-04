import Vue from 'vue'
import VueRouter from 'vue-router'

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

router.beforeEach((to, from, next) => {
    next()
});

export default router
