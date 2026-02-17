import { useEffect, useRef, useState } from "react";

//https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}

function App() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false)
  const [hasMore, setHasMore] = useState(true);
  const refVal = useRef()

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

  useEffect(() => {
    if (!hasMore) return;
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !loading && hasMore) {
        setPage((prev) => prev + 1)
      }
    }, { threshold: 0,root:null,rootMargin:"100px" });
    const el=refVal.current

    if (el) {
      observer.observe(el)
    }
    return () => {
      if (el) {
        observer.unobserve(el)
      }
    }

  }, [hasMore, loading])

  
  return (
    <div className="App">
      <div>
        {items.map((item) => (
          <div key={item.id} style={{ padding: "20px", border: "1px solid black" }}>{item.title}</div>
        ))}
      </div>
      <div ref={refVal}>
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