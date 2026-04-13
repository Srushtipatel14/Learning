import Home from './home';
import './App.css';
import { useState } from 'react';
import { VisibleContext } from "./VisibleContext";


const App = () => {
  const [visible, setVisible] = useState(false);
  const [formData, setFormData] = useState({});
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <VisibleContext.Provider value={{ visible, setVisible, formData, setFormData, users, setUsers, selectedUser, setSelectedUser }}>
      <div>
        <Home />
      </div>
    </VisibleContext.Provider>
  )
}

export default App
