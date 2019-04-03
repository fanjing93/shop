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
    import { mapGetters } from 'vuex'
    export default {
        data() {
            return {

            }
        },
        computed:{
            ...mapGetters([
                'logo_url'
            ])
        }
    }
</script>

<style scoped lang="scss">
    $font-size:75!global;
    .header-container {
        display: flex;
        align-items: center;
        height: 1.5rem;
        padding: 0 0.5rem;
        .header-center{
            display: flex;
            justify-content: center;
            align-items: center;
            .header-img-container{
                $width: 80/$font-size + rem;
                width: $width;
                height: $width;
                display: flex;
                .header-img{
                    object-fit: cover;
                    width: $width;
                    height: $width;
                }
            }
        }
        .header-right{
            display: flex;
            .header-link{
                flex: 1;
            }
        }
        .header-icon{
            font-size: 45/$font-size+rem;
        }
    }
</style>
