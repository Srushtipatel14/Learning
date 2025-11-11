function debouncing(fn, time) {
    let timeval = 0;
    return function (...args) {
        clearTimeout(timeval)
        timeval = setTimeout(() => {
            fn(...args)
        }, time)
        if (timeval >= time) {
            timeval = time;
        }
    }
}

document.addEventListener("DOMContentLoaded", function () {

    const fun = debouncing((val) => {
        console.log(val)
    }, 1000)

    document.getElementById("val").addEventListener("input", function (e) {
        fun(e.target.value)
    })
})