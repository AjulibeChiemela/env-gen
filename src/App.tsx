import React from "react";
import "./App.scss";
//fix this later
import { PagesWrapper } from "./layout";
// import Form from "@src/pages/form";
// import { PagesWrapper } from "@src/layout";
import Form from "./pages/form";

const App = () => {
	return (
		<PagesWrapper>
			<h1 className="text-center">Env file generator</h1>
			<Form />
		</PagesWrapper>
	);
};

export default App;
