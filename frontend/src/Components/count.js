import { increment,decrement } from "./redux/reducer";
import {useSelector,useDispatch} from "react-redux"

const Count = () => {
    const count=useSelector((state)=>state.counter)
    const dispatch=useDispatch()
  return (
    <div>
      Count : {count}
      <button onClick={()=>dispatch(increment())}>INC</button>
      <button onClick={()=>dispatch(decrement())}>DEC</button>
    </div>
  )
}

export default Count
