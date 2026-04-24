const detail={
    fname:"srushti",
    lname:"patel"
}

function val(v1,v2,v3){
    console.log(this.fname,this.lname,v1,v2,v3)
}


Function.prototype.mybind=function(...args){
    obj=this;
    params=args[0];
    const val=args.splice(1)
    return function(...arg){
        obj.apply(params,[...val,...arg])
    }
}

const ans=val.mybind(detail,"1")
ans("2","3")