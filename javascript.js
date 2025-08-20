const detail={
    fname:"srushti",
    lname:"patel",
    address:{
        village:"kansa",
        taluka:"visnagar"
    }

};

function convertObject(detail,prefix="detail"){
    let result={}
    for(let key in detail){
        let newkey=`${prefix}_${key}`;
        if(typeof  detail[key]==="object" && !Array.isArray(detail[key]) && detail[key]!==null ){
            Object.assign(result,convertObject(detail[key],newkey))
        }else{
            
        result[newkey]=detail[key]
        }
    }
    return result
}

console.log(convertObject(detail))