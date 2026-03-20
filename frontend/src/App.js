import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [val, setVal] = useState("");

  const fetchData = () => {
    console.log(val)
  }

  useEffect(() => {
    let timer;
    timer = setTimeout(() => {
      fetchData();
    }, 500);
    return () => {
      clearTimeout(timer)
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
