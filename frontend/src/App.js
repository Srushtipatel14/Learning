import { use, useEffect, useRef, useState } from "react";

function App() {

  const [items, setItem] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

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

  const handleScroll = () => {
    const totalHeight = document.documentElement.scrollHeight;
    const viewHeight = window.innerHeight;
    const scrollHeight = document.documentElement.scrollTop;

    if (totalHeight <= viewHeight + scrollHeight + 1) {
      setPage((prev) => prev + 1)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
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