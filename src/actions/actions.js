export const ADDTODO = 'ADDTODO';

export const addToDo = (value, date) => {
  let newTodo = {
    value: value,
    date: date,
    completed: false,
  };

  return {type: ADDTODO, payload: newTodo};
};
