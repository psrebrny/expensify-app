import database from '../firebase/firebase';

export const addExpense = (expenseData = {}) => {
  return (dispatch) => {
    return database.ref('expenses').push(expenseData).then((ref) => {
      return dispatch({
        type: 'ADD_EXPENSE',
        payload: {
          ...expenseData,
          id: ref.key
        }
      });
    });
  };
};

export const removeExpense = (id = '') => {
  return (dispatch) => {
    return database.ref(`expenses/${id}`).remove().then(() => {
      return dispatch({
        type: 'REMOVE_EXPENSE',
        payload: {id}
      });
    });
    
  };
  
};

export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  payload: {id, updates}
});

export const getExpenses = () => {
  return (dispatch) => {
    return database.ref('expenses').once('value').then((snapshot) => {
      const expenses = [];
      console.log(snapshot.val());
      snapshot.forEach((childSnapShot) => {
        expenses.push({
          ...childSnapShot.val(),
          id: childSnapShot.key
        });
      });
      
      return dispatch({
        type: 'GET_EXPENSES',
        payload: expenses
      });
    });
  };
};