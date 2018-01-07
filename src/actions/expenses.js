import database from '../firebase/firebase';

export const addExpense = (expenseData = {}) => {
  return (dispatch) => {
    return database.ref('expenses').push(expenseData).then((ref) => {
      return dispatch({
        type: 'ADD_EXPENSE',
        payload: {
          id: ref.key,
          ...expenseData
        }
      });
    });
  };
};

export const removeExpense = (id = '') => {
  return {
    type: 'REMOVE_EXPENSE',
    payload: {id}
  };
};

export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  payload: {id, updates}
});