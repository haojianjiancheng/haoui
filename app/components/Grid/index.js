import '../Style/grid.less';
import container from './container.js';
import row from './row.js';
import col from './col.js';

export default {
    install (Vue) {
        Vue.component(container.name,container);
        Vue.component(row.name,row);
        Vue.component(col.name,col);
    }
}