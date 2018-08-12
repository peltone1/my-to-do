import React from 'react';
import MenuItem from 'material-ui/MenuItem'
import Delete from 'material-ui/svg-icons/action/delete'

const Task = (props) => (
    <MenuItem
    primaryText= {'Task'}
    rightIcon={<Delete onClick={()=>alert('CLick')}/>}    
    />

)

export default Task