import React, { useCallback, useEffect, useRef, useState } from "react";
import Input from "components/atoms/input";
import Button from "components/atoms/button";
import { useSelector } from "react-redux";
import { testSelector } from "redux/test/test.selector";
import { UseAppDispatch } from "redux/store";
import { addToDo, fetchquotes } from "redux/test/test.slice";
import StickyNote from "components/atoms/sticky-note";

const ClickMe = () => {
  const dispatch = UseAppDispatch();
  const { todos, quotes, loading, error, errorMessage } = useSelector(
    testSelector
  );
  const [text, setText] = useState("");
  const ref = useRef<HTMLInputElement>(null);
  const buttonClick = useCallback(() => {
    console.log(text.length);
    if (text.length < 1) {
      alert("Type Something");
    } else if (todos.length < 8) {
      dispatch(addToDo(text));
    } else {
      alert("complete them first");
    }
    setText("");
  }, [text]);
  const handleChange = (event: any) => {
    setText(event.target.value);
  };
  useEffect(() => {
    const listner = (e: any) => {
      ref.current?.focus();
      const key = e.key;
      if (key == "Enter") {
        buttonClick();
      }
    };
    document.addEventListener("keydown", listner);
    return () => {
      document.removeEventListener("keydown", listner);
    };
  }, [text]);
  useEffect(() => {
    dispatch(fetchquotes());
  }, []);
  return (
    <div className="m-click-me">
      <Input
        ref={ref}
        type="text"
        placeholder="type todos"
        onChange={handleChange}
        value={text}
        maxLength={50}
      />
      <Button onClick={buttonClick} />
      {todos.map((todo, index) => {
        return (
          <StickyNote modifier={index} key={index}>
            {todo}
          </StickyNote>
        );
      })}
      <br />
      <div className="m-click-me__quotes">
        {loading ? (
          "Loading quotes ...."
        ) : error ? (
          <p>{errorMessage}</p>
        ) : (
          <>
            <p className="m-click-me__quotes-text">{quotes.text}</p>
            <p className="m-click-me__author">{quotes.author}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default ClickMe;
