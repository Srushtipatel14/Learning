function throttle(callback,time){
    let last=0;
    return function(...args){
      const now=new Date();
      if(now-last>=time){
        callback(...args)
        last=now
      }
    }
}

document.addEventListener("DOMContentLoaded",function(){
    const val=throttle(function(v){
        console.log(v)
    },500)
    document.getElementById("val").addEventListener("input",function(e){
        val(e.target.value)
    })
})