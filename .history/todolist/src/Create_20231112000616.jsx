import React, { useState } from "react";

function Create() {
    const [task, setTask] = useState()
    const handleAdd = () => {

    }
    return (
        <div> 
            <input type="text" name="" id="" placeholder="Enter task" onChange={() => {
                
            }}/>
            <button type="button" onClick={handleAdd}>Add</button>
        </div>
    )
}

export default Create