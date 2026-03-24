import { useEffect, useRef, useState } from "react";

function App() {

  const [inpval,setInpVal]=useState("");
  const val=useRef(0)

  const fetchData=()=>{
    console.log(inpval)
  }

  const handlechange=(e)=>{
    const {value}=e.target;
    setInpVal(value)
  }

  useEffect(()=>{
   const time=new Date();
   if(time-val.current>=500){
    fetchData();
    val.current=time;
   }
  },[inpval]);

  return (
    <div className="App">
      <input onChange={handlechange} value={inpval}/>
    </div>
  );
}

export default App;
