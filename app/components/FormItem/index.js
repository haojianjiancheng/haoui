import formItem from './formItem';
import '../Style/formItem.less'

formItem.install = function(Vue){
    Vue.component(formItem.name,formItem)
};

export default formItem;