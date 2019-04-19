<template>
    <div id="app">
        <input type="text">
        <button @click="eject">按钮</button>
        <alertForm v-if="show">ddd</alertForm>
    </div>
</template>

<script>
    import alertForm from "./components/alertForm";
    export default {
        components : {
           alertForm
        },
        data(){
            return {
                show : false
            }
        },
        methods : {
            eject (e){
                this.show = !this.show;
            }
        }
    }
</script>

<style lang="less" scoped>
    #app{
       
    }
</style>