function debounce(callback,time){
    let timer;
    return function(...args){
        clearTimeout(timer);
        timer=setTimeout(()=>{
            callback(...args)
        },time)
    }
}

document.addEventListener("DOMContentLoaded",function(){
    const val=debounce(function(v){
        console.log(v)
    },500)
    document.getElementById("val").addEventListener("input",function(e){
        val(e.target.value)
    })
})