import { useEffect, useRef, useState } from "react";

function App() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false)
  const [hasMore, setHasMore] = useState(true);

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
    if (loading && !hasMore) return
    if (hasMore) {
      fetchdata();
    }
  }, [page])


  const handleScroll = () => {
    const totalheight = document.documentElement.scrollHeight;
    const viewHeight = window.innerHeight;
    const scrollHeight = document.documentElement.scrollTop;
    console.log(totalheight, viewHeight, scrollHeight)
    if (totalheight-10<= viewHeight + scrollHeight) {
      setPage((prev) => prev + 1)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
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