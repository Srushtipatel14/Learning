document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("list_2").addEventListener("click", function () {
        console.log("grandparent")
    },true)

    document.getElementById("list_1").addEventListener("click", function () {
        console.log("parent")
    },false)

    document.getElementById("list_0").addEventListener("click", function () {
        console.log("child")
    },false)
})