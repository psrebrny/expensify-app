import { addExpense, editExpense, removeExpense } from './expenses';

const mockExpense = {
  id: '123abc',
  description: 'mocked description',
  amount: 100,
  createdAt: 123543243,
  note: 'mocked note'
  
};

describe('actions/expenses.js', () => {
  
  describe('.addExpense', () => {
    
    test('.with data', () => {
      expect(addExpense(mockExpense)).toEqual({
        type: 'ADD_EXPENSE',
        payload: {
          ...mockExpense,
          id: expect.any(String)
        }
        
      });
    });
    
    
    test('empty', () => {
      expect(addExpense({})).toEqual({
        type: 'ADD_EXPENSE',
        payload: {
          id: expect.any(String),
          description: '',
          note: '',
          amount: 0,
          createdAt: 0
        }
      });
    });
    
    
  });
  
  
  test('.removeExpense', () => {
    expect(removeExpense(mockExpense.id)).toEqual({
      type: 'REMOVE_EXPENSE',
      payload: {
        id: '123abc'
      }
    });
  });
  
  test('.editExpense', () => {
    expect(editExpense(mockExpense.id, mockExpense)).toEqual({
      type: 'EDIT_EXPENSE',
      payload: {
        id: mockExpense.id,
        updates: mockExpense
      }
    });
  });
});

