const details = {
    fname: "srushti",
    lname: "patel",
    address: {
        village: "kansa",
        taluka: "visnagar",
        district: "mahesana"
    }
}

function convertObject(obj, prefix = "details") {
    let result = {};
    for (let key in obj) {
        const newkey=`${prefix}_${key}`
        if (typeof obj[key] === "object" && !Array.isArray(obj[key]) && obj[key] !== null) {
            Object.assign(result,convertObject(obj[key],newkey))
        }
        else{
            result[newkey]=obj[key]
        }
    }
    return result;
}

console.log(convertObject(details))