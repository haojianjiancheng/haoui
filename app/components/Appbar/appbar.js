export default {
    name : 'appbar',
    props : {
        value : {
            type : Number,
            default : 0,
        },
        onMins : Function,
        onPlus : Function
    },
    computed : {
        num (){
            console.log(this.value);
            
            return this.value
        }
    },
    watch : {
        value(nval){
            console.log(nval);
            
        }
    },
    render(h){
        return h('p',{

        },[h('button',{
            on : {
                click : this.onMins
            }
        },['减']),this.num,h('button',{
            on : {
                click : this.onPlus
            }
        },['加'])])
    }
}