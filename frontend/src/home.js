import { useEffect } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { MdModeEdit } from "react-icons/md";
import AddEmp from "./AddEmp";
import { useContext } from "react";
import { VisibleContext } from "./VisibleContext"
const Home = () => {
    const { visible, setVisible, users, setUsers,setFormData,selectedUser,setSelectedUser} = useContext(VisibleContext)

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const usersData = await fetch("/data.json")
                const data = await usersData.json()
                setUsers(data)
                if (data.length > 0) {
                    setSelectedUser(data[0]);
                }
                else {
                    setSelectedUser(null)
                }
            } catch (error) {
                console.log(error)
            }
        }
        fetchUsers()
    }, [])

    const removeEmployee = (id) => {
        const filterUSer = users.filter((user) => user.id !== id);
        if (selectedUser?.id === id) {
            const index = users.findIndex((user) => user.id === id);
            if (index === -1) {
                setSelectedUser(null)
            }
            else {
                if (index >= filterUSer.length) {
                    setSelectedUser(filterUSer[index - 1])
                }
                else {
                    setSelectedUser(filterUSer[index])
                }
            }
        }
        setUsers(filterUSer);
    }

    const userSelectionFuntion = (id) => {
        const user = users.find((user) => user.id === id);
        setSelectedUser(user)
    }

    const editEmployee = (id) => {
        const user=users.find((user)=>user.id===id);
        setVisible(true);
        setFormData(user)
    }

    return (
        <>
            {visible && <AddEmp />}
            <div className="container" style={{ opacity: visible ? "0.3" : "1" }}>
                <div className="Heading_Section">
                    <div>Employee Management System</div>
                    <button onClick={() => setVisible(true)}>Add Employee</button>
                </div>
                <div className="content">
                    <div className="employee_list">
                        <div className="header"> Employee List </div>
                        {users.map((user) => (
                            <div key={user?.id} onClick={() => userSelectionFuntion(user?.id)} className={selectedUser?.id === user?.id ? "employee_item_selected" : "employee_item"}>
                                <span>{user?.Employee_name + " " + user?.Employee_Surname}</span>
                                <div>
                                    <MdModeEdit size={20} color="blue" style={{ cursor: "pointer" }} onClick={(e) =>{
                                        e.stopPropagation()
                                         editEmployee(user?.id)
                                    }} />
                                    <RiDeleteBin5Line size={20} color="red" style={{ cursor: "pointer" }} onClick={(e) => {
                                        e.stopPropagation()
                                        removeEmployee(user?.id)
                                    }} />
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="employee_details">
                        <div className="header"> Employee Details </div>
                        {selectedUser && (
                            <div className="detail_Section">
                                <img alt="image_user" src={selectedUser?.imageURl}></img>
                                <span>{selectedUser?.Employee_name + " " + selectedUser?.Employee_Surname}</span>
                                <span>{selectedUser?.Designation}</span>
                                <span>Birth Date : {selectedUser?.DOB}</span>
                                <span>Gender : {selectedUser?.Gender}</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
