import React from "react";
import Create from './Create'

function Home() {
    const [todos, setTodos] = useState([])
    return (
        <div>
            <h2>Todo Lists</h2>
            <Create />
            {
                todos.map(todo=> (
                    <div> <h2>No Record</h2></div>
                ))
            }
        </div>
    )
}

export default Home