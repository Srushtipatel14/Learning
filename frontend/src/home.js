import { useEffect, useState } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";

const Home = () => {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);

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
        setUsers(filterUSer);
    }

    const userSelectionFuntion = (id) => {
        const user = users.find((user) => user.id === id);
        setSelectedUser(user)
    }

    return (
        <div className="container">
            <div className="Heading_Section">
                <div>Employee Management System</div>
                <button>Add Employee</button>
            </div>
            <div className="content">
                <div className="employee_list">
                    <div className="header"> Employee List </div>
                    {users.map((user) => (
                        <div key={user?.id} onClick={() => userSelectionFuntion(user?.id)} className="employee_item">
                            <span>{user?.Employee_name + " " + user?.Employee_Surname}</span>
                            <RiDeleteBin5Line onClick={(e) => {
                                e.stopPropagation();
                                removeEmployee(user?.id)
                            }} color="red" size={24} />
                        </div>
                    ))}
                </div>
                <div className="employee_details">
                    <div className="header"> Employee Details </div>
                    <div className="detail_Section">
                        <img src={selectedUser?.imageURl}></img>
                        <span>{selectedUser?.Employee_name + " " + selectedUser?.Employee_Surname}</span>
                        <span>{selectedUser?.Designation}</span>
                        <span>Birth Date : {selectedUser?.DOB}</span>
                        <span>Gender : {selectedUser?.Gender}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
