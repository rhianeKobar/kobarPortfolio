import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import Telly from './Telly';


afterEach( () => {
	cleanup();
})

describe("Telly component",() => {

	render(<Telly/>)
	const telly = screen.getByTestId("telly")

	test("Telly should render", () => {
		expect(telly).toBeInTheDocument();
	})

	test("Telly should have content",() => {
		const prevbtn = screen.getByTestId("prevBtn")
		const nextBtn = screen.getByTestId("nextBtn")

		expect(prevbtn).toBeInTheDocument();
		expect(nextBtn).toBeInTheDocument();
	})
	console.log(screen.debug(null, Infinity));
})