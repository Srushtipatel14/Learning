import { useEffect, useRef, useState } from "react";

function App() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false)
  const [hasMore, setHasMore] = useState(true);
  const refval = useRef('')
  const fetchdata = async () => {
    try {
      setLoading(true);
      const resData = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`);
      const data = await resData.json();
      if (data.length === 0) {
        setHasMore(false)
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
      fetchdata();
    }
  }, [page])

  useEffect(() => {
    if (loading && !hasMore) return

    const observer = new IntersectionObserver((entry) => {
      if (entry[0].isIntersecting && hasMore) {
        setPage((prev) => prev + 1)
      }
    }, { threshold: 0.5 })

    const val = refval.current;
    if (val) {
      observer.observe(val)
    }
    return () => {
      observer.unobserve(val)
    }
  }, [loading, hasMore])


  return (
    <div className="App">
      <div>
        {items.map((item, index) => (
          <div key={index} style={{ padding: "30px", border: "1px solid black" }}>{item.title}</div>
        ))}
      </div>
      <div ref={refval}>
        {loading && (
          <div style={{ padding: "30px", border: "1px solid black", backgroundColor: "grey" }}>Loading...</div>
        )}

      </div>
      {!hasMore && (
        <div style={{ padding: "30px", border: "1px solid black" }}>No more data available</div>
      )}
    </div>
  )
}

export default App;