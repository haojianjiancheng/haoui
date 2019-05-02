import appbar from './appbar.js';
import '../Style/appbar.less';
appbar.install = function(Vue){
    Vue.component(appbar.name,appbar)
}
export default appbar