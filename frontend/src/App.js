import {useSelector,useDispatch} from "react-redux";
import {increment,decrement} from "./features/counter/counterSlice"

function App() {
  const count=useSelector((state)=>state.counter.value);
  const dispatch=useDispatch();
  return (
    <div className="App">
    <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}

export default App;