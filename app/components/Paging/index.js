import '../Style/paging.less';
import paging from './paging.js';

paging.install = function(Vue){
    Vue.component(paging.name,paging);
};

export default paging;