function val(a){
    return function(b){
        if(b===undefined){
            return console.log(a)
        }
        else{
            return val(a*b)
        }
    }
}

val(1)(2)(3)(4)()

val(2)(6)(3)(4)(1)()
