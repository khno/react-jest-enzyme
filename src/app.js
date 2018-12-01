// import React, { Component } from "react";

import React, { Component } from "./react.development";
import ReactDom, { render } from "react-dom";
import PropTypes from "prop-types";
import "./app.css";
import Header from "./components/Header";
import Form from "./components/Form";
import ListItems from "./components/ListItems";
// import Test from "./components/test";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  render() {
    return (
      <p>Hello World!</p>
      );
  }

  // let a = document.createTextNode("p");
  // return a;
  render(){
    return React.createElement(
      'div',
      {},
      "hello"
    )
  }
}

// // App.propTypes = {
// //   items: PropTypes.array,
// //   todoItem: PropTypes.string,
// //   onChange: PropTypes.func
// // };


ReactDom.render(<App />, document.getElementById("app"));
