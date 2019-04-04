<template>
    <div class="wm-padding-top-1-5">
        <header_1></header_1>
        <div class="wm-goods-detail">
            <van-swipe :autoplay="3000" class="bg-white">
                <van-swipe-item v-for="(image, index) in detail.images" :key="index">
                    <img :src="image" alt=""/>
                </van-swipe-item>
            </van-swipe>
            <div class="wm-goods-detail-name text-overflow-ellipsis-2 bg-white">
                <span class="goods_name">{{ detail.goods_name }}</span>
                <div v-if="show_share_btn" @click="goodsShare" class="wm-share">
                    <i class="el-icon-share"></i>
                    <span class="font-size-12">分享</span>
                </div>
            </div>
            <div class="goods-price bg-white">￥{{ detail['price'] }}</div>
            <div class="wm-goods-promotion bg-white">
                <van-button @click="show = true">领取</van-button>
                <van-popup v-model="show" position="bottom">
                    内容
                </van-popup>
            </div>
        </div>
        <van-goods-action class="bg-white">
            <van-goods-action-mini-btn
                    icon="chat-o"
                    text="客服"></van-goods-action-mini-btn>
            <van-goods-action-mini-btn
                    info="5"
                    icon="cart-o"
                    text="购物车"></van-goods-action-mini-btn>
            <van-goods-action-mini-btn
                    icon="shop-o"
                    text="店铺"></van-goods-action-mini-btn>
            <van-goods-action-big-btn text="加入购物车"></van-goods-action-big-btn>
            <van-goods-action-big-btn
                    primary
                    text="立即购买"></van-goods-action-big-btn>
        </van-goods-action>
    </div>
</template>

<script>
    import header_1 from '@/components/header_1'
    import api from '@/api/api'
    import {formatPrice} from "@/utils/index"

    export default {
        data() {
            return {
                id: this.$route.params.id,
                detail: {},
                coupons: [],
                full_cut: [],
                b_phlit: [],
                show_share_btn: false,
                show: false,
                actions: [
                    {
                        name: '选项'
                    },
                    {
                        name: '选项',
                        subname: '描述信息'
                    },
                    {
                        loading: true
                    },
                    {
                        name: '禁用选项',
                        disabled: true
                    }
                ]
            }
        },
        components: {
            header_1
        },
        methods: {
            async get_goods_detail() {
                let res = await this.$axios({
                    url: api.get_goods_detail,
                    loading: true,
                    data: {
                        id: this.id
                    }
                });
                if (res.code === 0) {
                    let {
                        min_price,
                        max_price
                    } = res.data;
                    if (min_price === max_price) {
                        res.data['price'] = formatPrice(min_price);
                    } else {
                        res.data['price'] = `${formatPrice(min_price)}~${formatPrice(max_price)}`;
                    }
                    this.detail = res.data;
                }
            },
            async get_promotion() {
                let res = await this.$axios({
                    url: api.get_promotion,
                    loading: true,
                    data: {
                        goods_id: this.id
                    }
                });
                if (res.code === 0) {
                    let {
                        campaign_list = []
                    } = res.data;
                    campaign_list.map(item => {
                        let activity_type = item['activity_type'];
                        switch (activity_type) {
                            case 'b_phlit':
                                this.show_share_btn = true;
                                this.b_phlit.push(item);
                                break;
                            case 'm_coupon':
                                this.coupons.push(item);
                                break;
                            case 'full_cut':
                                this.full_cut.push(item);
                                break;
                        }

                    });
                }
            },
            onSelect(item) {
                // 点击选项时默认不会关闭菜单，可以手动关闭
                this.show = false;
                Toast(item.name);
            },
            goodsShare() {
                console.log('share');
            }
        },
        created() {
            this.get_goods_detail();
            this.get_promotion();
        },
        mounted() {
        }
    }
</script>

<style scoped lang="scss">
    $init-font-size: 37.5;

    .wm-goods-detail {
        .van-swipe {
            .van-swipe-item {
                width: 100%;

                img {
                    object-fit: contain;
                    width: 10rem;
                    height: 10rem;
                }
            }
        }

        .wm-goods-detail-name {
            padding: 0.2rem 0.32rem;
            font-size: 0.42rem;
            display: flex;
            align-items: center;
            justify-content: space-between;

            .goods_name {
                flex: 1;
                font-size: 0.426667rem;
            }

            .wm-share {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                flex-basis: auto;

                .el-icon-share {
                    color: #EA3F3F;
                    font-size: 0.48rem;
                }
            }
        }

        .goods-price {
            color: #EB3D3D;
            padding: 0 0.32rem;
            font-size: 22/$init-font-size + rem;
        }

        .wm-goods-promotion {
            margin-top: 10/$init-font-size + rem;
            background-color: #FFFFFF;
        }
    }
    .van-goods-action-mini-btn,
    .van-button--large{
        height: 1.2rem;
        font-size: 12/$init-font-size+rem;
    }

    .van-goods-action-mini-btn__icon{
        font-size: 20/$init-font-size+rem;
    }

    .van-button--large .van-button__text{
        color: #FFFFFF;
    }

</style>
