export default {
    name : 'hao-stepper',
    props : {
        current : Number
    },
    data(){
        return {
            steps : []
        }
    },
    provide(){
        return {
            stepper : this
        }
    },
    mounted () {
        this.show(this.current);
    },
    watch : {
        current(newVal){
            this.show(newVal)
        }
    },
    methods : {
        show(num) {
            this.steps.forEach(item=>{
                item.reset()
            })
            for (let i = 0; i < num; i++) {
                this.steps[i].changeShow()
            }
        }
    },
    render (h){
        return h('ul',{
            staticClass : 'hao-stepper'
        },[
            this.$scopedSlots.default()
        ])
    }
}