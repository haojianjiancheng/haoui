<template>
    <div class="counter">
        <button @click="onMinus">减</button>
        {{value}}
        <button @click="onPlus">加</button>
    </div>
</template>

<script>
    export default {
        props: {
            value: {
                type: Number,
                default: 0
            },
            onMinus : Function,
            onPlus : Function
        },
    }
</script>

<style>
 .counter{
        background: linear-gradient(to bottom, pink, black);
    }
</style>
