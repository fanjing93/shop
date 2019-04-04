<template>
    <van-list
            class="list-container width-100"
            :style="margin_top"
            v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoadList">
        <van-cell
                v-if="row_num >= index+1"
                v-for="(item,index) in list"
                :key="item['goods_id']"
                class="list-item"
                :class="item_class">
            <router-link :to="`/product/${item['goods_id']}`" class="list-item-link font-size-12">
                <img :src="item.images" class="list-item-img" alt="">
                <div class="text-overflow-ellipsis text-center line-height-1-5">{{ item.goods_name }}</div>
                <div class="line-height-1-5">￥{{ item['min_price'] }}</div>
            </router-link>
        </van-cell>
    </van-list>
</template>

<script>
    import {mapGetters} from 'vuex'
    import api from '../api/api'

    export default {
        props: {
            component_data: {
                type: Object,
                required: true
            }
        },
        data() {
            return {
                current_component_data: this.component_data,
                margin_top: {'margin-top': 0},
                req_data: {
                    goods_name: '',
                    group_id: '',
                    is_on_shelf: 1,
                    page_size: 10,
                    page_index: 0,
                    shop_id: this.shop_id
                },
                column_num: 2,
                row_num: 100,
                item_class: 'width-50',
                list: [],
                total_num: 0,
                loading: false,
                finished: false
            }
        },
        computed: {
            ...mapGetters([
                'shop_id'
            ])
        },
        methods: {
            handle_component_data() {
                let data = this.current_component_data,
                    comp_content = data['comp_content'];
                let {
                    margin = 0,
                    goods_search = '',
                    group_num = '',
                    column_num = 2,
                    row_num = 5,
                    order_by = []
                } = comp_content;
                this.margin_top = {'margin-top': margin + '%'};
                this.column_num = Number(column_num);
                this.row_num = Number(row_num);
                this.item_class = Number(column_num) === 2 ? 'width-50' : Number(column_num) === 3 ? 'width-30' : 'width-50';
                let order_by_arr = [];
                order_by.map(item => {
                    let order_by_obj = {};
                    order_by_obj[item['order_key']] = item['order_value'];
                    order_by_arr.push(order_by_obj);
                });
                this.req_data['goods_name'] = goods_search;
                this.req_data['group_id'] = group_num;
                this.req_data['order_by'] = JSON.stringify(order_by_arr);
            },
            async get_goods_list() {
                let res = await this.$axios({
                    url: api.get_goods_list,
                    data: this.req_data
                });
                if (res.code === 0) {
                    let {
                        total_num = 0,
                        list = []
                    } = res.data;
                    list.map(item => {
                        item['min_price'] = this.formatPrice(item['min_price'])
                    });
                    this.list = this.list.concat(list);
                    this.total_num = total_num;
                }
                // 加载状态结束
                this.loading = false;

                // 数据全部加载完成
                if (this.list.length >= this.total_num) {
                    this.finished = true;
                }
            },
            onLoadList() {
                this.req_data.page_index++;
                this.get_goods_list();
            }
        },
        created() {
            this.handle_component_data();
        }
    }
</script>

<style scoped lang="scss">
    $init_width: 100%;
    .width-100 {
        width: $init_width;
    }

    .width-30 {
        width: $init_width/3;
    }

    .width-50 {
        width: $init_width/2;
    }

    .height-100 {
        height: $init_width;
    }

    .font-size-12{
        font-size: .32rem;
    }

    .line-height-1-5{
        line-height: 1.5;
    }

    .list-container {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        background-color: #FFFFFF;
        padding: 0 0.5rem;

        .list-item {
            &:nth-child(2n+1) {
                padding: 0.2rem 0.25rem 0.2rem 0;
            }

            &:nth-child(2n) {
                padding: 0.2rem 0 0.2rem 0.25rem;
            }

            &-link {
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
            }

            &-img {
                width: 100%;
                height: 4.2rem;
                object-fit: contain;
                margin-bottom: 0.2rem;
            }
        }
    }
</style>
