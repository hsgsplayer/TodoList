import React, { useEffect, useState } from "react";
import Create from './Create'

function Home() {
    const [todos, setTodos] = useState([])
    useEffect(())
    return (
        <div>
            <h2>Todo Lists</h2>
            <Create />
            {
                todos.length === 0 
                ? 
                <div><h2>No Record</h2></div>
                :
                todos.map(todo => (
                    <div>
                        {todo} 
                    </div>
                ))
            }
        </div>
    )
}

export default Home