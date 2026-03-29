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
      <div>
        {item.map((val, index) => (
          <div key={index} style={{ padding: "30px", border: "1px solid black" }}>{val.title}</div>
        ))}
      </div>
      <div ref={inputRef}>
        {loading && (
          <div style={{ padding: "30px", border: "1px solid black", backgroundColor: "green" }}>loading...</div>
        )}
      </div>
      {!hasmore && (
        <div style={{ padding: "30px", border: "1px solid black" }}>No more data available</div>
      )}
    </div>
  )
}

export default App;