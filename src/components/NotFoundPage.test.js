import React from 'react';
import { shallow } from 'enzyme';
import { NotFoundPage } from './NotFoundPage';

describe('components/notFoundPage.js', () => {
  test('render dashboard', () => {
    const wrapper = shallow(<NotFoundPage/>);
    expect(wrapper).toMatchSnapshot();
  });
});