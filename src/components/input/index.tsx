import React from "react";
import "./style.scss";
import { useFormSubmit } from "../../hooks/form-submit";

const Input: React.FC<{ type: string; name: string; disabled: boolean }> = ({
	type,
	name,
	disabled,
}) => {
	const { handleInputChange } = useFormSubmit();
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
