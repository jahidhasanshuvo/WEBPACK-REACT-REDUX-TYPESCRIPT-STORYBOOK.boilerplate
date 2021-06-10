import React from "react";
import Input from "components/atoms/input";
import Button from "components/atoms/button";

const ClickMe = () => {
  return (
    <div className="m-click-me">
      <Input type="text" placeholder="type here" />
      <Button>Click</Button>
    </div>
  );
};

export default ClickMe;
