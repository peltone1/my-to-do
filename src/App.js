import React, { Component } from 'react';
import ToDo from './ToDo/ToDo'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class App extends Component {
  render() {
    return (
      <div >
        < MuiThemeProvider >
            {<ToDo />}
        </MuiThemeProvider >
      </div>
    );
  }
}

export default App;
