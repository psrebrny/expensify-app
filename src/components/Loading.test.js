import React from 'react';
import { LoadingPage } from './Loading';
import { shallow } from 'enzyme';

test('should correctly render loading page', () => {
  const wrapper = shallow(<LoadingPage/>);
  expect(wrapper).toMatchSnapshot();
});