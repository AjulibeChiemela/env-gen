import React from "react";
import "./style.scss";

const Input: React.FC<{
	type: string;
	name: string;
	disabled: boolean;
	handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({ type, name, disabled, handleInputChange }) => {
	return (
		<input
			type={type}
			onChange={handleInputChange}
			className="form-control"
			name={name}
			disabled={disabled}
		/>
	);
};

export default Input;
