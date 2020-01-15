import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux'
import logo from "./logo.svg";
import "./App.css";
import { addUserAsync } from './redux/action'
import { render } from "react-dom";

class App extends React.Component{
  componentDidMount(props){
    this.props.user1("value");
  }
render(){
  console.log(this.props,"dataaaaaaa")
  return(
    <div className="App">
     <header className="App-header">
  heyiiii
  </header>
      </div>
  )
}
}
// {
//   console.log(props,"propssssssssssss")
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//         <button onClick={() => props.user1('value')}>click me</button>
//         {/* <div>{props.characterData}</div> */}
//       </header>
//     </div>
//   );
// }

const mapStateToProps = state => {
  return{
    characterData: state && state.users
  }
};
const mapDispatchToProps = dispatch => {
  return{
    user1: (value) => dispatch(addUserAsync(value))
  }
  
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
