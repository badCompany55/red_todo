export const ADDTODO = 'ADDTODO';
export const TOGGLECOMPLETE = 'TOGGLECOMPLETE';

export const addToDo = (value, date) => {
  let newTodo = {
    value: value,
    date: date,
    completed: false,
  };

  return {type: ADDTODO, payload: newTodo};
};

export const completedToDo = index => {
  console.log(index);
  return {type: TOGGLECOMPLETE, index};
};
