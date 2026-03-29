import React, { useEffect, useMemo, useRef, useState } from "react";
//https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}

export const Child=React.memo((data)=>{
  console.log("child render",data)
  return(
    <h1>Child</h1>
  )
})
function App() {

  const [count,setCount]=useState(0)

  const userData=useMemo(()=>{
    return {
      name:"srushti"
    }
  },[]);

  console.log("parent render")

  const handleClick=()=>{
    setCount((prev)=>prev+1)
  }

  return (
    <div className="App">
      <button onClick={handleClick}>Click : {count}</button>
      <Child data={userData}/>
    </div>
  )
}

export default App;