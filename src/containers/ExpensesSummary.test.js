import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummaryClass } from './ExpensesSummary';

test('should correctly render expenses summary with one expense', () => {
  const wrapper = shallow(<ExpensesSummaryClass expensesCount={1} expensesTotal={235}/>);
  expect(wrapper).toMatchSnapshot();
});


test('should correctly render expenses summary with multiple expenses', () => {
  const wrapper = shallow(<ExpensesSummaryClass expensesCount={23} expensesTotal={2354355432534}/>);
  expect(wrapper).toMatchSnapshot();
});