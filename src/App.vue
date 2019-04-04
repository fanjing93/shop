<template>
    <div id="app">
        <van-loading v-show="LOADING" type="spinner" color="white" class="loading"></van-loading>
        <router-view></router-view>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        name: 'app',
        computed: {
            ...mapGetters([
                'LOADING'
            ])
        }
    }
</script>

<style lang="scss">
    @import "./assets/css/base.css";

    $width: 2rem;
    $init-font-size: 37.5;
    .van-loading.loading {
        width: $width;
        height: $width;
        position: fixed;
        top: 50%;
        left: 50%;
        -webkit-transform: translate(-50%, -50%);
        -moz-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        -o-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        background-color: rgba(0, 0, 0, .5);
        -webkit-border-radius: 3px;
        -moz-border-radius: 3px;
        border-radius: 3px;
        padding: 0.2rem;
    }

    .wm-padding-top-1-5{
        padding-top: 1rem;
    }

    .bg-white{
        background-color: #FFFFFF;
    }
</style>
