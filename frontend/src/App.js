import { appDispatch } from "./customHooks/hooks";
import { increment, decrement } from "./features/counter/counterSlice";
import DispalyCount from "./component/countData";

function App() {
  const dispatch = appDispatch();
  return (
    <div className="App">
      <button onClick={() => dispatch(increment())}>Incement</button>

      <button onClick={() => dispatch(decrement())}>Incement</button>

      <DispalyCount/>
    </div>
  );
}
export default App;
