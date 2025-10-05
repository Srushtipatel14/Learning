const details={
    fname:"srushti",
    lname:"patel"
}

function detailsShow(v1,v2,v3){
    return console.log(this.fname,this.lname,v1,v2,v3)
}

Function.prototype.mybind=function(...args){
    params=args.splice(1)
    obj=this;
    return function(...arg){
        obj.apply(args[0],[...params,...arg])
    }
}

const val=detailsShow.mybind(details,"a","b")
val("c");