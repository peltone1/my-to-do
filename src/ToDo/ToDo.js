import React from 'react'
import Forms from './Forms'
import List from './List'
import Container  from '../Container'

class ToDo extends React.Component {
    render() {
      return (
        <div>
          <Container>
            <Forms/>
          </Container>
          <Container>
            <List/>
          </Container>
       
        </div>
      );
    }
  }
  
  export default ToDo