import React from 'react';
import {TheToDo} from './toDo.js';
import {connect} from 'react-redux';

const ToDoList = props => {
  return (
    <div className="listCont">
      {props.toDos.length > 0 ? (
        <ul className="toDoList">
          {props.toDos.map(todo => {
            return <TheToDo todo={todo.value} date={todo.date} />;
          })}
        </ul>
      ) : (
        <div>No To Dos</div>
      )}
    </div>
  );
};

const mapPropsToState = state => {
  return {
    toDos: state.todos,
  };
};

export default connect(mapPropsToState)(ToDoList);
