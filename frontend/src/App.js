import { useEffect, useRef, useState } from "react";
//https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}

function App() {
  const [inputVal, setInputVal] = useState('');

  const fetchdata =() => {
    console.log(inputVal)
  }

  useEffect(() => {
    const time = setTimeout(() => {
      if (inputVal === '') return;
      fetchdata();
    }, 500);

    return () => clearTimeout(time);
  }, [inputVal])

  return (
    <div className="App">
      <input onChange={(e) => setInputVal(e.target.value)} />
    </div>
  );
}

export default App; 