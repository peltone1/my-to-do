import React from 'react';

import Delete from 'material-ui/svg-icons/action/delete'
import Checkbox from 'material-ui/Checkbox'
import { ListItem } from 'material-ui/List'

const Task = (props) => (
    <div>
        <ListItem
            primaryText= {props.nameProp}
            rightIcon={<Delete onClick={props.deleteTaskProp}/>}
            leftCheckbox={
                <Checkbox
                    checked={props.task.isCompleted}
                    onCheck={() => props.toggleTask(props.task.key)}
                    value="checked"
                />
            }
        />
        
    </div>
)

export default Task