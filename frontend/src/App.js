import { useEffect, useState } from "react";


function App() {

  const [formData, setFormData] = useState({});

  const searchValue =async() => {
    console.log(formData.val)
  }

  useEffect(() => {
    const debounce = setTimeout(() => {
      if (formData.val === '' || formData.val === undefined) return;
      searchValue()
    }, 500)
    return () => clearTimeout(debounce)
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
