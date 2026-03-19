const worker=new Worker("worker.js")
document.addEventListener("DOMContentLoaded",function(){

    worker.onmessage=function(msg){
        alert(msg.data)
    }

    document.getElementById("sum").addEventListener("click",function(){
       worker.postMessage("sum")
    });

    document.getElementById("color").addEventListener('click',function(){
        if(document.body.style.backgroundColor!=='red'){
            document.body.style.backgroundColor="red";
        }
        else{
            document.body.style.backgroundColor="white"
        }
    })
})