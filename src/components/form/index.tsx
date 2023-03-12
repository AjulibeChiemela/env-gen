import React, { useState } from "react";
import "./style.scss";
// import generateEnvFile from "../../logic/generateEnvFile";

const Form = () => {
  const [input, setInput] = useState({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput((prevInput) => ({ ...prevInput, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // generateEnvFile();

    const envText = Object.entries(input);
    let newArr = [];
    for (let i = 0; i < envText.length; i++) {
      if (i === 0 || i % 2 === 0) {
        newArr.push(`${envText[i][1]}=${envText[i + 1][1]}`);
      }
    }
    const newArrStr = newArr.join("\n").toString();
    const blob = new Blob([newArrStr], { type: "text/plain;charset=utf-8" });
    console.log(blob);
    console.log(newArrStr);
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
            />
          </div>
          <div className="input-group">
            <label htmlFor="">Value</label>
            <input
              type="text"
              onChange={handleInputChange}
              className="form-control"
              name="V2_value"
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
