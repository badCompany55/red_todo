import {ADDTODO} from '../actions/actions.js';
import {TOGGLECOMPLETE} from '../actions/actions.js';

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
    case TOGGLECOMPLETE:
      return {
        ...state,
        todos: state.todos.map((todo, index) => {
          if (index == action.index) {
            console.log(todo);
            return Object.assign({}, todo, {
              completed: !todo.completed,
            });
          }
          return todo;
        }),
      };
    default:
      return state;
  }
};
