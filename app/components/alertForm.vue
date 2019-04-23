<template>
    <div class="alert-form">
        <div class="alert-form-head">
            <input class="alert-form-input" type="text" placeholder="姓名">
            <input class="alert-form-input" type="text" placeholder="编号">
            <input class="alert-form-input" type="text" placeholder="成绩">
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
                <paging :termNum="termNum" :rowNum="rowNum" :visiblePageButNum='butNum' @listRange='listRange'></paging>
            </div>
            <div class="alert-form-foot-right">
                <button @click="blur">重置</button>
                <button @click="screen">搜索</button>
            </div>
        </div>
    </div>
</template>

<script>
    import paging from './Paging/paging.vue';
    export default {
        name : 'alertForm',
        mounted () {
            this.listRange(0,this.rowNum);
        },
        data() {
            return {
                
                filterValue : [],
            }
        },
        components : {
            paging
        },
        props : {
            screenValue : {
                type : Object
            },
            rowNum : {
                type : Number,
                default : 5,
            },
            termNum : {
                type : Number,
            },
            tableValue : {
                type : Array
            },
            butNum : {
                type : Number,
                default : 3
            }
        },
        methods : {
            screen(){
               
            },
            checkRow(value){
                this.$emit('check',value)
            },
            blur(e){
                console.log(this.screenValue);
                
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