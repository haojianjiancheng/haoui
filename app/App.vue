<template>
    <div id="app">
        <input type="text" v-model="value">
        <button @click="eject">按钮</button>
        <alertForm v-if="show" @check='push' :rowNum='5' :tableValue='tableValue' :screenValue="screenValue" :termNum='9' :butNum='3' v-model="screenValue"></alertForm>
        <muform ref="form" :model="screenValue">
            <form-item prop='name' label="用户名" :rules='rule'>
                <input type="text" v-model="screenValue.name">
            </form-item>
        </muform>
        <button @click="aa">验证</button>
    </div>
</template>

<script>
    import alertForm from "./components/alertForm";
    import muform from './components/Form';
    import formItem from './components/FormItem';
    export default {
        components : {
           alertForm,
           muform,
           formItem
        },
        data(){
            return {
                show : false,
                checkboxValue : [],
                value : '',
                testValue : '',
                tableValue : [
                    ["张三",34,91],
                    ["张三",10,91],
                    ["张三",40,91],
                    ["李四",3003,33],
                    ["王五",3838,38],
                    ["老三",340,91],
                    ["张饿",41,91],
                    ["李比",31,33],
                    ["另五",39,38],
                ],
                screenValue : {
                    name : '',
                    number : '',
                    result : ''
                },
                rule : [
                    {validate : (item) => item>2&&item<10,message : "长度不够"},
                    {validate : (item) => /\d+/.test(item), message : '都是数字才行'}
                ]
            }
        },
        methods : {
            eject (e){
                this.show = !this.show;
            },
            aa(e){
                this.$refs.form.validate().then((item)=>{
                    console.log("通过",item);
                }).catch((item)=>{
                    console.log("未通过",item);  
                })
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