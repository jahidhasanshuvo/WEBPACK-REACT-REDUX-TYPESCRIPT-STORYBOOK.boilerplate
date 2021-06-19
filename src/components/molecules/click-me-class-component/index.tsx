// import React, { Component } from "react";
// import { testSelector } from "redux/test/test.selector";
// import { RootState } from "redux/root.reducer";
// import { connect } from "react-redux";
// import Input from "components/atoms/input";
// import Button from "components/atoms/button";
// import {
//   increment,
//   decrement,
//   fetchquotes,
//   TestProps,
// } from "redux/test/test.slice";

// interface ClickMeClassProps {
//   test: TestProps;
//   [key: string]: any;
// }
// type ClickMeClassState = {
//   text: number;
// };

// export class ClickMeClassComponent extends Component<
//   ClickMeClassProps,
//   ClickMeClassState
// > {
//   constructor(props: any) {
//     super(props);
//     this.state = {
//       text: 0,
//     };
//   }
//   componentDidMount() {
//     this.props.fetchquotes();
//   }
//   handleChange = (event: any) => {
//     this.setState({
//       text: parseInt(event.target.value),
//     });
//   };
//   buttonClick = () => {
//     this.props.increment(this.state.text);
//   };
//   render() {
//     const { text } = this.state;
//     const { clicked, loading, error, users, errorMessage } = this.props.test;
//     return (
//       <div className="m-click-me">
//         <h3>Clicked {clicked}</h3>
//         <Input
//           type="text"
//           placeholder="type here"
//           onChange={this.handleChange}
//           value={text}
//         />
//         <Button onClick={this.buttonClick}>ADD</Button>
//         <br />
//         {loading ? (
//           "Loading users ...."
//         ) : error ? (
//           <h1>{errorMessage}</h1>
//         ) : (
//           <table>
//             <thead>
//               <th>ID</th>
//               <th>NAME</th>
//               <th>USERNAME</th>
//             </thead>
//             <tbody>
//               {users.map((user) => (
//                 <tr>
//                   <td>{user.id}</td>
//                   <td>{user.name}</td>
//                   <td>{user.username}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         )}
//       </div>
//     );
//   }
// }
// const mapStateToProps = (state: RootState) => ({
//   test: testSelector(state),
// });
// const mapDispatchToProps = {
//   increment,
//   fetchquotes,
// };
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(ClickMeClassComponent);
