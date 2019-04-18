<template>
    <div id="app">
        <p>这是一段文字</p>
        <appbar :onPlus="plus" :onMins="minus" :vlaue="count"></appbar>
        <test :onPlus="plus" :onMinus="minus" :vlaue="count"></test>
    </div>
</template>

<script>
    import appbar from '@/components/Appbar';
    import test from './test.vue';
    export default {
        components : {
            appbar,
            test
        },
        data(){
            return {
                count : 0,
            }
        },
        methods : {
            plus(){
                console.log(this.count);
                
                this.count++;
            },
            minus(){
                console.log(this.count);
                
                this.count--;
            }
        }
    }
</script>

<style lang="less" scoped>
    #app{
        background: linear-gradient(to bottom, yellow, black);
    }
</style>