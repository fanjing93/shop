const API = {
    'get_theme':'/api/v1/dm/theme_page/buyer/query',
    // get goods
    'get_goods_list': '/api/v1/goods/list/buyer/query',

    'get_buyer_theme':'/api/v1/dm/theme/buyer/query',

    'get_jsapi': '/api/v1/plugins/share/wechat/get_jsapi',

    'get_oAuth': '/api/v1/plugins/auth/wechat/do_auth',

    'check_login': '/api/v1/buyer/auth/login/query',
    'login': '/api/v1/buyer/auth/login/create',

    'get_goods_detail':'/api/v1/goods/detail/query',
    'get_promotion':'/api/v1/plugins/promotion/goods/query'
};

export default API;
