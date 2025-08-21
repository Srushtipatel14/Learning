const details={
    fname:"srushti",
    lname:"patel",
    address:{
        village:"kansa",
        taluka:"visnagar",
        district:"mahesana"
    },
    val:[1,2,3]
}

function convertObject(details,prefix="val"){
    let result={};
    for(let key in details){
        const newkey=`${prefix}_${key}`;
        if(typeof details[key]==="object" && !Array.isArray(details[key])&& details[key]!==null){
            Object.assign(result,convertObject(details[key],newkey))
        }
        else{
            result[newkey]=details[key]
        }
    }
    return result
}

console.log(convertObject(details))