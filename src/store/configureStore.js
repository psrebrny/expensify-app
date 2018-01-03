import { createStore, combineReducers } from 'redux';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';

export default () => {
  return createStore(combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  }));
}