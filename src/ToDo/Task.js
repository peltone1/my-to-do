import React from 'react';

import Delete from 'material-ui/svg-icons/action/delete'
import Checkbox from 'material-ui/Checkbox'
import { ListItem } from 'material-ui/List'

const Task = (props) => (
  
    <div>
    <ListItem
    className={'list-item__task'}
    primaryText= {props.nameProp}
    rightIcon={<Delete onClick={props.deleteTaskProp}/>}
    leftCheckbox={
        <Checkbox
            
            onCheck={props.taskCompleted}
          
        />
    }    
    />
    
    </div>
)

export default Task