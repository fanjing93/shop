const getters = {
    logo_url: state => {
        console.log(state);
        console.log(state.logo_url ? state.logo_url : localStorage.getItem('logo_url'));
        return state.logo_url ? state.logo_url : localStorage.getItem('logo_url');
    },

    shop_id: state => {
        return state.shop_id;
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
    }
};

export default getters;
