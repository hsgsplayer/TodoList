import React, { useState } from "react";
import axios from 'axios'

function Upgrade() {
    const [task, setTask] = useState()
        const handleAdd = () => {
            if(task){
                try
                {
                axios.post('http://localhost:5500/api/item', {task:task})
                .then(result=>console.log(result))
                .catch(err => console.log(err))
                } catch(err){
                    console.log(err)
                }
            }
        }

    return (
        <div> 
            <button type="button" onClick={handleAdd}>Add</button>
        </div>
    )
}

export default Create