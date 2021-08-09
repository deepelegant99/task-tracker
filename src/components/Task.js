import React from 'react'
import {FaTimes} from 'react-icons/fa'

const Task = ({task, id, onDelete, onToggle}) => {
    return (
        <div className={`task ${task.reminder?'reminder':''}`} onDoubleClick={()=>onToggle(task.id)}>
            <h3 key={id}>{task.text} <FaTimes style ={{color:"blue", cursor:"pointer"}} onClick={()=>onDelete(task.id)} /></h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task
