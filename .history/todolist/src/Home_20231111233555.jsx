import React from "react";
import Create from './Create'

function Home() {
    const [todos, setTodos] = useState([])
    return (
        <div>
            <h2>Todo Lists</h2>
            <Create />
            {
                todos.
                todos.map(todo=> (
                    <div>
                        {todo} 
                    </div>
                ))
            }
        </div>
    )
}

export default Home