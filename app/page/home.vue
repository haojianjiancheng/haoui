<template>
    <div class="home">
        <div class="home-main">
            <hao-form :model='regObject' ref='form'>
                <form-item :prop="'name'" :rules='rule' :label="'name'" :labelPosition="'left'">
                    <hao-input v-model="regObject.name"></hao-input>
                </form-item>
                <form-item prop='isok' label='滑块' labelPosition='left'>
                    <hao-switch></hao-switch>
                </form-item>
                <form-item prop='istrue' label='选择框' labelPosition='left'>
                    <checkbox></checkbox>
                </form-item>
            </hao-form>
            <hao-button @click="validated">验证</hao-button>
            <hao-button @click="clean">清空</hao-button>
        </div>
    </div>
</template>

<script>
    import haoForm from '../components/Form';
    import formItem from '../components/FormItem';
    import haoInput from '../components/minix/haoinput.vue';
    import haoButton from '../components/Button';
    import haoSwitch from '../components/Switch';
     import checkbox from '../components/checkbox';
    export default {
        components : {
            checkbox,
            haoSwitch,
            haoForm,
            formItem,
            haoInput,
            haoButton
        },
        data() {
            return {
                regObject : {
                    name : ''
                },
                rule : [
                    {
                        validate : (item,prop)=> item.length>10,
                        message : "长度不够"
                    }
                ]
            }
        },
        methods: {
            validated() {
                this.$refs.form.validate().then((item)=>{
                    if(item){
                        this.$router.push('/test')
                    }    
                })
            },
            clean() {
                console.log(this.$refs.form);
                
                this.$refs.form.clean();
                this.regObject = {
                    name : ""
                }
            }
        },
    }
</script>

<style lang="less" scoped>
.home{
    position: relative;
    .home-main{
        border: 2px solid black;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 500px;
        height: 700px;
        box-shadow: 0px 3px 3px -4px black;
    }
}
</style>