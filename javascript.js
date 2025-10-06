function recursion(a) {
    return function (b) {
        if (b === undefined) {
            return console.log(a)
        }
        else {
            return recursion(a * b)
        }
    }
}

recursion(1)(2)(3)(5)(6)()