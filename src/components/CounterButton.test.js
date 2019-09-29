import { shallow } from 'enzyme'
import React from 'react';
import CounterButton from './CounterButton';

it("should render CounterButton component", () => {
  const mockColor = 'red';
  expect(shallow(<CounterButton color={mockColor}/>)).toMatchSnapshot();
});

it('Correctly increments the counter', () => {
  const mockColor = 'red';
  const wrapper = shallow(<CounterButton color={mockColor}/>)
  wrapper.find('[id="counter-button"]').simulate('click');

  expect(wrapper.state()).toEqual({ count: 1 });
  expect(wrapper.props().color).toEqual('red');
  
})