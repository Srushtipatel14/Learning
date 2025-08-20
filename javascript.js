
//function currying 

function val(a){
    return function(b){
        return function(c){1
            return console.log(a*b*c)
        }
    }
}

val(2)(3)(8)