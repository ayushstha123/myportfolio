export default function debounce(fn,ms=300){
    let timeoutId;
    return function (...args){
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => fn.apply(this,args),ms);
    }
}