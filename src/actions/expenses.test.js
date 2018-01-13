import { addExpense, editExpense, removeExpense, getExpenses } from './expenses';
import expenses from '../test/expensesMock';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import database from '../firebase/firebase';

const createMockStore = configureMockStore([thunk]);
const uid = 'thisIsMyTestUid';
const defaultAuthState = {auth: {uid}};

beforeEach((done) => {
  const expensesData = {};
  expenses.forEach((expense) => {
    expensesData[expense.id] = {
      description: expense.description,
      note: expense.note,
      amount: expense.amount,
      createdAt: expense.createdAt
    };
  });
  
  database.ref(`users/${uid}/expenses`).set(expensesData).then(() => done());
});

describe('.addExpense', () => {
  const store = createMockStore(defaultAuthState);
  
  test('.with data', (done) => {
    let mockExpense = Object.assign({}, expenses[1]);
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
      
      return database.ref(`users/${uid}/expenses/${actions[0].payload.id}`).once('value');
      
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
      
      return database.ref(`users/${uid}/expenses/${actions[1].payload.id}`).once('value');
      
    }).then((snapshot) => {
      expect(snapshot.val()).toEqual(mockExpenseDefault);
      done();
    });
  });
  
  
});

test('get expenses', (done) => {
  const store = createMockStore(defaultAuthState);
  store.dispatch(getExpenses()).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'GET_EXPENSES',
      payload: expenses
    });
    done();
  });
});


test('.removeExpense', (done) => {
  const store = createMockStore(defaultAuthState);
  store.dispatch(removeExpense(expenses[1].id)).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'REMOVE_EXPENSE',
      payload: {id: expenses[1].id}
    });
    
    return database.ref(`users/${uid}/expenses/${expenses[1].id}`).once('value');
    
  }).then((snapshot) => {
    expect(snapshot.val()).toBeFalsy();
    done();
  });
});

test('.editExpense', (done) => {
  const store = createMockStore(defaultAuthState);
  store.dispatch(editExpense(expenses[2].id, expenses[1])).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'EDIT_EXPENSE',
      payload: {
        id: expenses[2].id,
        updates: expenses[1]
      }
    });
    
    return database.ref(`users/${uid}/expenses/${expenses[2].id}`).once('value');
    
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(expenses[1]);
    done();
  });
  
});


