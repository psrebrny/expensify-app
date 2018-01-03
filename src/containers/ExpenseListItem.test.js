import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListItemClass } from './ExpenseListItem';
import expenses from '../test/expensesMock';

describe('containers/ExpensesListItem.js', () => {
  test('render', () => {
    const wrapper = shallow(<ExpenseListItemClass {...expenses[0]}/>);
    expect(wrapper).toMatchSnapshot();
  });
  
  test('render empty', () => {
    const wrapper = shallow(<ExpenseListItemClass/>);
    expect(wrapper).toMatchSnapshot();
  });
});