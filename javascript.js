const details={
    fname:"srushti",
    lname:"patel"
}

function detailsShow(v1,v2,v3){
    return console.log(this.fname,this.lname,v1,v2,v3)
}

const val=detailsShow.bind(details,"a","b","c")
val()