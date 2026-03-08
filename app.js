const worker=new Worker("worker.js");

document.addEventListener("DOMContentLoaded", function () {
    const sum = document.getElementById("sum");
    const color = document.getElementById("color");

    sum.addEventListener("click",function(){
        worker.postMessage("sum")
    })

    worker.onmessage=function(message){
        alert(`sum is ${message.data}`)
    }

    color.addEventListener("click", function () {
        if (document.body.style.backgroundColor !== 'red') {
            document.body.style.backgroundColor = 'red'
        }
        else {
            document.body.style.backgroundColor = 'white';
        }
    });
})