import React from "react";
import Input from "../input";
import { useFormSubmit } from "../../hooks/form-submit";

const FormField: React.FC<{ fieldNo: string }> = ({ fieldNo }) => {
	const { input } = useFormSubmit();

	// const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
	// 	const { name, value } = e.target;
	// 	setInput((prevInput) => ({ ...prevInput, [name]: value }));
	// };

	return (
		<div className="variable-field">
			<h4>{`VARIABLE ${fieldNo}`}</h4>
			<div className="form-group">
				<div className="input-group">
					<label htmlFor="">Name</label>
					<Input
						type="text"
						name={`V${fieldNo}_name`}
						// onChange={console.log("okay")}
						// disabled={
						// 	fieldNo == "1"
						// 		? false
						// 		: `input.V${Number(fieldNo) - 1}_name` &&
						// 		  `input.V${Number(fieldNo) - 1}_value`
						// 		? false
						// 		: true
						// }
						disabled={false}
					/>
				</div>
				<div className="input-group">
					<label htmlFor="">Value</label>
					<Input
						type="text"
						name={`V${fieldNo}_value`}
						// disabled={input.V1_name && input.V1_value ? false : true}
						disabled={false}
					/>
					{/* 
					<input
						type="text"
						// onChange={handleInputChange}
						className="form-control"
						name="V1_value"
					/> */}
				</div>
			</div>
			<p className="info">
				@info...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
				et lectus posuere, fringilla ipsum at, tristique enim. Sed quis mattis
			</p>
		</div>
	);
};

export default FormField;
