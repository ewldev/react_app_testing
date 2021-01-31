import React from 'react';
import { shallow } from 'enzyme';
import CardList from './CardList';
const filteredRobots = [{
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz'
  }]

it('expect to render CardList component', () => {
  expect(shallow(<CardList robots={filteredRobots}/>)).toMatchSnapshot();
});