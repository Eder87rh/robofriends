import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

it("Header component should render successfully", () => {
  expect(shallow(<Header/>)).toMatchSnapshot();
});