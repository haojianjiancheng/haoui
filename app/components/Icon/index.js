import icon from './icon.js';
import '../Style/icon.css';

icon.install = function(Vue){
    Vue.component(icon.name,icon)
};

export default icon;