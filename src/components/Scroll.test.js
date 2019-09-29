import React from 'react';
import { shallow } from 'enzyme';
import Scroll from './Scroll';

it("Scroll should render successfully", () => {
  expect(shallow(<Scroll/>)).toMatchSnapshot();
})