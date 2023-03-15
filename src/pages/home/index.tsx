import React from "react";
import Form from "../../components/form";
import { PagesWrapper } from "../../layout";

const Home = () => {
  return (
    <PagesWrapper>
      <h1 className="text-center">Env file generator</h1>
      <Form />
    </PagesWrapper>
  );
};

export default Home;
