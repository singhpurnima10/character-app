import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux'
import logo from "./logo.svg";
import "./App.css";
import { addUser } from './redux/action'

function App(props) {
  console.log(props,"propssssssssssss")
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={props.user1("helooooooooooo")}>click me</button>
      </header>
    </div>
  );
}

const mapStateToProps = state => {
  // const users = state.userDataReducer;
  const data ="dataaa"
  return data;
};
const mapDispatchToProps = dispatch => {
  user1: () => dispatch(addUser())
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
