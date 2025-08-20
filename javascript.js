document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("list_2").addEventListener("click", function () {
        console.log("grandparent")
    },false)

    document.getElementById("list_1").addEventListener("click", function () {
        console.log("parent")
    },false)

    document.getElementById("list_0").addEventListener("click", function () {
        console.log("child")
    },false)
})

//by default event bubbling happen from bottom to top