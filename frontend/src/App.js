import React, { useMemo, useState } from "react";

export const Child = React.memo(function (data) {
  console.log("child render",data)
  return (<h1>Child</h1>
  )
})

const App = () => {

  const [count, setCount] = useState(0)
  console.log("parent render")

  const useData=useMemo(()=>{
    return {name:"sruti"}
  },[])
  
  const handleClick = () => {
    setCount((prev) => prev + 1)
  }
  return (
    <div>
      <button onClick={handleClick}>count : {count}</button>
      <Child data={useData} />
    </div>
  )
}

export default App;