import React from 'react';
import { shallow } from 'enzyme';
import { LoginPageClass } from './LoginPage';


test('render login page', () => {
  const wrapper = shallow(<LoginPageClass login={() => {
  }}/>);
  expect(wrapper).toMatchSnapshot();
});

test('call login on click', () => {
  const login = jest.fn();
  const wrapper = shallow(<LoginPageClass login={login}/>);
  wrapper.find('button').simulate('click');
  expect(login).toHaveBeenCalled();
});