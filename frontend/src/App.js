import { useEffect, useRef, useState } from "react";

function App() {

  const [page, setPage] = useState(1);
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const inputRef = useRef();

  const fetchData = async () => {
    try {
      setLoading(true);
      const resData = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`);
      const data = await resData.json();

      if (data.length === 0) {
        setHasMore(false);
        return
      }
      setItem((prev) => [...prev, ...data])
    } catch (error) {
      console.log(error)
    }
    finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver((entry) => {
      if (entry[0].isIntersecting && hasMore) {
        setPage((prev) => prev + 1)
      }
    }, { threshold: 1 });

    const val = inputRef.current;
    if (val) {
      observer.observe(val)
    }
    return () => {
      observer.unobserve(val)
    }
  }, [hasMore, loading])

  useEffect(() => {
    if (hasMore) {
      fetchData()
    }
  }, [page])

  return (
    <div className="App">
      <div>
        {item.map((val, index) => (
          <div style={{ height: "50px", border: "1px solid black", padding: "20px" }}>{val.title}</div>
        ))}
      </div>

      <div ref={inputRef}>
        {loading && (
          <div style={{ height: "30px", border: "1px solid black", padding: "10px", backgroundColor: "grey" }}>loading...</div>
        )}

      </div>
      {!hasMore && (
        <div style={{ height: "30px", border: "1px solid black", padding: "10px" }}>No more data available</div>
      )}
    </div>
  );
}

export default App;
