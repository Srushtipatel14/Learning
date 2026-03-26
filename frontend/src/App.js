import { useEffect, useRef, useState } from "react";
//https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}
function App() {

  const [loading, setLoading] = useState(false);
  const [hasmore, setHasMore] = useState(true)
  const [page, setPage] = useState(1)
  const [item, setItem] = useState([])
  const inputRef = useRef('');

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

  useEffect(() => {
    if(loading && !hasmore) return;
    const observer = new IntersectionObserver((entry) => {
      if (entry[0].isIntersecting && hasmore) {
        setPage((prev) => prev + 1)
      }
    }, { threshold: 0.5 })

    const val = inputRef.current;
    if (val) {
      observer.observe(val)
    }

    return () => {
      observer.unobserve(val)
    }
  }, [hasmore, loading])

  useEffect(() => {
    if (hasmore) {
      fetchData()
    }
  }, [page])



  return (
    <div className="App">
      <div>
        {item.map((val, index) => (
          <div key={index} style={{ padding: "30px", border: "1px solid black" }}>{val.title}</div>
        ))}
      </div>
      <div ref={inputRef}>
        {loading && (
          <div style={{ padding: "30px", border: "1px solid black", backgroundColor: "green" }}>loading...</div>
        )}
      </div>
      {!hasmore && (
        <div style={{ padding: "30px", border: "1px solid black" }}>No more data available</div>
      )}
    </div>
  );
}

export default App;
