import Vue from 'vue'
import App from './App.vue'
import Vant from 'vant';
import 'vant/lib/index.css';
import 'lib-flexible'
import router from './router/index'
import $axios from './api/index'
import store from './store/index'
import utils from './utils/index'

Vue.config.productionTip = false;
Vue.prototype.$axios = $axios;

Vue.use(Vant);
Vue.use(utils);

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');
