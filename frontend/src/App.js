import { appDispatch } from "./customHooks/hooks";
import { increment, decrement } from "./features/counter/counterSlice";
import DispalyCount from "./component/countData";

function App() {
  const dispatch = appDispatch();
  return (
    <div className="App">
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center",flexDirection:"column",marginTop:"20px" }}>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "20px" }}>
          <button style={{ padding: "10px", borderRadius: "10px", borderStyle: "none" }} onClick={() => dispatch(increment())}>Incement</button>
          <button style={{ padding: "10px", borderRadius: "10px", borderStyle: "none" }} onClick={() => dispatch(decrement())}>Incement</button>
        </div>
        <div>
          <DispalyCount />
        </div>
      </div>
    </div>
  );
}

export default App;
