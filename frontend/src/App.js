import { useEffect, useRef, useState } from "react";

//https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}

function App() {
  const [inval,setInval]=useState("");
  const lastTime=useRef(0)

  const fetchData=()=>{
    console.log(inval)
  }

  useEffect(()=>{
    if(inval==='') return;
    const time=new Date();
    if(time-lastTime.current>=500){
      fetchData()
      lastTime.current=time;
    }
  },[inval])

  return (
    <div className="App">
      <input onChange={(e)=>setInval(e.target.value)}/>
    </div>
  );
}

export default App; 