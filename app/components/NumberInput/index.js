import numberInput from './numberInput.js';
import '../Style/numberInput.less';

numberInput.install = function(Vue){
    Vue.component(numberInput.name,numberInput)
};

export default numberInput;