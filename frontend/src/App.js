import './App.css';
import { Store } from './Redux/store';
import {Provider} from "react-redux";
import Counter from './Components/counter';
const App = () => {
  return (
    <Provider store={Store}>
      <Counter/>
    </Provider>
  )
}

export default App