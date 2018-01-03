import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListClass } from './ExpenseList';
import expenses from '../test/expensesMock';

describe('containers/ExpenseList.js', () => {
  test('render', () => {
    const wrapper = shallow(<ExpenseListClass expenses={expenses}/>);
    expect(wrapper).toMatchSnapshot();
  });
  
  test('render empty', () => {
    const wrapper = shallow(<ExpenseListClass expenses={[]}/>);
    expect(wrapper).toMatchSnapshot();
  });
});