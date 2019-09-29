import React from 'react';
import { shallow } from 'enzyme';
import SearchBox from './SearchBox';

it('Expect to render SarchBox component', () =>{
  expect(shallow(<SearchBox/>)).toMatchSnapshot();
})
