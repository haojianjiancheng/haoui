<template>
    <form>
        <slot></slot>
    </form>
</template>

<script>
    export default {
        props : {
            formValue : Object
        },
        provide : {
            form : this
        }
    }
</script>

<style lang="less" scoped>

</style>