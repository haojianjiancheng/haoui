import haoSwitch from './switch.js';
import '../Style/switch.less';

haoSwitch.install = function(Vue){
    Vue.use(haoSwitch.name,haoSwitch)
};

export default haoSwitch;
