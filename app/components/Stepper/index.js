import stepper from './stepper.js';
import step from './step.js';
import '../Style/stepper.less';

stepper.install = function(Vue){
    Vue.component(stepper.name,stepper)
};
step.install = function(Vue){
    Vue.component(step.name,step)
}

export { stepper,step };