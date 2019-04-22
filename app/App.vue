<template>
    <div id="app">
        <input type="text" v-model="value">
        <button @click="eject">按钮</button>
        <alertForm v-if="show" @check='push'></alertForm>
        
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
                show : false,
                value : '',
            }
        },
        methods : {
            eject (e){
                this.show = !this.show;
            },
            push(value){
                this.value = value
            },
        }
    }
</script>

<style lang="less" scoped>
    #app{
       
    }
</style>