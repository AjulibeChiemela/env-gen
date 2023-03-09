import React, { useState } from "react";
import "./style.scss";
// import generateEnvFile from "../../logic/generateEnvFile";

const Form = () => {
  const [input, setInput] = useState({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // generateEnvFile();
    console.log(input);
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
