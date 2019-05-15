export default function( type='checkbox' ) {
    return {
        props : {
            value : [String,Number],
            inputValue : [Boolean,Array],
        },
        model : {
            prop : 'inputValue',
            event : 'change',
        },
        computed : {
            checked() {
                if(this.inputValue instanceof Array) return this.inputValue.includes(this.value);
                return this.inputValue;
            }
        },
        methods : {
            toggle() {            
                let inputValue = this.inputValue;
                if(typeof this.inputValue === 'boolean'){
                    this.$emit('change',!inputValue)
                    return
                }
                if(this.checked){
                    inputValue.splice(inputValue.indexOf(this.value),1);
                    this.$emit('change',inputValue);
                }else{
                    this.$emit('change',[...inputValue,this.value])
                }
            }
        },
    }
}