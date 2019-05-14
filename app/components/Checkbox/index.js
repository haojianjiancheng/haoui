import checkbox from './checkbox.js';
import '../Style/checkbox.less';

checkbox.install = function(Vue){
    Vue.component(checkbox.name,checkbox)
};

export default checkbox;