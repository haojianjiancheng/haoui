import { createSvg } from '../minix/unit.js'
export default {
    name : "numberInput",
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
            let reg = /^(-?\d+\.?\d*)$/
            reg.test(value);
            let result = RegExp.$1;
            if(result === 'String') return;
            if(result < this.min) result = this.min;
            if(result > this.max) result = this.max;
            this.$emit('input',this.format(result));
            this.$emit('change',this.format(result));
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
                className = 'append-box normal'
            }else{
                className = 'prepend-box normal'
            };
            return h('div',{
                staticClass : `label ${className}`,
                class : {
                    'disabled' : this.disabled
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
        createLabel(h,number,append,prepend) {
            if(number){
                return h('div',{
                    staticClass : "label append-box",
                    class : {
                        'disabled' : this.disabled
                    }
                },[h('span',{
                    staticClass : 'label-span label-top',
                    class : {
                        'disabled' : this.disabled
                    },
                    on : {
                        click : () => {
                            if(this.disabled) return;
                            let value = this.value+1;
                            this.updateValue(value);
                        }
                    }
                },[createSvg(h,'M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z')]),h('span',{
                    staticClass : 'label-span label-bottom',
                    class : {
                        'disabled' : this.disabled
                    },
                    on : {
                        click : () => {
                            if(this.disabled) return;
                            let value = this.value-1;
                            this.updateValue(value);
                        }
                    }
                },[createSvg(h,'M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z')])])
            }
            if(append){
                return h('div',{
                    staticClass : "label append-box",
                    class : {
                        'disabled': this.disabled
                    }
                },[append])
            }
            if(prepend){
                return h('div',{
                    staticClass : 'label prepend-box',
                    class : {
                        'disabled' : this.disabled
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
                'append' : this.append || this.number,
                'prepend' : this.normal || this.prepend,
                'disabled' : this.disabled
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
            staticClass : 'number-box'
        },[
            this.normal ? this.createNormal(h,'-') : '',
            this.normal ? this.createNormal(h,'+') : '',
            input,
            this.createLabel(h,this.number,this.append,this.prepend)
        ])
    }
}