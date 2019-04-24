export default {
    name : 'formItem',
    inject : {
        form : {
            default : ''
        }
    },
    provide() {
        return {
            formItem : this
        }
    },
    props : {
        prop : {
            type : String,
            required : true
        },
        icon : String,
        label : String,
        labelPosition : {
            type : String,
            default : 'top',
            validate : function(item){
                return ['top','left','right'].includes(item)
            }
        },
        rules : {
            type : Array
        },
        helpText : String,
        errorText : String
    },
    data() {
        return {
            error : this.errorText,
            isFocuse : false,
        }
    },
    mounted () {
        this.form.addItem(this)
    },
    beforeDestroy () {
        this.form.removeItem(this);
    },
    methods: {
        validate () {
            if(!this.rules || this.rules.length == 0) return;
            return !this.rules.some((item)=>{
                let result = item.validate(this.form.getVal(this.prop));
                result || this.updateError(item.message);
                return !result
            },this)
        },
        updateError(value = "错误信息"){
            this.error = value
        },
        onFocuse() {
            this.isFocuse = true;                
        },
        onBlur() {
            this.isFocuse = false;
            if(this.form.autoValidate) this.validate() && this.updateError('');
        },
        createLabel(h) {
            if(!this.label) return;
            return h('div',{
                staticClass : "form-item-label",
                class : `form-item-label-${this.labelPosition}`
            },[this.label])
        },
        createIcon(h) {
            if(!this.icon) return;
            return h('i',{
                
            },[this.icon])
        },
        createHelp(h) {
            return h('div',{
                staticClass : "form-item-help",
                class : {
                    "form-item-help-position" : this.labelPosition !== 'top'
                }
            },[this.helpText || this.error])
        }
    },
    render(h) {
        return h('div',{
            staticClass : "form-item",
            class : {
                "form-item-error" : !!this.error,
                "form-item-top" : this.labelPosition === 'top',
            }
        },[
            this.createLabel(h),
            this.createIcon(h),
            this.$scopedSlots.default(),
            (this.helpText || this.error) && this.createHelp(h),
        ])
    }
}