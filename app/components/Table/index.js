import table from './table.js';
import '../Style/table.less';

table.install=function(Vue){
    Vue.component(table.name,table)
};

export default table;