import appbar from './appbar.js';
import '../Style/appbar.css';
appbar.install = function(Vue){
    Vue.component(appbar.name,appbar)
}
export default appbar