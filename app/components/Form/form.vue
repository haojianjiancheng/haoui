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
            model : {
                type : Object,
                required : true,
            },
            autoValidate : {
                type : Boolean,
                default : true
            }
        },
        provide (){
            return {
                form : this
            }
        },
        methods : {
            addItem(item) {
                this.items.push(item)
            },
            removeItem(item) {
                let index = this.items.indexOf(this);
                if(index === -1) return
                this.items.splice(index,1)
            },
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
            clean() {
                this.items.forEach(item=>{
                    item.error = '';
                })
            }
        }
    }
</script>

<style lang="less" scoped>

</style>