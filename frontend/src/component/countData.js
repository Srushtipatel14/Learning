import { appSelector } from "../customHooks/hooks";
const DispalyCount = () => {
    const count = appSelector((state) => state.counter.value);
    return (
        <h2>Count : {count}</h2>
    )
}

export default DispalyCount;