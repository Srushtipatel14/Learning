document.addEventListener("DOMContentLoaded",function(){
    document.getElementById("val").addEventListener("click",function(e){
        if(e.target.tagName==="LI"){
            console.log(e.target.innerHTML)
        }
    })
})