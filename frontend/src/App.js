import './App.css';
import TODO from "./components/todo/todo";
import {Routes,Route} from "react-router-dom"


function App() {
  return (
    <Routes>
      <Route path='/' element={<TODO/>}/>
    </Routes>
  );
}

export default App;
