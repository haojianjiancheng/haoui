export default {
    name : 'hao-stepper-step',
    props : {
        icon : String,
        passIcon : String,
    },
    data (){
        return {
            show : true,
            color : ''
        }
    },
    inject : {
        stepper : {
            default : ''
        }
    },
    mounted () {
        this.stepper && this.stepper.steps.push(this);
    },
    beforeDestroy () {
        if(this.stepper){
            let index = this.stepper.steps.indexOf(this);
            if(index === -1) return
            this.stepper.steps.splice(index,1)
        };
    },
    methods : {
        changeShow(){
            this.color = 'red';
            this.show = false;
        },
        reset(){
            this.color = '';
            this.show = true;
        },
        isLast(){
            return this.stepper && this.stepper.steps[this.stepper.steps.length-1] === this
        },
        iconName(){
            return this.show ? this.icon ? this.icon : '' : this.passIcon ? this.passIcon : this.icon
        }
    },
    render(h) {
        let slot = this.$scopedSlots;
        return h('li',{},[
            h('div',{
                staticClass : 'hao-stepper-title'
            },slot.title()),
            h('div',{
                staticClass : 'hao-stepper-icon'
            },[
                h('div',{},[
                    h('i',{
                        staticClass : `iconfont ${this.iconName()}`,
                        style : {
                            color : this.color
                        }
                    })
                ]),
                
                !this.isLast() && h('div',{
                    staticClass : 'hao-stepper-liner',
                    style : {
                        backgroundColor : this.color
                    }
                })
            ]),
            h('div',{
                staticClass : 'hao-stepper-content',
            },[this.show && slot.content()]),
        ])
    }
}