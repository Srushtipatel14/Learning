import React, { useCallback, useState } from 'react';

const InputField = React.memo(({ label, name, value, handleChange }) => {
    console.log("child",name)
    return (
        <div style={{ margin: "10px", display: "flex", gap: "20px" }} >
            <label>{label}</label>
            <input onChange={handleChange} name={name} value={value} />
        </div>
    )
})

const Form = () => {

    console.log("parent")

    const [formData, setFormData] = useState({});

    const handleChange = useCallback((e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }, [])

    const handleSubmit=()=>{
        console.log(formData)
    }

    return (
        <div>
            <form>
                <InputField label='First Name' name="fname" handleChange={handleChange} value={formData.fname || ''} />
                <InputField label='Last Name' name="lname" handleChange={handleChange} value={formData.lname || ''} />
                <InputField label='College Name' name="col" handleChange={handleChange} value={formData.col || ''} />
                <InputField label='Company Name' name="com" handleChange={handleChange} value={formData.com || ''} />
                <button type='button' onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default Form