import React from 'react';
import { shallow } from 'enzyme';
import { HeaderClass } from './Header';

test('render header', () => {
  const wrapper = shallow(<HeaderClass logout={() => {
  }}/>);
  expect(wrapper).toMatchSnapshot();
});

test('call logout on click', () => {
  const logout = jest.fn();
  const wrapper = shallow(<HeaderClass logout={logout}/>);
  wrapper.find('button').simulate('click');
  expect(logout).toHaveBeenCalled();
});