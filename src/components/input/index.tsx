import React from "react";
import "./style.scss";

const Input: React.FC<{
  type: string;
  name: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({ type, name, handleInputChange }) => {
  return <input type={type} onChange={handleInputChange} className="form-control" name={name} />;
};

export default Input;
