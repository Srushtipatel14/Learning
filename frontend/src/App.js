import { useEffect, useRef, useState } from "react";

//https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}

function App() {
  const [page, setPage] = useState(1);
  const [items, setItems] = useState([]);
  const inputRef = useRef(null);
  const [loading, setLoading] = useState(false)
  const [hasMore, setHasMore] = useState(true);

  const fetchData = async () => {
    try {
      setLoading(true);
      const resdata = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`);
      const data = await resdata.json();
      if(data.length===0){
        setHasMore(false);
        return
      }
      setItems((prev) => [...prev, ...data])
    } catch (error) {
      console.log(error)
    }
    finally {
      setLoading(false)
    }
  }

  useEffect(()=>{
    const observer=new IntersectionObserver((enty)=>{
      if(enty[0].isIntersecting && !loading){
        setPage((prev)=>prev+1)
      }
    },{threshold:1})

    const obj=inputRef.current;
    if(obj){
      observer.observe(obj)
    }
    return ()=>{
      if(obj){
        observer.unobserve(obj);
      }
    }

  },[hasMore,loading])

  useEffect(() => {
    if (hasMore) {
      fetchData();
    }
  }, [page])
  return (
    <div className="App">
      <div>
        {items.map((item, index) => (
          <div style={{ padding: "20px", border: "1px solid black" }} key={index}>{index + 1}.{item.title}</div>
        ))}
      </div>
      <div ref={inputRef}>
        {loading && (
          <div style={{ padding: "20px", backgroundColor: "grey" }} >Loading...</div>
        )}
      </div>

      {!hasMore && (
        <div>No more data present</div>
      )}
    </div>
  );
}

export default App; 