function debounce(callback, time){
    let timer;
    return function (...args) {
        clearTimeout(timer)
        timer = setTimeout(() => {
            callback(...args)
        }, time)
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const getdata = debounce(function(val){
        console.log(val)
    }, 500)
    document.getElementById("val").addEventListener("input", function (e) {
        getdata(e.target.value)
    })
})