import React from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'



const Forms = (props) => (
    <div className="add-task-form">
        <TextField
            type={'text'}
            placeholder={'Enter new task name'}
            value={props.newTaskName}
            fullWidth={true}
            onChange={props.onNewTaskChangeProp}
        />
        <RaisedButton
            label={'Add task'}
            fullWidth={true}
            primary={true}
            onClick={props.addTaskProp}
        />
    
    </div>
)

export default Forms