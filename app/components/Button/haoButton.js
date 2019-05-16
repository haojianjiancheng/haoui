import Icon from '../Icon';

export default {
    name : 'hao-button',
    props : {
        large : {
            type : Boolean,
            default : false,
        },
        small : {
            type : Boolean,
            default : false,
        },
        round : {
            type : Boolean,
            default : false
        },
        fab : {
            type : Boolean,
            default : false,
        },
        flat : {
            type : Boolean,
            default : false,
        },
        disabled : {
            type : Boolean,
            default : false,
        },
        fullWidth : {
            type : Boolean,
            default : false,
        },
        icon : {
            type : String,
        },
        right : {
            type : Boolean,
            default : false,
        },
        loading : {
            type : Boolean,
            default : false,
        }
    },
    methods : {
        createIcon(h) {
            if(!this.icon) return [ this.$scopedSlots.default() ];
            if(this.right) return [ this.$scopedSlots.default() , h(Icon,{ props : { value : this.icon } }) ];
            return [ h(Icon,{ props : { value : this.icon } }) , this.$scopedSlots.default() ];
        },
        createLoading(h) {
            let loading = h('div',{
                staticClass : 'button-loading-box'
            },[
                h('div',{
                    staticClass : 'button-loading'
                })
            ]);
            let span = h('span',{
                staticClass : 'loading-text'
            },'加载中')
            if(this.right) return [ span , loading ];
            return [ loading , span ];
        },
        click(e) {
            if(this.disabled || this.loading) return;
            this.$emit('click',e)
        }
    },
    render(h) {
        return h('button',{
            staticClass : "hao-button",
            class : {
                'hao-button-large' : this.large,
                'hao-button-small' : this.small,
                'hao-button-round' : this.round,
                'hao-button-fab' : this.fab,
                'hao-button-flat' : this.flat,
                'hao-button-disabled' : this.disabled || this.loading,
                'hao-button-full-width' : this.fullWidth
            },
            attrs : {
                disabled : this.disabled,
                ...this.attrs
            },
            on : {
                click : this.click,
            }
        },this.loading ? this.createLoading(h) : this.createIcon(h))
    }
}