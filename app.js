const details={
    fname:"srushti",
    lname:"patel"
}

function valprint(v1,v2,v3){
    return console.log(this.fname,this.lname,v1,v2,v3)
}

valprint.call(details,"a","b","c")
valprint.apply(details,["a","b","c"]);
const ret=valprint.bind(details,"a","b","c")
ret()

Function.prototype.mybind=function(...args){
    obj=this;
    params=args.slice(1)
    return function(...arg){
        obj.apply(args[0],[...params,...arg])
    }
}
const ret1=valprint.mybind(details,"a","b")
ret1("c")