<template>
    <div class="alert-form">
        <div class="alert-form-head">
            <input class="alert-form-input" type="text" placeholder="姓名" v-model="screenValue.name">
            <input class="alert-form-input" type="text" placeholder="编号" v-model="screenValue.number">
            <input class="alert-form-input" type="text" placeholder="成绩" v-model="screenValue.result">
        </div>

        <div class="alert-form-body">
            <table class="alert-form-table">
                <tr v-for="item in filterValue" :key="item[1]" @click="checkRow(item)">
                    <th>{{item[0]}}</th>
                    <th>{{item[1]}}</th>
                    <th>{{item[2]}}</th>
                </tr>
            </table>
        </div>
        
        <div class="alert-form-foot">
            <div class="alert-form-foot-left">
                <paging :termNum="tableValue.length" :rowNum="1" :visiblePageButNum='4' @listRange='listRange'></paging>
            </div>
            <div class="alert-form-foot-right">
                <button @click="blur">重置</button>
                <button @click="screen">搜索</button>
            </div>
        </div>
    </div>
</template>

<script>
    import paging from './paging.vue';
    export default {
        data() {
            return {
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
                filterValue : [],
                screenValue : {
                    name : '',
                    number : '',
                    result : ''
                }
            }
        },
        components : {
            paging
        },
        props : {
            rowNum : {
                type : Number,
                default : 5,
                // validator : function(value){
                //     return /[-|.]/.test(value)
                // }
            }
        },
        methods : {
            screen(){
                this.filterValue = this.tableValue.filter(item=>{
                    return new RegExp(`${this.screenValue.number}`).test(item[1]) && new RegExp(this.screenValue.name).test(item[0]) && new RegExp(this.screenValue.result).test(item[2])
                })  
            },
            checkRow(value){
                this.$emit('check',value)
            },
            blur(e){
                this.screenValue = {
                    name : '',
                    number : '',
                    result : ''
                }
                this.filterValue = this.tableValue;
            },
            listRange(a,b){
                this.filterValue = this.tableValue.slice(a,b)
            }
        }
    }
</script>

<style lang="less" scoped>
.alert-form{
    position: relative;
    top: 10px;
    width: 500px;
    padding: 5px;
    box-shadow: 0 0 8px -5px black;
    .alert-form-head{
        height: 60px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .alert-form-input{
            outline: none;
            width: 150px;
            height: 20px;
            border: 1px solid lightblue;
        }
    }
    .alert-form-body{
        width: 100%;
        overflow-y: hidden;
        overflow-x: scroll;
        .alert-form-table{
            font-family: verdana,arial,sans-serif;
            font-size:11px;
            width: 100%;
            color:#333333;
            border-width: 1px;
            border-color: #999999;
            border-collapse: collapse;
            th,td{
                width: auto;
                border-width: 1px;
                padding: 8px;
                border-style: solid;
                border-color: #999999;
            }
        }
    }
    .alert-form-foot{
        height: 40px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
}

</style>