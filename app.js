const add=(a,b)=>a+b;
const multiple=(a,b)=>a*b;

const compose=(f,g)=>(a,b,c)=>f(g(a,b),c);
const val=compose(add,multiple)(4,5,10)
console.log(val)