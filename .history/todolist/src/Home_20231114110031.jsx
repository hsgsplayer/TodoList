import React, { useEffect, useState } from "react";
import Create from './Create'
import Upgrade from './Upgrade'
import axios from "axios";
import { BsCircleFill, BsFillCheckCircleFill, BsFillTrashFill } from "react-icons/bs";



function Home() {
    const [todos, setTodos] = useState([])
    const [datas, setStat] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const todosResult = await axios.get('http://localhost:5500/api/item');
                const statResult = await axios.get('http://localhost:5500/api/stat');

                setTodos(todosResult.data);
                setStat(statResult.data);
            } catch (err) {
                console.log(err);
            }
        };

        fetchData();
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
    
    const handleDelete = async (id) => {
        try {
            // Make the PUT request to update the item on the server
            await axios.delete(`http://localhost:5500/api/item/${id}`)
            .then(result=> {
                location.reload()
            })
            .catch(err => console.log(err))

        } catch (err) {
            console.log(err);
        }
    }  
    
    const handleStatEdit = async (id) => {
        try {
            // Update the local state based on the current state and perform calculations
            setStat(prevDatas => {
                return prevDatas.map(async data => {
                    const newNumCheck = data.numCheck;
                    const newTotal = data.total + 1;
                    const newPercent = (newNumCheck / newTotal) * 100;
    
                    // Make the PUT request to update the item on the server for each data object
                    await axios.put(`http://localhost:5500/api/stat/655285310ba7219d1bb06276`, {
                        percent: newPercent,
                        total: newTotal,
                        numCheck: newNumCheck
                    }).catch(err => console.log(err)); // Handling potential errors
    
                    return { ...data, percent: newPercent, total: newTotal, numCheck: newNumCheck };
                });
            });
        } catch (err) {
            console.log(err);
        }
    };

    const handleDoneEdit = async (id) => {
        try {
            // Update the local state based on the current state and perform calculations
            setStat(prevDatas => {
                return prevDatas.map(async data => {
                    const newNumCheck = data.numCheck+1;
                    const newTotal = data.total;
                    const newPercent = (newNumCheck / newTotal) * 100;
    
                    // Make the PUT request to update the item on the server for each data object
                    await axios.put(`http://localhost:5500/api/stat/655285310ba7219d1bb06276`, {
                        percent: newPercent,
                        total: newTotal,
                        numCheck: newNumCheck
                    }).catch(err => console.log(err)); // Handling potential errors
    
                    return { ...data, percent: newPercent, total: newTotal, numCheck: newNumCheck };
                });
            });
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="home">
            <h1>Todo Lists</h1>
            <Create />
            {datas.map((statItem) => (
                <h2>
                <div>{statItem.percent}%</div>
                </h2>
            ))}
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
                            <p className={todo.done ? "line_through" : ""}>{todo.task}</p>
                        </div>
                        <div> 
                            <span><BsFillTrashFill className="icon"
                                onClick={() => {handleDelete(todo._id)}}/></span>
                        </div>
                    </div>

                ))
            }
            <div>
            <br>
                <button type="button" onClick={handleStatEdit}>Start</button>
                <button type="button" onClick={handleDoneEdit}>Done!</button>
            </br>
            </div>
        </div>
    )
}

export default Home