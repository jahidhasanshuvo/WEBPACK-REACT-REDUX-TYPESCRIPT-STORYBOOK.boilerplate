import React, {
  forwardRef,
  InputHTMLAttributes,
  useEffect,
  useState,
} from "react";

type InputProps = InputHTMLAttributes<HTMLElement>;

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const [hasInput, sethasInput] = useState(false);
  useEffect(() => {
    const inputSize = props.value?.toLocaleString().length;
    inputSize && inputSize > 0 ? sethasInput(true) : sethasInput(false);
  }, [props]);
  const { placeholder } = props;
  props = { ...props, placeholder: "" };
  return (
    <div className={`a-input ${hasInput ? "a-input--has-input" : ""}`}>
      <input
        className="a-input__input"
        id="a-input__input"
        {...props}
        ref={ref}
      />
      <label className="a-input__label" htmlFor="a-input__input">
        {placeholder}
      </label>
    </div>
  );
});

export default Input;
