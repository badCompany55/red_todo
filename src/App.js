import React, {Component} from 'react';
import './App.css';
import ToDoList from './comps/toDoList.js';
import Form from './comps/form.js';
import {connect} from 'react-redux';
import {deleteCompleted} from './actions/actions.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Form />
        <button onClick={this.props.deleteCompleted}>Delete Completed</button>
        <ToDoList />
      </div>
    );
  }
}

const mapPropsToState = state => {
  return {};
};

export default connect(
  mapPropsToState,
  {deleteCompleted},
)(App);
