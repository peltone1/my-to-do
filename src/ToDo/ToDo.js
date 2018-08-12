import React from 'react'
import Forms from './Forms'
import List from './List'
import Container  from '../Container'

class ToDo extends React.Component {
  state={
    tasks: [
      {name: 'umyj gary', uid: 'skjdfskfj'},
      {name: 'umyj podłoge', uid: 'seeregegskfj'}

    ]
  }
    render() {
      return (
        <div>
          <Container>
            <Forms/>
          </Container>
          <Container>
            <List
              tasksProp = {this.state.tasks}
              deleteTaskProp = {(uid)=> alert(uid)}
            />
          </Container>
       
        </div>
      );
    }
  }
  
  export default ToDo