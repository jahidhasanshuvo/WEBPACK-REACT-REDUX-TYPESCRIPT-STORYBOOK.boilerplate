import React, { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLElement>;

const Input: React.FC<InputProps> = (props) => {
  const { placeholder } = props;
  props = { ...props, placeholder: "" };
  return (
    <div className="a-input">
      <input className="a-input__input" id="a-input__input" {...props} />
      <label className="a-input__label" htmlFor="a-input__input">
        {placeholder}
      </label>
    </div>
  );
};

export default Input;
