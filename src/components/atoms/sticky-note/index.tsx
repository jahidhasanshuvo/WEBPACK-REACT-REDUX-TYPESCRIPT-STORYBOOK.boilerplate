import React from "react";
import { useDispatch } from "react-redux";
import { removeTodo } from "redux/test/test.slice";

type StickyNoteProps = {
  modifier: number;
  children: string;
};
const modifiers = [
  "green",
  "red",
  "yellow",
  "blue",
  "gray",
  "black",
  "orange",
  "purple",
];
const StickyNote: React.FC<StickyNoteProps> = ({ modifier, children }) => {
  const dispatch = useDispatch();
  return (
    <div className={`a-sticky-note a-sticky-note--${modifiers[modifier]}`}>
      {children}
      <button
        type="submit"
        className="a-sticky-note__unpin"
        onClick={() => dispatch(removeTodo(modifier))}
      >
        unpin
      </button>
    </div>
  );
};

export default StickyNote;
