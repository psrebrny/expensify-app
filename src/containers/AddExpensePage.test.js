import React from 'react';
import { shallow } from 'enzyme';
import { AddExpensePageClass } from './AddExpensePage';
import expenses from '../test/expensesMock';

describe('add expense', () => {
  const addExpense = jest.fn();
  const history = {
    push: jest.fn()
  };
  const wrapper = shallow(<AddExpensePageClass addExpense={addExpense} history={history}/>);
  
  test('render add expense page correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
  
  test('handle on Submit', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(addExpense).toHaveBeenLastCalledWith(expenses[1]);
  });
});

