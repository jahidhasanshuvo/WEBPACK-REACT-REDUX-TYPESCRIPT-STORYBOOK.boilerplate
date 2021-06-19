import React, { useEffect, useState } from "react";
import Input from "components/atoms/input";
import Button from "components/atoms/button";
import { useSelector } from "react-redux";
import { testSelector } from "redux/test/test.selector";
import { UseAppDispatch } from "redux/store";
import { addToDo, fetchUsers } from "redux/test/test.slice";
import StickyNote from "components/atoms/sticky-note";

const ClickMe = () => {
  const dispatch = UseAppDispatch();
  const { todos, users, loading, error, errorMessage } = useSelector(
    testSelector
  );

  const [text, setText] = useState("");
  const buttonClick = () => {
    if (todos.length < 8) {
      dispatch(addToDo(text));
    } else {
      alert("complete them first");
    }
    setText("");
  };
  const handleChange = (event: any) => {
    setText(event.target.value);
  };
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  return (
    <div className="m-click-me">
      <Input
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
      {/* {loading ? (
        "Loading users ...."
      ) : error ? (
        <h1>{errorMessage}</h1>
      ) : (
        <table>
          <thead>
            <th>ID</th>
            <th>NAME</th>
            <th>USERNAME</th>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )} */}
    </div>
  );
};

export default ClickMe;
