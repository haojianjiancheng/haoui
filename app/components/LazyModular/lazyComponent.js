export default {
    name : 'lazyComponent',
    mounted () {
        this.timeout && setTimeout(() => {
            this.changeShow();
        }, this.timeout)
        this.observer = this.createObserver();
        this.observer.observe(this.$el);
    },
    props : {
        view : {
            type : typeof window !== 'undefined' ? window.HTMLElement : Object,
            default : () => null
        },
        threshold : {
            type : String,
            default : '0px'
        },
        tag : {
            type : String,
            default : 'div'
        },
        name : String,
        timeout : Number
    },
    data(){
        return {
            show : false,
            observer : null,
        }
    },
    methods : {
        createObserver() {
            return new IntersectionObserver(([ change ])=>{
                if(change.intersectionRatio>0){
                    this.changeShow();
                }   
            },{
                root : this.view,
                rootMargin : this.threshold,
            })
        },
        changeShow(){
            this.observer.unobserve(this.$el);        
            this.show = true;
            this.$emit('change',this.show);
        }
    },
    render(h) {
        const defaultSlot = this.$scopedSlots.default;
        return h('transition-group',{
            props : {
                name : this.name,
                tag : this.tag,
            },
            on : {
                beforeEnter : ()=>{
                    
                }
            }
        },[
            this.show && defaultSlot({
                show : true
            })
        ])
    }
} 