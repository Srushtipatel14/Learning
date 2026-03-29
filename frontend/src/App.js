import { useEffect, useRef, useState } from "react";
//https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}
function App() {
  const [inpval, setInpval] = useState("");

  const fetchData = () => {
    console.log(inpval)
  }

  useEffect(() => {
    if (inpval === '') return;
    const timer = setTimeout(() => {
      fetchData()
    }, 500)

    return () => {
      clearTimeout(timer)
    }
  }, [inpval]);

  const handleChange = (e) => {
    const { value } = e.target;
    setInpval(value)
  }
  
  return (
    <div className="App">
      <input onChange={handleChange} value={inpval}/>
    </div>
  )
}

export default App;