import { useEffect, useRef, useState } from "react";
//https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}

function App() {
  const [page, setPage] = useState(1);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false)
  const [hasMore, setHasMore] = useState(true)
  const inputref=useRef(null)

  useEffect(() => {
    if (hasMore) {
      fetchData()
    }
  }, [page]);

  const fetchData = async () => {

    setLoading(true)
    try {
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

  // const handleInfiniteScroll = () => {
  //   if (!hasMore || loading) return;
  //   const totalHeight = document.documentElement.scrollHeight;
  //   const viewHeight = window.innerHeight;
  //   const scrollHeight = document.documentElement.scrollTop;
  //   if (totalHeight <= viewHeight + scrollHeight + 1) {
  //     setPage((prev) => prev + 1)
  //   }
  // }

  // useEffect(() => {
  //   window.addEventListener("scroll", handleInfiniteScroll)
  //   return () => window.removeEventListener("scroll", handleInfiniteScroll)
  // }, [loading, hasMore])
  
  useEffect(()=>{
    const observer=new IntersectionObserver((entry)=>{
      if(entry[0].isIntersecting && !loading){
        setPage((prev)=>prev+1);
      }
    },{threshold:1})
    if(inputref.current){
      observer.observe(inputref.current)
    }

    return ()=>{
      if(inputref.current){
        observer.unobserve(inputref.current)
      }
    }


  },[loading,hasMore])


  return (
    <div className="App">
      <div>
        {items.map((item) => (
          <div key={item.id} style={{ padding: "20px", border: "1px solid black" }}>{item.title}</div>
        ))}
      </div>
       <div
        ref={inputref}
        style={{ height: "50px", textAlign: "center" }}
      >
        {loading && <p>Loading...</p>}
      </div>


      {!hasMore && <p style={{ textAlign: "center" }}>No more data</p>}
    </div>
  );
}

export default App; 