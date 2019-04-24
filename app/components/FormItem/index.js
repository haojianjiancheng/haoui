import formItem from './formItem';
import '../Style/formItem.css'

formItem.install = function(Vue){
    Vue.component(formItem.name,formItem)
};

export default formItem;