<template>
    <div id="app">
        <input type="text" v-model="value">
        <button @click="eject">按钮</button>
        <alertForm v-if="show" @check='push' :rowNum='5' :tableValue='tableValue' :screenValue="screenValue" :termNum='9' :butNum='3' v-model="screenValue"></alertForm>
        <muform ref="form" :model="screenValue">
            <form-item prop='name' label="用户名" labelPosition='left' :rules='rule'>
                <haoinput type="text" v-model="screenValue.name"></haoinput>
            </form-item>
            <form-item prop='number' label="编号" :rules='rule'>
                <haoinput type="text" v-model="screenValue.number"></haoinput>
            </form-item>
        </muform>
        <button @click="aa" >验证</button>
        <haobutton small @click="aa" fullWidth disabled>按钮</haobutton>
        <haobutton @click="aa" fullWidth>按钮</haobutton>
        <haobutton large @click="aa" fullWidth>按钮</haobutton>
        <haobutton small flat fab disabled @click="aa">按钮</haobutton>
        <haobutton @click="aa" round flat fab disabled>按钮</haobutton>
        <haobutton large @click="aa" flat fab disabled>按钮</haobutton>
        <button @click="bb">清空</button>
        <appbar>
        </appbar>
    </div>
</template>

<script>
    import alertForm from "./components/alertForm";
    import muform from './components/Form';
    import formItem from './components/FormItem';
    import haoinput from './components/minix/haoinput.vue';
    import haobutton from './components/Button';
    import appbar from './components/Appbar';
    export default {
        components : {
           alertForm,
           muform,
           formItem,
           haoinput,
           haobutton,
           appbar
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
                    name : '22',
                    number : '',
                    result : ''
                },
                rule : [
                    {validate : (item) => item.length>2 && item.length<10,message : "长度不够"},
                    {validate : (item) => /^\d+$/.test(item), message : '都是数字才行'}
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
            bb(e){
                this.$refs.form.clean()
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