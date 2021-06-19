import React from "react";
import ClickMe from "components/molecules/click-me";
// import ClickMeClass from "components/molecules/click-me-class-component";

const Home = () => {
  return (
    <div className="p-home">
      {/* <h1>Functional component</h1> */}
      <ClickMe />
      {/* <h1>Class component</h1> */}
      {/* <ClickMeClass /> */}
    </div>
  );
};

export default Home;
