import { useEffect, useRef, useState } from "react";

function App() {
  const [val, setVal] = useState("");
  const inputRef=useRef(0)

  function fetchData(){
    console.log(val)
  }

  useEffect(()=>{
    if(val){
      const now=new Date();
      if(now-inputRef.current>=500){
        fetchData();
        inputRef.current=now;
      }
    }
  },[val])


  return (
    <div className="App">
      <input onChange={(e) => { setVal(e.target.value) }} value={val || ''} name="val" />
    </div>
  );
}

export default App; 