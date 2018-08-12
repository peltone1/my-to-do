import React from 'react'
import Forms from './Forms'
import List from './List'

class ToDo extends React.Component {
    render() {
      return (
        <div>
            <Forms/>
            <List/>
       
        </div>
      );
    }
  }
  
  export default ToDo