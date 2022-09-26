import { render, screen, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom';
import {  BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Intro from "./Intro";

afterEach(() => {
	cleanup();
})

describe("Intro component", () => {

	render(
		<Router>
			<Routes>
				<Route path="/" element={<Intro/>}/>
			</Routes>
		</Router>
	)
	const intro = screen.getByTestId('intro')

	test("Intro should render", () => {
		expect(intro).toBeInTheDocument();
	})

	test("Intro should have text content", () => {
		expect(intro).toHaveTextContent("Welcome to Now IT Works Tech!");
	})

	// test("Intro should contain Telly component", () => {
	// 	const telly = screen.getByTestId('telly');
	// 	expect(telly).toBeInTheDocument();
	// })

})