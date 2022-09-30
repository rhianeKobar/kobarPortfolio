import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Telly from './Telly';


render(<Telly/>)
const telly = screen.getByTestId("telly")
const prevBtn = screen.getByTitle(/previous button/)
const nextBtn = screen.getByTitle(/next button/)

describe("Telly component",() => {

	test("Telly should render", () => {
		expect(telly).toBeInTheDocument();
	})

	test("Telly should have content",() => {
		expect(telly).toContainElement(prevBtn)
		expect(telly).toContainElement(nextBtn)
	})

	// console.log(screen.debug(null, Infinity));
})