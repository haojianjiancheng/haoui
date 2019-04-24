<template>
    <input :class="['hao-input',{
                'hao-input-focuse' : isFocuse,
            }]" 
            :type="type" 
            @focus='focus' 
            @blur="blur"
            @input="input"
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
}
.hao-input-focuse{
    border-color: lightblue;
}
</style>