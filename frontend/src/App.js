import { useEffect, useRef, useState } from "react";
//https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}
function App() {

  const [inpval, setInpval] = useState("")
  const inpref=useRef(0)

  const fetchData = () => {
    console.log(inpval)
  }

  useEffect(() => {
    if(inpval==='') return;
    const now=new Date()
    if(now-inpref.current>=500){
      fetchData();
      inpref.current=now;
    }
  }, [inpval])

  const handleChange = (e) => {
    const { value } = e.target;
    setInpval(value)
  }
  return (
    <div className="App">
      <input onChange={handleChange} value={inpval} />
    </div>
  );
}

export default App;
