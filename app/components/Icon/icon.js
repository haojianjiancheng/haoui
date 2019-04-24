export default {
    name : 'icon',
    functional : true,
    props : {
        value : String,
    },
    render(h,{ props }) {
        if (!props.value) return;
        return h('i',{
            domProps : {
                innerHTML : props.value
            },
            staticClass : 'iconfont'
        })
    }
}