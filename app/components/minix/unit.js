export function createSvg (h,path,className) {
    return h('svg',{
        staticClass : className,
        attrs : {
            viewBox : '0 0 24 24',
        }
    },[
        h('path',{
            attrs : {
                d : path
            }
        })
    ])
};

