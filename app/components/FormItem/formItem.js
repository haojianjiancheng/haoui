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
            if(!this.rules || this.rules.length == 0) return true;
            let promise = [];
            let promiseMessage = [];
            let validateResult = this.rules.some((item)=>{
                let result = item.validate(this.form.getVal(this.prop));
                if(typeof result.then === 'function'){
                    promise.push(result);
                    promiseMessage.push(item.message);
                    return false
                }
                result || this.updateError(item.message);
                return !result
            },this);
            if(promise.length === 0) return !validateResult
            if(promise.length > 0){                
                return Promise.all(promise).then((result)=>{            
                    for (let i = 0; i < result.length; i++) {
                        if(!result[i]){
                            this.updateError(promiseMessage[i]);
                            return Promise.reject(false);
                        }
                        this.updateError('');
                        return true
                    }
                })
            }
            this.updateError('');
            return true;
        },
        updateError(value = "错误信息"){
            this.error = value
        },
        onFocuse() {
            this.isFocuse = true;                
        },
        onBlur() {
            this.isFocuse = false;
            if(this.form.autoValidate) this.validate();
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
            },[this.error || this.helpText])
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