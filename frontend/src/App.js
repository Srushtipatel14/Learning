import { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  const [val, setVal] = useState("");
  const last = useRef(0)

  const fetchData = () => {
    console.log(val)
  }

  useEffect(() => {
    const now = new Date();
    if (now - last.current >= 500) {
      fetchData();
      last.current = now;
    }
  }, [val])

  const handleChage = (e) => {
    setVal(e.target.value)
  }

  return (
    <div className="App">
      <input onChange={handleChage} value={val || ''} />
    </div>
  );
}

export default App;
