import appbar from './appbar';
appbar.install = function(Vue){
    Vue.component(appbar.name,appbar)
}
export default appbar