import { useEffect, useRef, useState } from "react";

const Display = () => {

  const [status, setStatus] = useState(false);
  const timeRef = useRef(null);


  useEffect(() => {
    timeRef.current = new Worker(new URL(('./worker.js'), import.meta.url));
    timeRef.current.onmessage=(e)=>{
      alert(e.data);
    }

    return ()=>{
      timeRef.current.terminate();
    }
  }, [])

  const handleCalculation = () => {
    timeRef.current.postMessage("send")
  }

  const chnageDisplay = () => {
    setStatus((prev) => !prev)
  }
  return (
    <div className="container" style={{ backgroundColor: status ? 'red' : "white" }}>
      <div className="sub2">
        <button onClick={handleCalculation}>Calculation</button>
        <button onClick={chnageDisplay}> Display</button>
      </div>
    </div>
  )
}

export default Display;