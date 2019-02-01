import React from 'react';

export const TheToDo = props => {
  return (
    <div className="toDoCont">
      <li className="todo">
        <p className="theTodo">{props.todo}</p>
        <p className="toDoDate">{props.date}</p>
      </li>
    </div>
  );
};
