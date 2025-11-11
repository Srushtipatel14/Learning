const details={
    fname:"srushti",
    lname:"patel"
}

function val(details){
    return function(v1){
        return function(v2){
            return function(v3){
                return console.log(details.fname,details.lname,v1,v2,v3)
            }
        }
    }
}

val(details)("a")("b")("c")