import React, { useEffect, useState } from "react";
import Input from "components/atoms/input";
import Button from "components/atoms/button";
import { useSelector } from "react-redux";
import { testSelector } from "redux/test/test.selector";
import { UseAppDispatch } from "redux/store";
import { increment, decrement, fetchUsers } from "redux/test/test.slice";

const ClickMe = () => {
  const dispatch = UseAppDispatch();
  const { clicked, users, loading, error, errorMessage } =
    useSelector(testSelector);

  const [text, setText] = useState(0);
  const buttonClick = () => {
    dispatch(increment(text));
  };
  const handleChange = (event: any) => {
    setText(parseInt(event.target.value));
  };
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
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
      <br />
      {loading ? (
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
      )}
    </div>
  );
};

export default ClickMe;
