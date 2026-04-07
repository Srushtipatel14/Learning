import { appSelector } from "../customHooks/hooks";
const DispalyCount = () => {
    const count = appSelector((state) => state.counter.value);
    return (
        <div style={{fontSize:"24px",fontWeight:"bold",marginTop:"20px"}}>Count : {count}</div>
    )
}

export default DispalyCount;