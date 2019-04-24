<template>
    <button :class="[
            'hao-button',
            {
                'hao-button-large' : this.large,
                'hao-button-small' : this.small,
                'hao-button-round' : this.round,
                'hao-button-fab' : this.fab,
                'hao-button-flat' : this.flat,
            }
        ]"
        @click="click"
    >
    <slot></slot>
    </button>
</template>

<script>
    export default {
        name : 'haoButton',
        props : {
            large : {
                type : Boolean,
                default : false,
            },
            small : {
                type : Boolean,
                default : false,
            },
            round : {
                type : Boolean,
                default : false
            },
            fab : {
                type : Boolean,
                default : false,
            },
            flat : {
                type : Boolean,
                default : false,
            },
        },
        methods : {
            click(e) {
                this.$emit('click',e)
            }
        },
    }
</script>

<style lang="less" scoped>
.hao-button{
    outline: none;
    border: none;
    background-color: lightblue;
    color: #fff;
    padding: 5px 10px;
    width: 80px;
    height: 38px;
    &.hao-button-round{
        border-radius: 38px;
    }
}
.hao-button-large{
    width: 108px;
    height: 40px;
    font-size: 20px;
    font-weight: 500;
    vertical-align: middle;
    letter-spacing: 2px;
    &.hao-button-round{
        border-radius: 40px;
    }
}
.hao-button-small{
    width: 50px;
    height: 34px;
    &.hao-button-round{
        border-radius: 34px;
    }
}
.hao-button-fab{
    box-shadow: 0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12);
}
.hao-button-flat{
    color: lightblue;
    background-color: transparent;
}
</style>