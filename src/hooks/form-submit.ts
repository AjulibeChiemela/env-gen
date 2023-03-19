import { useCallback, useState } from "react";
import { saveAs } from "file-saver";
import { EnvInput } from "../pages/form/interface";

export const useFormSubmit = () => {
	const [input, setInput] = useState<EnvInput>({
		V1_name: "",
		V1_value: "",
		V2_name: "",
		V2_value: "",
		V3_name: "",
		V3_value: "",
	});

	const handleInputChange = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			const { name, value } = e.target;
			setInput((prevInput) => ({ ...prevInput, [name]: value }));
		},
		[]
	);
	const handleFormSubmit = useCallback((e: React.FormEvent) => {
		e.preventDefault();

		const envText = Object.entries(input);
		const newArr = [];
		for (let i = 0; i < envText.length; i++) {
			if (i === 0 || i % 2 === 0) {
				newArr.push(`${envText[i][1]}=${envText[i + 1][1]}`);
				if (envText[i][1].length < 1) newArr.pop();
			}
		}
		const newArrStr = newArr.join("\n").toString();
		const blob = new Blob([newArrStr], { type: "text/plain;charset=utf-8" });
		saveAs(blob, "generatedFile.env");

		setInput({
			V1_name: "",
			V1_value: "",
			V2_name: "",
			V2_value: "",
			V3_name: "",
			V3_value: "",
		});
	}, []);

	return { input, setInput, handleInputChange, handleFormSubmit };
};
