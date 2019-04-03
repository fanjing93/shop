import * as types from './mutations-type'

const matations = {
    /**
     * state:当前状态树
     * val: 提交matations时传的参数
     */

    [types.SET_SHOP_NAME](state, val) {
        state.shop_name = val
    },

    [types.SET_LOGO_URL](state, val) {
        state.logo_url = val
    },

    [types.SET_FAVICON](state, val) {
        state.favicon = val
    },

    [types.SET_DOMAIN](state, val) {
        state.domain = val
    },

    [types.SET_SHOP_ID](state, val) {
        state.shop_id = val
    },

    [types.SET_PAGE_ID](state, val) {
        state.page_id = val
    },

    [types.SET_PAGE_NAME](state, val) {
        state.page_name = val
    },

    [types.SET_LOADING](state, val) {
        state.LOADING = val
    },

    [types.SET_COMPONENT_DATA](state, val) {
        state.component_data = val
    }
};

export default matations
