import { useEffect, useRef, useState } from "react";

//https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}




function App() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false)
  const [hasMore, setHasMore] = useState(true)

  useEffect(() => {
    if (hasMore) {
      fetchData();
    }
  }, [page]);

  async function fetchData() {
    try {
      setLoading(true)
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`);
      const jsondata = await res.json();
      if (jsondata.length === 0) {
        setHasMore(false);
        return;
      }
      setItems((prev) => [...prev, ...jsondata]);
    } catch (error) {
      console.log(error)
    }
    finally {
      setLoading(false)
    }
  }

  const handleInfiniteScroll = () => {
    const totalHeight = document.documentElement.scrollHeight;
    const viewHeight = window.innerHeight;
    const scrollHeight = document.documentElement.scrollTop;
    if (totalHeight <= viewHeight + scrollHeight + 1) {
      setPage((prev) => prev + 1)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleInfiniteScroll);
    return () => window.removeEventListener("scroll", handleInfiniteScroll)
  }, [hasMore])

  return (
    <div className="App">
      <div>
        {items.map((item) => (
          <div key={item.id} style={{ padding: "20px", border: "1px solid black" }}>{item.title}</div>
        ))}
      </div>
      <div>
        {loading && (
          <p style={{ height: "20px", background: "grey" }} >loading...</p>
        )}
      </div>

      {!hasMore && (
        <p style={{ height: "20px", background: "grey" }} >no more data</p>
      )}
    </div>
  );
}

export default App; 