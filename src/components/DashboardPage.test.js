import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseDashboardPage } from './DashboardPage';

describe('components/dashboard.js', () => {
  test('render dashboard', () => {
    const wrapper = shallow(<ExpenseDashboardPage/>);
    expect(wrapper).toMatchSnapshot();
  });
});