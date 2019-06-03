import React from 'react';
import { shallow } from 'enzyme';
import App from '../../components/App';

const wrapper = shallow(<App />);

describe('App component', () => {
	it('has one div', () => {
		expect(wrapper.find('div').length).toEqual(1);
	});

	it('has one semantic-ui Container component', () => {
		expect(wrapper.find('Container').length).toEqual(1);
	});

	it('has one Banner component', () => {
		expect(wrapper.find('Banner').length).toEqual(1);
	});

	it('has one Body component', () => {
		expect(wrapper.find('Body').length).toEqual(1);
	});

	it('has one ScreenMockup component', () => {
		expect(wrapper.find('ScreenMockup').length).toEqual(1);
	});

	it('has one UserStory component', () => {
		expect(wrapper.find('UserStory').length).toEqual(1);
	});

	it('has a Footer Component', () => {
		expect(wrapper.find('Footer').length).toEqual(1);
	});
});
