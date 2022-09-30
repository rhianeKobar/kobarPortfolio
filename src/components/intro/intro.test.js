import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import {  BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Intro from "./Intro";


render(
	<Router>
		<Routes>
			<Route path="/" element={<Intro/>}/>
		</Routes>
	</Router>
)
const intro = screen.getByTestId('intro')
const telly = screen.getByTestId("telly");


describe("Intro component", () => {
	
	test("Intro should render", () => {
		expect(intro).toBeInTheDocument();
	})

	test("Intro should have text content", () => {
		expect(intro).toHaveTextContent("Welcome to Now IT Works Tech!");
	})

	test("Intro should contain Telly component", () => {
		expect(intro).toContainElement(telly)
	})

	// console.log(screen.debug(null, Infinity));
})