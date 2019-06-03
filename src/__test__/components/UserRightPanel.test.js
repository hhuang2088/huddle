import React from 'react';
import { shallow } from 'enzyme';
import UserRightPanel from '../../components/UserRightPanel';

const wrapper = shallow(<UserRightPanel />);

describe('the UserRightPanel component', () => {
	it('has a div component', () => {
		expect(wrapper.find('div').length).toEqual(1);
	});

	it('has an Image component', () => {
		expect(wrapper.find('Image').length).toEqual(1);
	});
});
