function throttle(callback, time) {
    let last = 0;
    return function (...args) {
        const now = Date.now();
        if (now - last >= time) {
            callback(...args)
            last = now;
        }
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const getdata = throttle(function (val) {
        console.log(val)
    }, 300)
    document.getElementById("val").addEventListener("input", function (e) {
        getdata(e.target.value)
    })
})