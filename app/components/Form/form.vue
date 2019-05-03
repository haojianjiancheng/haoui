<template>
    <form class="form">
        <slot></slot>
    </form>
</template>

<script>
    export default {
        name : 'haoForm',
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
                let end = true;
                let promise = [];
                for (let i = 0; i < this.items.length; i++) {
                    let result = this.items[i].validate();
                    if(typeof result.then === 'function'){
                        promise.push(result);
                        continue;
                    };
                    if(!result){
                        end = false;
                    }
                }
                if(promise.length>0){
                    return Promise.all ([end ? Promise.resolve(end) : Promise.reject(end),...promise]).then(()=>true,()=>false);
                }
                return promise.resolve(end);
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
.form{
    position: relative;
}
</style>