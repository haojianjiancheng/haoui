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
        prepend : String
    },
    data() {
        return {
            timer : null,
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
        createLabel(h) {
            if(this.append){
                return h('div',{
                    staticClass : "label",
                    class : "append-box"
                },[this.append])
            }
            if(this.prepend){
                return h('div',{
                    staticClass : 'label',
                    class : "prepend-box"
                },[this.prepend])
            }
        }
    },
    render(h) {
        let input = h('input',{
            attrs : {
                value : this.value,
                ...this.$attrs
            },
            staticClass : "number-input",
            class : {
                'prepend' : !!this.prepend
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
            input,
            this.createLabel(h)
        ])
    }
}