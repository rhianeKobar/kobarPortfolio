import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Connect from './Connect';

render(<Connect/>)
const connect = screen.getByTitle('connect');
const links = screen.getByTitle('links')
const mailto = screen.getByTitle('mailto')

describe('Connect component', () => { 
	
	test("should render", () => {
		expect(connect).toBeInTheDocument();
	})

	test("should contain links", () => {
		expect(connect).toContainElement(links);
	})

	test("should contain an anchor element", () => {
		expect(mailto).toHaveAttribute("href", "mailto:shakira@nowitworkstech.com")
	})
})