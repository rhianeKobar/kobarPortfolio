import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Section from './section';

render(<Section title="test" header="test" aria="test-emojii" emjoii="🧪" content="this is a test for section"/>)
const section = screen.getByTitle('test')

describe("Section component", () => {

	test("should render", () => {
		expect(section).toBeInTheDocument();
	})

	test("should contain a header, content", () => {
		expect(section).toHaveTextContent("test");
		expect(section).toHaveTextContent("this is a test for section");
	})

})