import { use, useEffect, useRef, useState } from "react";

function App() {

  const [items, setItem] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const refval = useRef()

  const fetchData = async () => {
    try {
      setLoading(true);
      const resData = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`);

      const data = await resData.json();
      if (data.length === 0) {
        setHasMore(false)
        return;
      }
      setItem((prev) => [...prev, ...data])
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (hasMore) {
      fetchData()
    }
  }, [page]);

  useEffect(() => {
    if (loading && !hasMore) return;

    const observer = new IntersectionObserver((entry) => {
      if (entry[0].isIntersecting && hasMore) {
        setPage((prev) => prev + 1)
      }
    }, { threshold: 1 })

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

      <idv ref={refval}>
        {loading && (
          <div style={{ padding: "30px", border: "1px solid black", backgroundColor: "grey" }}>Loading...</div>
        )}
      </idv>

      {!hasMore && (
        <div style={{ padding: "30px", border: "1px solid black" }}>No more data available</div>
      )}
    </div>
  )
}

export default App;