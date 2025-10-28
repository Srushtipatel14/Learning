import {Routes,Route} from "react-router-dom";
import TODO from "./components/todo/todo";
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<TODO/>}/>
    </Routes>
  );
}

export default App;
