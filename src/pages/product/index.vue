<template>
    <div>
        <header_1></header_1>
    </div>
</template>

<script>
    import header_1 from '../../components/header_1'

    export default {
        data(){
            return{
                id:this.$route.params.id
            }
        },
        components: {
            header_1
        },
    }
</script>

<style scoped>

</style>
