function throttling(callback,time){
    let timer;
    return function(...args){
        clearTimeout(timer)
        timer=setTimeout(()=>{
            callback(...args)
        },time)
    }
}

document.addEventListener("DOMContentLoaded",function(){
    const functionCall=throttling((data)=>{
        console.log(data)
    },200)
    document.getElementById("container").addEventListener("input",function(e){
        functionCall(e.target.value)
    })
})