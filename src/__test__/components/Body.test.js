import React from 'react';
import { shallow } from 'enzyme';
import Body from '../../components/Body';

const wrapper = shallow(<Body />);

describe('the Body commponent', () => {
	it('has a div element', () => {
		expect(wrapper.find('div').length).toEqual(1);
	});

	it('has a Container component', () => {
		expect(wrapper.find('Container').length).toEqual(1);
	});

	it('has two Header component', () => {
		expect(wrapper.find('Header').length).toEqual(2);
	});

	it('has a Button component', () => {
		expect(wrapper.find('Button').length).toEqual(1);
	});
});
