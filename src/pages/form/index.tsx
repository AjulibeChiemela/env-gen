import React from "react";
import "./style.scss";
import FormField from "components/formField";
import { useFormSubmit } from "hooks/form-submit";

const Form = () => {
  const { input, handleInputChange, handleFormSubmit } = useFormSubmit();

  return (
    <form onSubmit={handleFormSubmit} className="env-form">
      <FormField fieldNo="1" input={input} handleInputChange={handleInputChange} />
      <FormField fieldNo="2" input={input} handleInputChange={handleInputChange} />
      <FormField fieldNo="3" input={input} handleInputChange={handleInputChange} />
      <button type="submit">Generate</button>
    </form>
  );
};

export default Form;
