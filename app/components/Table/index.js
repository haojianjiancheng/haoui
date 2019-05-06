import table from './table.js';

table.install=function(Vue){
    Vue.component(table.name,table)
};

export default table;