import select from '../minix/select.js';

export default {
    name : 'hao-switch',
    props : {
        labelLeft : [Boolean,String,Number],
        labelRight : [Boolean,String,Number],
        disabled : Boolean
    },
    mixins : [select()],
    inject : {
        formItem : {
            default : ''
        }
    },
    methods : {
        createLabel(h,labelMes,select) {
            return  h('span',{
                staticClass : 'switch_label',
                class : {
                    'switch_label-selected' : select
                }
            },[labelMes])
        }
    },
    render(h) {
        return h('div',{
            staticClass : 'switch-box',
            class : {
                'switch-disabled' : this.disabled
            },
            on : {
                ...this.$listeners,
                click : () => {
                    if(this.disabled) return;
                    this.toggle()
                    this.formItem && this.formItem.onBlur()
                }
            }
        },[
            this.labelLeft && this.createLabel(h,this.labelLeft,!this.checked),
            h('span',{
                staticClass : 'hao-switch',
                class : {
                    'is-selected' : this.checked
                }
            },[
                h('div',{
                    staticClass : 'hao-switch-ball',
                })
            ]),
            this.labelRight && this.createLabel(h,this.labelRight,this.checked)
        ])
    }
}