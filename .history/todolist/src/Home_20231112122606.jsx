import React, { useEffect, useState } from "react";
import Create from './Create'
import axios from "axios";
import { BsCircleFill, BsFillCheckCircleFill, BsFillTrashFill } from "react-icons/bs";



function Home() {
    const [todos, setTodos] = useState([])
    useEffect(() => {
        const getItemlist = async () => {
            try {
                const result = await axios.get('http://localhost:5500/api/item')
                setTodos(result.data);
            } catch (err) {
                console.log(err)
            }
        }
        getItemlist()
    }, []);

    const handleEdit = async (id) => {
        try {
            // Make the PUT request to update the item on the server
            await axios.put(`http://localhost:5500/api/item/${id}`);
    
            // Update the local state based on the current state
            setTodos(prevTodos => {
                return prevTodos.map(todo => {
                    if (todo._id === id) {
                        // Toggle the 'done' property
                        return { ...todo, done: !todo.done };
                    }
                    return todo;
                });
            });
        } catch (err) {
            console.log(err);
        }
    }
    In this modification, setTodos is used with the functional form, which receives the previous state as an argument. This helps avoid potential issues with using the state directly. The map function is then used to update the specific todo item in the state based on its _id, toggling the done property.
    
    This way, your local state accurately reflects the changes without relying solely on the response from the server.
    
    
    
    
    
    
    return (
        <div className="home">
            <h1>Todo Lists</h1>
            <Create />
            <br />
            {
                todos.length === 0 
                ? 
                <div><h2>No Record</h2></div>
                :
                todos.map(todo => (
                    <div className="task"> 
                        <div className="checkbox" onClick={() => handleEdit(todo._id)}>
                            {
                                todo.done ?
                                <BsFillCheckCircleFill className="icon"/>
                                : <BsCircleFill className="icon" />
                            }
                            <p>{todo.task}</p>
                        </div>
                        <div> 
                            <span><BsFillTrashFill/></span>
                        </div>
                    </div>

                ))
            }
        </div>
    )
}

export default Home