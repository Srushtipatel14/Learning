function val(a,b,c){
  return console.log(a+b+c)
}

const res=val.bind(this,5);
res(10,15)