import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      date: '',
    };
  }

  render() {
    return (
      <div class="formCont">
        <form class="form">
          <label id="todo" class="todoform" for="inpTodo">
            Todo:
          </label>
          <input class="todoform" type="text" />
          <label id="date" class="tod" for="dateTodo">
            Due Date:
          </label>
          <input class="to" type="text" />
          <button>Add Todo</button>
        </form>
      </div>
    );
  }
}
