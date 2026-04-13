import { RxCross2 } from "react-icons/rx";
import { useContext } from "react";
import { VisibleContext } from "./VisibleContext";

const AddEmp = () => {
    const { setVisible, formData, setFormData, setUsers, selectedUser ,setSelectedUser} = useContext(
        VisibleContext,
    );

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = () => {

        if (formData.id) {
            setUsers((prev) => prev.map((user) => user.id === formData.id ? formData : user))
        }
        else {
            const newData = {
                ...formData,
                id: Date.now(),
                imageURl: formData.imageURl || "https://cdn-icons-png.flaticon.com/512/149/149071.png"
            }
            setUsers((prev) => [...prev, newData])
        }
        if(selectedUser?.id === formData.id){
            setSelectedUser(formData)
        }

        setVisible(false)
        setFormData({})
    }



    return (
        <div className="form_container">
            <form>
                <div className="header_form">
                    <p style={{ textAlign: "center", fontSize: "24px" }}>
                        Employee Details
                    </p>
                    <RxCross2 onClick={() => setVisible(false)} size={24} />
                </div>
                <div className="employee_name">
                    <div className="fieldVal">
                        <label>First Name</label>
                        <input
                            name="Employee_name"
                            value={formData.Employee_name || ""}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="fieldVal">
                        <label>Last Name</label>
                        <input
                            name="Employee_Surname"
                            value={formData.Employee_Surname || ""}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="fieldVal">
                    <label>Designation</label>
                    <input
                        name="Designation"
                        value={formData.Designation || ""}
                        onChange={handleChange}
                    />
                </div>
                <div className="fieldVal">
                    <label>Salary</label>
                    <input
                        name="Salary"
                        value={formData.Salary || ""}
                        onChange={handleChange}
                    />
                </div>
                <div className="fieldVal">
                    <label>Image URL</label>
                    <input
                        name="imageURl"
                        value={formData.imageURl || ""}
                        onChange={handleChange}
                    />
                </div>
                <div className="fieldVal">
                    <label>Date Of Birth</label>
                    <input
                        type="date"
                        name="DOB"
                        value={formData.DOB || ""}
                        onChange={handleChange}
                    />
                </div>
                <div className="fieldVal">
                    <label>Gender</label>
                    <select
                        name="Gender"
                        value={formData.Gender || ""}
                        onChange={handleChange}
                    >
                        <option value=''>--Select--</option>
                        <option value="Female">Female</option>
                        <option value="Male">Male</option>
                    </select>
                </div>
                <button onClick={handleSubmit} className="">Save</button>
            </form>
        </div>
    );
};

export default AddEmp;
