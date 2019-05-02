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
@input_width : 257px;
@innput_height : 34px;
@error_border_color : red;
@focus_border_color : lightblue;

.hao-input{
    outline: none;
    border: 1px solid lightgray;
    width: @input_width;
    height: @innput_height;
    border-radius: 4px;
    padding-left: 10px;
    padding-right: 10px;
}
.hao-input-focuse{
    border-color: @focus_border_color;
}
.hao-input-error{
    border-color: @error_border_color;
}
</style>