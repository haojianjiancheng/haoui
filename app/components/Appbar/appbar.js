export default {
    name : 'appbar',
    methods : {
        createDiv(h,slot){
            return h('div',{},[slot])
        }
    },
    render(h){
        const left = this.$scopedSlots.left();
        const right = this.$scopedSlots.right();
        const title = this.$scopedSlots.default();
        return h('header',{
            staticClass : 'hao-appbar'
        },[this.createDiv(h,left),this.createDiv(h,title),this.createDiv(h,right)])
    }
}