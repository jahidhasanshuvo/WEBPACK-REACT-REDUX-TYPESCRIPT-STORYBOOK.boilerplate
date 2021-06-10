import React, { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLElement>;

const Input: React.FC<InputProps> = (props) => {
  return <input {...props} />;
};

export default Input;
