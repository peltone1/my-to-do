import React from 'react'
import Task from './Task'


const List = (props) => (
    <div>
        {props.tasksProp.map(task => (
        <Task
            nameProp={task.name}
            deleteTaskProp = {()=>props.deleteTaskProp(task.uid)}
            taskCompletedProp={()=>props.taskCompleted(task.uid)}
        />
        ))}
        <Task/>
        
    </div>
)

export default List