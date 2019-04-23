<template>
    <form class="form">
        <slot></slot>
    </form>
</template>

<script>
    export default {
        name : 'hao-form',
        data() {
            return {
                items : [],
            }
        },
        props : {
            model : Object
        },
        provide (){
            return {
                form : this
            }
        },
        methods: {
            getVal (prop){
                return this.model[prop]
            },
            validate() {
                let pass = [];
                this.items.forEach(item => {
                    let result = item.validate();
                    console.log(result);
                    
                    pass.push(result ? Promise.resolve(result) : Promise.reject(result));
                });
                return Promise.all(pass)
            },
            blur() {
                
            }
        },
    }
</script>

<style lang="less" scoped>

</style>