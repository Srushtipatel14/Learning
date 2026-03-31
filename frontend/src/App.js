import {useDispatch,useSelector} from "react-redux";
import { increment,decrement } from "./features/counter/couterSlice";

function App() {
  const count=useSelector((state)=>state.counter.value);
  const dispatch=useDispatch()
  return (
    <div className="App">
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "30px", gap: "20px" }}>
          <button onClick={()=>dispatch(increment())} style={{ borderStyle: "none", padding: "10px", borderRadius: "10px", backgroundColor: "lightGray" }}>Increment</button>
          <button onClick={()=>dispatch(decrement())} style={{ borderStyle: "none", padding: "10px", borderRadius: "10px", backgroundColor: "lightGray" }}>Decrement</button>
        </div>
        <div>
          <h1>Count : {count}</h1>
        </div>
      </div>
    </div>
  )
}

export default App;