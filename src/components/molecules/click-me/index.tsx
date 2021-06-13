import React, { useState } from "react";
import Input from "components/atoms/input";
import Button from "components/atoms/button";
import { useSelector } from "react-redux";
import { testSelector } from "redux/test/test.selector";
import { UseAppDispatch } from "redux/store";
import { increment, decrement } from "redux/test/test.slice";

const ClickMe = () => {
  const dispatch = UseAppDispatch();
  const { clicked } = useSelector(testSelector);

  const [text, setText] = useState(0);
  const buttonClick = () => {
    console.log("object");
    dispatch(increment(text));
  };
  interface HandleNameChangeInterface {
    target: HTMLInputElement;
  }
  const handleChange = (event: any) => {
    setText(parseInt(event.target.value));
  };
  return (
    <div className="m-click-me">
      <h3>Clicked {clicked}</h3>
      <Input
        type="text"
        placeholder="type here"
        onChange={handleChange}
        value={text}
      />
      <Button onClick={buttonClick}>Click</Button>
    </div>
  );
};

export default ClickMe;
