const radius=[1,2,3,4,5]

function area(radius){
    return Math.PI*radius*radius;
}

function diameter(radius){
    return 2*radius;
}
function circumference(radius){
    return Math.PI*radius*2;
}


Array.prototype.calculate=function(logic){
    let ans=[];
    for(let i=0;i<this.length;i++){
        ans.push(logic(this[i]))
    }
    return ans;
}


console.log(radius.calculate(diameter))
console.log(radius.map(diameter))