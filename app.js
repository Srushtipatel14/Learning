const obj = [
    { fname: "Srushti", lname: "patel", age: 23 },
    { fname: "Jil", lname: "patel", age: 23 },
    { fname: "Nishadh", lname: "patel", age: 17 },
    { fname: "Dipti", lname: "patel", age: 47 }
]

const v1=obj.reduce((acc,curr)=>{
    if(acc[curr.age]){
       ++acc[curr.age];
    }
    else{
        acc[curr.age]=1;
    }
    return acc
},{})

console.log(v1)