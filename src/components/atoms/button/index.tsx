import React, { ButtonHTMLAttributes } from "react";

type ButtonTypes = ButtonHTMLAttributes<HTMLElement>;
interface ButtonProps extends ButtonTypes {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, ...restProps }) => {
  return (
    <button type="submit" className="a-button" {...restProps}>
      {children}
    </button>
  );
};

export default Button;
