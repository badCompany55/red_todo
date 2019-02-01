import React, {Component} from 'react';
import './App.css';
import ToDoList from './comps/toDoList.js';
import Form from './comps/form.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ToDoList />
        <Form />
      </div>
    );
  }
}

export default App;
