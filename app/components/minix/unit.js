export function createSvg (h,path) {
    return h('svg',{
        staticClass : 'paging-svg-icon',
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

