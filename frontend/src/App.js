import { useEffect, useState } from "react";

function App() {
  const [val, setVal] = useState("")

  function fetchData(){
    console.log(val)
  }

  useEffect(()=>{
    const timer=setTimeout(()=>{
      if(!val || val==='' ) return;
      fetchData()
    },500)
    return ()=>clearTimeout(timer);
  },[val])


  return (
    <div className="App">
      <input onChange={(e) => { setVal(e.target.value) }} value={val || ''} name="val" />
    </div>
  );
}

export default App; 