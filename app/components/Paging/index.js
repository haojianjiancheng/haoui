import paging from './paging.vue';

paging.install = function(Vue){
    Vue.component(paging.name,paging);
};

export default paging;