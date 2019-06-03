import React from 'react';
import { shallow } from 'enzyme';
import UserLeftPanel from '../../components/UserLeftPanel';

const wrapper = shallow(<UserLeftPanel />);

describe('the UserLeftPanel component', () => {
	it('has a div element', () => {
		expect(wrapper.find('div').length).toEqual(1);
	});

	it('has three Container component', () => {
		expect(wrapper.find('Container').length).toEqual(3);
	});

	it('the first Container component has two headers', () => {
		const firstContainer = wrapper.find('Container').at(0);
		expect(firstContainer.find('Header').length).toEqual(2);
	});

	it('the second Container component has two headers', () => {
		const secondContainer = wrapper.find('Container').at(1);
		expect(secondContainer.find('Header').length).toEqual(2);
	});

	it('the third Container component has two headers', () => {
		const thirdContainer = wrapper.find('Container').at(2);
		expect(thirdContainer.find('Header').length).toEqual(2);
	});
});
