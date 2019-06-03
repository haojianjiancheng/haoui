export default {
    name : 'hao-container',
    functional : true,
    props : {
        fluid : Boolean
    },
    render(h,{ data,props,children }){
        data.staticClass = `${data.staticClass || ''} ${props.fluid ? 'hao-container-fluid' : 'container'}`;
        return h('div',data,children);
    }
}