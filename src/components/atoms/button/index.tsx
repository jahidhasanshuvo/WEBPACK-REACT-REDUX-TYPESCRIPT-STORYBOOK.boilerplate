import React from "react";

const Button: React.FC = ({ children }) => {
  return (
    <button type="submit" className="a-button">
      {children}
    </button>
  );
};

export default Button;
