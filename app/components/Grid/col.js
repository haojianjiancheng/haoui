function createColClass (props){
    const classNames = [];
    if(props.span) classNames.push(`col-${props.span}`);
    if(props.sm) classNames.push(`col-sm-${props.sm}`);
    if(props.md) classNames.push(`col-md-${props.md}`);
    if(props.lg) classNames.push(`col-lg-${props.lg}`);
    if(props.xl) classNames.push(`col-xl-${props.xl}`);
    if(props.order) classNames.push(`col-order-${props.order}`);
    if(props.offset) classNames.push(`col-offset-${props.offset}`);
    return classNames.join(' ');
}
export default {
    name : 'hao-col',
    functional : true,
    props : {
        span : [String,Number],
        sm : [String,Number],
        md: [String,Number],
        lg : [String,Number],
        xl : [String,Number],
        order : [String,Number],
        offset : [String,Number],
    },
    render(h,{ data,props,children }){        
        data.staticClass = ['col',createColClass(props),data.staticClass || ''].join(' ');
        return h('div',data,children)
    }
}