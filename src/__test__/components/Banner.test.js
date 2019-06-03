import React from 'react';
import { shallow } from 'enzyme';
import Banner from '../../components/Banner';

const wrapper = shallow(<Banner />);

describe('the Banner component', () => {
	it('has a div', () => {
		expect(wrapper.find('div').length).toEqual(1);
	});

	it('has a Segment component', () => {
		expect(wrapper.find('Segment').length).toEqual(1);
	});

	it('has an Image component', () => {
		expect(wrapper.find('Image').length).toEqual(1);
	});

	it('has a Button component', () => {
		expect(wrapper.find('Button').length).toEqual(1);
	});
});
