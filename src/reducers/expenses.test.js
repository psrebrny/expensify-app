import expensesReducer from './expenses';
import expenses from '../test/expensesMock';


test('set default state', () => {
  expect(expensesReducer(undefined, {type: '@@INIT'})).toEqual([]);
});

test('add expense', () => {
  const action = {
    type: 'ADD_EXPENSE',
    payload: {
      id: 109,
      description: 'Laptop',
      note: '',
      createdAt: 20000,
      amount: 29500
    }
  };
  
  expect(expensesReducer(expenses, action)).toEqual([...expenses, action.payload]);
});

describe('remove expenses', () => {
  test('removed success id was found', () => {
    
    const action = {
      type: 'REMOVE_EXPENSE',
      payload: {
        id: expenses[1].id
      }
    };
    expect(expensesReducer(expenses, action)).toEqual([expenses[0], expenses[2]]);
  });
  
  test('removed fail id not found', () => {
    
    const action = {
      type: 'REMOVE_EXPENSE',
      payload: {
        id: -1
      }
    };
    expect(expensesReducer(expenses, action)).toEqual(expenses);
  });
});

describe('edit expense', () => {
  test('edit success id found', () => {
    const action = {
      type: 'EDIT_EXPENSE',
      payload: {
        id: expenses[1].id,
        updates: {
          amount: 120000,
        }
      }
    };
    
    const updated = [...expenses];
    
    updated[1] = {...expenses[1], ...action.payload.updates};
    
    expect(expensesReducer(expenses, action)).toEqual(updated);
  });
  
  test('edit fail id not found', () => {
    
    const action = {
      type: 'EDIT_EXPENSE',
      payload: {
        id: -1,
        updates: {
          amount: 120000,
        }
      }
    };
    
    expect(expensesReducer(expenses, action)).toEqual(expenses);
  });
});


test('set expense', () => {
  expect(expensesReducer(expenses, {type: 'SET_EXPENSES', payload: expenses})).toEqual(expenses);
});
