function throttling(fn, delay) {
    let lastCall = 0;
    return function (...args) {
        const now = Date.now();
        if (now - lastCall >= delay) {
            lastCall = now;
            fn(...args);
        }
    };
}

document.addEventListener("DOMContentLoaded", function () {
    const fun = throttling((val) => {
        console.log(val);
    }, 1000);

    document.getElementById("val").addEventListener("input", function (e) {
        fun(e.target.value);
    });
});
