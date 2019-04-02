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
        }
    ]
});

router.beforeEach((to, from, next) => {
    next()
});

export default router
