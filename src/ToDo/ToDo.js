import React from 'react'
import Forms from './Forms'
import List from './List'
import Container  from '../Container'

class ToDo extends React.Component {
  state={
    tasks: [
      {name: 'umyj gary', uid: 'skjdfskfj'},
      {name: 'umyj podłoge', uid: 'seeregegskfj'}

    ],
    newTaskName: ''
  }
  onNewTaskChange = (event, newValue) => this.setState({
    newTaskName: newValue
  })

  addTask= () =>{
    const newTask ={
      name: this.state.newTaskName,
      uid: Date.now()
    }
    const newTasks = this.state.tasks.concat(newTask)
    this.setState ({
      tasks: newTasks
    })
  }

  deleteTask = (taskUid) => {
    const newTasks = this.state.tasks.filter(task => taskUid !== task.uid)
    this.setState ({
      tasks: newTasks
    })
  }
    render() {
      return (
        <div>
          <Container>
            <Forms
            onNewTaskChangeProp= {this.onNewTaskChange}
              newTaskNameProp={this.state.newTaskName}
              addTaskProp={this.addTask}
              />
          </Container>
          <Container>
            <List
              tasksProp = {this.state.tasks}
              deleteTaskProp = {this.deleteTask}
            />
          </Container>
       
        </div>
      );
    }
  }
  
  export default ToDo