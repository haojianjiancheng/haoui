<template>
    <div class="alert-form">
        <div class="alert-form-head">
            <input class="alert-form-input" type="text" placeholder="姓名" @compositionend='screen($event,0)' v-model="screenValue.name">
            <input class="alert-form-input" type="text" placeholder="编号" @input="screen($event,1)" v-model="screenValue.number">
            <input class="alert-form-input" type="text" placeholder="成绩" @input="screen($event,2)" v-model="screenValue.result">
        </div>

        <div class="alert-form-body">
            <table class="alert-form-table">
                <tr v-for="item in filterValue" :key="item[1]">
                    <th>{{item[0]}}</th>
                    <th>{{item[1]}}</th>
                    <th>{{item[2]}}</th>
                </tr>
            </table>
        </div>
        
        <div class="alert-form-foot">
            <div class="alert-form-foot-left">
                <button><</button>
                <button>></button>
            </div>
            <div class="alert-form-foot-right">
                 <button>重置</button>
                <button>搜索</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                tableValue : [
                    ["张三",1010,91],
                    ["李四",3003,33],
                    ["王五",3838,38]
                ],
                filterValue : [],
                screenValue : {
                    name : '',
                    number : '',
                    result : ''
                }
            }
        },
        mounted () {
            this.filterValue = this.tableValue;
        },
        methods : {
            screen(e,index){
                let value = e.target.value || '';
                let reg = new RegExp(`^${value}`)
                this.filterValue = this.tableValue.filter(item=>reg.test(item[index]));
                console.log(this.filterValue);
                
            },
            aa(){
                console.log("汉字");
                
            },
            blur(e){
                
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