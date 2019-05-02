<template>
    <div id="app">
        <input type="text" v-model="value">
        <button @click="eject">按钮</button>
        <alertForm v-if="show" @check='push' :rowNum='5' :tableValue='tableValue' :screenValue="screenValue" :termNum='9' :butNum='3' v-model="screenValue"></alertForm>
        <muform ref="form" :model="screenValue">
            <form-item prop='name' label="用户名" labelPosition='left' :rules='rule' helpText="请输入用户名">
                <haoinput type="text" v-model="screenValue.name"></haoinput>
            </form-item>
            <form-item prop='number' label="编号" :rules='rule' helpText="请输入密码">
                <haoinput type="text" v-model="screenValue.number"></haoinput>
            </form-item>
        </muform>
        <button @click="aa" >验证</button>
        <div class='button-group'>
            <haobutton small icon='&#xe70a;' disabled @click="aa">按钮</haobutton>
            <haobutton icon='&#xe70a;' @click="aa">按钮</haobutton>
            <haobutton @click="aa" fullWidth icon='&#xe70a;'>按钮</haobutton>
            <haobutton large @click="aa" fullWidth icon='&#xe70a;'>按钮</haobutton>
            <haobutton small flat fab @click="aa" icon='&#xe70a;'>按钮</haobutton>
            <haobutton @click="aa" round flat disabled icon='&#xe70a;'>按钮</haobutton>
            <haobutton large @click="aa" fab disabled icon='&#xe70a;'>按钮</haobutton>
            <haobutton large @click="aa" flat right icon='&#xe70a;'>按钮</haobutton>
            <haobutton @click="aa" disabled  right icon='&#xe70a;'>按钮</haobutton>
        </div>
        <paging :total='6' :pageSize='1' :butNum='3' :current.sync='value'></paging>
        <paging :total='6' :pageSize='1' small :butNum='3' :current.sync='value'></paging>
        <paging :total='6' :pageSize='1' circle :butNum='3' :current.sync='value'></paging>
        <paging :total='6' :pageSize='1' fab circle :butNum='3' :current.sync='value'></paging>
        <paging :total='6' :pageSize='1' fab :butNum='3' :current.sync='value'></paging>
        <paging :total='6' :pageSize='1' small :butNum='3' round :current.sync='value'></paging>
        <paging :total='6' :pageSize='1' flat circle :butNum='3' round :current.sync='value'></paging>
        <paging :total='6' :pageSize='1' flat fab :butNum='3' round :current.sync='value'></paging>
        <paging :total='6' :pageSize='1' flat fab small :butNum='3' round :current.sync='value'></paging>
        <paging :total='6' :pageSize='1' flat fab circle :butNum='3' round :current.sync='value'></paging>
        <paging :total='6' :pageSize='1' flat fab circle small :butNum='3' round :current.sync='value'></paging> {{value}}
        <numberinput v-model="input" :min='1' number :max='5' @change="change"></numberinput> {{input}}
        <numberinput v-model="input" :min='1' :max='30' :decimal='2' append='dj'></numberinput>
        <numberinput v-model="input" :min='1' :max='30' prepend='dj'></numberinput>
        <numberinput v-model="input" :min='1' :max='30' ></numberinput>
        <numberinput v-model="input" :min='1' :max='30' disabled></numberinput>
    </div>
</template>

<script>
    import alertForm from "./components/alertForm";
    import muform from './components/Form';
    import formItem from './components/FormItem';
    import haoinput from './components/minix/haoinput.vue';
    import haobutton from './components/Button';
    import appbar from './components/Appbar';
    import icon from './components/Icon';
    import paging from './components/Paging';
    import numberinput from './components/numberInput';
    export default {
        components : {
           alertForm,
           muform,
           formItem,
           haoinput,
           haobutton,
           appbar,
           icon,
           paging,
           numberinput
        },
        data(){
            return {
                show : false,
                checkboxValue : [],
                loading : true,
                input : 4,
                value : 0,
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
                    // {validate : (item) => item.length>2 && item.length<10,message : "长度不够"},
                    // {validate : (item) => /^\d+$/.test(item), message : '都是数字才行'},
                    {
                        validate : (item,prop) =>{
                            return new Promise ((res)=>{
                                if (!item){
                                    res(false)
                                }else{
                                    res(true)
                                }
                            })
                        },
                        message :"错误的"
                    },{
                        validate : (item,prop) =>{
                            return new Promise ((res)=>{
                                if(item.length < 10){
                                    res(false)
                                }else{
                                    res(true)
                                }
                            })
                        },
                        message : "长度不够"
                    }
                ]
            }
        },
        methods : {
            eject (e){
                this.show = !this.show;
            },
            aa(e){
                this.$refs.form.validate().then((item)=>{
                    
                })
            },
            bb(e){
                this.$refs.form.clean()
            },
            push(value){
                this.value = value
            },
            change(value){
                console.log(value);
                
            }
        }
    }
</script>

<style lang="less" scoped>
    #app{
        position: relative;
       .button-group{
           display: flex;
           flex-direction: column;
           justify-content: center;
           align-items: center
       }
    }
</style>