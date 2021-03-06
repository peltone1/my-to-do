import React from 'react'
import Forms from './Forms'
import List from './List'
import Container from '../Container'
import Search from "./Search";

class ToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        tasks: [
          { name: "wynies smieci", key: "343424", isCompleted: true },
        ],
        newTaskName: "",
        searchPhrase: ""
    };
  }
  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem("my-to-do-app", JSON.stringify(nextState.tasks));
  }

  componentWillMount() {
    localStorage.getItem("my-to-do-app") &&
      this.setState({
        tasks: JSON.parse(localStorage.getItem("my-to-do-app"))
      });
  }

  componentDidMount() {
    const lastState = JSON.parse(localStorage.getItem("my-to-do-app"));

    if (lastState === null) return;

    this.setState(this.lastState);
  }

  searchPhraseHandler = (event, newValue) => {
    this.setState({
      searchPhrase: newValue
    });
  };
  
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
    if (newTaskName === "") return
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
    
  }
  
  
  render() {
    const searchTaskinArray = array => {
      let searchTask = [];

      if (this.state.searchPhrase === "") {
        searchTask = [];
      } else {
        searchTask = array
          .map(element => element)
          .filter(
            element =>
              element.name.toUpperCase().indexOf(this.state.searchPhrase) >=
                0 ||
              element.name.toLowerCase().indexOf(this.state.searchPhrase) >= 0
          );
      }
      return searchTask;
    };
  
    return ( 
      <div>
        <Container >
        <Forms 
          onNewTaskChangeProp = {this.onNewTaskChange}
          newTaskNameProp = {this.state.newTaskName}
          addTaskProp = {this.addTask}
        /> 
        </Container> 
        <Container>
            <Search
              searchPhraseHandler={this.searchPhraseHandler}
              searchPhrase={this.state.searchPhrase}
            />
        </Container >
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