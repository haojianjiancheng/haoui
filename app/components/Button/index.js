import '../Style/button.less';
import button from './button.js';

button.install = function(Vue){
    Vue.component(button.name,button)
};

export default button;