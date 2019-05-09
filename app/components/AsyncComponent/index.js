export function asyncComponent( component , loading=null , error=null , delay=200 , timeout=3000 ){
    const AsyncHandle = () =>({
        component,
        loading,
        error,
        delay,
        timeout
    });
    return Promise.resolve({
        functional : true,
        render(h,{ data,children }) {
            return h(AsyncHandle,data,children)
        }
    })
}