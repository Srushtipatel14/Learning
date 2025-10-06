function debouncing(callback,time){
    let timer;
    return function(...args){
        clearTimeout(timer)
        timer=setTimeout(()=>{
            callback(...args)
        },time)
    }
}

document.addEventListener("DOMContentLoaded",function(){
    const functionCall=debouncing((data)=>{
        console.log(data)
    },500)
    document.getElementById("container").addEventListener("input",function(e){
        functionCall(e.target.value)
    })
})