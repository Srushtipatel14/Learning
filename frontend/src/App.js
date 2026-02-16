import { useEffect, useRef, useState } from "react";


function App() {

  const [formData, setFormData] = useState({});
  const inputref = useRef(0);

  const searchValue = async () => {
    console.log(formData.val)
  }

  useEffect(() => {
    if(!formData.val || formData.val==='') return
    const now=new Date();
   if(now-inputref.current>=500){
    searchValue();
    inputref.current=now;
   }
  }, [formData])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }
  return (
    <div className="App">
      <input onChange={handleChange} value={formData.val || ''} name='val' />
    </div>
  );
}

export default App; 