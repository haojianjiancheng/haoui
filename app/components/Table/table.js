export default {
    name : 'haoTable',
    props : {
        list : {
            type : Array,
            required : true
        },
    },
    mounted () {
        console.log(this.columnMes('date'));
    },
    computed : {
        colName() {
            let colLength = 0;
            for (let i = 0; i < this.list.length; i++) {
                colLength = Object.keys(this.list[i]);
            }
            return colLength;
        },
        row() {
            return this.list.length;
        }
    },
    methods : {
        columnMes(colName) {
            return this.list.reduce((pre,next)=>{
                pre.push(next[colName])
                return pre
            },[])
        },
        createCol(h,col) {
            return col.map(item=>h('td',{},[item]))
        },
        createRow(h){
            return this.list.map((item,i) => {
                let result = [];
                for (const key in this.list[i]) {
                    result.push(this.list[i][key])
                }
                return h('tr',{
                    staticClass : 'hao-table-tr',
                    on : {
                        mouseenter : (e)=>{
                            console.log(e);
                            
                        }
                    }
                },[this.createCol(h,result)])
            })
        }
    },
    render(h) {
        console.log(this.$scopedSlots);
        
        return h('table',{
            staticClass : 'hao-table'
        },[
            this.createRow(h)
        ])
    }
}