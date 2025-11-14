const obj = [
    { fname: "Srushti", lname: "patel", age: 23 },
    { fname: "Jil", lname: "patel", age: 23 },
    { fname: "Nishadh", lname: "patel", age: 17 },
    { fname: "Dipti", lname: "patel", age: 47 }
]

//result : [ 'Srushti patel', 'Jil patel', 'Dipti patel' ]
// use reduce not map filter

const v1=obj.reduce((acc,curr)=>{
    if(curr.age>17){
        acc.push(curr.fname+' '+curr.lname)
    }
    return acc;
},[])


console.log(v1)
