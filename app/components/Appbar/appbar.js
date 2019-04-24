export default {
    name : 'appBar',
    props : {
        title : {
            type : String,
            default : ''
        }
    },
    render(h) {
        const slots = this.$scopedSlots;
        const left = slots.left && h('div',{
            staticClass : "appbar-left"
        },slots.left());
        const center = h('div',{
            staticClass : 'appbar-title'
        },[slots.default ? slots.default() : this.title]);
        const right = slots.right && h('div',{
            staticClass : 'appbar-right'
        },slots.right())
        return h('header',{
            staticClass : 'appbar'
        },[left,center,right])
    }
}