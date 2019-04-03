<template>
    <div>
        goods_list
    </div>
</template>

<script>
    export default {
        props:{
            component_data:{
                type: Object,
                default: {},
                required: true
            }
        },
        data() {
            return {
                current_component_data: this.component_data
            }
        },
        watch:{
            component_data(value){
                console.log(value);
            }
        },
        computed:{

        },
        methods: {
            handle_component_data(){
                let data = this.current_component_data,
                    comp_content = data['comp_content'];
                console.log(comp_content);
            }
        },
        created() {
            this.handle_component_data();
        }
    }
</script>

<style scoped lang="scss">

</style>
