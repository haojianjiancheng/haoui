import select from '../minix/select.js';

export default {
    name : 'hao-checkbox',
    props : {
        label : String,
        disabled : Boolean,
    },
    mixins : [select()],
    inject : {
        formItem : {
            default : ''
        }
    },
    render(h) {
        return h('div',{
            staticClass : 'hao-check-box',
            class : {
                'checkbox-disabled' : this.disabled
            },
            on : {
                click : (e) => {
                    e.stopPropagation();
                    if(this.disabled) return;
                    this.toggle();
                    this.formItem && this.formItem.onBlur()
                },
            }
        },[
            h('span',{
                staticClass : 'hao-check-input',
            },[
                h('span',{
                    staticClass : 'iconfont',
                    class : {
                        'icon-check' : this.checked,
                        'icon-checkbox' : !this.checked,
                        'hao-check-is-check' : this.checked
                    }
                }),
                h('input',{
                    staticClass : 'hao-check',
                    domProps : {
                        type : 'checkbox',
                        value : this.value,
                        checked : this.checked
                    }
                })
            ]),
            this.label && h('span',{
                staticClass : 'hao-check-label',
                class : {
                    'is-check' : this.checked
                }
            },[
                this.label
            ])
        ])
    }
}