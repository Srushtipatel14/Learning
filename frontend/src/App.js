import React, { useCallback, useMemo, useState } from 'react'

const Child = React.memo((data) => {
  console.log("child render",data.data.name)
  return (
    <h4>child</h4>
  )
})

const App = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prev) => prev + 1)
  }

  const dataVal=useMemo(()=>{
    return {
      name:"situ"
    }
  },[])

  return (
    <div>
      <Child data={dataVal} />
      <h1>Count : {count}</h1>
      <button onClick={handleClick}>Increse</button>
    </div>
  )
}

export default App