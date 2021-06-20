import React, {
  Component,
  createRef,
  InputHTMLAttributes,
  Ref,
  RefObject,
} from "react";
import { todoSelector } from "redux/todo/todo.selector";
import { RootState } from "redux/root.reducer";
import { connect } from "react-redux";
import Input from "components/atoms/input";
import Button from "components/atoms/button";
import { addToDo, fetchquotes, TodoProps } from "redux/todo/todo.slice";
import StickyNote from "components/atoms/sticky-note";

interface TodoClassProps {
  todo: TodoProps;
  [key: string]: any;
}
type TodoClassState = {
  text: string;
};

export class TodoClassComponent extends Component<
  TodoClassProps,
  TodoClassState
> {
  readonly inputRef: RefObject<HTMLInputElement>;
  private listner: any;
  constructor(props: TodoClassProps) {
    super(props);
    this.inputRef = createRef();

    this.state = {
      text: "",
    };
  }
  componentDidMount() {
    this.props.fetchquotes();
    this.listner = (e: any) => {
      this.inputRef.current?.focus();
      const key = e.key;
      if (key == "Enter") {
        this.buttonClick();
      }
    };
    document.addEventListener("keydown", this.listner);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.listner);
  }
  handleChange = (event: any) => {
    this.setState({
      text: event.target.value,
    });
  };
  buttonClick = () => {
    if (this.state.text.length < 1) {
      alert("Type Something");
    } else if (this.props.todo.todos.length < 8) {
      this.props.addToDo(this.state.text);
    } else {
      alert("complete them first");
    }
    this.setState({
      text: "",
    });
  };
  render() {
    const { text } = this.state;
    const { todos, loading, error, errorMessage, quotes } = this.props.todo;
    return (
      <div className="m-todo">
        <Input
          ref={this.inputRef}
          type="text"
          placeholder="type todos"
          onChange={this.handleChange}
          value={text}
          maxLength={50}
        />
        <Button onClick={this.buttonClick} />
        <div className="m-todo__board">
          {todos.map(({ todo, color }) => {
            return (
              <StickyNote modifier={color} key={color}>
                {todo}
              </StickyNote>
            );
          })}
        </div>
        <div className="m-todo__quotes">
          {loading ? (
            "Loading quotes ...."
          ) : error ? (
            <p>{errorMessage}</p>
          ) : (
            <>
              <p className="m-todo__quotes-text">{quotes.text}</p>
              <p className="m-todo__author">{quotes.author}</p>
            </>
          )}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state: RootState) => ({
  todo: todoSelector(state),
});
const mapDispatchToProps = {
  addToDo,
  fetchquotes,
};
export default connect(mapStateToProps, mapDispatchToProps)(TodoClassComponent);
