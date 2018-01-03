import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePageClass } from './EditExpensePage';
import expenses from '../test/expensesMock';

describe('edit expense', () => {
  const editExpense = jest.fn();
  const history = {
    push: jest.fn()
  };
  const removeExpense = jest.fn();
  const wrapper = shallow(<EditExpensePageClass
      editExpense={editExpense}
      history={history}
      removeExpense={removeExpense}
      expense={expenses[1]}/>);
  
  test('render edit expense page correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
  
  test('handle on Submit', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(editExpense).toHaveBeenLastCalledWith(expenses[1].id, expenses[1]);
  });
  
  test('remove expense', () => {
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(removeExpense).toHaveBeenLastCalledWith(expenses[1].id);
  });
});
