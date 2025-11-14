const obj = [
    { fname: "Srushti", lname: "patel", age: 23 },
    { fname: "Jil", lname: "patel", age: 23 },
    { fname: "Nishadh", lname: "patel", age: 17 },
    { fname: "Dipti", lname: "patel", age: 47 }
]

const v1=obj.map((val)=>val.fname+ " "+val.lname)
console.log(v1)