<template>
    <input :class="['hao-input',{
                'hao-input-focuse' : isFocuse,
                'hao-input-error' : !!this.formItem.error
            }]" 
            :type="type" 
            @focus="focus" 
            @blur="blur"
            @input="input"
            v-bind="$attrs"
    >
</template>

<script>
    export default {
        name : 'haoInput',
        inject : {
            formItem : {
                default : '',
            }
        },
        props : {
            type : String,
            prop : String,
        },
        data() {
            return {
                isFocuse : false,
            }
        },
        methods: {
            focus() {
                this.isFocuse = true;
            },
            blur() {                
                this.isFocuse = false;
            },
            input(e) {
                this.$emit('input',e.target.value)
            }
        },
        watch: {
            isFocuse(newValue) {
                if(!this.formItem) return;
                newValue ? this.formItem.onFocuse() : this.formItem.onBlur();
            }
        },
    }
</script>

<style lang="less" scoped>
.hao-input{
    outline: none;
    border: 1px solid lightgray;
    width: 257px;
    height: 34px;
    border-radius: 4px;
    padding-left: 4px;
    padding-right: 4px;
}
.hao-input-focuse{
    border-color: lightblue;
}
.hao-input-error{
    border-color: red;
}
</style>