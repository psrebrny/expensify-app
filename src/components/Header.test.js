import React from 'react';
import { shallow } from 'enzyme';
import { Header } from './Header';

describe('components/header.js', () => {
  test('render header', () => {
    // const renderer = new ReactShallowRender();
    // renderer.render(<Header/>);
    // expect(renderer.getRenderOutput()).toMatchSnapshot();
    
    const wrapper = shallow(<Header/>);
    // expect(wrapper.find('h1').text()).toBe('Expensify');
    expect(wrapper).toMatchSnapshot();
  });
});