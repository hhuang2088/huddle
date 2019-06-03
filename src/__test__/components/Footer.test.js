import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../../components/Footer';

const wrapper = shallow(<Footer />);

describe('the Footer Component', () => {
	it('has two div element', () => {
		expect(wrapper.find('div').length).toEqual(2);
	});

	it('has two Segment component', () => {
		expect(wrapper.find('Segment').length).toEqual(2);
	});

	it('has a Grid component', () => {
		expect(wrapper.find('Grid').length).toEqual(1);
	});

	it('has two GridRow components', () => {
		expect(wrapper.find('GridRow').length).toEqual(2);
	})

	it('has an Image components', () => {
		expect(wrapper.find('Image').length).toEqual(2);
	});

	it('the first GridRow Component has a Segment component', () => {
		const firstGrid = wrapper.find('GridRow').at(0);
		expect(firstGrid.find('Segment').length).toEqual(1);
	});

	it('the first GridRow Component has a Image component', () => {
		const firstGrid = wrapper.find('GridRow').at(0);
		expect(firstGrid.find('Image').length).toEqual(1);
	});

	it('the second GridRow Component has four GridColumn Components', () => {
		const secondGrid = wrapper.find('GridRow').at(1);
		expect(secondGrid.find('GridColumn').length).toEqual(4);
	});

	it('the first GridColumn of the second GridRow Component has a Header Component',() => {
		const firstColumn = wrapper.find('GridRow').at(1).find('GridColumn').at(0);
		expect(firstColumn.find('Header').length).toEqual(1);
	});

	it('the first GridColumn of the second GridRow Component has three Icon Components', () => {
		const firstColumn = wrapper.find('GridRow').at(1).find('GridColumn').at(0);
		expect(firstColumn.find('Icon').length).toEqual(3);
	});

	it('the second GridColumn of the second GridRow Component has three Header Components', () => {
		const secondColumn = wrapper.find('GridRow').at(1).find('GridColumn').at(1);
		expect(secondColumn.find('Header').length).toEqual(3);
	});

	it('the third GridColumn of the second GridRow Component has three Header Components', () => {
		const thirdColumn = wrapper.find('GridRow').at(1).find('GridColumn').at(2);
		expect(thirdColumn.find('Header').length).toEqual(3);
	});

	it('the fourth GridColumn of the second GridRow Component has one Header Component', () => {
		const fourthColumn = wrapper.find('GridRow').at(1).find('GridColumn').at(3);
		expect(fourthColumn.find('Header').length).toEqual(1);
	});

	it('the fourth GridColumn of the second GridRow Component has one Input Component', () => {
		const fourthColumn = wrapper.find('GridRow').at(1).find('GridColumn').at(3);
		expect(fourthColumn.find('Input').length).toEqual(1);
	});
});
