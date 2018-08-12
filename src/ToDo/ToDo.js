import React from 'react'
import Forms from './Forms'
import List from './List'
import Container  from '../Container'

class ToDo extends React.Component {
  state={
      tasks: [],
      newTaskName: ''
  }
  componentDidMount() {
  const lastTasks = JSON.parse(localStorage.getItem('my-to-do-app-tasks')) || this.state.tasks
   this.setState({ tasks: lastTasks })
   console.log('dupa')
  }

  onNewTaskChange = (event, newValue) => {
    this.setState({
      newTaskName: newValue
  })
}
  addTask= () =>{
    if(!this.state.newTaskName) return

    const newTask ={
      name: this.state.newTaskName,
      uid: Date.now()
    }
    const newTasks = this.state.tasks.concat(newTask)
    this.setState ({
      tasks: newTasks,
      newTaskName: ''
    })
    localStorage.setItem('my-to-do-app-tasks', JSON.stringify(newTasks))
  }

  TaskCompleted = (index) => {
    const newTasks = this.state.tasks
    newTasks[index].isCompleted = !newTasks[index].isCompleted

    this.setState({ tasks: newTasks })
}




  deleteTask = (taskUid) => {
    const newTasks = this.state.tasks.filter(task => taskUid !== task.uid)
    this.setState ({
      tasks: newTasks
    })
    localStorage.setItem('my-to-do-app-tasks', JSON.stringify(newTasks))

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