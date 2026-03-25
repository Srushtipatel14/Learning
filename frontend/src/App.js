import { useEffect, useRef, useState } from "react";

function App() {

  const [page, setPage] = useState(1);
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const handleScroll = () => {
    if (loading && hasMore) return;
    const totalHeight = document.documentElement.scrollHeight;
    const viewHeight = window.innerHeight;
    const scrollHeight = document.documentElement.scrollTop;
    if (totalHeight - 10 <= viewHeight + scrollHeight) {
      setPage((prev) => prev + 1)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }

  }, [loading, hasMore]);

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
    if (hasMore) {
      fetchData();
    }
  }, [page])

  return (
    <div className="App">
      <div>
        {item.map((val, index) => (
          <div style={{ height: "50px", border: "1px solid black", padding: "20px" }}>{val.title}</div>
        ))}
      </div>

      {loading && (
        <div style={{ height: "30px", border: "1px solid black", padding: "10px", backgroundColor: "grey" }}>loading...</div>
      )}

      {!hasMore && (
        <div style={{ height: "30px", border: "1px solid black", padding: "10px" }}>No more data available</div>
      )}
    </div>
  );
}

export default App;
