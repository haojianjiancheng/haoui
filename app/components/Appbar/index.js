import appbar from './appbar';
import '../Style/appbar.css';
appbar.install = function(Vue){
    Vue.component(appbar.name,appbar)
}
export default appbar