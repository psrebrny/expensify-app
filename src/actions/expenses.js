import database from '../firebase/firebase';

export const addExpense = (expenseData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/expenses`).push(expenseData).then((ref) => {
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
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/expenses/${id}`).remove().then(() => {
      return dispatch({
        type: 'REMOVE_EXPENSE',
        payload: {id}
      });
    });
    
  };
  
};

export const editExpense = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/expenses/${id}`).update(updates).then(() => {
      return dispatch({
        type: 'EDIT_EXPENSE',
        payload: {id, updates}
      });
    });
    
  };
};

export const getExpenses = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/expenses`).once('value').then((snapshot) => {
      const expenses = [];
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