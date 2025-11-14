const obj = [
    { fname: "Srushti", lname: "patel", age: 23 },
    { fname: "Jil", lname: "patel", age: 23 },
    { fname: "Nishadh", lname: "patel", age: 17 },
    { fname: "Dipti", lname: "patel", age: 47 }
]

const v1=obj.filter((val)=>val.age>17).map((item)=>item.fname+ ' '+item.lname)
console.log(v1)