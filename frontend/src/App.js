import { useEffect, useState } from "react";

function App() {

  const [inputVal,setInputVal]=useState("");

  const handleChnage=(e)=>{
    const {value}=e.target;
    setInputVal(value)
  }

  const fetchData=()=>{
    console.log(inputVal)
  }

  useEffect(()=>{
    const timer=setTimeout(()=>{
      fetchData()
    },500)

    return ()=>{
      clearTimeout(timer)
    }
  })

  return (
    <div className="App">
      <input onChange={handleChnage} value={inputVal} />
    </div>
  )
}

export default App;