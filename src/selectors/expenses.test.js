import selectExpenses from './expenses';
import moment from 'moment';
import expenses from '../test/expensesMock';


const filters = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};


describe('selectors/expenses .selectExpenses', () => {
  
  test('filter by text', () => {
    expect(selectExpenses(expenses,
        {
          ...filters,
          text: 'e'
        }
    )).toEqual([expenses[2], expenses[1]]);
  });
  
  test('filter by startDate', () => {
    expect(selectExpenses(expenses,
        {
          ...filters,
          startDate: moment(0)
        }
    )).toEqual([expenses[2], expenses[0]]);
  });
  
  test('filter by endDate', () => {
    expect(selectExpenses(expenses, {
      ...filters,
      endDate: moment(0).add(2, 'days')
    })).toEqual([expenses[0], expenses[1]]);
  });
  
  test('sort by date', () => {
    expect(selectExpenses(expenses, filters
    )).toEqual([expenses[2], expenses[0], expenses[1]]);
  });
  
  test('sort by amount', () => {
    expect(selectExpenses(expenses, {...filters, sortBy: 'amount'}
    )).toEqual([expenses[1], expenses[2], expenses[0]]);
  });
  
  
});