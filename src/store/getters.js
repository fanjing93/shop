const getters = {
    LOADING: state => {
        return state.LOADING;
    },

    logo_url: state => {
        return state.logo_url ? state.logo_url : localStorage.getItem('logo_url');
    },

    shop_id: state => {
        return state.shop_id ? state.shop_id : localStorage.getItem('shop_id');
    },

    shop_name: state => {
        return state.shop_name;
    },

    favicon: state => {
        return state.favicon;
    },

    domain: state => {
        return state.domain;
    },

    page_id: state => {
        return state.page_id;
    },

    page_name: state => {
        return state.page_name;
    },

    component_data: state => {
        return state.component_data
    }
};

export default getters;
