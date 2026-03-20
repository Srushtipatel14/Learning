function throttling(callback, time) {
    let last=0;
    return function (...args) {
        const now=new Date()
        if(now-last>=time){
            callback(...args)
            last=now;
        }
    }
}


document.addEventListener("DOMContentLoaded", function () {
    const val = throttling(function (va) {
        console.log(va)
    }, 500)
    document.getElementById("list").addEventListener("input", function (e) {
        val(e.target.value)
    })
})