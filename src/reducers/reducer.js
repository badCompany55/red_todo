const initialState = {
  todos: [
    {
      value: 'test',
      date: '12/31/2019',
    },
  ],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
