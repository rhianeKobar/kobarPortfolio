import { render, screen, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom'
import {  BrowserRouter as Router } from "react-router-dom";
import Sticky from "./Sticky";

afterEach(() => {
	cleanup();
})

describe("Sticky component", () => {

	render(
		<Router>
			<Sticky/>
		</Router>
	);
	const sticky = screen.getByTestId("sticky");

	test("Sticky should render", ()=>{
		expect(sticky).toBeInTheDocument();
	})

	test("Sticky should have content", ()=>{
		expect(sticky).toHaveTextContent("Home");
		expect(sticky).toHaveTextContent("Projects");
		expect(sticky).toHaveTextContent("About");
		expect(sticky).toHaveTextContent("Connect");
	})
	
})