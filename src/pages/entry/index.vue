<template>
    <div>
        <div v-show="component_data.length" v-for="(item, index) in component_data" :key="item['componentKey']">
            <header_1 v-if="item['comp_key'] === 'header_1'"></header_1>
            <product_grid_1 v-if="item['comp_key'] === 'product_grid_1'" :component_data="item"></product_grid_1>
        </div>
    </div>
</template>

<script>
    import product_grid_1 from '../../components/product_grid_1'
    import header_1 from '../../components/header_1'
    import api from '../../api/api'
    import {mapState, mapMutations} from 'vuex'
    import * as types from '../../store/mutations-type'

    export default {
        data() {
            return {
                component_data: []
            }
        },
        components: {
            product_grid_1,
            header_1
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

                    this.component_data = component_data;
                }
            }
        },
        created() {
            this.get_theme();
        }
    }
</script>

<style scoped lang="scss">

</style>
