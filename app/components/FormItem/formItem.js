export default {
    name : 'form-item',
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
            for (let i = 0; i < this.rules.length; i++) {
                let rule = this.rules[i];
                let result = rule.validate(this.form.getVal(this.prop));
                if(typeof result.then === 'function'){
                    promise.push(result);
                    promiseMessage.push(rule.message);
                    continue
                }
                if(result){
                    this.updateError('')
                }else{
                    this.updateError(rule.message);
                    return false
                }
            }
            if(promise.length > 0){        
                return Promise.all(promise).then((result)=>{           
                    for (let i = 0; i < result.length; i++) {
                        if(!result[i]){
                            this.updateError(promiseMessage[i]);
                            return Promise.reject(false);
                        }
                    }
                    this.updateError('');
                    return true;
                })
            }
            this.updateError('');
            return true;
        },
        updateError(value = "错误信息"){
            this.error = value;
        },
        onFocuse() {
            this.isFocuse = true;                
        },
        onBlur() {
            this.isFocuse = false;
            console.log('onblur');
            
            this.form.autoValidate && this.validate();
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
            },
            on : {
                click: ()=>{
                    console.log(1);
                    
                }
            }
        },[
            this.createLabel(h),
            this.createIcon(h),
            h('div',{
                staticClass : 'form-item-content'
            },[
                this.$scopedSlots.default()
            ]),
            (this.helpText || this.error) && this.createHelp(h),
        ])
    }
}