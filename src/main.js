import Vue from 'vue'
import App from './App.vue'
import 'lib-flexible'
import router from './router/index'
import $axios from './api/index'
import store from './store/index'

Vue.config.productionTip = false;
Vue.prototype.$axios = $axios;

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');
