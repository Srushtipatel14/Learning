//removing all zeros from the array without using any iterator method

const a=[1,2,0,3,0,4,0,5,0,6,7,8,0,0,9];
let result=[];

function val(arr){
    const temp=arr;
    if(arr.length===0){
        return result;
    }
    else{
        const val1=temp.slice(0,1)
        const v=temp.slice(1)
        if(val1[0]!==0){
            result.push(val1[0]);
        }
        return val(v)
    }
}

console.log(val(a));