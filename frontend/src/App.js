import { useEffect, useRef, useState } from "react";

function App() {
  const [inval,setInval]=useState("");

  const fetchData=()=>{
    console.log(inval)
  }

  useEffect(()=>{
    if(inval==='') return;
    const timer=setTimeout(()=>{
      fetchData()
    },500);

    return ()=>clearTimeout(timer)
  },[inval])

  return (
    <div className="App">
      <input onChange={(e)=>setInval(e.target.value)}/>
    </div>
  );
}

export default App; 