import { useEffect, useRef, useState } from "react";
//https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}
function App() {

  const [loading, setLoading] = useState(false);
  const [hasmore, setHasMore] = useState(true)
  const [page, setPage] = useState(1)
  const [item, setItem] = useState([])
  const inputRef = useRef();

  const fetchData = async () => {
    try {
      setLoading(true);
      const getData = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`);
      const data = await getData.json()

      if (data.length === 0) {
        setHasMore(false)
        return;
      }
      setItem((prev) => [...prev, ...data])
    } catch (error) {
      console.log(error)
    }
    finally {
      setLoading(false)
    }
  }

  const handleScroll = () => {
    const totalHeight = document.documentElement.scrollHeight;
    const viewHeight = window.innerHeight;
    const scrollHeight = document.documentElement.scrollTop;

    if (totalHeight - 10 <= viewHeight + scrollHeight) {
      if (loading && hasmore) return;
      setPage((prev) => prev + 1)
    }
  }

  useEffect(() => {
    if (hasmore) {
      fetchData()
    }
  }, [page])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [loading, hasmore])

  return (
    <div className="App">
      <div>
        {item.map((val, index) => (
          <div key={index} style={{ padding: "30px", border: "1px solid black" }}>{val.title}</div>
        ))}
      </div>

      {loading && (
        <div style={{ padding: "30px", border: "1px solid black", backgroundColor: "green" }}>loading...</div>
      )}
      {!hasmore && (
        <div style={{ padding: "30px", border: "1px solid black" }}>No more data available</div>
      )}
    </div>
  );
}

export default App;
