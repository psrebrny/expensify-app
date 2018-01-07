import { addExpense, editExpense, removeExpense } from './expenses';
import expenses from '../test/expensesMock';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import database from '../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

describe('.addExpense', () => {
  const store = createMockStore({});
  
  
  test('.with data', (done) => {
    let mockExpense = Object.assign({}, expenses[1]);
    const actions = store.getActions([0]);
    delete mockExpense.id;
    
    store.dispatch(addExpense(mockExpense)).then((res) => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            payload: {
              ...expenses[1],
              id: expect.any(String),
            }
          }
      );
      
      return database.ref(`expenses/${actions[0].payload.id}`).once('value');
      
    }).then((snapshot) => {
      expect(snapshot.val()).toEqual(mockExpense);
      done();
    });
    
  });
  
  
  test('with defaults', (done) => {
    
    const mockExpenseDefault = {
      description: '',
      amount: 0,
      note: '',
      createdAt: 0
    };
    const actions = store.getActions([1]);
    
    store.dispatch(addExpense(mockExpenseDefault)).then((res) => {
      const actions = store.getActions();
      expect(actions[1]).toEqual({
            type: 'ADD_EXPENSE',
            payload: {
              ...mockExpenseDefault,
              id: expect.any(String),
            }
          }
      );
      
      return database.ref(`expenses/${actions[1].payload.id}`).once('value');
      
    }).then((snapshot) => {
      expect(snapshot.val()).toEqual(mockExpenseDefault);
      done();
    });
  });
  
  
});


test('.removeExpense', () => {
  expect(removeExpense(expenses[1].id)).toEqual({
    type: 'REMOVE_EXPENSE',
    payload: {
      id: expenses[1].id
    }
  });
});

test('.editExpense', () => {
  expect(editExpense(expenses[0].id, expenses[0])).toEqual({
    type: 'EDIT_EXPENSE',
    payload: {
      id: expenses[0].id,
      updates: expenses[0]
    }
  });
});


