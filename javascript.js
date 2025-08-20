document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("val2").addEventListener("click", function () {
        console.log("grand parent")
    },false)

    document.getElementById("val1").addEventListener("click", function () {
        console.log("parent")
    },true)

    document.getElementById("val0").addEventListener("click", function () {
        console.log("child")
    },false)
})