import Icon from '../Icon';

export default {
    name : 'haoButton',
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
            type : String
        }
    },
    methods : {
        click(e) {
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
                'hao-button-disabled' : this.disabled,
                'hao-button-full-width' : this.fullWidth
            },
            attrs : {
                disabled : this.disabled,
                ...this.attrs
            },
            on : {
                click : this.click
            }
        },[
            !!this.icon && h(Icon,{
                props : {
                    value : this.icon
                }
            }),
            this.$scopedSlots.default()
        ])
    }
}