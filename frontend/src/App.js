import { useEffect, useRef, useState } from "react";
//https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}

function App() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const inputRef = useRef(null);

  const fetchDetails = async () => {
    try {
      setLoading(true);
      const resData = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`);
      const data = await resData.json();
      if (data.length === 0) {
        setHasMore(false);
        return;
      }
      setItems((prev) => [...prev, ...data]);
    } catch (error) {
      console.log(error)
    }
    finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (hasMore) {
      fetchDetails();
    }
  }, [page])


  useEffect(() => {
    if (!hasMore) return;
    const observer = new IntersectionObserver((entry) => {
      if (entry[0].isIntersecting && !loading) {
        setPage((prev) => prev + 1);
      }
    }, { threshold: 0.5 })
    if (inputRef.current) {
      observer.observe(inputRef.current);
    }
    return () => {
      if (inputRef.current) {
        observer.unobserve(inputRef.current)
      }
    }
  }, [loading, hasMore]);

  return (
    <div className="App">
      <div>
        {items.map((val, index) => (
          <div style={{ padding: "20px", border: "1px solid gray" }} key={val.id}>{index + 1}.{val.title}</div>
        ))}
      </div>
      {hasMore && (
        <div ref={inputRef}>
          {loading && (
            <div style={{ padding: "20px", border: "1px solid gray",color:"red"}}>loading...</div>
          )}
        </div>
      )}
      {!hasMore && (
        <div>No more data</div>
      )}
    </div>
  );
}

export default App; 