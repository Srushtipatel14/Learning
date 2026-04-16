import { useEffect, useRef, useState } from "react";

const Display = () => {
    const [items, setItems] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const timeRef = useRef(null);

    const fetchData = async () => {
        try {
            setLoading(true);
            const resData = await fetch(
                `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`,
            );
            const data = await resData.json();

            if (data.length === 0) {
                setHasMore(false);
                return;
            }
            setItems((prev) => [...prev, ...data]);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (hasMore) {
            fetchData();
        }
    }, [page]);

    useEffect(() => {
        if (loading && !hasMore) return;
        const observer = new IntersectionObserver(
            (entry) => {
                if (entry[0].isIntersecting && hasMore) {
                    setPage((prev) => prev + 1);
                }
            },
            { threshold: 1 },
        );
        const time = timeRef.current;
        if (timeRef.current) {
            observer.observe(time);
        }
        return () => {
            observer.unobserve(time);
        };
    }, [loading, hasMore]);

    return (
        <div className="conatiner">
            <div className="cards">
                {items.map((item, index) => (
                    <div className="card" key={index}>{item?.title}</div>
                ))}
            </div>

            <div ref={timeRef}>
                {loading && (
                    <div className="loading"></div>
                )}
            </div>
            {!hasMore && (
                <div className="nomore">No More Data Available</div>
            )}
        </div>
    );
};

export default Display;
