<template>
    <div id="app">
        <router-link to="/test">test</router-link>
        <router-link to="/home">home</router-link>
        <router-link to="/req">req</router-link>
        <router-view></router-view>

        <haoTable :list='list'>
        </haoTable>
        <checkbox v-model="all" @click="changeAll" :label="'全选'"></checkbox>
        <table>
            
            <tr v-for="(item,index) in list" :key='index' @click.stop="change(item.id)">
                <td>
                    <checkbox :value='item.id' v-model="aa"></checkbox>
                </td>
                <td>{{item.date}}</td>
                <td>{{item.name}}</td>
                <td>{{item.address}}</td>
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
            </tr>
        </table>
       <checkbox disabled></checkbox>
        <hao-switch v-model="check" value='vue' label-right='22' label-left='22'></hao-switch>
        <number-input number v-model="number"></number-input>
        {{check}}
    </div>
</template>

<script>
    import haoTable from './components/table';
    import checkbox from './components/checkbox';
    import haoButton from './components/Button';
    import haoSwitch from './components/Switch';
    import numberInput from './components/NumberInput'
    export default {
        components : {
            checkbox,
            haoButton,
            haoTable,
            haoSwitch,
            numberInput
        },
        data() {
            return {
                check : false,
                all: false,
                number : 2,
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

                ]
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
      
    }
</style>