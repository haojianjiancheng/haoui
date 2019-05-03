let loadImg = function(el,error,url,observer){
    let oImg = new Image();
    oImg.onload = function(){
        el.src = oImg.src;
    }
    oImg.onerror = function(){
        el.src = error
    }
    oImg.src = url
    observer.unobserve(el);
}
function mix (defaultConfig,options){
    return { ...defaultConfig,...options }
}
export function lazy (defaultConfig) {
    return function (Vue,options) {
        let config = mix(defaultConfig,options);
        console.log(config);
        
        Vue.directive('lazy',{
           bind(el){
               el.setAttribute('data-img','false');
           },
           inserted(el,{ value },vNode){
               const observer = new IntersectionObserver(([ change ])=>{
                    const loadingImg = config.loading;
                    if(change.intersectionRatio > 0 && el.getAttribute('data-img') === 'false'){
                        el.setAttribute('data-img','true');
                        if(el.tagName.toLowerCase() === 'img'){
                            loadImg(el,defaultConfig.error,value,observer);
                        }else if(value && typeof value === 'function'){
                            value.call(el,vNode)
                        }else{
                            console.log('error');
                        }            
                    }else{
                        el.src = loadingImg;
                    }
               })
               observer.observe(el)
           }
       })
   }
}