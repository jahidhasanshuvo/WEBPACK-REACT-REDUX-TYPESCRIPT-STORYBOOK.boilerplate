import React from "react";
import ClickMe from "components/molecules/todo";
import ClickMeClass from "components/molecules/todo-class-component";

const Home = () => {
  return (
    <div className="p-home">
      {/* Functional component  */}
      <ClickMe />
      {/* Class component */}
      {/* <ClickMeClass /> */}
    </div>
  );
};

export default Home;
