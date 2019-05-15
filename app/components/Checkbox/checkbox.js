export default {
    name : 'hao-checkbox',
    props : {
        value : [String,Number],
        inputValue : [Boolean,Array],
        label : String,
    },
    model : {
        prop : 'inputValue',
        event : 'change',
    },
    computed : {
        checked() {
            if(this.inputValue instanceof Array) return this.inputValue.includes(this.value);
            return this.inputValue;
        }
    },
    methods : {
        toggle() {            
            let inputValue = this.inputValue;
            if(typeof this.inputValue === 'boolean'){
                this.$emit('change',!inputValue)
                return
            }
            if(this.checked){
                inputValue.splice(inputValue.indexOf(this.value),1);
                this.$emit('change',inputValue);
            }else{
                this.$emit('change',[...inputValue,this.value])
            }
        }
    },
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