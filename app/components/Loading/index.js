import Vue from 'vue';
import loadingOriginal from './loading.js';

let LoadingConstructor = Vue.extend(loadingOriginal);
const isServer = typeof window === 'undefined';
let Loading = function (options = {}){
    if (isServer) return;
    const target = options.target && typeof options.target.appendChild === 'function' ? options.target : document.body;
    if(target._loading) return;
    let loading = new LoadingConstructor({
        el : document.createElement('div'),
        propsData : {
            ...options,
            fixed : !options.target
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

Loading.install = function(Vue){
    Vue.prototype.$loading = Loading;
}

console.log(Loading);


export default Loading;

