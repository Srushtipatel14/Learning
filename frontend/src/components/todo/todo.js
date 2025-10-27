import { useEffect, useState } from "react";

const TODO = () => {

    const [formdata, setFormdata] = useState({});
    const [todolist, setTodoList] = useState([]);

    const handlechange = (e) => {
        const { name, value } = e.target;
        setFormdata((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    useEffect(() => {
        const fetchdetails = async () => {
            try {
                const tododata = localStorage.getItem("todo");
                setTodoList(JSON.parse(tododata))
            } catch (error) {
                console.log(error)
            }
        }
        fetchdetails()
    }, []);

 const addtodoitem = async () => {
  try {
    const existingTodos = JSON.parse(localStorage.getItem("todo")) || [];

    let updatedTodos;

    if (formdata.id) {
      updatedTodos = existingTodos.map((item) =>
        item.id === formdata.id ? { ...item, ...formdata } : item
      );
    } else {
      const newTodo = { ...formdata, id: crypto.randomUUID() };
      updatedTodos = [...existingTodos, newTodo];
    }
    setTodoList(updatedTodos);
    localStorage.setItem("todo", JSON.stringify(updatedTodos));
    setFormdata({});
  } catch (error) {
    console.error("Error adding/editing todo:", error);
  }
};


    const removeTodoListItem = async (id) => {
        try {
            const existingTodos = JSON.parse(localStorage.getItem("todo")) || [];
            const updateTodo = existingTodos.filter((item) => item.id !== id);
            localStorage.setItem("todo", JSON.stringify(updateTodo));
            setTodoList(updateTodo)
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div className="flex justify-center items-center min-h-screen w-screen bg-gray-400">
            <div className="border rounded-lg shadow-lg p-2 w-1/2 bg-white  max-h-96 overflow-y-auto">
                <div className='flex gap-2'>
                    <input name="todoitem" value={formdata.todoitem || ''} onChange={handlechange} className='border rounded-lg shadow-sm w-full outline-none p-2'></input>
                    <button className='border rounded-lg shadow-sm py-2 px-4 bg-green-200' onClick={addtodoitem}>ADD</button>
                </div>

                <div className="pt-4 space-y-2">
                    {todolist.length === 0 ? (
                        <p className="text-center text-gray-500 italic">No todos yet — add one above!</p>
                    ) : (
                        todolist.map((item) => (
                            <div key={item.id} className="flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition-all duration-200 border border-gray-200 rounded-lg shadow-sm px-3 py-2">
                                <div className="flex items-center gap-2">
                                    <span className="w-3 h-3 bg-green-400 rounded-full"></span>
                                    <p className="text-gray-800 font-medium">{item.todoitem}</p>
                                </div>
                                <div className="flex gap-2">
                                    <button className="text-blue-500 hover:text-blue-700 transition" onClick={() => {
                                        setFormdata(item)
                                    }}>✏️</button>
                                    <button className="text-red-500 hover:text-red-700 transition" onClick={() => removeTodoListItem(item.id)}>🗑️</button>
                                </div>
                            </div>
                        ))
                    )}
                </div>

            </div>
        </div>
    );
};

export default TODO;
