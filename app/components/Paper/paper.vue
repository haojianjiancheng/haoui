<template>
    <div class="paper">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name : 'paper',
    }
</script>

<style lang="less" scoped>
    .paper{
        position:relative;
        box-shadow: 0px 2px 10px -4px black;
    }
</style>