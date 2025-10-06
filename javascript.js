function throttling(callback, time) {
    let last = 0;
    return function (...args) {
        const now = Date.now()
        if (now - last >= time) {
            callback(...args)
            last = now;
        }
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const functionCall = throttling((data) => {
        console.log(data)
    }, 1000)
    document.getElementById("container").addEventListener("input", function (e) {
        functionCall(e.target.value)
    })
})