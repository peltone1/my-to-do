import React from 'react'
import Forms from './Forms'
import List from './List'
import Container from '../Container'

class ToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        tasks: [
          { name: "wynies smieci", key: 343424, isCompleted: true },
        ],
        newTaskName: "",
        
    };
  }
  componentDidMount() {
    const lastTasks = JSON.parse(localStorage.getItem('my-to-do-app-tasks')) || this.state.tasks
    this.setState({
      tasks: lastTasks
    })
  }

  onNewTaskChange = (event, newValue) => {
    this.setState({
      newTaskName: newValue
    })
  }

  toggleTask = key => {
    this.setState({
      tasks: this.state.tasks.map(task => {
        if (task.key === key) {
          return {
            ...task,
            isCompleted: !task.isCompleted
          };
        } else {
          return task;
        }
      })
    });
  };

  addTask = () => {
    const newTaskName = this.state.newTaskName;
    if (newTaskName === "") return;
    const newTask = {
      name: this.state.newTaskName,
      isCompleted: false,
      key: Date.now()
    };

    const newTasks = this.state.tasks.concat(newTask);
    this.setState({
      tasks: newTasks
    });
  };

  deleteTask = (taskKey) => {
    const newTasks = this.state.tasks.filter(task => taskKey !== task.key)
    this.setState({
      tasks: newTasks
    })
    localStorage.setItem('my-to-do-app-tasks', JSON.stringify(newTasks))

  }
  
  
  render() {
    return ( <div>
      <Container >
      <Forms 
        onNewTaskChangeProp = {this.onNewTaskChange}
        newTaskNameProp = {this.state.newTaskName}
        addTaskProp = {this.addTask}
      /> 
      </Container> 
      <Container >
      <List 
        tasksProp = {this.state.tasks}
        deleteTaskProp = {this.deleteTask}
        toggleTask={this.toggleTask}
      /> 
      </Container>
      </div>
    );
  }
}

export default ToDo