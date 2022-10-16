import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Link from './Link';

render(<Link link="https://www.codewars.com" title="codewars" icon="code"/>)

const link = screen.getByTitle('codewars')

describe("Link Component", () => {

	test("Link should render", () => {
		expect(link).toBeInTheDocument();
	})

	test("Link should contain a link", () => {
		expect(link).toHaveAttribute("href", "https://www.codewars.com")
	})
	
})
