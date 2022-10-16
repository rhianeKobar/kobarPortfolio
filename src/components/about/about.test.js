import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import About from './About'


render(<About/>)
const about = screen.getByTitle('About');
const me = screen.getByTitle('About me')
const collabs = screen.getByTitle('Collabs')

describe("About component", () => {

	test("should render", () => {
		expect(about).toBeInTheDocument();
	});

	test("should contain two sections", () => {
		expect(about).toContainElement(me);
		expect(about).toContainElement(collabs);
	})
})