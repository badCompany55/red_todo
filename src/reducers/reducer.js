import {ADDTODO} from '../actions/actions.js';

const initialState = {
  todos: [
    {
      value: 'test',
      date: '12/31/2019',
      completed: false,
    },
  ],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDTODO:
      return Object.assign({}, state, {
        todos: [...state.todos, action.payload],
      });
    default:
      return state;
  }
};
