import {useDispatch,useSelector} from "react-redux";
import { decrement, increment } from "../Redux/counterSlice";

const Counter = () => {
    const count=useSelector((state)=>state.counter);
    const dispatch=useDispatch()
  return (
    <div className="container">
    <div className="sub1">
        Count : {count}
    </div>
    <div className="sub2">
        <button onClick={()=>dispatch(increment())}>Increment</button>
        <button onClick={()=>dispatch(decrement())}>Decrement</button>
    </div>
    </div>
  )
}

export default Counter;