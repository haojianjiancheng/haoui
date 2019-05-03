import Vue from 'vue';
import loadingOriginal from './loading.vue';
import defaultConfig from './config.js'

let LoadingConstructor = Vue.extend(loadingOriginal);
let config = defaultConfig;
const isServer = typeof window === 'undefined';
let Loading = function (options = {}){
    console.log(options);
    
    if (isServer) return;
    const target = options.target && typeof options.target.appendChild === 'function' ? options.target : document.body;
    if(target._loading) return;
    let loading = new LoadingConstructor({
        el : document.createElement('div'),
        propsData : {
            ...config,
            ...options,
        }
    });
    target.appendChild(loading.$el);
    target._loading = true;
    loading.show = true;
    return {
        instance : loading,
        close() {
            if(!loading) return;
            loading.show = false;
            this.instance && (this.instance = null);
            setTimeout(()=>{
                loading.$el.parentNode && loading.$el.parentNode.removeChild(loading.$el);
                loading.$destroy();
                loading = null;
                target._loading = false;
            },500)
        }
    }
};
const toggleLoading = function(el,isLoading){
    if(isLoading){
        const options = {
            target : el,
        }
        el.hasAttribute('data-loading-color') && (options.color = el.getAttribute('data-loading-color'));
        el.hasAttribute('data-loading-bc') && (options.bc = el.getAttribute('data-loading-bc'));
        el.hasAttribute('data-loading-size') && (options.size = Number(el.getAttribute('data-loading-size')));
        el.hasAttribute('data-loading-className') && (options.className = el.getAttribute('data-loading-className'));
        el.hasAttribute('data-loading-text') && (options.text = el.getAttribute('data-loading-text'));
        el._loading = Loading(options);
        return;
    };
    if(el._loading){
        el._loading.close();
        el._loading = null;
    }
}
const directive = {
    name : 'loading',
    inserted (el,{value}){
       toggleLoading(el,value)
        
    }
}
Loading.config = function(options){
    config = {...defaultConfig,...options}
}

Loading.install = function(Vue,options){
    Loading.config(options);
    console.log(config);
    
    Vue.prototype.$loading = Loading;
    Vue.directive(directive.name,directive);
}

export default Loading;

