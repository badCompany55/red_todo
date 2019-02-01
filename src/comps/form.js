import React from 'react';
import {connect} from 'react-redux';
import {addToDo} from '../actions/actions.js';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      date: '',
    };
  }

  captureInput = e => {
    if (e.target.id === 'todo') {
      this.setState({input: e.target.value});
    }
    if (e.target.id === 'date') {
      this.setState({date: e.target.value});
    }
  };

  eventHandler = e => {
    e.preventDefault();
    this.props.addToDo(this.state.input, this.state.date);
    this.setState({input: '', date: ''});
  };

  render() {
    return (
      <div className="formCont" onSubmit={this.eventHandler}>
        <form className="form">
          <label className="todoform" htmlFor="inpTodo">
            Todo:
          </label>
          <input
            className="todoform"
            type="text"
            onChange={this.captureInput}
            id="todo"
            value={this.state.input}
          />
          <label className="tod" htmlFor="dateTodo">
            Due Date:
          </label>
          <input
            className="to"
            type="date"
            onChange={this.captureInput}
            id="date"
            value={this.state.date}
          />
          <button>Add Todo</button>
        </form>
      </div>
    );
  }
}

const mapPropsToState = state => {
  return {};
};

export default connect(
  mapPropsToState,
  {addToDo},
)(Form);
