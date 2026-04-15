import store from './Components/redux/store';
import { Provider } from "react-redux";
import Count from './Components/count';
import './App.css';


const App = () => {
  return (
    <Provider store={store}>
      <Count />
    </Provider>
  )
}

export default App