 <template>
    <ul class="paging">
        <li :class="['page' , {'page-disabled' : presentNum === 1}]" @click="addPageNum(-1)">&lt;</li>
        <li class="page" v-if="leftSpot" @click="addPageNum(-3)">...</li>
        <li :class="['page' , {'page-active' : presentNum === item}]" v-for="item in page" :key="item" @click="outputPagNumRange(item)">
            {{item}}
        </li>
        <li class="page" v-if="rightSpot" @click="addPageNum(3)">...</li>
        <li :class="['page' , {'page-disabled' : presentNum === pageNum}]" @click="addPageNum(1)">&gt;</li>
    </ul>
</template>

<script>
    export default {
        name : "paging",
        props : {
            termNum : {
                type : Number,
                required : true
            },
            rowNum : {
                type : Number,
                required : true
            },
            visiblePageButNum : {
                type : Number,
                default : 3,
                validator : function(item){
                    return item>=3 && item<=21;
                }
            }
        },
        data() {
            return {
                presentNum : 1,
            }
        },
        computed: {
            pageNum(){
                return Math.ceil(this.termNum/this.rowNum)
            },
            beginTermNum() {
                return (this.presentNum-1)*this.rowNum
            },
            endTermNum(){
                return Math.ceil(this.presentNum*this.rowNum)
            },
            page(){
                let num = this.presentNum;
                let array = [];
                let pageButNum = this.pageNum < this.visiblePageButNum ? this.pageNum : this.visiblePageButNum;
                let ceil = Math.ceil(pageButNum/2);
                if(num<ceil){
                    for (let i = 0; i < pageButNum; i++) {
                        array[i] = i+1;
                    }
                    return array
                }
                if(num>this.pageNum-ceil){
                    for (let i = 0; i < pageButNum; i++) {
                        array[i] = this.pageNum-pageButNum+i+1;
                    }
                    return array
                }
                for (let i = 0; i < pageButNum; i++) {
                    array[i] = num+i+1-ceil;
                }
                return array                
            },
            leftSpot(){
                return this.page[0] === 1 ? false : true
            },
            rightSpot(){
                return this.page[this.page.length-1] === this.pageNum ? false : true
            }
        },
        methods: {
            outputPagNumRange(num) {
                this.presentNum = num;
                this.$emit('listRange',this.beginTermNum,this.endTermNum)
            },
            addPageNum(num) {
                let changePageNum = this.presentNum+parseInt(num);
                if(changePageNum<1){
                    this.outputPagNumRange(1)
                    return
                }
                if(changePageNum>this.pageNum){
                    this.outputPagNumRange(this.pageNum)
                    return
                }
                this.outputPagNumRange(changePageNum)
            }
        },
    }
</script>

<style lang="less" scoped>
.paging{
    padding-left: 0;
    list-style: none;
    .page:first-child{
        margin-left: 0;
    }
    .page{
        float: left;
        width: 20px;
        height: 20px;
        border: 1px solid lightblue;
        margin-left: 2px;
        text-align: center;
        line-height: 20px;
        cursor: default;
        border-radius: 3px;
        user-select: none;
        &:hover{
            color: lightblue;
        }
    }
    .page-active{
        background-color: lightblue;
    }
    .page-disabled{
        color: rgb(197, 197, 197);
        border-color: rgb(197, 197, 197);
        cursor: not-allowed;
    }
}
</style>