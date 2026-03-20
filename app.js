function debounce(callback, time) {
    let timer;
    return function (...args) {
     clearTimeout(timer);
     timer=setTimeout(()=>{
        callback(...args)
     },time)
    }
}


document.addEventListener("DOMContentLoaded", function () {
    const val = debounce(function (va) {
        console.log(va)
    }, 500)
    document.getElementById("list").addEventListener("input", function (e) {
        val(e.target.value)
    })
})