//call apply bind method

const details={
    fname:"srushti",
    lname:"patel"
}

function valprint(v1,v2,v3){
    console.log(this.fname,this.lname,v1,v2,v3)
}

//call method invokes immediately, takes arguments as comma seperated values
valprint.call(details,"v1","v2","v3")


//apply method invokes immediately, takes arguments as array or array like objects

valprint.apply(details,["v1","v2","v3"])

// in bind menthod return a function and call it whenever need , takes arguments like call method

const bindmethod=valprint.bind(details,"v1","v2","v3")
bindmethod()