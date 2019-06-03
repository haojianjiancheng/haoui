export default {
    name : 'hao-row',
    functional : true,
    props : {
        gutters : Boolean
    },
    render(h,{ data,props,children }) {
        data.staticClass = `${data.staticClass || ''} row`
        data.class = {
            'no-gutters' : props.gutters
        }
        return h('div',data,children)
    }
}