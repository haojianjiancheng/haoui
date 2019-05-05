import lazyComponent from './lazyComponent.js';

lazyComponent.install = function(Vue){
    Vue.component(lazyComponent.name,lazyComponent)
};

export default lazyComponent;