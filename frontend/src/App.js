import { useEffect, useRef, useState } from "react";
//https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}

function App() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

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

  const handleScroll = () => {
    const totalHeight = document.documentElement.scrollHeight;
    const viewHeight = window.innerHeight;
    const scrollHeight = document.documentElement.scrollTop;

    if (totalHeight <= viewHeight + scrollHeight) {
      setPage((prev) => prev + 1)
    }
  }


  useEffect(() => {
    if (loading && hasMore) return;
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  })

  return (
    <div className="App">
      <div>
        {items.map((item, index) => (
          <div style={{ padding: "30px", border: "1px solid grey" }} key={index}>{index + 1}.{item.title}</div>
        ))}
      </div>

      {loading && (
        <div style={{ padding: "30px", backgroundColor: "grey" }}>Loading...</div>
      )}

      {!hasMore && (
        <div>No more data available</div>
      )}
    </div>
  );
}

export default App; 