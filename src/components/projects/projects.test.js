import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Projects from './Projects';

render(<Projects/>)
const projects = screen.getByTitle('projects')
const kickAbout = screen.getByTitle('KickAbout')

describe("Project component", () => {

	test("should render", () => {
		expect(projects).toBeInTheDocument();
	})

	test("should make projects invisible", () => {
		fireEvent.click(kickAbout)
		expect(kickAbout).not.toBeVisible();
	})

	// console.log(screen.debug(null, Infinity));
})