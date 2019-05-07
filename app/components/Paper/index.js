import paper from './paper.vue';

paper.install = function(Vue){
    Vue.component(paper.name,paper)
};

export default paper;