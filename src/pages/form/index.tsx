import React, { useState } from "react";
import { saveAs } from "file-saver";
import "./style.scss";
import { EnvInput } from "./interface";

const Form = () => {
  const [input, setInput] = useState<EnvInput>({
    V1_name: "",
    V1_value: "",
    V2_name: "",
    V2_value: "",
    V3_name: "",
    V3_value: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput((prevInput) => ({ ...prevInput, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const envText = Object.entries(input);
    let newArr = [];
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
  };
  return (
    <form onSubmit={handleFormSubmit} className="env-form">
      <div className="variable-field">
        <h4>VARIABLE 1</h4>
        <div className="form-group">
          <div className="input-group">
            <label htmlFor="">Name</label>
            <input
              type="text"
              onChange={handleInputChange}
              className="form-control"
              name="V1_name"
            />
          </div>
          <div className="input-group">
            <label htmlFor="">Value</label>
            <input
              type="text"
              onChange={handleInputChange}
              className="form-control"
              name="V1_value"
            />
          </div>
        </div>
        <p className="info">
          @info...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
          et lectus posuere, fringilla ipsum at, tristique enim. Sed quis mattis
        </p>
      </div>
      <div className="variable-field">
        <h4>VARIABLE 2</h4>
        <div className="form-group">
          <div className="input-group">
            <label htmlFor="">Name</label>
            <input
              type="text"
              onChange={handleInputChange}
              className="form-control"
              name="V2_name"
              disabled={input.V1_name && input.V1_value ? false : true}
            />
          </div>
          <div className="input-group">
            <label htmlFor="">Value</label>
            <input
              type="text"
              onChange={handleInputChange}
              className="form-control"
              name="V2_value"
              disabled={input.V1_name && input.V1_value ? false : true}
            />
          </div>
        </div>
        <p className="info">
          @info...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
          et lectus posuere, fringilla ipsum at, tristique enim. Sed quis mattis
        </p>
      </div>
      <div className="variable-field">
        <h4>VARIABLE 3</h4>
        <div className="form-group">
          <div className="input-group">
            <label htmlFor="">Name</label>
            <input
              type="text"
              onChange={handleInputChange}
              className="form-control"
              name="V3_name"
              disabled={input.V2_name && input.V2_value ? false : true}
            />
          </div>
          <div className="input-group">
            <label htmlFor="">Value</label>
            <input
              type="text"
              onChange={handleInputChange}
              className="form-control"
              name="V3_value"
              disabled={input.V2_name && input.V2_value ? false : true}
            />
          </div>
        </div>
        <p className="info">
          @info...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
          et lectus posuere, fringilla ipsum at, tristique enim. Sed quis mattis
        </p>
      </div>
      <button type="submit">Generate</button>
    </form>
  );
};

export default Form;
