<template>

</template>

<script>
    import api from '../api/api'
    import {mapState, mapMutations} from 'vuex'
    import * as types from '../store/mutations-type'

    export default {
        data() {
            return {}
        },
        computed: {
            ...mapState([
                'shop_name',
                'shop_id',
                'favicon',
                'domain',
                'logo_url',
                'page_id',
                'page_name'
            ])
        },
        methods: {
            ...mapMutations({
                set_shop_name: types.SET_SHOP_NAME,
                set_logo_url: types.SET_LOGO_URL,
                set_favicon: types.SET_FAVICON,
                set_domain: types.SET_DOMAIN,
                set_shop_id: types.SET_SHOP_ID,
                set_page_id: types.SET_PAGE_ID,
                set_page_name: types.SET_PAGE_NAME,
            }),
            async get_theme() {
                let res = await this.$axios({
                    url: api.get_theme
                });

                if (res.code === 0) {
                    let {
                        shop = {},
                        theme = {}
                    } = res.data;

                    let {
                        component_data = []
                    } = theme;

                    this.set_domain(shop.domain);
                    this.set_logo_url(shop.logo_url);
                    this.set_favicon(shop.favicon);
                    this.set_shop_id(shop.shop_id);
                    this.set_shop_name(shop.shop_name);

                    this.set_page_id(theme.page_id);
                    this.set_page_name(theme.page_name);

                    localStorage.setItem('domain', shop.domain);
                    localStorage.setItem('logo_url', shop.logo_url);
                    localStorage.setItem('shop_id', shop.shop_id);

                    // this.component_data = component_data;
                }
            }
        },
        created() {
            this.get_theme();
        }
    }
</script>

<style scoped>

</style>
