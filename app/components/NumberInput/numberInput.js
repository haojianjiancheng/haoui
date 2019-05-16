export default {
    name : "number-input",
    props : {
        value : '',
        min : {
            type : Number,
            default : -Infinity
        },
        max : {
            type : Number,
            default : Infinity
        },
        decimal : Number,
        append : String,
        prepend : String,
        disabled : {
            type : Boolean,
            default : false,
        },
        number : {
            type : Boolean,
            default : false
        }
    },
    data() {
        return {
            timer : null,
        }
    },
    computed : {
        normal () {
            if(this.number || this.append || this.prepend) return false;
            return true
        }
    },
    methods : {
        updateValue(value) {
            if(value === '' || value === null) return;
            if(isNaN(value)) return;
            if(value < this.min) value = this.min;
            if(value > this.max) value = this.max;
            this.$emit('input',this.format(value));
            this.$emit('change',this.format(value));
        },
        format(value){
            if(this.decimal) return parseFloat(value).toFixed(this.decimal);
            return parseInt(value)
        },
        updateTimer(e) {
            if(!this.timer) this.timer = setTimeout(() => {
                if(e.target.value != this.value) {
                    e.target.value = this.value
                }
                clearTimeout(this.timer)
                this.timer = null;
            },500);
        },
        createNormal(h,value){
            let className ;
            if(value === '+') {
                className = 'number-input-append-box number-input-normal'
            }else{
                className = 'number-input-prepend-box number-input-normal'
            };
            return h('div',{
                staticClass : `number-input-label ${className}`,
                class : {
                    'number-input-disabled' : this.disabled
                },
                on : {
                    click : () => {
                        if(this.disabled) return;
                        let result = this.value;
                        if(value === '+'){
                            this.updateValue(result+1);
                        }else{
                            this.updateValue(result-1);
                        }
                    }
                }
            },[value])
        },
        createSvg(h,className) {
            return h('i',{
                staticClass : `iconfont ${className} number-input-svg-icon`
            })
        },
        createLabel(h,number,append,prepend) {
            if(number){
                return h('div',{
                    staticClass : "number-input-label number-input-append-box",
                    class : {
                        'number-input-disabled' : this.disabled
                    }
                },[h('span',{
                    staticClass : 'number-input-label-span label-top',
                    class : {
                        'number-input-disabled' : this.disabled
                    },
                    on : {
                        click : () => {
                            if(this.disabled) return;
                            let value = this.value+1;
                            this.updateValue(value);
                        }
                    }
                },[
                    this.createSvg(h,'icon-icon_arrow_up')
                ]),h('span',{
                    staticClass : 'number-input-label-span label-bottom',
                    class : {
                        'number-input-disabled' : this.disabled
                    },
                    on : {
                        click : () => {
                            if(this.disabled) return;
                            let value = this.value-1;
                            this.updateValue(value);
                        }
                    }
                },[
                    this.createSvg(h,'icon-icon_arrow_down')
                ])])
            }
            if(append){
                return h('div',{
                    staticClass : "number-input-label number-input-append-box",
                    class : {
                        'number-input-disabled': this.disabled
                    }
                },[append])
            }
            if(prepend){
                return h('div',{
                    staticClass : 'number-input-label number-input-prepend-box',
                    class : {
                        'number-input-disabled' : this.disabled
                    }
                },[prepend])
            }
        }
    },
    render(h) {
        let input = h('input',{
            domProps : {
                value : this.value,
                autocomplete : 'off',
                min : this.min,
                max : this.max,
                disabled : this.disabled
            },
            staticClass : "number-input",
            class : {
                'number-input-append' : this.append || this.number,
                'number-input-prepend' : this.normal || this.prepend,
                'number-input-disabled' : this.disabled
            },
            on : {
                input : (e) => {
                    let value = e.target.value
                    this.updateValue(value);
                    if(value.length === 0) {
                        clearTimeout(this.timer);
                        this.timer = null;
                        return
                    }
                    if(this.decimal) return;
                    this.updateTimer(e);
                },
                blur : (e) => {
                    this.updateTimer(e);
                }
            }
        });
        return h('div',{
            staticClass : 'number-input-box'
        },[
            this.normal ? this.createNormal(h,'-') : '',
            this.normal ? this.createNormal(h,'+') : '',
            input,
            this.createLabel(h,this.number,this.append,this.prepend)
        ])
    }
}