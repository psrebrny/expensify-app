import filtersReducer from './filters';
import moment from 'moment/moment';

const now = moment();

const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: moment(0).startOf('month'),
  endDate: moment(0).endOf('month')
};

describe('reducers/filters', () => {
  
  test('set default values', () => {
    expect(filtersReducer(undefined, {type: '@@INIT'})).toEqual(filtersReducerDefaultState);
  });
  
  test('sort by to amount', () => {
    expect(filtersReducer(filtersReducerDefaultState, {type: 'SORT_BY_AMOUNT'})).toEqual({
      ...filtersReducerDefaultState, sortBy: 'amount'
    });
  });
  
  test('set text filter', () => {
    const action = {type: 'SET_TEXT_FILTER', payload: 'text'};
    expect(filtersReducer(filtersReducerDefaultState, action)).toEqual({
      ...filtersReducerDefaultState, text: 'text'
    });
  });
  
  test('sort by to date', () => {
    const action = {type: 'SORT_BY_DATE', payload: 'date'};
    expect(filtersReducer({...filtersReducerDefaultState, sortBy: 'amount'}, action)).toEqual({
      ...filtersReducerDefaultState, sortBy: 'date'
    });
  });
  
  test('set start date', () => {
    const action = {type: 'SET_START_DATE', payload: now};
    expect(filtersReducer(filtersReducerDefaultState, action)).toEqual({
      ...filtersReducerDefaultState, startDate: now
    });
  });
  
  test('set end date', () => {
    const action = {type: 'SET_END_DATE', payload: now};
    expect(filtersReducer(filtersReducerDefaultState, action)).toEqual({
      ...filtersReducerDefaultState, endDate: now
    });
  });
  
});