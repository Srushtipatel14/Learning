import { useEffect, useState } from "react";

function App() {

  const [inpval,setInpVal]=useState("");

  const fetchData=()=>{
    console.log(inpval)
  }

  const handlechange=(e)=>{
    const {value}=e.target;
    setInpVal(value)
  }

  useEffect(()=>{
    const timer=setTimeout(()=>{
      fetchData()
    },500)
    return ()=>{
      clearTimeout(timer)
    }
  },[inpval]);

  return (
    <div className="App">
      <input onChange={handlechange} value={inpval}/>
    </div>
  );
}

export default App;
