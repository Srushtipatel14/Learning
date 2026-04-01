import { useEffect, useRef, useState } from "react";

function App() {

  const [inputVal, setInputVal] = useState("");
  const inpref=useRef(0)

  const handleChnage = (e) => {
    const { value } = e.target;
    setInputVal(value)
  }

  const fetchData = () => {
    console.log(inputVal)
  }

  useEffect(() => {
    if (inputVal === '') return;
    const now = new Date()
    if (now - inpref.current >= 500) {
      fetchData();
      inpref.current=now
    }
  }, [inputVal])

  return (
    <div className="App">
      <input onChange={handleChnage} value={inputVal} />
    </div>
  )
}

export default App;