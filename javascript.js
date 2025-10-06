function val(a){
    return function(b){
        console.log(a*b)
    }
}

val(7)(8)