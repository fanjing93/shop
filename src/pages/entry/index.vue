<template>
    <div class="wm-padding-top-1-5 wm-container">
        <keep-alive>
            <header_1></header_1>
        </keep-alive>
        <div v-show="component_data.length" v-for="(item, index) in component_data" :key="item['componentKey']">
            <product_grid_1 v-if="item['comp_key'] === 'product_grid_1'" :component_data="item"></product_grid_1>
        </div>
    </div>
</template>

<script>
    import product_grid_1 from '../../components/product_grid_1'
    import header_1 from '../../components/header_1'
    import {mapGetters} from 'vuex'
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
            ...mapGetters([
                'component_data'
            ])
        },
        methods: {

        },
        created() {
        }
    }
</script>

<style scoped lang="scss">
    .wm-padding-top-1-5{
        padding-top: 1.5rem;
    }
</style>
