<template>
    <hao-container id="app">
        <hao-row class="bb">
            <router-link to="/test">test</router-link><br>
            <router-link to="/home">home</router-link><br>
            <router-link to="/req">req</router-link>
        </hao-row>
        <hao-row class="aa">
            <transition name='fade' mode="out-in">
                <router-view></router-view>
            </transition>
        </hao-row>
        <hao-row>
            <div>
                <checkbox v-model="all" @click="changeAll" :label="'全选'"></checkbox>
                <table>
                    <tr v-for="(item,index) in list" :key='index' @click.stop="change(item.id)">
                        <td>
                            <checkbox :value='item.id' v-model="aa"></checkbox>
                        </td>
                        <td>{{item.date}}</td>
                        <td>{{item.name}}</td>
                        <td>{{item.address}}</td>
                        <td>{{item.id}}</td>
                        <td>
                            <haoButton small @click.stop="delet(item)">删除</haoButton>
                        </td>
                    </tr>
                </table>{{aa}}
                <table>
                    <tr v-for="item in filter" :key="item.id">
                        <td>{{item.date}}</td>
                        <td>{{item.name}}</td>
                        <td>{{item.address}}</td>
                        <td>{{item.id}}</td>
                    </tr>
                </table>
            </div>
        </hao-row>
        <hao-row>
            <hao-col lg='2'>
                <hao-switch v-model="check" value='vue' label-right='右边' label-left='左边'></hao-switch>
            </hao-col>
            <hao-col lg='8'>
                <paging total='100' :current.sync='number'></paging>
            </hao-col>
            <hao-col lg='2'>
                <i class="iconfont icon-icon_bell"></i>
            </hao-col>
        </hao-row>
        <hao-row>
            <stepper :current='stepNumber'>
                <step icon='icon-number10' passIcon='icon-check1'>
                    <div slot='title'>
                        这是个标题
                        <button @click="step">按钮</button>
                    </div>
                    <div slot="content">
                        这是内容
                        <button @click="changStep">按钮1</button>
                    </div>
                </step>
                <step icon='icon-number9' passIcon='icon-check1'>
                    <div slot='title'>
                        这是个标题
                        <button @click="step">按钮</button>
                    </div>
                    <div slot="content">
                        这是内容
                        <button @click="changStep">按钮2</button>
                    </div>
                </step>
                <step icon='icon-number7' passIcon='icon-check1'>
                    <div slot='title'>
                        这是个标题
                        <button @click="step">按钮</button>
                    </div>
                    <div slot="content">
                        这是内容
                        <button @click="changStep">按钮3</button>
                    </div>
                </step>
            </stepper>
            
           
        </hao-row>
        <hao-row>
             <draggable v-model="list">
                
                    <div v-for="item in list" :key='item.id'>
                        {{item}}
                    </div>
                
            </draggable>
        </hao-row>
    </hao-container>
</template>

<script>
    import haoTable from './components/table';
    import icon from './components/Icon';
    import checkbox from './components/checkbox';
    import haoButton from './components/Button';
    import haoSwitch from './components/Switch';
    import numberInput from './components/NumberInput';
    import paging from './components/Paging';
    import {stepper,step} from './components/Stepper';
    import draggable from 'vuedraggable';

    export default {
        components : {
            draggable,
            stepper,
            icon,
            checkbox,
            haoButton,
            haoTable,
            haoSwitch,
            numberInput,
            paging,
            step
        },
        data() {
            return {
                check : false,
                all: false,
                number : 2,
                stepNumber : 0,
                aa:[],
                list: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                    id: 1,
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄',
                    id: 2
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄',
                    id: 3
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄',
                    id: 4
                }],
                filter:[

                ],
               
            }
        },
        methods: {
           delet(val){
                this.list.splice(this.list.indexOf(val),1);
                this.aa.includes(val.id) && this.aa.splice(this.aa.indexOf(val.id),1);
           },
            change(i){
                this.aa.includes(i) ? this.aa.splice(this.aa.indexOf(i),1) : this.aa.push(i);
            },
            changeAll(check){
                check ? this.aa = [1,2,3,4] : this.aa = []
            },
            changStep(){
                if(this.stepNumber < 4) this.stepNumber++;
                
                console.log(this.stepNumber);
            },
            step(){
                if(this.stepNumber > 0) this.stepNumber--;
                console.log(this.stepNumber);
                
            }
        },
        watch : {
            aa (nVal){
                this.filter = this.list.filter((item)=>{
                    return nVal.includes(item.id)
                })
            }
        }
    }
</script>

<style lang="less" scoped>
    #app{
        .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
        }
        .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
        }
    }
</style>