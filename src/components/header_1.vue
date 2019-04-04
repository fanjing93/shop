<template>
    <van-row class="header-container">
        <van-col span="8">
            <van-icon class="header-icon" name="ellipsis"></van-icon>
        </van-col>
        <van-col span="8" class="text-center header-center">
            <router-link to="/shelf" class="header-img-container">
                <img class="header-img" :src="logo_url" alt="">
            </router-link>
        </van-col>
        <van-col span="8" class="text-right header-right">
            <router-link to="/center" class="header-link">
                <van-icon class="header-icon" name="contact"></van-icon>
            </router-link>
            <router-link to="/cart" class="header-link">
                <van-icon class="header-icon" name="shopping-cart-o"></van-icon>
            </router-link>
        </van-col>
    </van-row>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        data() {
            return {}
        },
        computed: {
            ...mapState([
                'logo_url'
            ])
        },
        methods: {
        },
        created() {
        },
        mounted() {

        }
    }
</script>

<style scoped lang="scss">
    .header-container {
        $font-size: 75;

        display: flex;
        align-items: center;
        height: 1rem;
        padding: 0 0.5rem;
        position: fixed;
        z-index: 9999;
        background-color: #FFFFFF;
        width: 100%;
        top: 0;

        .header-center {
            display: flex;
            justify-content: center;
            align-items: center;

            .header-img-container {
                $width: 50/$font-size + rem;
                width: $width;
                height: $width;
                display: flex;

                .header-img {
                    object-fit: cover;
                    width: $width;
                    height: $width;
                }
            }
        }

        .header-right {
            display: flex;

            .header-link {
                flex: 1;
            }
        }

        .header-icon {
            font-size: 40/$font-size+rem;
        }
    }
</style>
