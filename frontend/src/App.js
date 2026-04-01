import React, { useMemo, useState } from "react";

export const Child = React.memo((data) => {
  console.log("child render",data)
  return (
    <h1>Child</h1>
  )
})

function App() {
  const [count, setCount] = useState(0)

  const handleCount = () => {
    setCount((prev) => prev + 1)
  }
  console.log("parent render")

  const userData = useMemo(() => {
    return {
      name: "Srushti"
    }
  },[]);

  return (
    <div className="App">
      <button onClick={handleCount}>Count : {count}</button>

      <Child data={userData} />
    </div>

  )
}

export default App;