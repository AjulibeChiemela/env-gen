import React from "react";
import Form from "@src/pages/form";
import { PagesWrapper } from "@src/layout";

const App = () => {
  return (
    <PagesWrapper>
      <h1 className="text-center">Env file generator</h1>
      <Form />
    </PagesWrapper>
  );
};

export default App;
