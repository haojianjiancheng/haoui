<template>
    <div id="app">
        <router-link to="/test">test</router-link>
        <router-link to="/home">home</router-link>
        <router-link to="/req">req</router-link>
        <router-view></router-view>
    <table></table>
    </div>
</template>

<script>
    import table from './components/table'
    export default {
        components : {
            table
        },
        data() {
            return {
                
            }
        },
        methods: {
           
            
        },
    }
</script>

<style lang="less" scoped>
    #app{
      
    }
</style>