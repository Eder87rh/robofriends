import React from 'react';
import { shallow } from 'enzyme';
import ErrorBoundry from './ErrorBoundry';

it("ErrorBoudry should render successfully", () => {
  expect(shallow(<ErrorBoundry/>)).toMatchSnapshot();
});