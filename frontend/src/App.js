import { useEffect, useRef, useState } from "react";
//https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}

function App() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const inputRef = useRef(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`);
      const data = await res.json();

      if (data.length === 0) {
        setHasMore(false);
        return;
      }
      setItems((prev) => [...prev, ...data]);
    } catch (error) {
      console.log(error);
    }
    finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (hasMore) {
      fetchData();
    }
  }, [page])

  useEffect(()=>{
    const observer=new IntersectionObserver((entry)=>{
      if(entry[0].isIntersecting && !loading){
        setPage((prev)=>prev+1)
      }
    },{threshold:1});

    const val=inputRef.current;
    if(val){
      observer.observe(val)
    }

    return ()=>{
      if(val){
        observer.unobserve(val)
      }
    }
  },[hasMore,loading])

  return (
    <div className="App">
      <div>
        {items.map((item, index) => (
          <div style={{padding:"30px",border:"1px solid grey"}} key={index}>{index + 1}.{item.title}</div>
        ))}
      </div>

      <div ref={inputRef}>
        {loading && (
          <div style={{padding:"30px",backgroundColor:"grey"}}>Loading...</div>
        )}
      </div>

      {!hasMore && (
        <div>No more data available</div>
      )}
    </div>
  );
}

export default App; 