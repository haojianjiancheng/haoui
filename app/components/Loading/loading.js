import './loading.less';
export default {
    name : 'loading',
    props : {

    },
    data() {
        return {
            show : false,
        }
    },
    render(h) {
        return h('div',{
                staticClass : 'loading loading-animation',
            },
        )
    }
}