import React from "react";
import "./style.scss";
//fix this later
import FormField from "../../components/formField";
import { useFormSubmit } from "../../hooks/form-submit";

const Form = () => {
	const { input, setInput, handleInputChange, handleFormSubmit } =
		useFormSubmit();

	console.log(input);
	return (
		<form
			// onSubmit={handleFormSubmit}
			className="env-form"
		>
			<FormField fieldNo="1" />
			<FormField fieldNo="2" />
			<FormField fieldNo="3" />
			<button type="submit">Generate</button>
		</form>
	);
};

export default Form;
