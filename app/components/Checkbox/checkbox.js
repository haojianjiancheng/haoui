import select from '../minix/select.js';

export default {
    name : 'hao-checkbox',
    props : {
        label : String,
    },
    mixins : [select()],
    render(h) {
        return h('div',{
            staticClass : 'hao-check-box',
            on : {
                click : (e) => {
                    e.stopPropagation();
                    this.toggle();
                    this.$emit('click',!this.checked)
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
                        'is-check' : this.checked
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