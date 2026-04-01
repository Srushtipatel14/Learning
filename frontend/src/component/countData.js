import { useSelector } from "react-redux";
const DispalyCount = () => {
    const count = useSelector((state) => state.counter.value);
    return (
        <h2>Count : {count}</h2>
    )
}

export default DispalyCount;