function loadImg (el,options,url,observer){
    let oImg = new Image();
    oImg.onload = function(){
        el.src = oImg.src;
    }
    oImg.onerror = function(){
        el.src = options.error
    }
    oImg.src = url;
    observer.unobserve(el);
}

function mix (defaultConfig,options){
    return { ...defaultConfig,...options }
}
export function lazy (defaultConfig) {
    return function (Vue,options) {
        let config = mix(defaultConfig,options);
        Vue.directive('lazy',{
           bind(el){
               el.setAttribute('data-img','false');
               el.width = config.width;
               el.height = config.height;
           },
           inserted(el,{ value },vNode){
               const observer = new IntersectionObserver(([ change ])=>{
                    if(change.intersectionRatio > 0 && el.getAttribute('data-img') === 'false'){
                        el.setAttribute('data-img','true');
                        if(el.tagName.toLowerCase() === 'img'){
                            loadImg(el,config,value,observer);
                        }else if(value && typeof value === 'function'){
                            value.call(el,vNode)
                        }else{
                            console.log('error');
                        }            
                    }else{
                        el.src = config.loading;
                    }
               })
               observer.observe(el)
           }
       })
   }
}