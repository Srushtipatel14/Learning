import React, { useEffect, useRef, useState } from "react";


function App() {

  const [page, setPage] = useState(1);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false)
  const [hasMore, setHasMore] = useState(true);
  const refval = useRef();

  const fetchData = async () => {
    try {
      setLoading(true)
      const resdata = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`);
      const data = await resdata.json();
      if (data.length === 0) {
        setHasMore(false)
        return;
      }
      setItems((prev) => [...prev, ...data])
    } catch (error) {
      console.log(error)
    }
    finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (loading && !hasMore) return;
    if (hasMore) {
      fetchData();
    }
  }, [page])

  const handleScroll = () => {
    const totalHeight = document.documentElement.scrollHeight;
    const viewHeight = window.innerHeight;
    const scrollHeight = document.documentElement.scrollTop;

    if (totalHeight <= viewHeight + scrollHeight+1) {
      setPage((prev) => prev + 1)
    }
  }


  useEffect(() => {
    if (loading && !hasMore) return;

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, [loading, hasMore])


  return (
    <div className="App">
      <div>
        {items.map((item, index) => (
          <div key={index} style={{ padding: "30px", border: "1px solid black" }}>{item.title}</div>
        ))}
      </div>

      {loading && (
        <div style={{ padding: "30px", border: "1px solid black", backgroundColor: "grey" }}>Loading...</div>
      )}

      {!hasMore && (
        <div style={{ padding: "30px", border: "1px solid black" }}>No more data available</div>
      )}
    </div>
  )
}

export default App;