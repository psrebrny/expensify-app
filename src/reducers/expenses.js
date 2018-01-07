// Expenses Reducer

const expensesReducerDefaultState = [];

export default (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [
        ...state,
        action.payload
      ];
    case 'REMOVE_EXPENSE':
      return state.filter(({id}) => id !== action.payload.id);
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if (expense.id === action.payload.id) {
          return {
            ...expense,
            ...action.payload.updates
          };
        } else {
          return expense;
        }
      });
    case 'GET_EXPENSES':
      return action.payload;
    default:
      return state;
  }
};