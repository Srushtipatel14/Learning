import React, { useState } from "react";

export const Child = React.memo(function () {
  console.log("child render")
  return (<h1>Child</h1>
  )
})

const App = () => {

  const [count, setCount] = useState(0)
  console.log("parent render")
  const handleClick = () => {
    setCount((prev) => prev + 1)
  }
  return (
    <div>
      <button onClick={handleClick}>count : {count}</button>
      <Child />
    </div>
  )
}

export default App;