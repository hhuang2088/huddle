import React from 'react';
import { shallow } from 'enzyme';
import UserStory from '../../components/UserStory';

const wrapper = shallow(<UserStory />);

describe('the UserStory component', () => {
	it('has two div element', () => {
		expect(wrapper.find('div').length).toEqual(2);
	});

	it('has a Grid component', () => {
		expect(wrapper.find('Grid').length).toEqual(1);
	});

	it('has a GridRow component', () => {
		const gridRow = wrapper.find('Grid').find('GridRow');
		expect(gridRow.find('GridColumn').length).toEqual(2);
	});

	it('the first GridColumn as a UserLeftPanel component', () => {
		const firstColumn = wrapper.find('Grid')
													.find('GridRow')
													.find('GridColumn').at(0);
		expect(firstColumn.find('UserLeftPanel').length).toEqual(1);
	});

	it('the second GrindColumn as a UserRightPanel component', () => {
		const firstColumn = wrapper.find('Grid')
													.find('GridRow')
													.find('GridColumn').at(1);
		expect(firstColumn.find('UserRightPanel').length).toEqual(1);
	});

	it('the second div has a Segment component', () => {
		const secondDiv = wrapper.find('div').at(1);
		expect(secondDiv.find('Segment').length).toEqual(1);
	});

	it('the Segment of the second div has a Header', () => {
		const segmentComponent = wrapper.find('div').at(1).find('Segment');
		expect(segmentComponent.find('Header').length).toEqual(1);
	});

	it('the Segment of the second div has a Button', () => {
		const segmentComponent = wrapper.find('div').at(1).find('Segment');
		expect(segmentComponent.find('Button').length).toEqual(1);
	});
});
