import React from 'react';
import { shallow } from 'enzyme';
import CardList from './CardList';

const mockRobots = [{
    id: 1,
    name: 'John Test',
    username: 'Johnt',
    email: 'johnt@test.com'
}]

it ('expect to render CardList component', () => {
    expect(shallow(<CardList robots={mockRobots}/>)).toMatchSnapshot();
})