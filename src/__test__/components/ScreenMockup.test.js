import React from 'react';
import { shallow } from 'enzyme';
import ScreenMockup from '../../components/ScreenMockup';

const wrapper = shallow(<ScreenMockup />);

describe('the ScreenMockup component', () => {
	it('has a div element', () => {
		expect(wrapper.find('div').length).toEqual(1);
	});

	it('has a Segment component', () => {
		expect(wrapper.find('Segment').length).toEqual(1);
	});

	it('has an Image component', () => {
		expect(wrapper.find('Image').length).toEqual(1);
	});
});
