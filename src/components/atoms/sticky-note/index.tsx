import React from "react";
import { useDispatch } from "react-redux";
import { removeTodo } from "redux/todo/todo.slice";

type StickyNoteProps = {
  modifier: string;
  children: string;
};

const StickyNote: React.FC<StickyNoteProps> = ({ modifier, children }) => {
  const dispatch = useDispatch();
  return (
    <div className={`a-sticky-note a-sticky-note--${modifier}`}>
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
