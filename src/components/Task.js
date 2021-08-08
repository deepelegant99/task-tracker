import React from 'react'
import {FaTimes} from 'react-icons/fa'

const Task = ({task, id, onDelete}) => {
    return (
        <div className='task'>
            <h3 key={id}>{task.text} <FaTimes style ={{color:"blue", cursor:"pointer"}} onClick={()=>onDelete(task.id)} /></h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task
