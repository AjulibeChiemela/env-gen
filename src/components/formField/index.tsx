import React from "react";
import "./style.scss";
import { EnvInput } from "pages/form/interface";
import Input from "../input";

const FormField: React.FC<{
	fieldNo: string;
	input: EnvInput;
	handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({ fieldNo, input, handleInputChange }) => {
	return (
		<div className="variable-field">
			<h4>{`VARIABLE ${fieldNo}`}</h4>
			<div className="form-group">
				<div className="input-group">
					<label htmlFor="">Name</label>
					<Input
						type="text"
						name={`V${fieldNo}_name`}
						handleInputChange={handleInputChange}
						disabled={false}
						// disabled={
						// 	fieldNo == "1"
						// 		? false
						// 		: input.V1_name && input.V1_value
						// 		? false
						// 		: true
						// }
					/>
				</div>
				<div className="input-group">
					<label htmlFor="">Value</label>
					<Input
						type="text"
						name={`V${fieldNo}_value`}
						handleInputChange={handleInputChange}
						disabled={false}
					/>
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
