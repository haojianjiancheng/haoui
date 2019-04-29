import { createSvg } from '../minix/unit.js'

export default {
    name : 'paging',
    data() {
        return {
            jump : {
                '>' : {
                    step : 1,
                    path : 'M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z'
                },
                "<" : {
                    step : -1,
                    path : 'M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z'
                },
                "a" : {
                    step : -3,
                    path : 'M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z'

                },
                'z' : {
                    step : 3,
                    path : 'M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z'
                }
            }
        }
    },
    props : {
        small : {
            type : Boolean,
            default : false,
        },
        fab : {
            type : Boolean,
            default : false,
        },
        flat : {
            type : Boolean,
            default : false
        },
        circle : {
            type : Boolean,
            default : false,
        },
        total : {
            type : [Number,String],
            validator : function(value){
                return /^\d+$/.test(value)
            }
        },
        pageSize : {
            type : [Number,String],
            default : 5,
            validator : function(value){
                return /^\d+$/.test(value)
            }
        },
        current : {
            type : [Number,String],
            validator : function(value){
                return /^\d+$/.test(value)
            }
        },
        butNum : {
            type : [Number,String],
            default : 3,
            validator : function(value){
                return value>2 && value<22 && value%2!==0; 
            }
        }
    },
    computed : {
        totalBut() {
            return Math.ceil(this.total/this.pageSize);
        },
        display() {
            if(this.total === 0) return []
            let array = [];
            let displayBut = this.totalBut < this.butNum ? this.totalBut : this.butNum;
            let ceil = Math.ceil(displayBut/2);
            if(this.current<ceil){
                for (let i = 0; i < displayBut; i++) {
                    array[i] = i+1;
                }
                return array
            }
            if(this.current>this.totalBut-ceil){
                for (let i = 0; i < displayBut; i++) {
                    array[i] = this.totalBut-displayBut+i+1;
                }
                return array
            }
            for (let i = 0; i < displayBut; i++) {
                array[i] = this.current+i+1-ceil;
            }
            return array                
        }
    },
    methods : {
        changePage(num) {
            let value = /^\d+$/.test(num) ? num : this.current+this.jump[num].step;
            if(value<1 || value>this.totalBut) return
            this.$emit('update:current',value);
            this.$emit('change',value);
        },
        createPage(h,num) {
            let value = /^\d+$/.test(num) ? num : createSvg(h,this.jump[num].path);
            let disabled ; 
            if(num === '>'){
                disabled = this.current >= this.totalBut ? true : false
            }
            if(num === '<'){
                disabled = this.current <= 1 ? true : false
            }
            return h('li',{
                staticClass : "paging-num",
                class : {
                    'is-current' : this.current === num,
                    'disabled' : disabled,
                    'paging-num-small' : this.small,
                    'paging-num-fab' : this.fab,
                    'paging-num-flat' : this.flat,
                    'paging-num-circle' : this.circle,
                },
                on : {
                    click : ()=> this.changePage(num)
                }
            },[value])
        },
        spotLeft(h) {            
            if (this.display[0] < 2){
                return
            }
            if(this.display[0] >3){
                return this.createPage(h,'a')
            }
            if(this.display[0] === 3){
                return this.createPage(h,2)
            }
        },
        spotRight(h) {
            let len = this.display.length-1;            
            if(this.display[len] > this.totalBut-1){
                return
            }
            if(this.display[len] === this.totalBut-2){
                return this.createPage(h,this.totalBut-1)
            }
            if(this.display[len] < this.totalBut-2){
                return this.createPage(h,'z')
            }
        }
    },
    render(h) {
        return h('ul',{
            staticClass : 'paging'
        },[
            this.createPage(h,"<"),
            this.display[0]>1 && this.createPage(h,1),
            this.spotLeft(h),
            this.display.map(item=>this.createPage(h,item),this),
            this.spotRight(h),
            this.display[this.display.length-1]<this.totalBut && this.createPage(h,this.totalBut),
            this.createPage(h,">")
        ])
    }
}