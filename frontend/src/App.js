import { useEffect, useState, useRef } from 'react';
import './App.css';

const App = () => {
  const [status, setstatus] = useState(false);
  const workerRef = useRef(null);

  useEffect(() => {
    workerRef.current = new Worker(new URL('./worker.js', import.meta.url));

    workerRef.current.onmessage = (e) => {
      console.log(e.data);
      alert(`Result from worker: ${e.data}`);
    };

    return () => {
      workerRef.current.terminate(); 
    };
  }, []);

  const click1Fun = () => {
    workerRef.current.postMessage("send");
  };

  const click2Fun = () => {
    setstatus((prev) => !prev);
  };

  return (
    <div style={{ backgroundColor: status ? "red" : "white" }}>
      <button onClick={click1Fun}>click 1</button>
      <button onClick={click2Fun}>click 2</button>
    </div>
  );
};

export default App;