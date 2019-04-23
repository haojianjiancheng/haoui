<template>
    <div class="form-item">
        <div class="form-item-label">
            {{ label }}
        </div>
        <div class="form-item-help">

        </div>
        <div class="form-item-content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        inject : {
            form : {
                default : ''
            }
        },
        props : {
            prop : {
                type : String,
                required : true
            },
            icon : String,
            label : String,
            labelFloat : {
                type : Boolean,
                default : false
            },
            labelPosition : {
                type : String,
                default : 'top'
            },
            rules : {
                type : Array
            },
            helpText : String,
            errorText : String
        },
        mounted () {
            this.form.items.push(this)
        },
        methods: {
            validate() {
                if(!this.rules || this.rules.length == 0) return;
                return !this.rules.some((item)=>{
                    let result = item.validate(this.form.getVal(this.prop));
                    result || this.updateError(item.message);
                    return !result
                })
            },
            updateError(value = "错误信息"){
                console.log(value);
                
            }
        },
    }
</script>

<style lang="less" scoped>

</style>