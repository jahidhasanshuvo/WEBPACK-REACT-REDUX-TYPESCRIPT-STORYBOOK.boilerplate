import React, { ButtonHTMLAttributes } from "react";

export type ButtonTypes = ButtonHTMLAttributes<HTMLElement>;

const Button: React.FC<ButtonTypes> = ({ children, ...restProps }) => {
  return <button type="submit" className="a-button" {...restProps} />;
};

export default Button;
